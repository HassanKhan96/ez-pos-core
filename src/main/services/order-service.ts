import type { OrderListItem, OrderReceiptDTO, PlaceOrderInput } from "../../shared/contracts";
import { prisma } from "../db/prisma";
import { calculateTotals } from "./pricing";
import { ensurePhase1SchemaCompat } from "./schema-compat";
import { getSettings } from "./settings-service";
import { placeOrderSchema } from "./validators";

function toOrderListItem(row: {
  id: string;
  orderNumber: number;
  channel: "DINE_IN" | "TAKEOUT" | "DELIVERY" | "COLLECTION";
  subtotal: number;
  discount: number;
  fees: number;
  tax: number;
  total: number;
  createdAt: Date;
}): OrderListItem {
  return {
    ...row,
    createdAt: row.createdAt.toISOString()
  };
}

export async function placeOrder(rawInput: PlaceOrderInput): Promise<OrderListItem> {
  await ensurePhase1SchemaCompat();
  const input = placeOrderSchema.parse(rawInput);

  const result = await prisma.$transaction(async (tx) => {
    const products = await tx.product.findMany({
      where: { id: { in: input.items.map((i) => i.productId) } },
      include: {
        stock: true,
        sizes: true,
        variationGroups: {
          include: { choices: true }
        }
      }
    });
    const productMap = new Map(products.map((p) => [p.id, p]));

    let subtotal = 0;
    const lineItems: Array<{
      productId: string;
      productName: string;
      sizeName?: string;
      unitBasePrice: number;
      quantity: number;
      lineTotal: number;
      variationRows: Array<{ groupName: string; choiceName: string; priceDelta: number }>;
    }> = [];

    for (const item of input.items) {
      const product = productMap.get(item.productId);
      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }

      if (product.trackInventory && (product.stock?.qty ?? 0) < item.quantity) {
        throw new Error(`Insufficient stock for ${product.name}`);
      }

      let unitPrice = product.basePrice;
      let sizeName: string | undefined;
      if (item.sizeId) {
        const size = product.sizes.find((s) => s.id === item.sizeId);
        if (!size) {
          throw new Error(`Invalid size for ${product.name}`);
        }
        unitPrice += size.priceDelta;
        sizeName = size.name;
      }

      const variationRows: Array<{ groupName: string; choiceName: string; priceDelta: number }> = [];
      for (const selected of item.selectedVariations) {
        const group = product.variationGroups.find((g) => g.id === selected.groupId);
        if (!group) {
          throw new Error(`Invalid variation group for ${product.name}`);
        }
        if (selected.choiceIds.length < group.minSelectable || selected.choiceIds.length > group.maxSelectable) {
          throw new Error(`Invalid variation selection count for ${group.name}`);
        }

        for (const choiceId of selected.choiceIds) {
          const choice = group.choices.find((c) => c.id === choiceId);
          if (!choice) {
            throw new Error(`Invalid variation choice for ${group.name}`);
          }
          variationRows.push({
            groupName: group.name,
            choiceName: choice.name,
            priceDelta: choice.priceDelta
          });
          unitPrice += choice.priceDelta;
        }
      }

      const lineTotal = unitPrice * item.quantity;
      subtotal += lineTotal;
      lineItems.push({
        productId: product.id,
        productName: product.name,
        sizeName,
        unitBasePrice: unitPrice,
        quantity: item.quantity,
        lineTotal,
        variationRows
      });
    }

    const totals = calculateTotals(subtotal, input.charges);
    const lastOrder = await tx.order.findFirst({
      orderBy: { orderNumber: "desc" },
      select: { orderNumber: true }
    });
    const orderNumber = (lastOrder?.orderNumber ?? 1000) + 1;

    const order = await tx.order.create({
      data: {
        orderNumber,
        channel: input.channel,
        subtotal: totals.subtotal,
        discount: totals.discount,
        fees: totals.fees,
        tax: totals.tax,
        total: totals.total,
        items: {
          create: lineItems.map((line) => ({
            productId: line.productId,
            productName: line.productName,
            sizeName: line.sizeName,
            unitBasePrice: line.unitBasePrice,
            quantity: line.quantity,
            lineTotal: line.lineTotal,
            variations: {
              create: line.variationRows
            }
          }))
        }
      }
    });

    for (const item of input.items) {
      const product = productMap.get(item.productId);
      if (product?.trackInventory) {
        await tx.inventoryStock.update({
          where: { productId: item.productId },
          data: { qty: { decrement: item.quantity } }
        });
      }
    }

    return order;
  });

  return toOrderListItem(result);
}

export async function listOrders(fromISO: string, toISO: string): Promise<OrderListItem[]> {
  await ensurePhase1SchemaCompat();
  const rows = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: new Date(fromISO),
        lte: new Date(toISO)
      }
    },
    orderBy: { createdAt: "desc" }
  });
  return rows.map(toOrderListItem);
}

export async function getOrderReceipt(orderId: string): Promise<OrderReceiptDTO> {
  await ensurePhase1SchemaCompat();
  const [order, settings] = await Promise.all([
    prisma.order.findUnique({
      where: { id: orderId },
      include: {
        items: {
          include: { variations: true }
        }
      }
    }),
    getSettings()
  ]);

  if (!order) {
    throw new Error("Order not found");
  }

  return {
    orderId: order.id,
    orderNumber: order.orderNumber,
    channel: order.channel,
    createdAt: order.createdAt.toISOString(),
    storeName: settings.storeName,
    subtotal: order.subtotal,
    discount: order.discount,
    fees: order.fees,
    tax: order.tax,
    total: order.total,
    items: order.items.map((item) => ({
      productName: item.productName,
      quantity: item.quantity,
      lineTotal: item.lineTotal,
      sizeName: item.sizeName ?? undefined,
      variations: item.variations.map((v) => `${v.groupName}: ${v.choiceName}`)
    }))
  };
}
