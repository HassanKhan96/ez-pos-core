import { create } from "zustand";
import { printBluetoothReceipt } from "@/lib/bluetooth-printer";
import type {
  CategoryInput,
  CategoryListItem,
  NativePortConnection,
  PrinterConfig,
  PrinterDevice,
  SerialDiagnosticsResult,
  SerialPortInfo,
  ProductInput,
  ProductListItem,
  SalesSummary,
  StoreSettingsDTO,
} from "@shared/contracts";

export type CartLine = {
  key: string;
  productId: string;
  productName: string;
  sizeId?: string;
  sizeName?: string;
  selectedVariations: Array<{
    groupId: string;
    choiceIds: string[];
    labels: string[];
  }>;
  quantity: number;
};

type StoreState = {
  products: ProductListItem[];
  categories: CategoryListItem[];
  printers: PrinterDevice[];
  serialPorts: SerialPortInfo[];
  nativePortConnection: NativePortConnection;
  printerConfig: PrinterConfig;
  orders: Array<{
    id: string;
    orderNumber: number;
    subtotal: number;
    discount: number;
    fees: number;
    tax: number;
    total: number;
    createdAt: string;
  }>;
  settings: StoreSettingsDTO | null;
  report: SalesSummary | null;
  cart: CartLine[];
  charges: {
    bagFee: number;
    serviceFee: number;
    taxRatePercent: number;
    discountAmount: number;
  };
  loading: boolean;
  error: string | null;
  notice: string | null;
  loadBootstrap: () => Promise<void>;
  refreshInventory: () => Promise<void>;
  refreshCategories: () => Promise<void>;
  createCategory: (input: CategoryInput) => Promise<void>;
  loadPrinters: () => Promise<void>;
  loadSerialPorts: () => Promise<void>;
  diagnoseSerialPort: (serialPath: string) => Promise<SerialDiagnosticsResult>;
  loadPrinterConfig: () => Promise<void>;
  loadNativePortConnection: () => Promise<void>;
  connectNativePort: (serialPath: string) => Promise<void>;
  disconnectNativePort: () => Promise<void>;
  savePrinterConfig: (config: PrinterConfig) => Promise<void>;
  printTestReceipt: () => Promise<void>;
  upsertProduct: (input: ProductInput) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  addToCart: (line: Omit<CartLine, "key" | "quantity">) => void;
  changeQty: (key: string, delta: number) => void;
  removeFromCart: (key: string) => void;
  clearCart: () => void;
  setCharge: (
    name: "bagFee" | "serviceFee" | "taxRatePercent" | "discountAmount",
    value: number,
  ) => void;
  placeOrder: () => Promise<void>;
  loadOrdersForDate: (fromISO: string, toISO: string) => Promise<void>;
  loadReportForDate: (dateISO: string) => Promise<void>;
  saveStoreName: (storeName: string) => Promise<void>;
  showNotice: (message: string) => void;
  clearNotice: () => void;
};

function lineKey(line: Omit<CartLine, "key" | "quantity">): string {
  const variationPart = line.selectedVariations
    .map((v) => `${v.groupId}:${[...v.choiceIds].sort().join(",")}`)
    .sort()
    .join("|");
  return `${line.productId}:${line.sizeId ?? "none"}:${variationPart}`;
}

