import { describe, expect, it } from "vitest";
import { calculateTotals } from "../src/main/services/pricing";

describe("calculateTotals", () => {
  it("applies discount before tax and then adds fees", () => {
    const totals = calculateTotals(10000, {
      bagFee: 200,
      serviceFee: 300,
      taxRatePercent: 10,
      discountAmount: 1000
    });

    expect(totals.subtotal).toBe(10000);
    expect(totals.discount).toBe(1000);
    expect(totals.fees).toBe(500);
    expect(totals.tax).toBe(900);
    expect(totals.total).toBe(10400);
  });

  it("clamps discount to subtotal", () => {
    const totals = calculateTotals(500, {
      bagFee: 0,
      serviceFee: 0,
      taxRatePercent: 5,
      discountAmount: 900
    });

    expect(totals.discount).toBe(500);
    expect(totals.tax).toBe(0);
    expect(totals.total).toBe(0);
  });
});
