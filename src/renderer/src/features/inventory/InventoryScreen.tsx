import type { CategoryListItem, ProductInput, ProductListItem } from "@shared/contracts";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { useMemo, useState } from "react";
import {
  AppstoreAddOutlined,
  DeleteOutlined,
  EditOutlined,
  FolderAddOutlined,
  PlusOutlined
} from "@ant-design/icons";
import {
  Button,
  Card,
  Divider,
  Empty,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Switch,
  Table,
  Tag,
  Typography
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney } from "@/lib/format";
import { usePosStore } from "@/state/use-pos-store";

type DraftProduct = ProductInput & { id?: string };

type SizeDraft = DraftProduct["sizes"][number];
type GroupDraft = DraftProduct["variationGroups"][number];
type ChoiceDraft = GroupDraft["choices"][number];

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
    sizes: product.sizes.map((size, index) => ({
      id: size.id,
      name: size.name,
      priceDelta: size.priceDelta,
      sortOrder: index
    })),
    variationGroups: product.variationGroups.map((group, groupIndex) => ({
      id: group.id,
      name: group.name,
      minSelectable: group.minSelectable,
      maxSelectable: group.maxSelectable,
      required: group.required,
      sortOrder: groupIndex,
      choices: group.choices.map((choice, choiceIndex) => ({
        id: choice.id,
        name: choice.name,
        priceDelta: choice.priceDelta,
        sortOrder: choiceIndex
      }))
    }))
  };
}

