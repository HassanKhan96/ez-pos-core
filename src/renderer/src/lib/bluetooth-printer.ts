import ReceiptPrinterEncoder from "@point-of-sale/receipt-printer-encoder";
import type { OrderReceiptDTO } from "@shared/contracts";

const LAST_DEVICE_KEY = "bt_last_device";
const LAST_NAME_KEY = "bt_printer_name";

type ConnectedDevice = {
  id?: string;
  name?: string;
};

const KNOWN_SERVICES = [
  "000018f0-0000-1000-8000-00805f9b34fb",
  "0000ae30-0000-1000-8000-00805f9b34fb",
  "49535343-fe7d-4ae5-8fa9-9fafd205e455",
] as const;
const KNOWN_PRINT_CHARACTERISTICS = [
  "00002af1-0000-1000-8000-00805f9b34fb",
  "0000ae01-0000-1000-8000-00805f9b34fb",
  "49535343-8841-43f4-a8d4-ecbe34729bb3",
] as const;
const BLE_WRITE_CHUNK = 180;

let connected = false;
let connectedDevice: ConnectedDevice | null = null;
let bleDevice: BluetoothDevice | null = null;
let bleCharacteristic: BluetoothRemoteGATTCharacteristic | null = null;

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

function buildPrintBuffer(receipt: OrderReceiptDTO): Uint8Array {
  const summaryLabelWidth = 20;
  const summaryAmountWidth = 12;
  const storeAddress = (localStorage.getItem("store_address") || "").trim();
  const storePhone = (localStorage.getItem("store_phone") || "").trim();

  const encoder = new ReceiptPrinterEncoder({
    language: "esc-pos",
    codepageMapping: "epson",
  });

  encoder.initialize();
  encoder.align("center");
  encoder.bold(true).line(receipt.storeName.toUpperCase()).bold(false);
  if (storeAddress) encoder.line(storeAddress);
  if (storePhone) encoder.line(storePhone);
  encoder.line(`Order #${receipt.orderNumber}`);
  encoder.line(new Date(receipt.createdAt).toLocaleString());
  encoder.line("--------------------------------");
  for (const row of renderColumns([
    { text: "Item", width: 16, align: "left" },
    { text: "Qty", width: 6, align: "center" },
    { text: "Price", width: 10, align: "right" }
  ])) encoder.line(row);
  encoder.line("--------------------------------");
  encoder.align("left");

  for (const item of receipt.items) {
    const displayName = `${item.productName}${item.sizeName ? ` (${item.sizeName})` : ""}`;
    for (const row of renderColumns([
      { text: displayName, width: 16, align: "left" },
      { text: String(item.quantity), width: 6, align: "center" },
      { text: money(item.lineTotal), width: 10, align: "right" }
    ])) encoder.line(row);
    for (const variation of item.variations) {
      encoder.line(`  ${variation}`);
    }
    encoder.newline();
  }

  encoder.line("--------------------------------");
  for (const row of renderColumns([
    { text: "Subtotal", width: summaryLabelWidth, align: "left" },
    { text: money(receipt.subtotal), width: summaryAmountWidth, align: "right" }
  ])) encoder.line(row);
  for (const row of renderColumns([
    { text: "Discount", width: summaryLabelWidth, align: "left" },
    { text: `- ${money(receipt.discount)}`, width: summaryAmountWidth, align: "right" }
  ])) encoder.line(row);
  for (const row of renderColumns([
    { text: "Fees", width: summaryLabelWidth, align: "left" },
    { text: money(receipt.fees), width: summaryAmountWidth, align: "right" }
  ])) encoder.line(row);
  for (const row of renderColumns([
    { text: "Tax", width: summaryLabelWidth, align: "left" },
    { text: money(receipt.tax), width: summaryAmountWidth, align: "right" }
  ])) encoder.line(row);
  encoder.line("--------------------------------");
  encoder
    .bold(true)
    .line(renderColumns([
      { text: "TOTAL", width: summaryLabelWidth, align: "left" },
      { text: money(receipt.total), width: summaryAmountWidth, align: "right" }
    ])[0])
    .bold(false);
  encoder.newline();
  encoder.align("center").line("Thank you");
  encoder.newline().newline();
  encoder.cut();

  return encoder.encode();
}

function onDisconnected(): void {
  connected = false;
  bleCharacteristic = null;
}

function rememberConnectedDevice(device: BluetoothDevice): void {
  connected = true;
  bleDevice = device;
  connectedDevice = { id: device.id, name: device.name || "Bluetooth Printer" };
  localStorage.setItem(LAST_DEVICE_KEY, JSON.stringify(connectedDevice));
  localStorage.setItem(
    LAST_NAME_KEY,
    connectedDevice.name || "Bluetooth Printer",
  );
  device.addEventListener?.("gattserverdisconnected", onDisconnected);
}

