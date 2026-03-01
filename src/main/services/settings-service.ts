import type { StoreSettingsDTO } from "../../shared/contracts";
import { prisma } from "../db/prisma";

export async function getSettings(): Promise<StoreSettingsDTO> {
  const record = await prisma.storeSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      storeName: "My Store"
    }
  });

  return { storeName: record.storeName };
}

export async function updateSettings(payload: StoreSettingsDTO): Promise<StoreSettingsDTO> {
  const updated = await prisma.storeSettings.upsert({
    where: { id: 1 },
    update: { storeName: payload.storeName },
    create: { id: 1, storeName: payload.storeName }
  });
  return { storeName: updated.storeName };
}
