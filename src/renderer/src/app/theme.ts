import type { ThemeConfig } from "antd";

export const posTheme: ThemeConfig = {
  token: {
    colorPrimary: "#0f766e",
    colorSuccess: "#15803d",
    colorWarning: "#b45309",
    colorError: "#b91c1c",
    colorInfo: "#0f766e",
    borderRadius: 14,
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    colorBgLayout: "#eef4f2",
    colorTextBase: "#102a2b"
  },
  components: {
    Card: {
      borderRadiusLG: 16,
      bodyPadding: 16
    },
    Button: {
      fontWeight: 600,
      controlHeight: 38
    },
    Menu: {
      itemHeight: 44,
      itemBorderRadius: 12,
      itemSelectedBg: "#115e59",
      itemSelectedColor: "#ffffff"
    },
    Input: {
      controlHeight: 38
    },
    Table: {
      borderColor: "#e2e8f0",
      headerBg: "#f8fafc"
    }
  }
};
