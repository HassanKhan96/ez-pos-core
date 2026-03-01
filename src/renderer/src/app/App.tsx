import { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { SuccessModal } from "@/components/SuccessModal";
import { CartScreen } from "@/features/cart/CartScreen";
import { OrderHistoryScreen } from "@/features/history/OrderHistoryScreen";
import { InventoryScreen } from "@/features/inventory/InventoryScreen";
import { OrderScreen } from "@/features/order/OrderScreen";
import { SalesReportScreen } from "@/features/reports/SalesReportScreen";
import { SettingsScreen } from "@/features/settings/SettingsScreen";
import { usePosStore } from "@/state/use-pos-store";
import type { ScreenKey } from "@/types/ui";

export function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("order");
  const { settings, loadBootstrap, loading, error, notice, clearNotice } = usePosStore();

  useEffect(() => {
    void loadBootstrap();
  }, [loadBootstrap]);

  return (
    <main className="grid h-screen grid-cols-[16rem_1fr] overflow-hidden">
      <Sidebar active={activeScreen} onChange={setActiveScreen} storeName={settings?.storeName} />
      <div className="grid min-h-0 grid-cols-1 gap-4 overflow-hidden p-4 xl:grid-cols-[1fr_24rem]">
        <section className="min-h-0 overflow-hidden">
          {loading && <div className="rounded-xl bg-amber-50 p-3 text-sm text-amber-700">Loading...</div>}
          {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</div>}

          {activeScreen === "order" && <OrderScreen />}
          {activeScreen === "inventory" && <InventoryScreen />}
          {activeScreen === "history" && <OrderHistoryScreen />}
          {activeScreen === "reports" && <SalesReportScreen />}
          {activeScreen === "settings" && <SettingsScreen />}
        </section>

        <aside className="min-h-0 overflow-hidden">
          <CartScreen />
        </aside>
      </div>
      {notice && <SuccessModal message={notice} onClose={clearNotice} />}
    </main>
  );
}
