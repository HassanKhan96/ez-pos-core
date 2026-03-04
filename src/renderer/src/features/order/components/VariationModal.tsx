import type { ProductListItem } from "@shared/contracts";
import { useMemo, useState } from "react";
import { Button, Checkbox, Divider, Modal, Radio, Space, Tag, Typography, message } from "antd";
import { formatMoney } from "@/lib/format";
import {
  computeUnitPriceFromSelection,
  pickLeastRequiredChoiceIds,
  pickLeastSizeId
} from "@/lib/product-pricing";

type Props = {
  product: ProductListItem;
  onClose: () => void;
  confirmLabel?: string;
  initialSelection?: {
    sizeId?: string;
    selectedVariations?: Array<{ groupId: string; choiceIds: string[] }>;
  };
  onConfirm: (payload: {
    sizeId?: string;
    sizeName?: string;
    selectedVariations: Array<{ groupId: string; choiceIds: string[]; labels: string[] }>;
  }) => void;
};

function buildInitialSelected(
  product: ProductListItem,
  initialSelection?: Props["initialSelection"]
): Record<string, string[]> {
  if (initialSelection?.selectedVariations) {
    return Object.fromEntries(
      initialSelection.selectedVariations.map((variation) => [variation.groupId, variation.choiceIds])
    );
  }
  if (product.basePrice !== 0) {
    return {};
  }
  return Object.fromEntries(
    product.variationGroups.map((group) => [group.id ?? "", pickLeastRequiredChoiceIds(group)])
  );
}

export function VariationModal({ product, onClose, onConfirm, confirmLabel = "Add to cart", initialSelection }: Props) {
  const [sizeId, setSizeId] = useState<string | undefined>(() => {
    if (initialSelection?.sizeId) return initialSelection.sizeId;
    if (product.basePrice === 0) return pickLeastSizeId(product);
    return product.sizes[0]?.id;
  });
  const [selected, setSelected] = useState<Record<string, string[]>>(() => buildInitialSelected(product, initialSelection));

  const totalPreview = useMemo(() => {
    const selectedVariations = product.variationGroups.map((group) => ({
      groupId: group.id ?? "",
      choiceIds: selected[group.id ?? ""] ?? []
    }));
    return computeUnitPriceFromSelection(product, { sizeId, selectedVariations });
  }, [product, selected, sizeId]);

  return (
    <Modal
      open
      onCancel={onClose}
      footer={null}
      title={product.name}
      width={760}
      centered
    >
      <Space orientation="vertical" size={14} style={{ width: "100%" }}>
        {product.sizes.length > 0 && (
          <div>
            <Typography.Text strong>Select size</Typography.Text>
            <Radio.Group
              style={{ display: "block", marginTop: 8 }}
              value={sizeId}
              onChange={(event) => setSizeId(event.target.value)}
            >
              <Space wrap>
                {product.sizes.map((size) => (
                  <Radio.Button key={size.id} value={size.id}>
                    {size.name} {size.priceDelta ? `(${formatMoney(size.priceDelta)})` : ""}
                  </Radio.Button>
                ))}
              </Space>
            </Radio.Group>
          </div>
        )}

        {product.variationGroups.map((group) => {
          const groupId = group.id ?? "";
          const selectedSet = selected[groupId] ?? [];
          return (
            <div key={groupId}>
              <Space align="center" size={8}>
                <Typography.Text strong>{group.name}</Typography.Text>
                <Tag color="default">max {group.maxSelectable}</Tag>
              </Space>
              <Space orientation="vertical" size={6} style={{ display: "flex", marginTop: 8 }}>
                {group.choices.map((choice) => {
                  const isSelected = selectedSet.includes(choice.id ?? "");
                  return (
                    <Checkbox
                      key={choice.id}
                      checked={isSelected}
                      onChange={() => {
                        setSelected((prev) => {
                          const values = prev[groupId] ?? [];
                          const choiceId = choice.id ?? "";
                          if (values.includes(choiceId)) {
                            return { ...prev, [groupId]: values.filter((value) => value !== choiceId) };
                          }
                          if (values.length >= group.maxSelectable) {
                            return prev;
                          }
                          return { ...prev, [groupId]: [...values, choiceId] };
                        });
                      }}
                    >
                      {choice.name} {choice.priceDelta ? `(${formatMoney(choice.priceDelta)})` : ""}
                    </Checkbox>
                  );
                })}
              </Space>
            </div>
          );
        })}

        <Divider style={{ margin: "8px 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography.Text>Unit preview: {formatMoney(totalPreview)}</Typography.Text>
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              type="primary"
              onClick={() => {
                const isInvalidGroup = product.variationGroups.find((group) => {
                  const selectedCount = (selected[group.id ?? ""] ?? []).length;
                  return selectedCount < group.minSelectable || selectedCount > group.maxSelectable;
                });
                if (isInvalidGroup) {
                  void message.error(`Please update selection for ${isInvalidGroup.name}`);
                  return;
                }
                const selections = product.variationGroups.map((group) => {
                  const ids = selected[group.id ?? ""] ?? [];
                  const labels = ids
                    .map((id) => group.choices.find((choice) => choice.id === id)?.name)
                    .filter((value): value is string => Boolean(value));
                  return { groupId: group.id ?? "", choiceIds: ids, labels };
                });
                onConfirm({
                  sizeId,
                  sizeName: product.sizes.find((size) => size.id === sizeId)?.name,
                  selectedVariations: selections
                });
              }}
            >
              {confirmLabel}
            </Button>
          </Space>
        </div>
      </Space>
    </Modal>
  );
}
