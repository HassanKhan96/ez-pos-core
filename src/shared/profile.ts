import {
  BUSINESS_PROFILES,
  CAPABILITY_KEYS,
  ORDER_CHANNELS,
  type BusinessProfile,
  type CapabilityFlags,
  type CapabilityKey,
  type OrderChannel
} from "./contracts";

export const DEFAULT_BUSINESS_PROFILE: BusinessProfile = "MART";

const CHANNEL_TO_CAPABILITY: Record<OrderChannel, CapabilityKey> = {
  DINE_IN: "ORDER_CHANNEL_DINE_IN",
  TAKEOUT: "ORDER_CHANNEL_TAKEOUT",
  DELIVERY: "ORDER_CHANNEL_DELIVERY",
  COLLECTION: "ORDER_CHANNEL_COLLECTION"
};

const PROFILE_CHANNELS: Record<BusinessProfile, OrderChannel[]> = {
  RESTAURANT: ["DINE_IN", "TAKEOUT", "DELIVERY", "COLLECTION"],
  MART: ["TAKEOUT", "DELIVERY", "COLLECTION"],
  PHARMACY: ["TAKEOUT", "DELIVERY", "COLLECTION"]
};

export function normalizeBusinessProfile(value: unknown): BusinessProfile {
  if (typeof value === "string" && BUSINESS_PROFILES.includes(value as BusinessProfile)) {
    return value as BusinessProfile;
  }
  return DEFAULT_BUSINESS_PROFILE;
}

export function capabilityForOrderChannel(channel: OrderChannel): CapabilityKey {
  return CHANNEL_TO_CAPABILITY[channel];
}

export function capabilitiesForProfile(profile: BusinessProfile): CapabilityFlags {
  const normalized = normalizeBusinessProfile(profile);
  const enabledChannels = new Set(PROFILE_CHANNELS[normalized]);
  const entries = CAPABILITY_KEYS.map((capability) => {
    const channel = ORDER_CHANNELS.find((candidate) => CHANNEL_TO_CAPABILITY[candidate] === capability);
    return [capability, channel ? enabledChannels.has(channel) : false] as const;
  });
  return Object.fromEntries(entries) as CapabilityFlags;
}

export function isOrderChannelEnabled(capabilities: CapabilityFlags, channel: OrderChannel): boolean {
  return Boolean(capabilities[capabilityForOrderChannel(channel)]);
}

export function enabledOrderChannels(capabilities: CapabilityFlags): OrderChannel[] {
  return ORDER_CHANNELS.filter((channel) => isOrderChannelEnabled(capabilities, channel));
}

export function businessProfileLabel(profile: BusinessProfile): string {
  if (profile === "RESTAURANT") return "Restaurant";
  if (profile === "PHARMACY") return "Pharmacy";
  return "Mart";
}

export function orderChannelLabel(channel: OrderChannel): string {
  if (channel === "DINE_IN") return "Dine In";
  if (channel === "TAKEOUT") return "Takeout";
  if (channel === "DELIVERY") return "Delivery";
  return "Collection";
}
