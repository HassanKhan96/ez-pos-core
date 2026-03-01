import type { CategoryListItem, ProductInput, ProductListItem } from "@shared/contracts";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

type DraftProduct = ProductInput & { id?: string };

const blankProduct: DraftProduct = {
  name: "",
  sku: "",
  categoryId: undefined,
  basePrice: 0,
  trackInventory: true,
  active: true,
  stockQty: 0,
  sizes: [],
  variationGroups: []
};

function fromProduct(product: ProductListItem): DraftProduct {
  return {
    id: product.id,
    name: product.name,
    sku: product.sku,
    categoryId: product.categoryId,
    basePrice: product.basePrice,
    trackInventory: product.trackInventory,
    active: product.active,
    stockQty: product.stockQty,
    sizes: product.sizes.map((s, i) => ({ id: s.id, name: s.name, priceDelta: s.priceDelta, sortOrder: i })),
    variationGroups: product.variationGroups.map((g, i) => ({
      id: g.id,
      name: g.name,
      minSelectable: g.minSelectable,
      maxSelectable: g.maxSelectable,
      required: g.required,
      sortOrder: i,
      choices: g.choices.map((c, j) => ({ id: c.id, name: c.name, priceDelta: c.priceDelta, sortOrder: j }))
    }))
  };
}

