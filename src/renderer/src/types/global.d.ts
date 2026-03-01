import type { POSApi } from "@shared/contracts";

declare global {
  interface Window {
    posAPI: POSApi;
  }
}

export {};