export function InventoryScreen() {
  const products = usePosStore((state) => state.products);
  const categories = usePosStore((state) => state.categories);
  const upsertProduct = usePosStore((state) => state.upsertProduct);
  const deleteProduct = usePosStore((state) => state.deleteProduct);
  const clearCart = usePosStore((state) => state.clearCart);
  const showNotice = usePosStore((state) => state.showNotice);
  const createCategory = usePosStore((state) => state.createCategory);

  const [openItemModal, setOpenItemModal] = useState(false);
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [draft, setDraft] = useState<DraftProduct>(blankProduct);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");

  const columns = useMemo<ColumnsType<ProductListItem>>(
    () => [
      {
        title: "Product",
        dataIndex: "name",
        render: (_, row) => (
          <Space direction="vertical" size={0}>
            <Typography.Text strong>{row.name}</Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              SKU: {row.sku || "NA"}
            </Typography.Text>
          </Space>
        )
      },
      {
        title: "Category",
        dataIndex: "categoryName",
        render: (value: string | undefined) => <Tag>{value ?? "Uncategorized"}</Tag>
      },
      {
        title: "Price",
        dataIndex: "basePrice",
        align: "right",
        render: (value: number) => formatMoney(value)
      },
      {
        title: "Stock",
        dataIndex: "stockQty",
        align: "right",
        render: (value: number, row) => (
          <Tag color={row.trackInventory ? (value > 0 ? "green" : "red") : "default"}>
            {row.trackInventory ? value : "Not tracked"}
          </Tag>
        )
      },
      {
        title: "Options",
        key: "options",
        align: "center",
        render: (_, row) => (
          <Space size={6}>
            <Tag>{row.sizes.length} sizes</Tag>
            <Tag>{row.variationGroups.length} groups</Tag>
          </Space>
        )
      },
      {
        title: "Status",
        dataIndex: "active",
        align: "center",
        render: (value: boolean) => <Tag color={value ? "success" : "default"}>{value ? "Active" : "Inactive"}</Tag>
      },
      {
        title: "Actions",
        key: "actions",
        align: "right",
        render: (_, row) => (
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setDraft(fromProduct(row));
                setOpenItemModal(true);
              }}
            >
              Edit
            </Button>
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => void deleteProduct(row.id)}
            >
              Delete
            </Button>
          </Space>
        )
      }
    ],
    [deleteProduct]
  );

  async function onSaveItem() {
    if (!draft.categoryId) {
      showNotice("Please select a category");
      return;
    }

    const payload: DraftProduct = {
      ...draft,
      sizes: draft.sizes
        .filter((size) => size.name.trim().length > 0)
        .map((size, index) => ({ ...size, sortOrder: index })),
      variationGroups: draft.variationGroups
        .filter((group) => group.name.trim().length > 0)
        .map((group, groupIndex) => ({
          ...group,
          minSelectable: Math.max(0, group.minSelectable),
          maxSelectable: Math.max(1, group.maxSelectable),
          sortOrder: groupIndex,
          choices: group.choices
            .filter((choice) => choice.name.trim().length > 0)
            .map((choice, choiceIndex) => ({ ...choice, sortOrder: choiceIndex }))
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
    <ScreenPanel
      title="Inventory"
      subtitle="Manage products, categories, variants, and stock settings"
      className="screen-panel"
      extra={
        <Space>
          <Button icon={<FolderAddOutlined />} onClick={() => setOpenCategoryModal(true)}>
            Add Category
          </Button>
          <Button
            type="primary"
            icon={<AppstoreAddOutlined />}
            onClick={() => {
              setDraft(blankProduct);
              setOpenItemModal(true);
            }}
          >
            Add Item
          </Button>
        </Space>
      }
    >
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
        <Space wrap size={8}>
          {categories.length === 0 && <Tag>No categories</Tag>}
          {categories.map((category) => (
            <Tag key={category.id} color="cyan">
              {category.name}
            </Tag>
          ))}
        </Space>

        {products.length === 0 ? (
          <Empty description="No products yet" />
        ) : (
          <Table
            rowKey="id"
            dataSource={products}
            columns={columns}
            pagination={{ pageSize: 8, showSizeChanger: false }}
            size="middle"
          />
        )}
      </Space>

      <ItemModal
        open={openItemModal}
        categories={categories}
        draft={draft}
        setDraft={setDraft}
        onClose={() => setOpenItemModal(false)}
        onSave={() => void onSaveItem()}
      />

      <Modal
        open={openCategoryModal}
        title="Add Category"
        onCancel={() => setOpenCategoryModal(false)}
        onOk={() => void onSaveCategory()}
        okText="Save"
        destroyOnClose
      >
        <Space direction="vertical" size={12} style={{ width: "100%", marginTop: 8 }}>
          <Input placeholder="Category name" value={categoryName} onChange={(event) => setCategoryName(event.target.value)} />
          <Input.TextArea
            rows={3}
            placeholder="Description (optional)"
            value={categoryDescription}
            onChange={(event) => setCategoryDescription(event.target.value)}
          />
        </Space>
      </Modal>
    </ScreenPanel>
  );
}

function ItemModal({
  open,
  categories,
  draft,
  setDraft,
  onClose,
  onSave
}: {
  open: boolean;
  categories: CategoryListItem[];
  draft: DraftProduct;
  setDraft: Dispatch<SetStateAction<DraftProduct>>;
  onClose: () => void;
  onSave: () => void;
}) {
  const isEdit = Boolean(draft.id);

  function updateDraft<K extends keyof DraftProduct>(key: K, value: DraftProduct[K]) {
    setDraft((state) => ({ ...state, [key]: value }));
  }

  function addSize() {
    setDraft((state) => ({
      ...state,
      sizes: [...state.sizes, { name: "", priceDelta: 0, sortOrder: state.sizes.length }]
    }));
  }

  function updateSize(index: number, changes: Partial<SizeDraft>) {
    setDraft((state) => ({
      ...state,
      sizes: state.sizes.map((size, sizeIndex) => (sizeIndex === index ? { ...size, ...changes } : size))
    }));
  }

  function removeSize(index: number) {
    setDraft((state) => ({
      ...state,
      sizes: state.sizes.filter((_, sizeIndex) => sizeIndex !== index)
    }));
  }

  function addGroup() {
    setDraft((state) => ({
      ...state,
      variationGroups: [
        ...state.variationGroups,
        {
          name: "",
          minSelectable: 0,
          maxSelectable: 1,
          required: false,
          sortOrder: state.variationGroups.length,
          choices: []
        }
      ]
    }));
  }

  function updateGroup(index: number, changes: Partial<GroupDraft>) {
    setDraft((state) => ({
      ...state,
      variationGroups: state.variationGroups.map((group, groupIndex) =>
        groupIndex === index ? { ...group, ...changes } : group
      )
    }));
  }

  function removeGroup(index: number) {
    setDraft((state) => ({
      ...state,
      variationGroups: state.variationGroups.filter((_, groupIndex) => groupIndex !== index)
    }));
  }

  function addChoice(groupIndex: number) {
    setDraft((state) => ({
      ...state,
      variationGroups: state.variationGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? {
              ...group,
              choices: [...group.choices, { name: "", priceDelta: 0, sortOrder: group.choices.length }]
            }
          : group
      )
    }));
  }

  function updateChoice(groupIndex: number, choiceIndex: number, changes: Partial<ChoiceDraft>) {
    setDraft((state) => ({
      ...state,
      variationGroups: state.variationGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? {
              ...group,
              choices: group.choices.map((choice, currentChoiceIndex) =>
                currentChoiceIndex === choiceIndex ? { ...choice, ...changes } : choice
              )
            }
          : group
      )
    }));
  }

  function removeChoice(groupIndex: number, choiceIndex: number) {
    setDraft((state) => ({
      ...state,
      variationGroups: state.variationGroups.map((group, currentGroupIndex) =>
        currentGroupIndex === groupIndex
          ? {
              ...group,
              choices: group.choices.filter((_, currentChoiceIndex) => currentChoiceIndex !== choiceIndex)
            }
          : group
      )
    }));
  }

  return (
    <Modal
      open={open}
      width={980}
      title={isEdit ? "Edit Item" : "Add Item"}
      onCancel={onClose}
      onOk={onSave}
      okText={isEdit ? "Update Item" : "Add Item"}
      destroyOnClose
      style={{ top: 24 }}
    >
      <div style={{ maxHeight: "72vh", overflow: "auto", paddingRight: 4 }}>
        <Space direction="vertical" size={14} style={{ width: "100%" }}>
          <Card size="small" title="Core Details">
            <div className="inventory-form-grid">
              <Field label="Name" required>
                <Input value={draft.name} onChange={(event) => updateDraft("name", event.target.value)} placeholder="Product name" />
              </Field>

              <Field label="SKU">
                <Input value={draft.sku ?? ""} onChange={(event) => updateDraft("sku", event.target.value)} placeholder="Optional" />
              </Field>

              <Field label="Category" required>
                <Select
                  value={draft.categoryId}
                  placeholder="Select category"
                  options={categories.map((category) => ({ label: category.name, value: category.id }))}
                  onChange={(value) => updateDraft("categoryId", value)}
                />
              </Field>

              <Field label="Base Price">
                <InputNumber<number>
                  value={draft.basePrice}
                  min={0}
                  style={{ width: "100%" }}
                  onChange={(value) => updateDraft("basePrice", value ?? 0)}
                />
              </Field>

              <Field label="Stock Qty">
                <InputNumber<number>
                  value={draft.stockQty}
                  min={0}
                  style={{ width: "100%" }}
                  onChange={(value) => updateDraft("stockQty", value ?? 0)}
                />
              </Field>

              <Field label="Status">
                <Space style={{ height: 38 }}>
                  <Typography.Text type="secondary">Active</Typography.Text>
                  <Switch checked={draft.active} onChange={(checked) => updateDraft("active", checked)} />
                </Space>
              </Field>

              <Field label="Inventory Tracking">
                <Space style={{ height: 38 }}>
                  <Typography.Text type="secondary">Track quantity</Typography.Text>
                  <Switch checked={draft.trackInventory} onChange={(checked) => updateDraft("trackInventory", checked)} />
                </Space>
              </Field>
            </div>
          </Card>

          <Card
            size="small"
            title="Sizes"
            extra={<Button size="small" icon={<PlusOutlined />} onClick={addSize}>Add Size</Button>}
          >
            {draft.sizes.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No sizes" />
            ) : (
              <Space direction="vertical" size={8} style={{ width: "100%" }}>
                {draft.sizes.map((size, index) => (
                  <div key={size.id ?? `size-${index}`} className="inventory-row-grid">
                    <Input
                      placeholder="Size name"
                      value={size.name}
                      onChange={(event) => updateSize(index, { name: event.target.value })}
                    />
                    <InputNumber<number>
                      value={size.priceDelta}
                      style={{ width: "100%" }}
                      onChange={(value) => updateSize(index, { priceDelta: value ?? 0 })}
                    />
                    <Button danger icon={<DeleteOutlined />} onClick={() => removeSize(index)} />
                  </div>
                ))}
              </Space>
            )}
          </Card>

          <Card
            size="small"
            title="Variation Groups"
            extra={<Button size="small" icon={<PlusOutlined />} onClick={addGroup}>Add Group</Button>}
          >
            {draft.variationGroups.length === 0 ? (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No variation groups" />
            ) : (
              <Space direction="vertical" size={12} style={{ width: "100%" }}>
                {draft.variationGroups.map((group, groupIndex) => (
                  <Card
                    key={group.id ?? `group-${groupIndex}`}
                    type="inner"
                    title={group.name || `Group ${groupIndex + 1}`}
                    extra={<Button danger size="small" onClick={() => removeGroup(groupIndex)}>Remove Group</Button>}
                  >
                    <Space direction="vertical" size={10} style={{ width: "100%" }}>
                      <div className="inventory-form-grid">
                        <Field label="Group Name">
                          <Input
                            value={group.name}
                            onChange={(event) => updateGroup(groupIndex, { name: event.target.value })}
                            placeholder="e.g. Toppings"
                          />
                        </Field>
                        <Field label="Min Selectable">
                          <InputNumber<number>
                            min={0}
                            value={group.minSelectable}
                            style={{ width: "100%" }}
                            onChange={(value) => updateGroup(groupIndex, { minSelectable: value ?? 0 })}
                          />
                        </Field>
                        <Field label="Max Selectable">
                          <InputNumber<number>
                            min={1}
                            value={group.maxSelectable}
                            style={{ width: "100%" }}
                            onChange={(value) => updateGroup(groupIndex, { maxSelectable: value ?? 1 })}
                          />
                        </Field>
                        <Field label="Required">
                          <Space style={{ height: 38 }}>
                            <Typography.Text type="secondary">Must choose</Typography.Text>
                            <Switch
                              checked={group.required}
                              onChange={(checked) => updateGroup(groupIndex, { required: checked })}
                            />
                          </Space>
                        </Field>
                      </div>

                      <Divider style={{ margin: "4px 0" }} />

                      <Space direction="vertical" size={8} style={{ width: "100%" }}>
                        <Space style={{ justifyContent: "space-between", width: "100%" }}>
                          <Typography.Text strong>Choices</Typography.Text>
                          <Button size="small" icon={<PlusOutlined />} onClick={() => addChoice(groupIndex)}>
                            Add Choice
                          </Button>
                        </Space>

                        {group.choices.length === 0 ? (
                          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No choices" />
                        ) : (
                          <Space direction="vertical" size={8} style={{ width: "100%" }}>
                            {group.choices.map((choice, choiceIndex) => (
                              <div key={choice.id ?? `choice-${choiceIndex}`} className="inventory-row-grid">
                                <Input
                                  placeholder="Choice name"
                                  value={choice.name}
                                  onChange={(event) => updateChoice(groupIndex, choiceIndex, { name: event.target.value })}
                                />
                                <InputNumber<number>
                                  value={choice.priceDelta}
                                  style={{ width: "100%" }}
                                  onChange={(value) => updateChoice(groupIndex, choiceIndex, { priceDelta: value ?? 0 })}
                                />
                                <Button danger icon={<DeleteOutlined />} onClick={() => removeChoice(groupIndex, choiceIndex)} />
                              </div>
                            ))}
                          </Space>
                        )}
                      </Space>
                    </Space>
                  </Card>
                ))}
              </Space>
            )}
          </Card>
        </Space>
      </div>
    </Modal>
  );
}

function Field({
  label,
  required,
  children
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <Space direction="vertical" size={6} style={{ width: "100%" }}>
      <Typography.Text>
        {label}
        {required ? " *" : ""}
      </Typography.Text>
      {children}
    </Space>
  );
}
