import type { ProductListItem } from "@shared/contracts";
import { useMemo, useState } from "react";
import { formatMoney } from "@/lib/format";

type Props = {
  product: ProductListItem;
  onClose: () => void;
  onConfirm: (payload: {
    sizeId?: string;
    sizeName?: string;
    selectedVariations: Array<{ groupId: string; choiceIds: string[]; labels: string[] }>;
  }) => void;
};

export function VariationModal({ product, onClose, onConfirm }: Props) {
  const [sizeId, setSizeId] = useState<string | undefined>(product.sizes[0]?.id);
  const [selected, setSelected] = useState<Record<string, string[]>>({});

  const totalPreview = useMemo(() => {
    let unit = product.basePrice;
    if (sizeId) {
      const size = product.sizes.find((s) => s.id === sizeId);
      unit += size?.priceDelta ?? 0;
    }
    for (const group of product.variationGroups) {
      for (const choiceId of selected[group.id ?? ""] ?? []) {
        unit += group.choices.find((c) => c.id === choiceId)?.priceDelta ?? 0;
      }
    }
    return unit;
  }, [product, selected, sizeId]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 p-6">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-panel">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">{product.name}</h3>
          <button type="button" onClick={onClose} className="rounded-md bg-slate-200 px-3 py-1 text-sm">
            Close
          </button>
        </div>

        {product.sizes.length > 0 && (
          <div className="mt-4">
            <p className="mb-2 text-sm font-semibold text-slate-600">Select size (one)</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSizeId(size.id)}
                  className={`rounded-lg px-3 py-2 text-sm ${
                    sizeId === size.id ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                  type="button"
                >
                  {size.name} {size.priceDelta ? `(${formatMoney(size.priceDelta)})` : ""}
                </button>
              ))}
            </div>
          </div>
        )}

        {product.variationGroups.map((group) => {
          const groupId = group.id ?? "";
          const selectedSet = selected[groupId] ?? [];
          return (
            <div key={groupId} className="mt-4">
              <p className="mb-2 text-sm font-semibold text-slate-600">
                {group.name} (max {group.maxSelectable})
              </p>
              <div className="flex flex-wrap gap-2">
                {group.choices.map((choice) => {
                  const isSelected = selectedSet.includes(choice.id ?? "");
                  return (
                    <button
                      key={choice.id}
                      type="button"
                      onClick={() => {
                        setSelected((prev) => {
                          const values = prev[groupId] ?? [];
                          const choiceId = choice.id ?? "";
                          if (values.includes(choiceId)) {
                            return { ...prev, [groupId]: values.filter((v) => v !== choiceId) };
                          }
                          if (values.length >= group.maxSelectable) {
                            return prev;
                          }
                          return { ...prev, [groupId]: [...values, choiceId] };
                        });
                      }}
                      className={`rounded-lg px-3 py-2 text-sm ${
                        isSelected ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {choice.name} {choice.priceDelta ? `(${formatMoney(choice.priceDelta)})` : ""}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
          <div className="text-sm text-slate-600">Unit preview: {formatMoney(totalPreview)}</div>
          <button
            type="button"
            className="rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700"
            onClick={() => {
              const selections = product.variationGroups.map((group) => {
                const ids = selected[group.id ?? ""] ?? [];
                const labels = ids
                  .map((id) => group.choices.find((c) => c.id === id)?.name)
                  .filter((v): v is string => Boolean(v));
                return { groupId: group.id ?? "", choiceIds: ids, labels };
              });
              onConfirm({
                sizeId,
                sizeName: product.sizes.find((s) => s.id === sizeId)?.name,
                selectedVariations: selections
              });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
