import type { CategoryInput, CategoryListItem, ProductInput, ProductListItem } from "../../shared/contracts";
import type { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma";
import { productInputSchema } from "./validators";

const includeGraph = {
  category: true,
  stock: true,
  sizes: { orderBy: { sortOrder: "asc" as const } },
  variationGroups: {
    orderBy: { sortOrder: "asc" as const },
    include: {
      choices: { orderBy: { sortOrder: "asc" as const } }
    }
  }
};

type ProductGraph = Prisma.ProductGetPayload<{
  include: typeof includeGraph;
}>;

function toDTO(product: ProductGraph): ProductListItem {
  return {
    id: product.id,
    name: product.name,
    sku: product.sku ?? undefined,
    categoryId: product.categoryId ?? undefined,
    categoryName: product.category?.name ?? undefined,
    basePrice: product.basePrice,
    trackInventory: product.trackInventory,
    active: product.active,
    stockQty: product.stock?.qty ?? 0,
    sizes: product.sizes.map((s) => ({
      id: s.id,
      name: s.name,
      priceDelta: s.priceDelta,
      sortOrder: s.sortOrder
    })),
    variationGroups: product.variationGroups.map((g) => ({
      id: g.id,
      name: g.name,
      minSelectable: g.minSelectable,
      maxSelectable: g.maxSelectable,
      required: g.required,
      sortOrder: g.sortOrder,
      choices: g.choices.map((c) => ({
        id: c.id,
        name: c.name,
        priceDelta: c.priceDelta,
        sortOrder: c.sortOrder
      }))
    }))
  };
}

export async function listInventory(): Promise<ProductListItem[]> {
  const products = await prisma.product.findMany({
    include: includeGraph,
    orderBy: { createdAt: "desc" }
  });
  return products.map(toDTO);
}

export async function upsertInventoryItem(rawInput: ProductInput): Promise<ProductListItem> {
  const input = productInputSchema.parse(rawInput);

  const product = await prisma.$transaction(async (tx) => {
    if (input.id) {
      await tx.productSize.deleteMany({ where: { productId: input.id } });
      await tx.variationChoice.deleteMany({
        where: { group: { productId: input.id } }
      });
      await tx.variationGroup.deleteMany({ where: { productId: input.id } });

      return tx.product.update({
        where: { id: input.id },
        data: {
          name: input.name,
          sku: input.sku,
          category: input.categoryId ? { connect: { id: input.categoryId } } : { disconnect: true },
          basePrice: input.basePrice,
          trackInventory: input.trackInventory,
          active: input.active,
          stock: {
            upsert: {
              create: { qty: input.stockQty },
              update: { qty: input.stockQty }
            }
          },
          sizes: {
            create: input.sizes.map((s) => ({
              name: s.name,
              priceDelta: s.priceDelta,
              sortOrder: s.sortOrder
            }))
          },
          variationGroups: {
            create: input.variationGroups.map((g) => ({
              name: g.name,
              minSelectable: g.minSelectable,
              maxSelectable: g.maxSelectable,
              required: g.required,
              sortOrder: g.sortOrder,
              choices: {
                create: g.choices.map((c) => ({
                  name: c.name,
                  priceDelta: c.priceDelta,
                  sortOrder: c.sortOrder
                }))
              }
            }))
          }
        },
        include: includeGraph
      });
    }

    return tx.product.create({
      data: {
        name: input.name,
        sku: input.sku,
        category: input.categoryId ? { connect: { id: input.categoryId } } : undefined,
        basePrice: input.basePrice,
        trackInventory: input.trackInventory,
        active: input.active,
        stock: { create: { qty: input.stockQty } },
        sizes: {
          create: input.sizes.map((s) => ({
            name: s.name,
            priceDelta: s.priceDelta,
            sortOrder: s.sortOrder
          }))
        },
        variationGroups: {
          create: input.variationGroups.map((g) => ({
            name: g.name,
            minSelectable: g.minSelectable,
            maxSelectable: g.maxSelectable,
            required: g.required,
            sortOrder: g.sortOrder,
            choices: {
              create: g.choices.map((c) => ({
                name: c.name,
                priceDelta: c.priceDelta,
                sortOrder: c.sortOrder
              }))
            }
          }))
        }
      },
      include: includeGraph
    });
  });

  return toDTO(product);
}

export async function deleteInventoryItem(id: string): Promise<void> {
  await prisma.product.delete({ where: { id } });
}

export async function adjustStock(productId: string, delta: number): Promise<void> {
  await prisma.inventoryStock.update({
    where: { productId },
    data: { qty: { increment: delta } }
  });
}

export async function listCategories(): Promise<CategoryListItem[]> {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" }
  });
  return categories.map((c) => ({
    id: c.id,
    name: c.name,
    description: c.description ?? undefined
  }));
}

export async function createCategory(input: CategoryInput): Promise<CategoryListItem> {
  const trimmedName = input.name.trim();
  if (!trimmedName) {
    throw new Error("Category name is required");
  }
  const category = await prisma.category.create({
    data: {
      name: trimmedName,
      description: input.description?.trim() || null
    }
  });
  return {
    id: category.id,
    name: category.name,
    description: category.description ?? undefined
  };
}
