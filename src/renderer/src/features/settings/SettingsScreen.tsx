import { useEffect, useMemo, useState } from "react";
import {
  WifiOutlined,
  CheckCircleTwoTone,
  DisconnectOutlined,
  PrinterOutlined,
  SettingOutlined,
  UsbOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Modal,
  Select,
  Space,
  Tag,
  Typography
} from "antd";
import { businessProfileLabel, orderChannelLabel } from "@shared/profile";
import {
  connectBluetoothPrinter,
  disconnectBluetoothPrinter,
  isBluetoothPrinterConnected,
  printBluetoothTest,
  reconnectBluetoothPrinterIfKnown
} from "@/lib/bluetooth-printer";
import { usePosStore } from "@/state/use-pos-store";

type Mode = "system" | "classic" | "bluetooth";
const capabilityKeyByChannel = {
  DINE_IN: "ORDER_CHANNEL_DINE_IN",
  TAKEOUT: "ORDER_CHANNEL_TAKEOUT",
  DELIVERY: "ORDER_CHANNEL_DELIVERY",
  COLLECTION: "ORDER_CHANNEL_COLLECTION"
} as const;

export function SettingsScreen() {
  const settings = usePosStore((state) => state.settings);
  const printers = usePosStore((state) => state.printers);
  const serialPorts = usePosStore((state) => state.serialPorts);
  const printerConfig = usePosStore((state) => state.printerConfig);
  const nativePortConnection = usePosStore((state) => state.nativePortConnection);
  const saveStoreName = usePosStore((state) => state.saveStoreName);
  const loadPrinters = usePosStore((state) => state.loadPrinters);
  const loadSerialPorts = usePosStore((state) => state.loadSerialPorts);
  const loadNativePortConnection = usePosStore((state) => state.loadNativePortConnection);
  const connectNativePort = usePosStore((state) => state.connectNativePort);
  const disconnectNativePort = usePosStore((state) => state.disconnectNativePort);
  const savePrinterConfig = usePosStore((state) => state.savePrinterConfig);
  const diagnoseSerialPort = usePosStore((state) => state.diagnoseSerialPort);
  const printTestReceipt = usePosStore((state) => state.printTestReceipt);
  const showNotice = usePosStore((state) => state.showNotice);

  const [storeName, setStoreName] = useState("");
  const [openPrinterModal, setOpenPrinterModal] = useState(false);
  const [mode, setMode] = useState<Mode>("system");
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

  useEffect(() => {
    setBtConnected(isBluetoothPrinterConnected());
  }, []);

  const selectedSystemPrinterLabel = useMemo(() => {
    const found = printers.find((printer) => printer.name === printerConfig.deviceName);
    return found?.displayName || printerConfig.deviceName || "None";
  }, [printerConfig.deviceName, printers]);

  return (
    <div className="settings-grid">
      <Card className="screen-panel" title="Store Settings" extra={<SettingOutlined />}>
        <Space orientation="vertical" size={10} style={{ width: "100%" }}>
          <Typography.Text type="secondary">Store name shown on receipts and navigation.</Typography.Text>
          <input
            type="text"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
            className="ant-input"
          />
          <Button type="primary" onClick={() => void saveStoreName(storeName)}>
            Save Store Name
          </Button>
          <Divider style={{ margin: "6px 0" }} />
          <Typography.Text type="secondary">Business profile is deployment controlled (read-only).</Typography.Text>
          <Tag color="blue">{businessProfileLabel(settings?.businessProfile ?? "MART")}</Tag>
          <Space wrap size={[6, 6]}>
            {settings &&
              ([
                "DINE_IN",
                "TAKEOUT",
                "DELIVERY",
                "COLLECTION"
              ] as const).map((channel) => (
                <Tag key={channel} color={settings.capabilities[capabilityKeyByChannel[channel]] ? "green" : "default"}>
                  {orderChannelLabel(channel)}
                </Tag>
              ))}
          </Space>
        </Space>
      </Card>

      <Card
        className="screen-panel"
        title="Printer Settings"
        extra={<PrinterOutlined />}
        actions={[
          <Button
            key="open"
            icon={<SettingOutlined />}
            onClick={() => {
              void Promise.all([loadPrinters(), loadSerialPorts(), loadNativePortConnection()]);
              setOpenPrinterModal(true);
            }}
          >
            Open Setup
          </Button>
        ]}
      >
        <Space orientation="vertical" size={8}>
          <Typography.Text>
            Mode: <Typography.Text strong>{modeLabel(printerConfig.mode)}</Typography.Text>
          </Typography.Text>
          <Typography.Text>
            Auto print: <Typography.Text strong>{printerConfig.autoPrint ? "On" : "Off"}</Typography.Text>
          </Typography.Text>
          <Typography.Text type="secondary">
            {printerConfig.mode === "classic"
              ? `Serial port: ${printerConfig.serialPath ?? "None"}`
              : printerConfig.mode === "bluetooth"
                ? `Bluetooth: ${btConnected ? btName : "Not connected"}`
                : `System printer: ${selectedSystemPrinterLabel}`}
          </Typography.Text>
          {nativePortConnection.connected && (
            <Tag icon={<CheckCircleTwoTone twoToneColor="#16a34a" />} color="success">
              Native port connected
            </Tag>
          )}
        </Space>
      </Card>

      <Modal
        open={openPrinterModal}
        onCancel={() => setOpenPrinterModal(false)}
        width={720}
        title="Printer Setup"
        footer={
          <Space>
            <Button onClick={() => setOpenPrinterModal(false)}>Cancel</Button>
            <Button
              type="primary"
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
            </Button>
          </Space>
        }
      >
        <Space orientation="vertical" size={14} style={{ width: "100%" }}>
          <Space orientation="vertical" size={6} style={{ width: "100%" }}>
            <Typography.Text strong>Mode</Typography.Text>
            <Select
              value={mode}
              onChange={(nextMode) => setMode(nextMode)}
              options={[
                { label: "System Printer", value: "system" },
                { label: "Classic Bluetooth (SPP Serial)", value: "classic" },
                { label: "Bluetooth BLE", value: "bluetooth" }
              ]}
            />
          </Space>

          {mode === "system" && (
            <Select
              placeholder="Choose system printer"
              value={selectedDeviceName}
              onChange={(value) => setSelectedDeviceName(value)}
              options={printers.map((printer) => ({
                label: `${printer.displayName || printer.name}${printer.isDefault ? " (Default)" : ""}`,
                value: printer.name
              }))}
            />
          )}

          {mode === "classic" && (
            <Space orientation="vertical" size={12} style={{ width: "100%" }}>
              <Select
                placeholder="Choose Bluetooth serial port"
                value={selectedSerialPath}
                onChange={(value) => setSelectedSerialPath(value)}
                options={serialPorts.map((port) => ({ label: port.label, value: port.path }))}
              />

              <Space wrap>
                <Button
                  icon={<UsbOutlined />}
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
                  Connect
                </Button>
                <Button
                  icon={<DisconnectOutlined />}
                  onClick={() =>
                    void disconnectNativePort()
                      .then(() => setDiagLog("Native port disconnected"))
                      .catch((error) => setDiagLog(error instanceof Error ? error.message : "Disconnect failed"))
                  }
                >
                  Disconnect
                </Button>
                <Button
                  onClick={() =>
                    void loadSerialPorts().then(() => {
                      setDiagLog("Ports refreshed");
                    })
                  }
                >
                  Refresh Ports
                </Button>
                <Button
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
                  Run Write Test
                </Button>
              </Space>

              <pre className="diag-log">{diagLog || "No diagnostics yet"}</pre>
            </Space>
          )}

          {mode === "bluetooth" && (
            <Space orientation="vertical" size={12} style={{ width: "100%" }}>
              <Typography.Text>
                Device: <Typography.Text strong>{btName}</Typography.Text> | Status: <Typography.Text strong>{btConnected ? "Connected" : "Disconnected"}</Typography.Text>
              </Typography.Text>

              <Space wrap>
                <Button
                  icon={<WifiOutlined />}
                  onClick={() =>
                    void connectBluetoothPrinter()
                      .then((device) => {
                        setBtName(device.name);
                        setBtConnected(true);
                        showNotice(`Connected to ${device.name}`);
                      })
                      .catch((error) => showNotice(error instanceof Error ? error.message : "Bluetooth connect failed"))
                  }
                >
                  Connect
                </Button>
                <Button
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
                </Button>
                <Button
                  icon={<DisconnectOutlined />}
                  onClick={() => {
                    disconnectBluetoothPrinter();
                    setBtConnected(false);
                    showNotice("Bluetooth printer disconnected");
                  }}
                >
                  Disconnect
                </Button>
              </Space>
            </Space>
          )}

          <Divider style={{ margin: 0 }} />

          <Space style={{ justifyContent: "space-between", width: "100%" }}>
            <Space>
              <Checkbox checked={autoPrint} onChange={(event) => setAutoPrint(event.target.checked)}>
                Auto print receipt after order
              </Checkbox>
            </Space>
            <Button
              onClick={() =>
                void savePrinterConfig({
                  mode,
                  deviceName: selectedDeviceName,
                  serialPath: selectedSerialPath,
                  autoPrint
                })
                  .then(async () => {
                    if (mode === "bluetooth") {
                      await printBluetoothTest();
                      showNotice("Bluetooth test print sent");
                      return;
                    }
                    await printTestReceipt();
                    showNotice("Test print sent");
                  })
                  .catch((error) => showNotice(error instanceof Error ? error.message : "Test print failed"))
              }
            >
              Print Test
            </Button>
          </Space>
        </Space>
      </Modal>
    </div>
  );
}

function modeLabel(mode: Mode): string {
  if (mode === "classic") return "Classic Bluetooth (SPP Serial)";
  if (mode === "bluetooth") return "Bluetooth BLE";
  return "System Printer";
}
