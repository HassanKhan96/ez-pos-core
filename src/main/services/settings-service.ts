import type { StoreSettingsDTO, StoreSettingsUpdateInput } from "../../shared/contracts";
import { capabilitiesForProfile, normalizeBusinessProfile } from "../../shared/profile";
import { prisma } from "../db/prisma";
import { ensurePhase1SchemaCompat } from "./schema-compat";
import { storeSettingsUpdateSchema } from "./validators";

function getConfiguredBusinessProfile() {
  return normalizeBusinessProfile(process.env.POS_BUSINESS_PROFILE);
}

export async function getSettings(): Promise<StoreSettingsDTO> {
  await ensurePhase1SchemaCompat();
  const configuredProfile = getConfiguredBusinessProfile();
  const record = await prisma.storeSettings.upsert({
    where: { id: 1 },
    update: {
      businessProfile: configuredProfile
    },
    create: {
      id: 1,
      storeName: "My Store",
      businessProfile: configuredProfile
    }
  });

  const businessProfile = normalizeBusinessProfile(record.businessProfile);
  return {
    storeName: record.storeName,
    businessProfile,
    capabilities: capabilitiesForProfile(businessProfile)
  };
}

export async function updateSettings(rawPayload: StoreSettingsUpdateInput): Promise<StoreSettingsDTO> {
  await ensurePhase1SchemaCompat();
  const configuredProfile = getConfiguredBusinessProfile();
  const payload = storeSettingsUpdateSchema.parse(rawPayload);
  const updated = await prisma.storeSettings.upsert({
    where: { id: 1 },
    update: {
      storeName: payload.storeName,
      businessProfile: configuredProfile
    },
    create: {
      id: 1,
      storeName: payload.storeName,
      businessProfile: configuredProfile
    }
  });
  const businessProfile = normalizeBusinessProfile(updated.businessProfile);
  return {
    storeName: updated.storeName,
    businessProfile,
    capabilities: capabilitiesForProfile(businessProfile)
  };
}
