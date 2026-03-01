import type { ScreenKey } from "@/types/ui";
import { clsx } from "clsx";

const links: Array<{ key: ScreenKey; label: string }> = [
  { key: "order", label: "Order" },
  { key: "inventory", label: "Inventory" },
  { key: "history", label: "Order History" },
  { key: "reports", label: "Sales Report" },
  { key: "settings", label: "Settings" }
];

type Props = {
  active: ScreenKey;
  onChange: (key: ScreenKey) => void;
  storeName?: string;
};

export function Sidebar({ active, onChange, storeName }: Props) {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white/80 p-4 backdrop-blur">
      <h1 className="text-xl font-bold text-slate-900">EZ POS</h1>
      <p className="mt-1 text-sm text-slate-500">{storeName ?? "Store"}</p>
      <nav className="mt-6 flex flex-1 flex-col gap-2">
        {links.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={clsx(
              "rounded-xl px-4 py-3 text-left text-sm font-semibold transition",
              active === item.key ? "bg-brand-600 text-white shadow-panel" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
