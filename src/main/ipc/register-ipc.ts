import { ipcMain } from "electron";
import type { POSApi } from "../../shared/contracts";
import {
  adjustStock,
  createCategory,
  deleteInventoryItem,
  listCategories,
  listInventory,
  upsertInventoryItem
} from "../services/inventory-service";
import { getOrderReceipt, listOrders, placeOrder } from "../services/order-service";
import {
  connectNativePort,
  disconnectNativePort,
  getNativePortConnection,
  getPrinterConfig,
  diagnoseSerialPort,
  listPrinters,
  listSerialPorts,
  printOrderReceipt,
  printTestReceipt,
  savePrinterConfig
} from "../services/printer-service";
import { getSettings, updateSettings } from "../services/settings-service";
import { salesSummary } from "../services/report-service";

export function registerIpcHandlers(): void {
  ipcMain.handle("inventory:list", () => listInventory());
  ipcMain.handle("inventory:upsert", (_, input: Parameters<POSApi["inventory"]["upsert"]>[0]) =>
    upsertInventoryItem(input)
  );
  ipcMain.handle("inventory:remove", async (_, id: string) => {
    await deleteInventoryItem(id);
    return { ok: true as const };
  });
  ipcMain.handle("inventory:adjustStock", async (_, productId: string, delta: number) => {
    await adjustStock(productId, delta);
    return { ok: true as const };
  });
  ipcMain.handle("inventory:listCategories", () => listCategories());
  ipcMain.handle("inventory:createCategory", (_, input: Parameters<POSApi["inventory"]["createCategory"]>[0]) =>
    createCategory(input)
  );

  ipcMain.handle("orders:place", (_, input: Parameters<POSApi["orders"]["place"]>[0]) => placeOrder(input));
  ipcMain.handle("orders:list", (_, fromISO: string, toISO: string) => listOrders(fromISO, toISO));
  ipcMain.handle("orders:getReceipt", (_, orderId: string) => getOrderReceipt(orderId));

  ipcMain.handle("settings:get", () => getSettings());
  ipcMain.handle("settings:update", (_, payload: Parameters<POSApi["settings"]["update"]>[0]) => updateSettings(payload));

  ipcMain.handle("reports:summary", (_, dateISO: string) => salesSummary(dateISO));
  ipcMain.handle("printers:list", () => listPrinters());
  ipcMain.handle("printers:listSerialPorts", () => listSerialPorts());
  ipcMain.handle("printers:connectNativePort", (_, serialPath: string) => connectNativePort(serialPath));
  ipcMain.handle("printers:disconnectNativePort", () => disconnectNativePort());
  ipcMain.handle("printers:getNativePortConnection", () => getNativePortConnection());
  ipcMain.handle("printers:diagnoseSerialPort", (_, serialPath: string) => diagnoseSerialPort(serialPath));
  ipcMain.handle("printers:getConfig", () => getPrinterConfig());
  ipcMain.handle("printers:saveConfig", (_, config: Parameters<POSApi["printers"]["saveConfig"]>[0]) =>
    savePrinterConfig(config)
  );
  ipcMain.handle("printers:printTest", async () => {
    await printTestReceipt();
    return { ok: true as const };
  });
  ipcMain.handle("printers:printOrder", async (_, orderId: string) => {
    await printOrderReceipt(orderId);
    return { ok: true as const };
  });
}
