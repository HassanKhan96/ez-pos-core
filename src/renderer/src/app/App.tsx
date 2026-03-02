import { useEffect, useState } from "react";
import { Alert, Layout, Spin } from "antd";
import { Sidebar } from "@/components/Sidebar";
import { SuccessModal } from "@/components/SuccessModal";
import { OrderHistoryScreen } from "@/features/history/OrderHistoryScreen";
import { InventoryScreen } from "@/features/inventory/InventoryScreen";
import { OrderScreen } from "@/features/order/OrderScreen";
import { SalesReportScreen } from "@/features/reports/SalesReportScreen";
import { SettingsScreen } from "@/features/settings/SettingsScreen";
import { usePosStore } from "@/state/use-pos-store";
import type { ScreenKey } from "@/types/ui";

export function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("order");

  const loadBootstrap = usePosStore((state) => state.loadBootstrap);
  const loading = usePosStore((state) => state.loading);
  const error = usePosStore((state) => state.error);
  const notice = usePosStore((state) => state.notice);
  const clearNotice = usePosStore((state) => state.clearNotice);

  useEffect(() => {
    void loadBootstrap();
  }, [loadBootstrap]);

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Sidebar active={activeScreen} onChange={setActiveScreen} />
      <Layout.Content style={{ padding: 14, minWidth: 0 }}>
        <section className="app-content-single">
          {loading && (
            <div style={{ display: "grid", placeItems: "center", padding: 40 }}>
              <Spin size="large" />
            </div>
          )}

          {error && (
            <Alert
              style={{ marginBottom: 12 }}
              type="error"
              showIcon
              message="Something went wrong"
              description={error}
            />
          )}

          {activeScreen === "order" && <OrderScreen />}
          {activeScreen === "inventory" && <InventoryScreen />}
          {activeScreen === "history" && <OrderHistoryScreen />}
          {activeScreen === "reports" && <SalesReportScreen />}
          {activeScreen === "settings" && <SettingsScreen />}
        </section>
      </Layout.Content>
      {notice && <SuccessModal message={notice} onClose={clearNotice} />}
    </Layout>
  );
}
