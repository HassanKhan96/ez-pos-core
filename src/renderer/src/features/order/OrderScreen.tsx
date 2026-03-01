import type { ProductListItem } from "@shared/contracts";
import { useState } from "react";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";
import { VariationModal } from "./components/VariationModal";

export function OrderScreen() {
  const products = usePosStore((s) => s.products);
  const categories = usePosStore((s) => s.categories);
  const addToCart = usePosStore((s) => s.addToCart);
  const [selected, setSelected] = useState<ProductListItem | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((p) => {
    if (!p.active) return false;
    const categoryMatch = activeCategoryId === "all" ? true : p.categoryId === activeCategoryId;
    const normalizedQuery = query.trim().toLowerCase();
    const searchMatch =
      normalizedQuery.length === 0 ||
      p.name.toLowerCase().includes(normalizedQuery) ||
      (p.sku ?? "").toLowerCase().includes(normalizedQuery) ||
      (p.categoryName ?? "").toLowerCase().includes(normalizedQuery);
    return categoryMatch && searchMatch;
  });

  return (
    <section className="flex h-full min-h-0 flex-col rounded-2xl bg-white p-4 shadow-panel">
      <h2 className="text-lg font-bold">Order Screen</h2>
      <p className="text-sm text-slate-500">Tap item to add quickly, or select size/variations when needed.</p>
      <input
        type="text"
        placeholder="Search by name, SKU, category..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setActiveCategoryId("all")}
          className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
            activeCategoryId === "all" ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategoryId(category.id)}
            className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${
              activeCategoryId === category.id ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-4 grid min-h-0 flex-1 auto-rows-min content-start grid-cols-2 gap-2 overflow-auto lg:grid-cols-3 2xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="relative">
            <button
              type="button"
              disabled={product.trackInventory && product.stockQty <= 0}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 p-2 text-left hover:border-brand-500 hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => {
                if (product.sizes.length > 0 || product.variationGroups.length > 0) {
                  setSelected(product);
                  return;
                }
                addToCart({
                  productId: product.id,
                  productName: product.name,
                  selectedVariations: []
                });
              }}
            >
              <p className="truncate text-sm font-semibold">{product.name}</p>
              <p className="mt-1 text-xs text-slate-700">{formatMoney(product.basePrice)}</p>
            </button>
            {product.trackInventory && product.stockQty <= 0 && (
              <div className="pointer-events-none absolute inset-0 grid place-items-center rounded-lg bg-slate-900/20">
                <span className="rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  Out of stock
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {selected && (
        <VariationModal
          product={selected}
          onClose={() => setSelected(null)}
          onConfirm={({ sizeId, sizeName, selectedVariations }) => {
            addToCart({
              productId: selected.id,
              productName: selected.name,
              sizeId,
              sizeName,
              selectedVariations
            });
            setSelected(null);
          }}
        />
      )}
    </section>
  );
}