async function resolveWritableCharacteristic(
  server: BluetoothRemoteGATTServer,
): Promise<BluetoothRemoteGATTCharacteristic> {
  const services = await server.getPrimaryServices();
  const knownCharSet = new Set<string>(KNOWN_PRINT_CHARACTERISTICS);
  let fallback: BluetoothRemoteGATTCharacteristic | null = null;

  for (const service of services) {
    const chars = await service.getCharacteristics();
    for (const char of chars) {
      if (!char.properties.write && !char.properties.writeWithoutResponse)
        continue;
      if (knownCharSet.has(char.uuid.toLowerCase())) {
        return char;
      }
      fallback ??= char;
    }
  }

  if (!fallback)
    throw new Error("No writable BLE characteristic found on selected printer");
  return fallback;
}

async function connectToDevice(device: BluetoothDevice): Promise<void> {
  if (!device.gatt) throw new Error("Selected device has no GATT server");
  const server = await device.gatt.connect();
  const characteristic = await resolveWritableCharacteristic(server);
  bleCharacteristic = characteristic;
  rememberConnectedDevice(device);
}

async function requestPrinterDevice(): Promise<BluetoothDevice> {
  if (!navigator.bluetooth?.requestDevice) {
    throw new Error("Web Bluetooth is not available in this app build");
  }

  const options = {
    acceptAllDevices: true,
    optionalServices: [...KNOWN_SERVICES],
  };
  return navigator.bluetooth.requestDevice(options);
}

export async function connectBluetoothPrinter(): Promise<{
  name: string;
  id: string;
}> {
  try {
    const device = await requestPrinterDevice();
    await connectToDevice(device);
  } catch (error) {
    console.log(error);
    if (error instanceof DOMException && error.name === "NotFoundError") {
      throw new Error(
        "No printer selected. In the chooser, select your Bluetooth printer and click Pair/Connect.",
      );
    }
    throw error instanceof Error
      ? error
      : new Error("Bluetooth printer did not connect");
  }
  return {
    name:
      connectedDevice?.name ||
      localStorage.getItem(LAST_NAME_KEY) ||
      "Bluetooth Printer",
    id: connectedDevice?.id || "unknown",
  };
}

export async function reconnectBluetoothPrinterIfKnown(): Promise<boolean> {
  const raw = localStorage.getItem(LAST_DEVICE_KEY);
  if (!raw || !navigator.bluetooth?.getDevices) return false;
  try {
    const lastDevice = JSON.parse(raw) as ConnectedDevice;
    const devices = await navigator.bluetooth.getDevices();
    const device = devices.find((entry) => entry.id === lastDevice.id);
    if (!device) return false;
    await connectToDevice(device);
    return true;
  } catch {
    return false;
  }
}

export function disconnectBluetoothPrinter(): void {
  try {
    bleDevice?.gatt?.disconnect();
  } catch {
    // no-op
  }
  bleDevice = null;
  bleCharacteristic = null;
  connected = false;
  connectedDevice = null;
}

export function isBluetoothPrinterConnected(): boolean {
  return connected;
}

export async function printBluetoothReceipt(
  receipt: OrderReceiptDTO,
): Promise<void> {
  if (!connected) {
    const ok = await reconnectBluetoothPrinterIfKnown();
    if (!ok) throw new Error("Bluetooth printer not connected");
  }
  if (!bleCharacteristic)
    throw new Error("Bluetooth printer characteristic is not available");
  const payload = buildPrintBuffer(receipt);
  const write =
    bleCharacteristic.writeValueWithoutResponse?.bind(bleCharacteristic) ??
    bleCharacteristic.writeValue.bind(bleCharacteristic);
  try {
    for (let offset = 0; offset < payload.length; offset += BLE_WRITE_CHUNK) {
      const chunk = payload.slice(offset, offset + BLE_WRITE_CHUNK);
      await write(chunk);
    }
  } catch (error) {
    connected = false;
    throw error instanceof Error ? error : new Error("Bluetooth print failed");
  }
}

export async function printBluetoothTest(): Promise<void> {
  const receipt: OrderReceiptDTO = {
    orderId: "test",
    orderNumber: 0,
    createdAt: new Date().toISOString(),
    storeName: localStorage.getItem("store_name") || "My Store",
    subtotal: 0,
    discount: 0,
    fees: 0,
    tax: 0,
    total: 0,
    items: [
      {
        productName: "Bluetooth Package Test",
        quantity: 1,
        lineTotal: 0,
        variations: [],
      },
    ],
  };
  await printBluetoothReceipt(receipt);
}
