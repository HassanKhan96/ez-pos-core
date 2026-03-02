import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import { App } from "./app/App";
import { posTheme } from "./app/theme";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={posTheme}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
