import { BrowserWindow } from "electron";
import Store from "electron-store";
import { SerialPort } from "serialport";
import type {
  NativePortConnection,
  PrinterConfig,
  PrinterDevice,
  SerialDiagnosticsResult,
  SerialPortInfo
} from "../../shared/contracts";
import { prisma } from "../db/prisma";
import { getSettings } from "./settings-service";

type PrinterStoreShape = {
  printerConfig: PrinterConfig;
};

const printerStore = new Store<PrinterStoreShape>({
  name: "printer-config",
  defaults: {
    printerConfig: {
      mode: "system",
      autoPrint: true
    }
  }
});

const printerStoreAccess = printerStore as unknown as {
  get: (key: "printerConfig") => PrinterConfig;
  set: (key: "printerConfig", value: PrinterConfig) => void;
};

function getActiveWindow(): BrowserWindow | undefined {
  return BrowserWindow.getFocusedWindow() ?? BrowserWindow.getAllWindows()[0];
}

let activeSerialPort: SerialPort | null = null;
let activeSerialPath: string | null = null;

function money(amount: number): string {
  return `Rs ${Math.round(amount).toLocaleString("en-PK")}`;
}

function left(text: string, width: number): string {
  return text.length > width ? text.slice(0, width) : text.padEnd(width, " ");
}

function right(text: string, width: number): string {
  const value = text.length > width ? text.slice(text.length - width) : text;
  return value.padStart(width, " ");
}

function center(text: string, width: number): string {
  if (text.length >= width) return text.slice(0, width);
  const totalPad = width - text.length;
  const leftPad = Math.floor(totalPad / 2);
  return `${" ".repeat(leftPad)}${text}${" ".repeat(totalPad - leftPad)}`;
}

function wrapText(text: string, width: number): string[] {
  if (!text) return [""];
  if (text.length <= width) return [text];
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (!word) continue;
    if (word.length > width) {
      if (current) {
        lines.push(current);
        current = "";
      }
      for (let i = 0; i < word.length; i += width) {
        lines.push(word.slice(i, i + width));
      }
      continue;
    }
    const next = current ? `${current} ${word}` : word;
    if (next.length <= width) {
      current = next;
    } else {
      lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);
  return lines.length > 0 ? lines : [""];
}

type RowColumn = {
  text: string;
  width: number;
  align?: "left" | "center" | "right";
};

function renderColumns(columns: RowColumn[]): string[] {
  const wrapped = columns.map((column) => wrapText(column.text, column.width));
  const maxLines = wrapped.reduce((max, lines) => Math.max(max, lines.length), 1);
  const out: string[] = [];
  for (let lineIndex = 0; lineIndex < maxLines; lineIndex += 1) {
    let line = "";
    for (let colIndex = 0; colIndex < columns.length; colIndex += 1) {
      const col = columns[colIndex];
      const text = wrapped[colIndex][lineIndex] ?? "";
      if (col.align === "right") {
        line += right(text, col.width);
      } else if (col.align === "center") {
        line += center(text, col.width);
      } else {
        line += left(text, col.width);
      }
    }
    out.push(line);
  }
  return out;
}

function textToBytes(text: string): Uint8Array {
  return new TextEncoder().encode(text);
}

function concatBytes(parts: Uint8Array[]): Uint8Array {
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const part of parts) {
    out.set(part, offset);
    offset += part.length;
  }
  return out;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function listPrinters(): Promise<PrinterDevice[]> {
  const win = getActiveWindow();
  if (!win) {
    return [];
  }
  const printers = await win.webContents.getPrintersAsync();
  return printers.map((p) => ({
    name: p.name,
    displayName: p.displayName,
    isDefault: p.isDefault,
    status: p.status
  }));
}

