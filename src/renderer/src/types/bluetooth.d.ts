type BluetoothServiceUUID = number | string;
type BufferSource = ArrayBuffer | ArrayBufferView;

interface RequestDeviceOptions {
  filters?: BluetoothLEScanFilter[];
  acceptAllDevices?: boolean;
  optionalServices?: BluetoothServiceUUID[];
}

interface BluetoothLEScanFilter {
  name?: string;
  namePrefix?: string;
  services?: BluetoothServiceUUID[];
}

interface BluetoothCharacteristicProperties {
  write: boolean;
  writeWithoutResponse: boolean;
}

interface BluetoothRemoteGATTCharacteristic {
  uuid: string;
  properties: BluetoothCharacteristicProperties;
  writeValue(value: BufferSource): Promise<void>;
  writeValueWithoutResponse?(value: BufferSource): Promise<void>;
}

interface BluetoothRemoteGATTService {
  getCharacteristics(): Promise<BluetoothRemoteGATTCharacteristic[]>;
}

interface BluetoothRemoteGATTServer {
  connected: boolean;
  connect(): Promise<BluetoothRemoteGATTServer>;
  getPrimaryServices(): Promise<BluetoothRemoteGATTService[]>;
  disconnect(): void;
}

interface BluetoothDevice {
  id: string;
  name?: string;
  gatt?: BluetoothRemoteGATTServer;
  addEventListener?(type: string, listener: (...args: unknown[]) => void): void;
}

interface Bluetooth {
  requestDevice(options?: RequestDeviceOptions): Promise<BluetoothDevice>;
  getDevices?: () => Promise<BluetoothDevice[]>;
}

interface Navigator {
  bluetooth: Bluetooth;
}
