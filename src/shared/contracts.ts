export type ProductSizeInput = {
  id?: string;
  name: string;
  priceDelta: number;
  sortOrder: number;
};

export type VariationChoiceInput = {
  id?: string;
  name: string;
  priceDelta: number;
  sortOrder: number;
};

export type VariationGroupInput = {
  id?: string;
  name: string;
  minSelectable: number;
  maxSelectable: number;
  required: boolean;
  sortOrder: number;
  choices: VariationChoiceInput[];
};

export type ProductInput = {
  id?: string;
  name: string;
  sku?: string;
  categoryId?: string;
  basePrice: number;
  trackInventory: boolean;
  active: boolean;
  stockQty: number;
  sizes: ProductSizeInput[];
  variationGroups: VariationGroupInput[];
};

export type ProductListItem = ProductInput & {
  id: string;
  categoryName?: string;
};

export type CategoryInput = {
  name: string;
  description?: string;
};

export type CategoryListItem = {
  id: string;
  name: string;
  description?: string;
};

export type CartVariationSelection = {
  groupId: string;
  choiceIds: string[];
};

export type CartItemInput = {
  productId: string;
  quantity: number;
  sizeId?: string;
  selectedVariations: CartVariationSelection[];
};

export type ChargeInput = {
  bagFee: number;
  serviceFee: number;
  taxRatePercent: number;
  discountAmount: number;
};

export type PlaceOrderInput = {
  items: CartItemInput[];
  charges: ChargeInput;
};

export type OrderListItem = {
  id: string;
  orderNumber: number;
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
  createdAt: string;
};

export type ReceiptLineItem = {
  productName: string;
  quantity: number;
  lineTotal: number;
  sizeName?: string;
  variations: string[];
};

export type OrderReceiptDTO = {
  orderId: string;
  orderNumber: number;
  createdAt: string;
  storeName: string;
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
  items: ReceiptLineItem[];
};

export type SalesSummary = {
  daySales: number;
  monthSales: number;
  topProducts: Array<{ productName: string; qtySold: number; revenue: number }>;
};

export type StoreSettingsDTO = {
  storeName: string;
};

export type PrinterDevice = {
  name: string;
  displayName: string;
  isDefault: boolean;
  status?: number;
};

export type PrinterConfig = {
  mode: "system" | "classic" | "bluetooth";
  deviceName?: string;
  serialPath?: string;
  autoPrint: boolean;
};

export type SerialPortInfo = {
  path: string;
  label: string;
};

export type SerialDiagnosticsResult = {
  port: string;
  opened: boolean;
  wroteBytes: number;
  responseBytes: number;
  likelyConnected: boolean;
  message: string;
};

export type NativePortConnection = {
  connected: boolean;
  path?: string;
};

export type POSApi = {
  inventory: {
    list: () => Promise<ProductListItem[]>;
    upsert: (input: ProductInput) => Promise<ProductListItem>;
    remove: (id: string) => Promise<{ ok: true }>;
    adjustStock: (productId: string, delta: number) => Promise<{ ok: true }>;
    listCategories: () => Promise<CategoryListItem[]>;
    createCategory: (input: CategoryInput) => Promise<CategoryListItem>;
  };
  orders: {
    place: (input: PlaceOrderInput) => Promise<OrderListItem>;
    list: (fromISO: string, toISO: string) => Promise<OrderListItem[]>;
    getReceipt: (orderId: string) => Promise<OrderReceiptDTO>;
  };
  settings: {
    get: () => Promise<StoreSettingsDTO>;
    update: (payload: StoreSettingsDTO) => Promise<StoreSettingsDTO>;
  };
  reports: {
    summary: (dateISO: string) => Promise<SalesSummary>;
  };
  printers: {
    list: () => Promise<PrinterDevice[]>;
    listSerialPorts: () => Promise<SerialPortInfo[]>;
    connectNativePort: (serialPath: string) => Promise<NativePortConnection>;
    disconnectNativePort: () => Promise<{ disconnected: true }>;
    getNativePortConnection: () => Promise<NativePortConnection>;
    diagnoseSerialPort: (serialPath: string) => Promise<SerialDiagnosticsResult>;
    getConfig: () => Promise<PrinterConfig>;
    saveConfig: (config: PrinterConfig) => Promise<PrinterConfig>;
    printTest: () => Promise<{ ok: true }>;
    printOrder: (orderId: string) => Promise<{ ok: true }>;
  };
};
