import { useEffect } from "react";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function SalesReportScreen() {
  const report = usePosStore((s) => s.report);
  const loadReportForDate = usePosStore((s) => s.loadReportForDate);

  useEffect(() => {
    void loadReportForDate(new Date().toISOString());
  }, [loadReportForDate]);

  return (
    <section className="h-full rounded-2xl bg-white p-4 shadow-panel">
      <h2 className="text-lg font-bold">Sales Analytics</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Metric label="Total Sales (Today)" value={formatMoney(report?.daySales ?? 0)} />
        <Metric label="Total Sales (This Month)" value={formatMoney(report?.monthSales ?? 0)} />
      </div>
      <h3 className="mt-6 text-base font-semibold">Top Products</h3>
      <div className="mt-2 overflow-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="pb-2">Product</th>
              <th className="pb-2">Qty Sold</th>
              <th className="pb-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {report?.topProducts.map((row) => (
              <tr key={row.productName} className="border-t border-slate-100">
                <td className="py-2">{row.productName}</td>
                <td className="py-2">{row.qtySold}</td>
                <td className="py-2">{formatMoney(row.revenue)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-1 text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
