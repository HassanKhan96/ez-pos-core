import path from "node:path";
import { app, BrowserWindow, session } from "electron";
import { registerIpcHandlers } from "./ipc/register-ipc";
import { disconnectNativePort } from "./services/printer-service";

const isDev = !app.isPackaged;
app.commandLine.appendSwitch("enable-experimental-web-platform-features");
app.commandLine.appendSwitch("enable-features", "WebBluetoothNewPermissionsBackend");
app.commandLine.appendSwitch("disable-pinch");

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1200,
    minHeight: 760,
    backgroundColor: "#eef2f6",
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.webContents.setZoomFactor(1);
  void mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
  mainWindow.webContents.on("before-input-event", (event, input) => {
    const commandPressed = input.control || input.meta;
    if (!commandPressed) return;
    const key = input.key;
    if (key === "+" || key === "-" || key === "=" || key === "0") {
      event.preventDefault();
    }
  });

  if (isDev && process.env.VITE_DEV_SERVER_URL) {
    void mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools({ mode: "detach" });
  } else {
    const indexPath = path.resolve(__dirname, "../dist/index.html");
    void mainWindow.loadFile(indexPath);
  }
}

app.whenReady().then(() => {
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    const permissionName = String(permission);
    if (permissionName === "bluetooth" || permissionName === "bluetoothScanning") {
      callback(true);
      return;
    }
    callback(false);
  });

  session.defaultSession.setDevicePermissionHandler((details) => {
    const origin = details.origin ?? "";
    return origin.startsWith("http://localhost:5173") || origin.startsWith("file://");
  });

  registerIpcHandlers();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  void disconnectNativePort().catch(() => undefined);
});