export async function listSerialPorts(): Promise<SerialPortInfo[]> {
  const ports = await SerialPort.list();
  return ports
    .filter((port) => port.path && (port.path.includes("/dev/cu.") || port.path.includes("/dev/tty.") || process.platform === "win32"))
    .map((port) => ({
      path: port.path,
      label: (
        (port as (typeof port & { friendlyName?: string })).friendlyName ||
        port.manufacturer ||
        port.path
      )
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function getPrinterConfig(): PrinterConfig {
  const config = printerStoreAccess.get("printerConfig");
  return {
    mode: config.mode === "classic" || config.mode === "bluetooth" ? config.mode : "system",
    deviceName: config.deviceName,
    serialPath: config.serialPath,
    autoPrint: config.autoPrint ?? true
  };
}

export function savePrinterConfig(config: PrinterConfig): PrinterConfig {
  const normalized: PrinterConfig = {
    mode: config.mode === "classic" || config.mode === "bluetooth" ? config.mode : "system",
    deviceName: config.deviceName?.trim() || undefined,
    serialPath: config.serialPath?.trim() || undefined,
    autoPrint: Boolean(config.autoPrint)
  };
  printerStoreAccess.set("printerConfig", normalized);
  return normalized;
}

function buildReceiptHtml(params: {
  storeName: string;
  storeAddress?: string;
  storePhone?: string;
  orderNumber: number;
  createdAt: Date;
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
  items: Array<{
    productName: string;
    quantity: number;
    lineTotal: number;
    sizeName?: string | null;
    variations: Array<{ groupName: string; choiceName: string }>;
  }>;
}): string {
  const lines: string[] = [];
  const headerDetails = [params.storeAddress, params.storePhone]
    .map((value) => value?.trim())
    .filter((value): value is string => Boolean(value && value.length > 0));

  lines.push(params.storeName.toUpperCase());
  lines.push(...headerDetails);
  lines.push(`Order #${params.orderNumber}`);
  lines.push(params.createdAt.toLocaleString());
  lines.push("--------------------------------");
  lines.push(...renderColumns([
    { text: "Item", width: 16, align: "left" },
    { text: "Qty", width: 6, align: "center" },
    { text: "Price", width: 10, align: "right" }
  ]));
  lines.push("--------------------------------");
  for (const item of params.items) {
    const displayName = `${item.productName}${item.sizeName ? ` (${item.sizeName})` : ""}`;
    lines.push(...renderColumns([
      { text: displayName, width: 16, align: "left" },
      { text: String(item.quantity), width: 6, align: "center" },
      { text: money(item.lineTotal), width: 10, align: "right" }
    ]));
    for (const variation of item.variations) {
      lines.push(`  ${variation.groupName}: ${variation.choiceName}`);
    }
    lines.push("");
  }
  lines.push("--------------------------------");
  lines.push(...renderColumns([
    { text: "Subtotal", width: 20, align: "left" },
    { text: money(params.subtotal), width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Discount", width: 20, align: "left" },
    { text: `- ${money(params.discount)}`, width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Fees", width: 20, align: "left" },
    { text: money(params.fees), width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Tax", width: 20, align: "left" },
    { text: money(params.tax), width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "TOTAL", width: 20, align: "left" },
    { text: money(params.total), width: 12, align: "right" }
  ]));
  lines.push("");
  lines.push("Thank you");
  lines.push("");

  return `
  <html>
    <head>
      <meta charset="utf-8" />
      <style>
        @page { size: 58mm auto; margin: 2mm; }
        html, body { margin: 0; padding: 0; }
        body { font-family: "Courier New", Courier, monospace; width: 54mm; margin: 2mm; font-size: 11px; color: #111; }
        pre { margin: 0; white-space: pre; }
        .title { font-weight: 700; text-transform: uppercase; text-align: center; font-size: 34px; line-height: 1.05; }
        .center { text-align: center; }
      </style>
    </head>
    <body>
      <pre>${escapeHtml(lines.join("\n"))}</pre>
    </body>
  </html>
  `;
}

async function printHtmlReceipt(html: string, deviceName: string): Promise<void> {
  const printWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      sandbox: true
    }
  });

  await printWindow.loadURL(`data:text/html;charset=UTF-8,${encodeURIComponent(html)}`);

  const tryPrint = (options: Parameters<typeof printWindow.webContents.print>[0]) =>
    new Promise<void>((resolve, reject) => {
      printWindow.webContents.print(options, (success, failureReason) => {
        if (!success) {
          reject(new Error(failureReason || "Failed to print receipt"));
          return;
        }
        resolve();
      });
    });

  try {
    await tryPrint({
      silent: true,
      deviceName,
      printBackground: true,
      margins: { marginType: "none" as const }
    });
  } finally {
    if (!printWindow.isDestroyed()) {
      printWindow.close();
    }
  }
}

function buildEscPosReceiptBytes(params: {
  storeName: string;
  storeAddress?: string;
  storePhone?: string;
  orderNumber: number;
  createdAt: Date;
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
  items: Array<{
    productName: string;
    quantity: number;
    lineTotal: number;
    sizeName?: string | null;
    variations: Array<{ groupName: string; choiceName: string }>;
  }>;
}): Uint8Array {
  const lines: string[] = [];
  lines.push("--------------------------------");
  lines.push(...renderColumns([
    { text: "Item", width: 16, align: "left" },
    { text: "Qty", width: 6, align: "center" },
    { text: "Price", width: 10, align: "right" }
  ]));
  lines.push("--------------------------------");
  for (const item of params.items) {
    const displayName = `${item.productName}${item.sizeName ? ` (${item.sizeName})` : ""}`;
    lines.push(...renderColumns([
      { text: displayName, width: 16, align: "left" },
      { text: String(item.quantity), width: 6, align: "center" },
      { text: money(item.lineTotal), width: 10, align: "right" }
    ]));
    for (const v of item.variations) {
      lines.push(`  ${v.groupName}: ${v.choiceName}`);
    }
    lines.push("");
  }
  lines.push("--------------------------------");
  lines.push(...renderColumns([
    { text: "Subtotal", width: 20, align: "left" },
    { text: money(params.subtotal), width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Discount", width: 20, align: "left" },
    { text: `- ${money(params.discount)}`, width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Fees", width: 20, align: "left" },
    { text: money(params.fees), width: 12, align: "right" }
  ]));
  lines.push(...renderColumns([
    { text: "Tax", width: 20, align: "left" },
    { text: money(params.tax), width: 12, align: "right" }
  ]));
  lines.push("--------------------------------");
  lines.push(...renderColumns([
    { text: "TOTAL", width: 20, align: "left" },
    { text: money(params.total), width: 12, align: "right" }
  ]));
  lines.push("");
  lines.push("");

  const init = new Uint8Array([0x1b, 0x40]);
  const alignCenter = new Uint8Array([0x1b, 0x61, 0x01]);
  const alignLeftCmd = new Uint8Array([0x1b, 0x61, 0x00]);
  const boldOn = new Uint8Array([0x1b, 0x45, 0x01]);
  const boldOff = new Uint8Array([0x1b, 0x45, 0x00]);
  const textSize3x = new Uint8Array([0x1d, 0x21, 0x22]);
  const textSizeNormal = new Uint8Array([0x1d, 0x21, 0x00]);
  const detailLines = [params.storeAddress?.trim(), params.storePhone?.trim()].filter(
    (value): value is string => Boolean(value && value.length > 0)
  );
  const detailsBlock = detailLines.length > 0 ? `${detailLines.join("\n")}\n` : "";
  const text = textToBytes(lines.join("\n"));
  const cut = new Uint8Array([0x1d, 0x56, 0x41, 0x10]);
  return concatBytes([
    init,
    alignCenter,
    boldOn,
    textSize3x,
    textToBytes(`${params.storeName.toUpperCase()}\n`),
    textSizeNormal,
    boldOff,
    textToBytes(detailsBlock),
    textToBytes(`Order #${params.orderNumber}\n${params.createdAt.toLocaleString()}\n`),
    alignLeftCmd,
    text,
    cut
  ]);
}

async function printSerialEscPos(serialPath: string, payload: Uint8Array): Promise<void> {
  const connection = await connectNativePort(serialPath);
  if (!connection.connected || !activeSerialPort) {
    throw new Error("Native serial printer is not connected");
  }

  await new Promise<void>((resolve, reject) => {
    activeSerialPort!.write(Buffer.from(payload), (writeError) => {
      if (writeError) {
        reject(writeError);
        return;
      }
      activeSerialPort!.drain((drainError) => {
        if (drainError) {
          reject(drainError);
          return;
        }
        resolve();
      });
    });
  });
}

export async function diagnoseSerialPort(serialPath: string): Promise<SerialDiagnosticsResult> {
  const port = serialPath.trim();
  if (!port) {
    throw new Error("Serial port path is required");
  }
  const ping = concatBytes([
    new Uint8Array([0x1b, 0x40]), // init
    textToBytes("DIAGNOSTICS TEST\n"),
    new Uint8Array([0x1d, 0x56, 0x41, 0x10]) // partial cut
  ]);
  const statusProbe = new Uint8Array([0x10, 0x04, 0x01]); // DLE EOT 1

  let portHandle: SerialPort | null = null;
  try {
    portHandle = new SerialPort({
      path: port,
      baudRate: 9600,
      autoOpen: false
    });
    await new Promise<void>((resolve, reject) => {
      portHandle!.open((error) => (error ? reject(error) : resolve()));
    });

    await new Promise<void>((resolve, reject) => {
      portHandle!.write(Buffer.from(ping), (writeError) => {
        if (writeError) return reject(writeError);
        portHandle!.write(Buffer.from(statusProbe), (statusError) => {
          if (statusError) return reject(statusError);
          portHandle!.drain((drainError) => (drainError ? reject(drainError) : resolve()));
        });
      });
    });

    let responseBytes = 0;
    const started = Date.now();
    while (Date.now() - started < 700) {
      const chunk: Buffer | undefined = portHandle.read() as Buffer | undefined;
      if (chunk && chunk.length > 0) {
        responseBytes += chunk.length;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 80));
    }

    await new Promise<void>((resolve) => portHandle!.close(() => resolve()));

    const likelyConnected = responseBytes > 0;
    return {
      port,
      opened: true,
      wroteBytes: ping.length,
      responseBytes,
      likelyConnected,
      message: likelyConnected
        ? "Port write + status probe response received"
        : "Write succeeded but no status response (port may be stale/disconnected)"
    };
  } catch (error) {
    const closingPort = portHandle;
    if (closingPort?.isOpen) {
      await new Promise<void>((resolve) => closingPort.close(() => resolve()));
    }
    return {
      port,
      opened: false,
      wroteBytes: 0,
      responseBytes: 0,
      likelyConnected: false,
      message: error instanceof Error ? error.message : "Unknown serial error"
    };
  }
}

export async function disconnectNativePort(): Promise<{ disconnected: true }> {
  if (!activeSerialPort) {
    activeSerialPath = null;
    return { disconnected: true };
  }

  const current = activeSerialPort;
  activeSerialPort = null;
  activeSerialPath = null;

  if (!current.isOpen) {
    return { disconnected: true };
  }

  await new Promise<void>((resolve, reject) => {
    current.close((error) => (error ? reject(error) : resolve()));
  });
  return { disconnected: true };
}

export function getNativePortConnection(): NativePortConnection {
  return {
    connected: Boolean(activeSerialPort?.isOpen),
    path: activeSerialPath ?? undefined
  };
}

export async function connectNativePort(serialPath: string): Promise<NativePortConnection> {
  const portPath = serialPath.trim();
  if (!portPath) {
    throw new Error("Serial port path is required");
  }

  if (activeSerialPort?.isOpen && activeSerialPath === portPath) {
    return { connected: true, path: portPath };
  }

  await disconnectNativePort();
  const port = new SerialPort({
    path: portPath,
    baudRate: 9600,
    autoOpen: false
  });

  await new Promise<void>((resolve, reject) => {
    port.open((error) => (error ? reject(error) : resolve()));
  });

  activeSerialPort = port;
  activeSerialPath = portPath;
  return { connected: true, path: portPath };
}

async function getOrderPrintable(orderId: string) {
  const [order, settings] = await Promise.all([
    prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: {
            variations: true
          }
        }
      }
    }),
    getSettings()
  ]);
  if (!order) throw new Error("Order not found");
  return {
    storeName: settings.storeName,
    storeAddress: "",
    storePhone: "",
    orderNumber: order.orderNumber,
    createdAt: order.createdAt,
    subtotal: order.subtotal,
    discount: order.discount,
    fees: order.fees,
    tax: order.tax,
    total: order.total,
    items: order.items.map((item) => ({
      productName: item.productName,
      quantity: item.quantity,
      lineTotal: item.lineTotal,
      sizeName: item.sizeName,
      variations: item.variations.map((v) => ({ groupName: v.groupName, choiceName: v.choiceName }))
    }))
  };
}

export async function printTestReceipt(): Promise<void> {
  const config = getPrinterConfig();
  if (config.mode === "bluetooth") {
    throw new Error("Use Bluetooth test in renderer Bluetooth setup");
  }
  if (config.mode === "classic") {
    if (!config.serialPath) throw new Error("Select classic Bluetooth serial port first");
    const payload = buildEscPosReceiptBytes({
      storeName: "Printer Test",
      storeAddress: "",
      storePhone: "",
      orderNumber: 0,
      createdAt: new Date(),
      subtotal: 0,
      discount: 0,
      fees: 0,
      tax: 0,
      total: 0,
      items: [{ productName: "Classic BT Test", quantity: 1, lineTotal: 0, variations: [] }]
    });
    await printSerialEscPos(config.serialPath, payload);
    return;
  }
  if (!config.deviceName) throw new Error("Select system printer first");
  const html = buildReceiptHtml({
    storeName: "Printer Test",
    storeAddress: "",
    storePhone: "",
    orderNumber: 0,
    createdAt: new Date(),
    subtotal: 0,
    discount: 0,
    fees: 0,
    tax: 0,
    total: 0,
    items: [{ productName: "System Print Test", quantity: 1, lineTotal: 0, variations: [] }]
  });
  await printHtmlReceipt(html, config.deviceName);
}

export async function printOrderReceipt(orderId: string): Promise<void> {
  const config = getPrinterConfig();
  if (!config.autoPrint) return;
  if (config.mode === "bluetooth") return;

  const order = await getOrderPrintable(orderId);
  if (config.mode === "classic") {
    if (!config.serialPath) throw new Error("Classic Bluetooth serial port not configured");
    const payload = buildEscPosReceiptBytes(order);
    await printSerialEscPos(config.serialPath, payload);
    return;
  }
  if (!config.deviceName) throw new Error("System printer is not configured");
  const html = buildReceiptHtml(order);
  await printHtmlReceipt(html, config.deviceName);
}
