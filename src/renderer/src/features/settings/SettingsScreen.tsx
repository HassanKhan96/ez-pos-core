import { useEffect, useMemo, useState } from "react";
import {
  connectBluetoothPrinter,
  disconnectBluetoothPrinter,
  isBluetoothPrinterConnected,
  printBluetoothTest,
  reconnectBluetoothPrinterIfKnown
} from "@/lib/bluetooth-printer";
import { usePosStore } from "@/state/use-pos-store";

export function SettingsScreen() {
  const settings = usePosStore((s) => s.settings);
  const printers = usePosStore((s) => s.printers);
  const serialPorts = usePosStore((s) => s.serialPorts);
  const printerConfig = usePosStore((s) => s.printerConfig);
  const nativePortConnection = usePosStore((s) => s.nativePortConnection);
  const saveStoreName = usePosStore((s) => s.saveStoreName);
  const loadPrinters = usePosStore((s) => s.loadPrinters);
  const loadSerialPorts = usePosStore((s) => s.loadSerialPorts);
  const loadNativePortConnection = usePosStore((s) => s.loadNativePortConnection);
  const connectNativePort = usePosStore((s) => s.connectNativePort);
  const disconnectNativePort = usePosStore((s) => s.disconnectNativePort);
  const savePrinterConfig = usePosStore((s) => s.savePrinterConfig);
  const diagnoseSerialPort = usePosStore((s) => s.diagnoseSerialPort);
  const printTestReceipt = usePosStore((s) => s.printTestReceipt);
  const showNotice = usePosStore((s) => s.showNotice);

  const [storeName, setStoreName] = useState("");
  const [openPrinterModal, setOpenPrinterModal] = useState(false);
  const [mode, setMode] = useState<"system" | "classic" | "bluetooth">("system");
  const [selectedDeviceName, setSelectedDeviceName] = useState<string | undefined>(undefined);
  const [selectedSerialPath, setSelectedSerialPath] = useState<string | undefined>(undefined);
  const [autoPrint, setAutoPrint] = useState(true);
  const [btName, setBtName] = useState(localStorage.getItem("bt_printer_name") || "Not connected");
  const [btConnected, setBtConnected] = useState(false);
  const [diagLog, setDiagLog] = useState<string>("");

  useEffect(() => {
    setStoreName(settings?.storeName ?? "");
  }, [settings?.storeName]);

  useEffect(() => {
    setMode(printerConfig.mode === "classic" || printerConfig.mode === "bluetooth" ? printerConfig.mode : "system");
    setSelectedDeviceName(printerConfig.deviceName);
    setSelectedSerialPath(printerConfig.serialPath);
    setAutoPrint(printerConfig.autoPrint);
  }, [printerConfig]);

  const selectedSystemPrinterLabel = useMemo(() => {
    const found = printers.find((p) => p.name === printerConfig.deviceName);
    return found?.displayName || printerConfig.deviceName || "None";
  }, [printerConfig.deviceName, printers]);

  return (
    <section className="grid h-full grid-cols-1 gap-4 xl:grid-cols-2">
      <div className="rounded-2xl bg-white p-4 shadow-panel">
        <h2 className="text-lg font-bold">Store Settings</h2>
        <label className="mt-4 block text-sm">
          <span className="mb-1 block text-slate-600">Store name</span>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </label>
        <button
          type="button"
          className="mt-3 rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white"
          onClick={() => void saveStoreName(storeName)}
        >
          Save
        </button>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-panel">
        <h2 className="text-lg font-bold">Printer Settings</h2>
        <p className="mt-2 text-sm text-slate-600">
          Mode: {printerConfig.mode === "classic" ? "Classic Bluetooth (SPP Serial)" : printerConfig.mode === "bluetooth" ? "Bluetooth BLE (Package)" : "System Printer"} | Auto print:{" "}
          {printerConfig.autoPrint ? "On" : "Off"}
        </p>
        <p className="mt-1 text-sm text-slate-600">
          {printerConfig.mode === "classic"
            ? `Serial port: ${printerConfig.serialPath ?? "None"}`
            : printerConfig.mode === "bluetooth"
              ? `Bluetooth: ${btConnected ? btName : "Not connected"}`
              : `System printer: ${selectedSystemPrinterLabel}`}
        </p>
        <button
          type="button"
          className="mt-4 rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
          onClick={() => {
            void Promise.all([loadPrinters(), loadSerialPorts(), loadNativePortConnection()]);
            setOpenPrinterModal(true);
          }}
        >
          Open printer setup
        </button>
      </div>

      {openPrinterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-panel">
            <h3 className="text-lg font-bold">Printer Setup</h3>
            <label className="mt-3 block text-sm">
              <span className="mb-1 block text-slate-600">Printing mode</span>
              <select
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
                value={mode}
                onChange={(e) => setMode(e.target.value === "classic" ? "classic" : e.target.value === "bluetooth" ? "bluetooth" : "system")}
              >
                <option value="system">System Printer</option>
                <option value="classic">Classic Bluetooth (SPP Serial) - Recommended for PT-210</option>
                <option value="bluetooth">Bluetooth BLE (WebBluetooth package)</option>
              </select>
            </label>

            {mode === "system" && (
              <label className="mt-3 block text-sm">
                <span className="mb-1 block text-slate-600">Choose system printer</span>
                <select
                  className="w-full rounded-lg border border-slate-300 px-3 py-2"
                  value={selectedDeviceName ?? ""}
                  onChange={(e) => setSelectedDeviceName(e.target.value || undefined)}
                >
                  <option value="">Select printer</option>
                  {printers.map((printer) => (
                    <option key={printer.name} value={printer.name}>
                      {printer.displayName || printer.name}
                      {printer.isDefault ? " (Default)" : ""}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {mode === "classic" && (
              <div className="mt-3 space-y-3">
                <label className="block text-sm">
                  <span className="mb-1 block text-slate-600">Choose Bluetooth serial port</span>
                  <select
                    className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    value={selectedSerialPath ?? ""}
                    onChange={(e) => setSelectedSerialPath(e.target.value || undefined)}
                  >
                    <option value="">Select serial port</option>
                    {serialPorts.map((port) => (
                      <option key={port.path} value={port.path}>
                        {port.label}
                      </option>
                    ))}
                  </select>
                </label>
                <p className="text-sm text-slate-600">
                  Native port: {nativePortConnection.connected ? `Connected (${nativePortConnection.path || "unknown"})` : "Disconnected"}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    onClick={() => {
                      if (!selectedSerialPath) {
                        setDiagLog("Select a serial port first");
                        return;
                      }
                      void connectNativePort(selectedSerialPath)
                        .then(() => setDiagLog(`Connected to ${selectedSerialPath}`))
                        .catch((error) => setDiagLog(error instanceof Error ? error.message : "Connect failed"));
                    }}
                  >
                    Connect native port
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    onClick={() =>
                      void disconnectNativePort()
                        .then(() => setDiagLog("Native port disconnected"))
                        .catch((error) => setDiagLog(error instanceof Error ? error.message : "Disconnect failed"))
                    }
                  >
                    Disconnect
                  </button>
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <p className="text-xs font-semibold text-slate-600">Diagnostics</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                      onClick={() =>
                        void loadSerialPorts().then(() => {
                          setDiagLog("Ports refreshed");
                        })
                      }
                    >
                      Refresh ports
                    </button>
                    <button
                      type="button"
                      className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                      onClick={() => {
                        if (!selectedSerialPath) {
                          setDiagLog("Select a serial port first");
                          return;
                        }
                        void diagnoseSerialPort(selectedSerialPath).then((result) => {
                          setDiagLog(
                            `Port: ${result.port}\nOpened: ${result.opened ? "yes" : "no"}\nWrote bytes: ${result.wroteBytes}\nResponse bytes: ${result.responseBytes}\nLikely connected: ${
                              result.likelyConnected ? "yes" : "no"
                            }\nMessage: ${result.message}`
                          );
                        });
                      }}
                    >
                      Run write test
                    </button>
                  </div>
                  <pre className="mt-2 max-h-28 overflow-auto whitespace-pre-wrap rounded bg-slate-100 p-2 text-[11px] text-slate-700">
                    {diagLog || "No diagnostics yet"}
                  </pre>
                </div>
              </div>
            )}

            {mode === "bluetooth" && (
              <div className="mt-3 space-y-3 rounded-lg border border-slate-200 p-3">
                <p className="text-sm">
                  Device: <span className="font-semibold">{btName}</span> | Status:{" "}
                  <span className="font-semibold">{btConnected ? "Connected" : "Disconnected"}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    onClick={() =>
                      void connectBluetoothPrinter()
                        .then((d) => {
                          setBtName(d.name);
                          setBtConnected(true);
                          showNotice(`Connected to ${d.name}`);
                        })
                        .catch((error) => showNotice(error instanceof Error ? error.message : "Bluetooth connect failed"))
                    }
                  >
                    Connect printer
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    onClick={() =>
                      void reconnectBluetoothPrinterIfKnown()
                        .then((ok) => {
                          setBtConnected(ok || isBluetoothPrinterConnected());
                          showNotice(ok ? "Reconnected" : "No known device to reconnect");
                        })
                        .catch((error) => showNotice(error instanceof Error ? error.message : "Reconnect failed"))
                    }
                  >
                    Reconnect
                  </button>
                  <button
                    type="button"
                    className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                    onClick={() => {
                      disconnectBluetoothPrinter();
                      setBtConnected(false);
                      showNotice("Bluetooth printer disconnected");
                    }}
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}

            <label className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 p-2 text-sm">
              Auto print receipt after order
              <input type="checkbox" checked={autoPrint} onChange={(e) => setAutoPrint(e.target.checked)} className="h-4 w-4" />
            </label>

            <div className="mt-4 flex justify-between gap-2">
              <button
                type="button"
                className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                onClick={() =>
                  void savePrinterConfig({
                    mode,
                    deviceName: selectedDeviceName,
                    serialPath: selectedSerialPath,
                    autoPrint
                  }).then(async () => {
                    if (mode === "bluetooth") {
                      await printBluetoothTest();
                      showNotice("Bluetooth test print sent");
                      return;
                    }
                    await printTestReceipt();
                    showNotice("Test print sent");
                  }).catch((error) => showNotice(error instanceof Error ? error.message : "Test print failed"))
                }
              >
                Print test
              </button>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
                  onClick={() => setOpenPrinterModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
                  onClick={() =>
                    void savePrinterConfig({
                      mode,
                      deviceName: selectedDeviceName,
                      serialPath: selectedSerialPath,
                      autoPrint
                    }).then(() => {
                      setOpenPrinterModal(false);
                      showNotice("Printer settings saved");
                    })
                  }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
