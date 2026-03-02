import {
  AppstoreOutlined,
  BarChartOutlined,
  OrderedListOutlined,
  SettingOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";
import { Layout } from "antd";
import type { ScreenKey } from "@/types/ui";

const links: Array<{ key: ScreenKey; label: string; icon: React.ReactNode }> = [
  { key: "order", label: "Order", icon: <ShoppingCartOutlined /> },
  { key: "inventory", label: "Inventory", icon: <AppstoreOutlined /> },
  { key: "history", label: "History", icon: <OrderedListOutlined /> },
  { key: "reports", label: "Reports", icon: <BarChartOutlined /> },
  { key: "settings", label: "Settings", icon: <SettingOutlined /> }
];

type Props = {
  active: ScreenKey;
  onChange: (key: ScreenKey) => void;
};

export function Sidebar({ active, onChange }: Props) {
  return (
    <Layout.Sider width={118} theme="light" className="nav-rail">
      <nav className="nav-rail-list" aria-label="Main Navigation">
        {links.map((item) => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onChange(item.key)}
              className={`nav-rail-item ${isActive ? "active" : ""}`}
            >
              <span className="nav-rail-icon">{item.icon}</span>
              <span className="nav-rail-label">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </Layout.Sider>
  );
}
