import { useEffect, useMemo, useRef, useState } from "react";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function CartScreen() {
  const { cart, products, charges, setCharge, removeFromCart, changeQty, placeOrder } = usePosStore();
  const [openCharges, setOpenCharges] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const summary = useMemo(() => {
    const subtotal = cart.reduce((sum, line) => {
      const product = products.find((p) => p.id === line.productId);
      if (!product) return sum;
      let unit = product.basePrice;
      if (line.sizeId) {
        unit += product.sizes.find((s) => s.id === line.sizeId)?.priceDelta ?? 0;
      }
      for (const selected of line.selectedVariations) {
        const group = product.variationGroups.find((g) => g.id === selected.groupId);
        for (const choiceId of selected.choiceIds) {
          unit += group?.choices.find((c) => c.id === choiceId)?.priceDelta ?? 0;
        }
      }
      return sum + unit * line.quantity;
    }, 0);

    const discount = Math.min(charges.discountAmount, subtotal);
    const taxableBase = Math.max(0, subtotal - discount);
    const fees = charges.bagFee + charges.serviceFee;
    const tax = Math.round((taxableBase * charges.taxRatePercent) / 100);
    const total = taxableBase + fees + tax;
    return { subtotal, discount, fees, tax, total };
  }, [cart, charges, products]);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [cart.length]);

  return (
    <section className="flex h-full min-h-0 flex-col rounded-2xl bg-white p-4 shadow-panel">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Cart</h2>
        <button type="button" onClick={() => setOpenCharges(true)} className="rounded-md bg-slate-200 px-3 py-1 text-xs font-semibold">
          Add charges
        </button>
      </div>

      <div ref={listRef} className="mt-3 min-h-0 flex-1 space-y-2 overflow-auto pr-1">
        {cart.map((line) => (
          <div key={line.key} className="rounded-xl border border-slate-200 p-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">{line.productName}</p>
                {line.sizeName && <p className="text-xs text-slate-500">Size: {line.sizeName}</p>}
                {line.selectedVariations.flatMap((v) => v.labels).length > 0 && (
                  <p className="text-xs text-slate-500">{line.selectedVariations.flatMap((v) => v.labels).join(", ")}</p>
                )}
              </div>
              <button type="button" onClick={() => removeFromCart(line.key)} className="text-sm text-red-600">
                Delete
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => changeQty(line.key, -1)}
                className="h-8 w-8 rounded-md bg-slate-200 font-bold"
              >
                -
              </button>
              <span className="min-w-8 text-center text-sm font-semibold">{line.quantity}</span>
              <button
                type="button"
                onClick={() => changeQty(line.key, 1)}
                className="h-8 w-8 rounded-md bg-slate-200 font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 mt-3 space-y-3 bg-white pt-2">
        <div className="space-y-1 rounded-xl bg-slate-100 p-3 text-sm">
          <Row label="Subtotal" value={formatMoney(summary.subtotal)} />
          <Row label="Discount" value={`- ${formatMoney(summary.discount)}`} />
          <Row label="Fees" value={formatMoney(summary.fees)} />
          <Row label="Tax" value={formatMoney(summary.tax)} />
          <Row label="Total" value={formatMoney(summary.total)} strong />
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-brand-600 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          disabled={cart.length === 0}
          onClick={() => void placeOrder()}
        >
          Place order
        </button>
      </div>

      {openCharges && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-panel">
            <h3 className="text-base font-bold">Apply Charges</h3>
            <div className="mt-3 space-y-2 rounded-xl border border-slate-200 p-3 text-sm">
              <ChargeInput label="Bag fee" value={charges.bagFee} onChange={(v) => setCharge("bagFee", v)} />
              <ChargeInput label="Service fee" value={charges.serviceFee} onChange={(v) => setCharge("serviceFee", v)} />
              <ChargeInput label="Tax %" value={charges.taxRatePercent} onChange={(v) => setCharge("taxRatePercent", v)} />
              <ChargeInput label="Discount" value={charges.discountAmount} onChange={(v) => setCharge("discountAmount", v)} />
            </div>
            <div className="mt-3 flex justify-end">
              <button type="button" onClick={() => setOpenCharges(false)} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ChargeInput({
  label,
  value,
  onChange
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-2">
      <span>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24 rounded-md border border-slate-300 px-2 py-1 text-right"
      />
    </label>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${strong ? "font-bold text-slate-900" : "text-slate-700"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
