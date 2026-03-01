import { contextBridge, ipcRenderer } from "electron";
import type { POSApi } from "../shared/contracts";

const api: POSApi = {
  inventory: {
    list: () => ipcRenderer.invoke("inventory:list"),
    upsert: (input) => ipcRenderer.invoke("inventory:upsert", input),
    remove: (id) => ipcRenderer.invoke("inventory:remove", id),
    adjustStock: (productId, delta) => ipcRenderer.invoke("inventory:adjustStock", productId, delta),
    listCategories: () => ipcRenderer.invoke("inventory:listCategories"),
    createCategory: (input) => ipcRenderer.invoke("inventory:createCategory", input)
  },
  orders: {
    place: (input) => ipcRenderer.invoke("orders:place", input),
    list: (fromISO, toISO) => ipcRenderer.invoke("orders:list", fromISO, toISO),
    getReceipt: (orderId) => ipcRenderer.invoke("orders:getReceipt", orderId)
  },
  settings: {
    get: () => ipcRenderer.invoke("settings:get"),
    update: (payload) => ipcRenderer.invoke("settings:update", payload)
  },
  reports: {
    summary: (dateISO) => ipcRenderer.invoke("reports:summary", dateISO)
  },
  printers: {
    list: () => ipcRenderer.invoke("printers:list"),
    listSerialPorts: () => ipcRenderer.invoke("printers:listSerialPorts"),
    connectNativePort: (serialPath) => ipcRenderer.invoke("printers:connectNativePort", serialPath),
    disconnectNativePort: () => ipcRenderer.invoke("printers:disconnectNativePort"),
    getNativePortConnection: () => ipcRenderer.invoke("printers:getNativePortConnection"),
    diagnoseSerialPort: (serialPath) => ipcRenderer.invoke("printers:diagnoseSerialPort", serialPath),
    getConfig: () => ipcRenderer.invoke("printers:getConfig"),
    saveConfig: (config) => ipcRenderer.invoke("printers:saveConfig", config),
    printTest: () => ipcRenderer.invoke("printers:printTest"),
    printOrder: (orderId) => ipcRenderer.invoke("printers:printOrder", orderId)
  }
};

contextBridge.exposeInMainWorld("posAPI", api);
