import { useEffect, useMemo, useState } from "react";
import type { ProductListItem } from "@shared/contracts";
import {
  DownOutlined,
  DeleteOutlined,
  EditOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  SnippetsOutlined
} from "@ant-design/icons";
import {
  Button,
  Divider,
  Drawer,
  Empty,
  InputNumber,
  Modal,
  Space,
  Typography
} from "antd";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney } from "@/lib/format";
import { computeUnitPriceFromSelection } from "@/lib/product-pricing";
import { VariationModal } from "@/features/order/components/VariationModal";
import { usePosStore } from "@/state/use-pos-store";

export function CartScreen() {
  const cart = usePosStore((state) => state.cart);
  const products = usePosStore((state) => state.products);
  const charges = usePosStore((state) => state.charges);
  const setCharge = usePosStore((state) => state.setCharge);
  const removeFromCart = usePosStore((state) => state.removeFromCart);
  const changeQty = usePosStore((state) => state.changeQty);
  const updateCartLineSelection = usePosStore((state) => state.updateCartLineSelection);
  const placeOrder = usePosStore((state) => state.placeOrder);

  const [openCharges, setOpenCharges] = useState(false);
  const [expandedLineKey, setExpandedLineKey] = useState<string | null>(null);
  const [editingSelectionKey, setEditingSelectionKey] = useState<string | null>(null);
  const [editingLineKey, setEditingLineKey] = useState<string | null>(null);
  const [editingQty, setEditingQty] = useState<number>(1);

  useEffect(() => {
    if (expandedLineKey && !cart.some((line) => line.key === expandedLineKey)) {
      setExpandedLineKey(null);
    }
  }, [cart, expandedLineKey]);

  const summary = useMemo(() => {
    const subtotal = cart.reduce((sum, line) => {
      const product = products.find((item) => item.id === line.productId);
      if (!product) return sum;
      const unit = computeUnitPriceFromSelection(product, {
        sizeId: line.sizeId,
        selectedVariations: line.selectedVariations
      });
      return sum + unit * line.quantity;
    }, 0);

    const discount = Math.min(charges.discountAmount, subtotal);
    const taxableBase = Math.max(0, subtotal - discount);
    const fees = charges.bagFee + charges.serviceFee;
    const tax = Math.round((taxableBase * charges.taxRatePercent) / 100);
    const total = taxableBase + fees + tax;

    return { subtotal, discount, fees, tax, total };
  }, [cart, charges, products]);

  return (
    <ScreenPanel
      title="Cart"
      subtitle="Compact checkout controls"
      className="screen-panel cart-panel"
      extra={
        <Button icon={<SnippetsOutlined />} onClick={() => setOpenCharges(true)}>
          Charges
        </Button>
      }
    >
      <div className="cart-root">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No items in cart" />
          </div>
        ) : (
          <div className="cart-list">
            {cart.map((line) => (
              <div key={line.key} className="cart-line-item">
                <button
                  type="button"
                  className="cart-line-header"
                  onClick={() => setExpandedLineKey((current) => (current === line.key ? null : line.key))}
                >
                  <Typography.Text strong ellipsis>
                    {line.quantity} x {line.productName}
                  </Typography.Text>
                  <Space size={8} align="center">
                    <Typography.Text strong>{formatMoney(resolveLineTotal(line, products))}</Typography.Text>
                    <DownOutlined className={expandedLineKey === line.key ? "cart-chevron expanded" : "cart-chevron"} />
                  </Space>
                </button>

                {expandedLineKey === line.key && (
                  <div className="cart-line-actions">
                    <Space.Compact>
                      <Button icon={<MinusOutlined />} onClick={() => changeQty(line.key, -1)} />
                      <Button disabled style={{ minWidth: 40, color: "#0f172a" }}>
                        {line.quantity}
                      </Button>
                      <Button icon={<PlusOutlined />} onClick={() => changeQty(line.key, 1)} />
                    </Space.Compact>
                    <Space size={6}>
                      <Button
                        aria-label="Edit item"
                        icon={<EditOutlined />}
                        onClick={() => {
                          const product = products.find((item) => item.id === line.productId);
                          const hasConfig = Boolean(product && (product.sizes.length > 0 || product.variationGroups.length > 0));
                          if (hasConfig) {
                            setEditingSelectionKey(line.key);
                            return;
                          }
                          setEditingLineKey(line.key);
                          setEditingQty(line.quantity);
                        }}
                      />
                      <Button
                        aria-label="Delete item"
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => removeFromCart(line.key)}
                      />
                    </Space>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <Divider style={{ margin: "10px 0" }} />

      <Space orientation="vertical" size={7} style={{ width: "100%" }}>
        <Row label="Subtotal" value={formatMoney(summary.subtotal)} />
        <Row label="Discount" value={`- ${formatMoney(summary.discount)}`} />
        <Row label="Fees" value={formatMoney(summary.fees)} />
        <Row label="Tax" value={formatMoney(summary.tax)} />
        <Typography.Title level={5} style={{ margin: "4px 0 0", display: "flex", justifyContent: "space-between" }}>
          <span>Total</span>
          <span>{formatMoney(summary.total)}</span>
        </Typography.Title>

        <Button
          type="primary"
          size="large"
          icon={<ShoppingCartOutlined />}
          className="place-order-btn"
          disabled={cart.length === 0}
          onClick={() => void placeOrder()}
          block
        >
          Place order
        </Button>
      </Space>

      <Drawer
        title="Charges and Taxes"
        placement="right"
        size="default"
        open={openCharges}
        onClose={() => setOpenCharges(false)}
      >
        <Space orientation="vertical" size={14} style={{ width: "100%" }}>
          <ChargeInput label="Bag fee" value={charges.bagFee} onChange={(value) => setCharge("bagFee", value)} />
          <ChargeInput label="Service fee" value={charges.serviceFee} onChange={(value) => setCharge("serviceFee", value)} />
          <ChargeInput label="Tax %" value={charges.taxRatePercent} onChange={(value) => setCharge("taxRatePercent", value)} />
          <ChargeInput label="Discount" value={charges.discountAmount} onChange={(value) => setCharge("discountAmount", value)} />
          <Button type="primary" block onClick={() => setOpenCharges(false)}>
            Apply
          </Button>
        </Space>
      </Drawer>

      <Modal
        open={Boolean(editingLineKey)}
        title="Edit quantity"
        onCancel={() => setEditingLineKey(null)}
        onOk={() => {
          if (!editingLineKey) {
            return;
          }
          const line = cart.find((item) => item.key === editingLineKey);
          if (!line) {
            setEditingLineKey(null);
            return;
          }
          const delta = Math.max(1, Math.round(editingQty)) - line.quantity;
          if (delta !== 0) {
            changeQty(line.key, delta);
          }
          setEditingLineKey(null);
        }}
        okText="Apply"
      >
        <InputNumber<number>
          min={1}
          value={editingQty}
          onChange={(value) => setEditingQty(value ?? 1)}
          style={{ width: "100%" }}
        />
      </Modal>

      {editingSelectionKey && (() => {
        const line = cart.find((item) => item.key === editingSelectionKey);
        const product = products.find((item) => item.id === line?.productId);
        if (!line || !product) {
          return null;
        }
        return (
          <VariationModal
            product={product}
            confirmLabel="Apply changes"
            initialSelection={{
              sizeId: line.sizeId,
              selectedVariations: line.selectedVariations.map((variation) => ({
                groupId: variation.groupId,
                choiceIds: variation.choiceIds
              }))
            }}
            onClose={() => setEditingSelectionKey(null)}
            onConfirm={({ sizeId, sizeName, selectedVariations }) => {
              updateCartLineSelection(line.key, {
                sizeId,
                sizeName,
                selectedVariations
              });
              setEditingSelectionKey(null);
            }}
          />
        );
      })()}

    </ScreenPanel>
  );
}

function resolveLineTotal(
  line: {
    productId: string;
    quantity: number;
    sizeId?: string;
    selectedVariations: Array<{ groupId: string; choiceIds: string[] }>;
  },
  products: ProductListItem[]
): number {
  const product = products.find((item) => item.id === line.productId);
  if (!product) return 0;

  return computeUnitPriceFromSelection(product, {
    sizeId: line.sizeId,
    selectedVariations: line.selectedVariations
  }) * line.quantity;
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
    <Space orientation="vertical" size={4} style={{ width: "100%" }}>
      <Typography.Text type="secondary">{label}</Typography.Text>
      <InputNumber<number>
        value={value}
        min={0}
        style={{ width: "100%" }}
        onChange={(nextValue) => onChange(nextValue ?? 0)}
      />
    </Space>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Typography.Text type="secondary">{label}</Typography.Text>
      <Typography.Text strong>{value}</Typography.Text>
    </div>
  );
}
