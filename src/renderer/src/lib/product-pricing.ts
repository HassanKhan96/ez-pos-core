import type { ProductListItem } from "@shared/contracts";

type LineSelection = {
  sizeId?: string;
  selectedVariations: Array<{ groupId: string; choiceIds: string[] }>;
};

function byPriceThenSortOrder(a: { priceDelta: number; sortOrder: number }, b: { priceDelta: number; sortOrder: number }) {
  return a.priceDelta - b.priceDelta || a.sortOrder - b.sortOrder;
}

function leastSizeDelta(product: ProductListItem): number {
  if (product.sizes.length === 0) {
    return 0;
  }
  return [...product.sizes].sort(byPriceThenSortOrder)[0].priceDelta;
}

function leastChoiceDeltas(product: ProductListItem): number {
  let total = 0;
  for (const group of product.variationGroups) {
    const required = Math.max(0, group.minSelectable);
    if (required === 0) continue;
    const picks = [...group.choices].sort(byPriceThenSortOrder).slice(0, required);
    total += picks.reduce((sum, choice) => sum + choice.priceDelta, 0);
  }
  return total;
}

export function computeMinimumConfiguredUnitPrice(product: ProductListItem): number {
  return product.basePrice + leastSizeDelta(product) + leastChoiceDeltas(product);
}

export function computeDisplayBasePrice(product: ProductListItem): number {
  if (product.basePrice > 0) {
    return product.basePrice;
  }
  if (product.sizes.length > 0 || product.variationGroups.length > 0) {
    return computeMinimumConfiguredUnitPrice(product);
  }
  return product.basePrice;
}

export function pickLeastSizeId(product: ProductListItem): string | undefined {
  if (product.sizes.length === 0) return undefined;
  return [...product.sizes].sort(byPriceThenSortOrder)[0].id;
}

export function pickLeastRequiredChoiceIds(
  group: ProductListItem["variationGroups"][number]
): string[] {
  const required = Math.max(0, group.minSelectable);
  if (required === 0) return [];
  return [...group.choices]
    .sort(byPriceThenSortOrder)
    .slice(0, required)
    .map((choice) => choice.id)
    .filter((id): id is string => Boolean(id));
}

export function computeUnitPriceFromSelection(product: ProductListItem, selection: LineSelection): number {
  let unit = product.basePrice;

  const selectedByGroup = new Map(selection.selectedVariations.map((v) => [v.groupId, v.choiceIds]));

  if (selection.sizeId) {
    unit += product.sizes.find((size) => size.id === selection.sizeId)?.priceDelta ?? 0;
  } else if (product.basePrice === 0) {
    unit += leastSizeDelta(product);
  }

  for (const group of product.variationGroups) {
    const selectedIds = selectedByGroup.get(group.id ?? "") ?? [];
    if (selectedIds.length > 0) {
      for (const choiceId of selectedIds) {
        unit += group.choices.find((choice) => choice.id === choiceId)?.priceDelta ?? 0;
      }
      continue;
    }
    if (product.basePrice === 0 && group.minSelectable > 0) {
      const fallback = [...group.choices].sort(byPriceThenSortOrder).slice(0, group.minSelectable);
      unit += fallback.reduce((sum, choice) => sum + choice.priceDelta, 0);
    }
  }

  return unit;
}
