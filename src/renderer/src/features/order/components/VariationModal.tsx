import type { ProductListItem } from "@shared/contracts";
import { useMemo, useState } from "react";
import { Button, Checkbox, Divider, Modal, Radio, Space, Tag, Typography } from "antd";
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
    <Modal
      open
      onCancel={onClose}
      footer={null}
      title={product.name}
      width={760}
      centered
    >
      <Space direction="vertical" size={14} style={{ width: "100%" }}>
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
              <Space direction="vertical" size={6} style={{ display: "flex", marginTop: 8 }}>
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
              Add to cart
            </Button>
          </Space>
        </div>
      </Space>
    </Modal>
  );
}
