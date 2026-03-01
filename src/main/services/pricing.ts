import type { ChargeInput } from "../../shared/contracts";

export type Totals = {
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
};

export function calculateTotals(subtotal: number, charges: ChargeInput): Totals {
  const discount = Math.max(0, Math.min(charges.discountAmount, subtotal));
  const taxableBase = Math.max(0, subtotal - discount);
  const fees = Math.max(0, charges.bagFee) + Math.max(0, charges.serviceFee);
  const tax = Math.round((taxableBase * Math.max(0, charges.taxRatePercent)) / 100);
  const total = Math.max(0, taxableBase + fees + tax);

  return { subtotal, discount, fees, tax, total };
}
