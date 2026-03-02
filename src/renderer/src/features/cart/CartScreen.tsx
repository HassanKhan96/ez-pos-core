import { useEffect, useMemo, useState } from "react";
import {
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
  List,
  Modal,
  Popover,
  Space,
  Typography
} from "antd";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

export function CartScreen() {
  const cart = usePosStore((state) => state.cart);
  const products = usePosStore((state) => state.products);
  const charges = usePosStore((state) => state.charges);
  const setCharge = usePosStore((state) => state.setCharge);
  const removeFromCart = usePosStore((state) => state.removeFromCart);
  const changeQty = usePosStore((state) => state.changeQty);
  const placeOrder = usePosStore((state) => state.placeOrder);

  const [openCharges, setOpenCharges] = useState(false);
  const [lineActionKey, setLineActionKey] = useState<string | null>(null);
  const [editingLineKey, setEditingLineKey] = useState<string | null>(null);
  const [editingQty, setEditingQty] = useState<number>(1);
  const [noteLineKey, setNoteLineKey] = useState<string | null>(null);
  const [noteInput, setNoteInput] = useState("");
  const [notesByLine, setNotesByLine] = useState<Record<string, string>>({});

  useEffect(() => {
    setNotesByLine((current) => {
      const validKeys = new Set(cart.map((line) => line.key));
      return Object.fromEntries(Object.entries(current).filter(([key]) => validKeys.has(key)));
    });
  }, [cart]);

  const summary = useMemo(() => {
    const subtotal = cart.reduce((sum, line) => {
      const product = products.find((item) => item.id === line.productId);
      if (!product) return sum;
      let unit = product.basePrice;
      if (line.sizeId) {
        unit += product.sizes.find((size) => size.id === line.sizeId)?.priceDelta ?? 0;
      }
      for (const selected of line.selectedVariations) {
        const group = product.variationGroups.find((variationGroup) => variationGroup.id === selected.groupId);
        for (const choiceId of selected.choiceIds) {
          unit += group?.choices.find((choice) => choice.id === choiceId)?.priceDelta ?? 0;
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

  return (
    <ScreenPanel
      title="Cart"
      subtitle="Compact checkout controls"
      className="screen-panel cart-panel"
    >
      <div className="cart-toolbar">
        <Button icon={<SnippetsOutlined />} onClick={() => setOpenCharges(true)}>
          Charges
        </Button>
      </div>

      <div className="cart-root">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No items in cart" />
          </div>
        ) : (
          <List
            dataSource={cart}
            split={false}
            renderItem={(line) => (
              <List.Item className="cart-line-item">
                <div style={{ width: "100%" }}>
                  <div className="cart-line-top">
                    <Space direction="vertical" size={1} style={{ minWidth: 0 }}>
                      <Typography.Text strong ellipsis>
                        {line.productName}
                      </Typography.Text>
                      {(line.sizeName || line.selectedVariations.some((variation) => variation.labels.length > 0)) && (
                        <Typography.Text type="secondary" style={{ fontSize: 12 }} ellipsis>
                          {[line.sizeName, ...line.selectedVariations.flatMap((variation) => variation.labels)]
                            .filter(Boolean)
                            .join(", ")}
                        </Typography.Text>
                      )}
                      {notesByLine[line.key] && (
                        <Typography.Text type="secondary" style={{ fontSize: 12 }} ellipsis>
                          Note: {notesByLine[line.key]}
                        </Typography.Text>
                      )}
                    </Space>

                    <Popover
                      trigger="click"
                      open={lineActionKey === line.key}
                      onOpenChange={(open) => setLineActionKey(open ? line.key : null)}
                      content={
                        <Space direction="vertical" size={4}>
                          <Button
                            type="text"
                            icon={<EditOutlined />}
                            onClick={() => {
                              setLineActionKey(null);
                              setEditingLineKey(line.key);
                              setEditingQty(line.quantity);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            type="text"
                            onClick={() => {
                              setLineActionKey(null);
                              setNoteLineKey(line.key);
                              setNoteInput(notesByLine[line.key] ?? "");
                            }}
                          >
                            Add note
                          </Button>
                          <Button
                            danger
                            type="text"
                            icon={<DeleteOutlined />}
                            onClick={() => {
                              setLineActionKey(null);
                              removeFromCart(line.key);
                            }}
                          >
                            Remove
                          </Button>
                        </Space>
                      }
                    >
                      <Button size="small" type="text" danger icon={<DeleteOutlined />} />
                    </Popover>
                  </div>

                  <div className="cart-line-actions">
                    <Space.Compact>
                      <Button icon={<MinusOutlined />} onClick={() => changeQty(line.key, -1)} />
                      <Button disabled style={{ minWidth: 40, color: "#0f172a" }}>
                        {line.quantity}
                      </Button>
                      <Button icon={<PlusOutlined />} onClick={() => changeQty(line.key, 1)} />
                    </Space.Compact>
                  </div>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>

      <Divider style={{ margin: "10px 0" }} />

      <Space direction="vertical" size={7} style={{ width: "100%" }}>
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
        width={360}
        open={openCharges}
        onClose={() => setOpenCharges(false)}
      >
        <Space direction="vertical" size={14} style={{ width: "100%" }}>
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

      <Modal
        open={Boolean(noteLineKey)}
        title="Add note"
        onCancel={() => setNoteLineKey(null)}
        onOk={() => {
          if (!noteLineKey) {
            return;
          }
          const next = noteInput.trim();
          setNotesByLine((current) => {
            if (!next) {
              const { [noteLineKey]: _omit, ...rest } = current;
              return rest;
            }
            return { ...current, [noteLineKey]: next };
          });
          setNoteLineKey(null);
          setNoteInput("");
        }}
        okText="Save"
      >
        <textarea
          value={noteInput}
          onChange={(event) => setNoteInput(event.target.value)}
          rows={3}
          className="cart-note-input"
          placeholder="Add prep or instruction note"
        />
      </Modal>
    </ScreenPanel>
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
    <Space direction="vertical" size={4} style={{ width: "100%" }}>
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
