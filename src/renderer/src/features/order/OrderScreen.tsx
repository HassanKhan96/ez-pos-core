import type { ProductListItem } from "@shared/contracts";
import { useMemo, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Menu, Typography } from "antd";
import type { MenuProps } from "antd";
import { ScreenPanel } from "@/components/ui/ScreenPanel";
import { formatMoney } from "@/lib/format";
import { CartScreen } from "@/features/cart/CartScreen";
import { usePosStore } from "@/state/use-pos-store";
import { VariationModal } from "./components/VariationModal";

export function OrderScreen() {
  const products = usePosStore((state) => state.products);
  const categories = usePosStore((state) => state.categories);
  const addToCart = usePosStore((state) => state.addToCart);

  const [selected, setSelected] = useState<ProductListItem | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [query, setQuery] = useState("");

  const categoryItems = useMemo<MenuProps["items"]>(
    () => [
      { key: "all", label: "All Categories" },
      ...categories.map((category) => ({ key: category.id, label: category.name }))
    ],
    [categories]
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      if (!product.active) return false;
      const categoryMatch = activeCategoryId === "all" ? true : product.categoryId === activeCategoryId;
      const searchMatch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        (product.sku ?? "").toLowerCase().includes(normalizedQuery) ||
        (product.categoryName ?? "").toLowerCase().includes(normalizedQuery);
      return categoryMatch && searchMatch;
    });
  }, [activeCategoryId, products, query]);

  return (
    <div className="order-layout-grid">
      <ScreenPanel
        title="Order Counter"
        subtitle="Choose category, search products, then add to cart"
        className="screen-panel order-panel"
        extra={
          <Input
            allowClear
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            prefix={<SearchOutlined />}
            placeholder="Search item, SKU, category"
            style={{ width: 300 }}
          />
        }
      >
        <div className="order-content-grid">
          <aside className="category-list-wrap">
            <Typography.Text type="secondary" style={{ fontSize: 12 }}>
              Categories
            </Typography.Text>
            <Menu
              mode="inline"
              selectedKeys={[activeCategoryId]}
              items={categoryItems}
              onClick={(event) => setActiveCategoryId(event.key)}
              className="category-list-menu"
            />
          </aside>

          <section className="product-grid-wrap">
            <div className="product-grid">
              {filteredProducts.map((product) => {
                const outOfStock = product.trackInventory && product.stockQty <= 0;
                return (
                  <button
                    key={product.id}
                    type="button"
                    disabled={outOfStock}
                    className="product-card"
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
                    <div className="product-card-top">
                      <Typography.Text strong ellipsis>
                        {product.name}
                      </Typography.Text>
                      <Typography.Text className="price-pill">{formatMoney(product.basePrice)}</Typography.Text>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
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
      </ScreenPanel>

      <CartScreen />
    </div>
  );
}