export function InventoryScreen() {
  const { products, categories, upsertProduct, deleteProduct, clearCart, showNotice, createCategory } = usePosStore();
  const [openItemModal, setOpenItemModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [draft, setDraft] = useState<DraftProduct>(blankProduct);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  async function onSaveItem() {
    if (!draft.categoryId) {
      showNotice("Please select a category");
      return;
    }
    const payload: DraftProduct = {
      ...draft,
      sizes: draft.sizes
        .filter((s) => s.name.trim().length > 0)
        .map((s, i) => ({ ...s, sortOrder: i })),
      variationGroups: draft.variationGroups
        .filter((g) => g.name.trim().length > 0)
        .map((g, i) => ({
          ...g,
          minSelectable: Math.max(0, g.minSelectable),
          maxSelectable: Math.max(1, g.maxSelectable),
          sortOrder: i,
          choices: g.choices
            .filter((c) => c.name.trim().length > 0)
            .map((c, j) => ({ ...c, sortOrder: j }))
        }))
    };

    await upsertProduct(payload);
    clearCart();
    showNotice(draft.id ? "Item updated and cart reset" : "Item added and cart reset");
    setOpenItemModal(false);
    setDraft(blankProduct);
  }

  async function onSaveCategory() {
    if (!categoryName.trim()) {
      return;
    }
    await createCategory({ name: categoryName, description: categoryDescription });
    showNotice("Category created successfully");
    setCategoryName("");
    setCategoryDescription("");
    setOpenCategoryModal(false);
  }

  return (
    <section className="h-full rounded-2xl bg-white p-4 shadow-panel">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold">Inventory</h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setOpenCategoryModal(true)}
            className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Add category
          </button>
          <button
            type="button"
            onClick={() => {
              setDraft(blankProduct);
              setOpenItemModal(true);
            }}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Add item
          </button>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category.id} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
            {category.name}
          </span>
        ))}
      </div>

      <div className="mt-4 space-y-2 overflow-auto">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p className="text-xs text-slate-500">
                Category: {product.categoryName ?? "Uncategorized"} | SKU: {product.sku || "NA"} | {formatMoney(product.basePrice)} | Qty:{" "}
                {product.stockQty}
              </p>
              <p className="text-xs text-slate-500">
                Sizes: {product.sizes.length} | Variation groups: {product.variationGroups.length}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="rounded-md bg-slate-200 px-3 py-1 text-sm"
                onClick={() => {
                  setDraft(fromProduct(product));
                  setOpenItemModal(true);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded-md bg-red-50 px-3 py-1 text-sm text-red-600"
                onClick={() => void deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {openItemModal && (
        <ItemModal
          categories={categories}
          draft={draft}
          setDraft={setDraft}
          onClose={() => setOpenItemModal(false)}
          onSave={() => void onSaveItem()}
        />
      )}

      {openCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-panel">
            <h3 className="text-lg font-bold">Add Category</h3>
            <div className="mt-3 space-y-3">
              <LabeledInput label="Name" value={categoryName} onChange={setCategoryName} />
              <LabeledInput label="Description" value={categoryDescription} onChange={setCategoryDescription} />
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setOpenCategoryModal(false)} className="rounded-lg bg-slate-200 px-4 py-2 text-sm">
                Cancel
              </button>
              <button type="button" onClick={() => void onSaveCategory()} className="rounded-lg bg-brand-600 px-4 py-2 text-sm text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ItemModal({
  categories,
  draft,
  setDraft,
  onClose,
  onSave
}: {
  categories: CategoryListItem[];
  draft: DraftProduct;
  setDraft: Dispatch<SetStateAction<DraftProduct>>;
  onClose: () => void;
  onSave: () => void;
}) {
  const isEdit = Boolean(draft.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4">
      <div className="flex h-[88vh] w-full max-w-5xl flex-col rounded-2xl bg-white shadow-panel">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <h3 className="text-lg font-bold">{isEdit ? "Edit Item" : "Add Item"}</h3>
          <button type="button" onClick={onClose} className="rounded-md bg-slate-200 px-3 py-1 text-sm">
            Close
          </button>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 overflow-auto p-5 xl:grid-cols-2">
          <div className="space-y-3">
            <LabeledInput label="Name" value={draft.name} onChange={(v) => setDraft((s) => ({ ...s, name: v }))} />
            <LabeledInput label="SKU" value={draft.sku ?? ""} onChange={(v) => setDraft((s) => ({ ...s, sku: v }))} />
            <label className="block text-sm">
              <span className="mb-1 block text-slate-600">Category</span>
              <select
                value={draft.categoryId ?? ""}
                onChange={(e) => setDraft((s) => ({ ...s, categoryId: e.target.value || undefined }))}
                className="w-full rounded-lg border border-slate-300 px-3 py-2"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <LabeledInput
              label="Base Price (Rs)"
              type="number"
              value={String(draft.basePrice)}
              onChange={(v) => setDraft((s) => ({ ...s, basePrice: Number(v) || 0 }))}
            />
            <LabeledInput
              label="Stock Qty"
              type="number"
              value={String(draft.stockQty)}
              onChange={(v) => setDraft((s) => ({ ...s, stockQty: Number(v) || 0 }))}
            />
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-2 text-sm">
              Active
              <input
                type="checkbox"
                checked={draft.active}
                onChange={(e) => setDraft((s) => ({ ...s, active: e.target.checked }))}
                className="h-4 w-4"
              />
            </label>
            <label className="flex items-center justify-between rounded-lg border border-slate-200 p-2 text-sm">
              Track inventory
              <input
                type="checkbox"
                checked={draft.trackInventory}
                onChange={(e) => setDraft((s) => ({ ...s, trackInventory: e.target.checked }))}
                className="h-4 w-4"
              />
            </label>
          </div>

          <div className="space-y-3">
            <section className="rounded-xl border border-slate-200 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold">Sizes</p>
                <button
                  type="button"
                  className="rounded-md bg-slate-200 px-2 py-1 text-xs"
                  onClick={() => setDraft((s) => ({ ...s, sizes: [...s.sizes, { name: "", priceDelta: 0, sortOrder: s.sizes.length }] }))}
                >
                  Add size
                </button>
              </div>
              <div className="space-y-2">
                {draft.sizes.map((size, i) => (
                  <div key={size.id ?? `s-${i}`} className="grid grid-cols-[1fr_7rem_auto] gap-2">
                    <input
                      placeholder="Name"
                      value={size.name}
                      onChange={(e) =>
                        setDraft((s) => ({ ...s, sizes: s.sizes.map((x, idx) => (idx === i ? { ...x, name: e.target.value } : x)) }))
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Delta"
                      value={size.priceDelta}
                      onChange={(e) =>
                        setDraft((s) => ({
                          ...s,
                          sizes: s.sizes.map((x, idx) => (idx === i ? { ...x, priceDelta: Number(e.target.value) || 0 } : x))
                        }))
                      }
                      className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-red-50 px-2 py-1 text-xs text-red-600"
                      onClick={() => setDraft((s) => ({ ...s, sizes: s.sizes.filter((_, idx) => idx !== i) }))}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-semibold">Variation Groups</p>
                <button
                  type="button"
                  className="rounded-md bg-slate-200 px-2 py-1 text-xs"
                  onClick={() =>
                    setDraft((s) => ({
                      ...s,
                      variationGroups: [
                        ...s.variationGroups,
                        { name: "", minSelectable: 0, maxSelectable: 1, required: false, sortOrder: s.variationGroups.length, choices: [] }
                      ]
                    }))
                  }
                >
                  Add group
                </button>
              </div>
              <div className="space-y-3">
                {draft.variationGroups.map((group, gi) => (
                  <div key={group.id ?? `g-${gi}`} className="rounded-lg bg-slate-50 p-2">
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        placeholder="Group name"
                        value={group.name}
                        onChange={(e) =>
                          setDraft((s) => ({
                            ...s,
                            variationGroups: s.variationGroups.map((x, idx) => (idx === gi ? { ...x, name: e.target.value } : x))
                          }))
                        }
                        className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                      <label className="flex items-center justify-between rounded-md border border-slate-300 px-2 py-1 text-xs">
                        Required
                        <input
                          type="checkbox"
                          checked={group.required}
                          onChange={(e) =>
                            setDraft((s) => ({
                              ...s,
                              variationGroups: s.variationGroups.map((x, idx) => (idx === gi ? { ...x, required: e.target.checked } : x))
                            }))
                          }
                        />
                      </label>
                      <input
                        type="number"
                        placeholder="Min"
                        value={group.minSelectable}
                        onChange={(e) =>
                          setDraft((s) => ({
                            ...s,
                            variationGroups: s.variationGroups.map((x, idx) =>
                              idx === gi ? { ...x, minSelectable: Number(e.target.value) || 0 } : x
                            )
                          }))
                        }
                        className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={group.maxSelectable}
                        onChange={(e) =>
                          setDraft((s) => ({
                            ...s,
                            variationGroups: s.variationGroups.map((x, idx) =>
                              idx === gi ? { ...x, maxSelectable: Number(e.target.value) || 1 } : x
                            )
                          }))
                        }
                        className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                      />
                    </div>

                    <div className="mt-2 space-y-2">
                      {group.choices.map((choice, ci) => (
                        <div key={choice.id ?? `c-${ci}`} className="grid grid-cols-[1fr_7rem_auto] gap-2">
                          <input
                            placeholder="Choice"
                            value={choice.name}
                            onChange={(e) =>
                              setDraft((s) => ({
                                ...s,
                                variationGroups: s.variationGroups.map((x, idx) =>
                                  idx === gi
                                    ? { ...x, choices: x.choices.map((c, j) => (j === ci ? { ...c, name: e.target.value } : c)) }
                                    : x
                                )
                              }))
                            }
                            className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                          />
                          <input
                            type="number"
                            placeholder="Delta"
                            value={choice.priceDelta}
                            onChange={(e) =>
                              setDraft((s) => ({
                                ...s,
                                variationGroups: s.variationGroups.map((x, idx) =>
                                  idx === gi
                                    ? {
                                        ...x,
                                        choices: x.choices.map((c, j) => (j === ci ? { ...c, priceDelta: Number(e.target.value) || 0 } : c))
                                      }
                                    : x
                                )
                              }))
                            }
                            className="rounded-md border border-slate-300 px-2 py-1 text-sm"
                          />
                          <button
                            type="button"
                            className="rounded-md bg-red-50 px-2 py-1 text-xs text-red-600"
                            onClick={() =>
                              setDraft((s) => ({
                                ...s,
                                variationGroups: s.variationGroups.map((x, idx) =>
                                  idx === gi ? { ...x, choices: x.choices.filter((_, j) => j !== ci) } : x
                                )
                              }))
                            }
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <button
                        type="button"
                        className="rounded-md bg-slate-200 px-2 py-1 text-xs"
                        onClick={() =>
                          setDraft((s) => ({
                            ...s,
                            variationGroups: s.variationGroups.map((x, idx) =>
                              idx === gi ? { ...x, choices: [...x.choices, { name: "", priceDelta: 0, sortOrder: x.choices.length }] } : x
                            )
                          }))
                        }
                      >
                        Add choice
                      </button>
                      <button
                        type="button"
                        className="rounded-md bg-red-50 px-2 py-1 text-xs text-red-600"
                        onClick={() =>
                          setDraft((s) => ({ ...s, variationGroups: s.variationGroups.filter((_, idx) => idx !== gi) }))
                        }
                      >
                        Remove group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 border-t border-slate-200 px-5 py-4">
          <button type="button" onClick={onClose} className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold">
            Cancel
          </button>
          <button type="button" onClick={onSave} className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
            {isEdit ? "Update Item" : "Add Item"}
          </button>
        </div>
      </div>
    </div>
  );
}

function LabeledInput({
  label,
  value,
  onChange,
  type = "text"
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "number";
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-slate-600">{label}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2" />
    </label>
  );
}