export const usePosStore = create<StoreState>((set, get) => ({
  products: [],
  categories: [],
  printers: [],
  serialPorts: [],
  nativePortConnection: { connected: false },
  printerConfig: { mode: "system", autoPrint: true },
  orders: [],
  settings: null,
  report: null,
  cart: [],
  charges: { bagFee: 0, serviceFee: 0, taxRatePercent: 5, discountAmount: 0 },
  loading: false,
  error: null,
  notice: null,

  loadBootstrap: async () => {
    set({ loading: true, error: null });
    try {
      const [products, categories, settings, printers, serialPorts, printerConfig, nativePortConnection] = await Promise.all([
        window.posAPI.inventory.list(),
        window.posAPI.inventory.listCategories(),
        window.posAPI.settings.get(),
        window.posAPI.printers.list(),
        window.posAPI.printers.listSerialPorts(),
        window.posAPI.printers.getConfig(),
        window.posAPI.printers.getNativePortConnection()
      ]);
      set({ products, categories, settings, printers, serialPorts, printerConfig, nativePortConnection });
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : "Failed to load app data",
      });
    } finally {
      set({ loading: false });
    }
  },

  refreshInventory: async () => {
    const products = await window.posAPI.inventory.list();
    set({ products });
  },
  refreshCategories: async () => {
    const categories = await window.posAPI.inventory.listCategories();
    set({ categories });
  },
  createCategory: async (input) => {
    await window.posAPI.inventory.createCategory(input);
    await get().refreshCategories();
  },
  loadPrinters: async () => {
    const printers = await window.posAPI.printers.list();
    set({ printers });
  },
  loadSerialPorts: async () => {
    const serialPorts = await window.posAPI.printers.listSerialPorts();
    set({ serialPorts });
  },
  diagnoseSerialPort: async (serialPath) => {
    return window.posAPI.printers.diagnoseSerialPort(serialPath);
  },
  loadPrinterConfig: async () => {
    const printerConfig = await window.posAPI.printers.getConfig();
    set({ printerConfig });
  },
  loadNativePortConnection: async () => {
    const nativePortConnection = await window.posAPI.printers.getNativePortConnection();
    set({ nativePortConnection });
  },
  connectNativePort: async (serialPath) => {
    const nativePortConnection = await window.posAPI.printers.connectNativePort(serialPath);
    set({ nativePortConnection });
  },
  disconnectNativePort: async () => {
    await window.posAPI.printers.disconnectNativePort();
    set({ nativePortConnection: { connected: false } });
  },
  savePrinterConfig: async (config) => {
    const printerConfig = await window.posAPI.printers.saveConfig(config);
    set({ printerConfig });
  },
  printTestReceipt: async () => {
    await window.posAPI.printers.printTest();
  },

  upsertProduct: async (input) => {
    await window.posAPI.inventory.upsert(input);
    await get().refreshInventory();
  },

  deleteProduct: async (id) => {
    await window.posAPI.inventory.remove(id);
    await get().refreshInventory();
  },

  addToCart: (line) =>
    set((state) => {
      const key = lineKey(line);
      const idx = state.cart.findIndex((entry) => entry.key === key);
      if (idx >= 0) {
        const updated = [...state.cart];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + 1 };
        return {
          cart: updated,
        };
      }
      return {
        cart: [...state.cart, { ...line, key, quantity: 1 }],
      };
    }),

  changeQty: (key, delta) =>
    set((state) => ({
      cart: state.cart
        .map((line) =>
          line.key === key
            ? { ...line, quantity: line.quantity + delta }
            : line,
        )
        .filter((line) => line.quantity > 0),
    })),

  removeFromCart: (key) =>
    set((state) => ({
      cart: state.cart.filter((line) => line.key !== key),
    })),

  clearCart: () => set({ cart: [] }),

  setCharge: (name, value) =>
    set((state) => ({
      charges: {
        ...state.charges,
        [name]: Number.isFinite(value) ? Math.max(0, Math.round(value)) : 0,
      },
    })),

  placeOrder: async () => {
    const state = get();
    if (state.cart.length === 0) {
      return;
    }
    const payload = {
      items: state.cart.map((line) => ({
        productId: line.productId,
        quantity: line.quantity,
        sizeId: line.sizeId,
        selectedVariations: line.selectedVariations.map((v) => ({
          groupId: v.groupId,
          choiceIds: v.choiceIds,
        })),
      })),
      charges: state.charges,
    };
    const order = await window.posAPI.orders.place(payload);
    let notice = `Order #${order.orderNumber} placed successfully`;
    if (state.printerConfig.autoPrint) {
      if (state.printerConfig.mode === "bluetooth") {
        try {
          const receipt = await window.posAPI.orders.getReceipt(order.id);
          await printBluetoothReceipt(receipt);
        } catch (error) {
          notice = error instanceof Error
            ? `Order placed, but Bluetooth print failed: ${error.message}`
            : "Order placed, but Bluetooth print failed";
        }
      } else {
        try {
          await window.posAPI.printers.printOrder(order.id);
        } catch (error) {
          const label = state.printerConfig.mode === "classic" ? "classic Bluetooth" : "system";
          notice = error instanceof Error
            ? `Order placed, but ${label} print failed: ${error.message}`
            : `Order placed, but ${label} print failed`;
        }
      }
    }
    const date = new Date().toISOString().slice(0, 10);
    await Promise.all([
      get().refreshInventory(),
      get().loadOrdersForDate(`${date}T00:00:00.000Z`, `${date}T23:59:59.999Z`),
    ]);
    set({
      cart: [],
      notice,
    });
  },

  loadOrdersForDate: async (fromISO, toISO) => {
    const orders = await window.posAPI.orders.list(fromISO, toISO);
    set({ orders });
  },

  loadReportForDate: async (dateISO) => {
    const report = await window.posAPI.reports.summary(dateISO);
    set({ report });
  },

  saveStoreName: async (storeName) => {
    const settings = await window.posAPI.settings.update({ storeName });
    localStorage.setItem("store_name", storeName);
    set({ settings });
  },

  showNotice: (message) => set({ notice: message }),
  clearNotice: () => set({ notice: null }),
}));
