import { useEffect, useState } from "react";
import { formatMoney, todayISODate } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function OrderHistoryScreen() {
  const { orders, loadOrdersForDate } = usePosStore();
  const [fromDate, setFromDate] = useState(todayISODate());
  const [toDate, setToDate] = useState(todayISODate());

  useEffect(() => {
    const fromISO = `${fromDate}T00:00:00.000Z`;
    const toISO = `${toDate}T23:59:59.999Z`;
    void loadOrdersForDate(fromISO, toISO);
  }, [fromDate, loadOrdersForDate, toDate]);

  return (
    <section className="h-full rounded-2xl bg-white p-4 shadow-panel">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-lg font-bold">Order History</h2>
        <div className="flex gap-2">
          <DateField label="From" value={fromDate} onChange={setFromDate} />
          <DateField label="To" value={toDate} onChange={setToDate} />
        </div>
      </div>
      <div className="mt-4 overflow-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="pb-2">Order #</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Subtotal</th>
              <th className="pb-2">Discount</th>
              <th className="pb-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="py-2 font-semibold">{order.orderNumber}</td>
                <td className="py-2">{new Date(order.createdAt).toLocaleString()}</td>
                <td className="py-2">{formatMoney(order.subtotal)}</td>
                <td className="py-2 text-red-600">- {formatMoney(order.discount)}</td>
                <td className="py-2 font-semibold">{formatMoney(order.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (val: string) => void }) {
  return (
    <label className="text-xs">
      <span className="mb-1 block text-slate-500">{label}</span>
      <input type="date" value={value} onChange={(e) => onChange(e.target.value)} className="rounded-md border px-2 py-1" />
    </label>
  );
}
