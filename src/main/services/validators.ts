import { z } from "zod";

const orderChannelSchema = z.enum(["DINE_IN", "TAKEOUT", "DELIVERY", "COLLECTION"]);

export const productInputSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  sku: z.string().optional(),
  categoryId: z.string().optional(),
  basePrice: z.number().int().nonnegative(),
  trackInventory: z.boolean(),
  active: z.boolean(),
  stockQty: z.number().int().nonnegative(),
  sizes: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1),
      priceDelta: z.number().int(),
      sortOrder: z.number().int()
    })
  ),
  variationGroups: z.array(
    z.object({
      id: z.string().optional(),
      name: z.string().min(1),
      minSelectable: z.number().int().nonnegative(),
      maxSelectable: z.number().int().positive(),
      required: z.boolean(),
      sortOrder: z.number().int(),
      choices: z.array(
        z.object({
          id: z.string().optional(),
          name: z.string().min(1),
          priceDelta: z.number().int(),
          sortOrder: z.number().int()
        })
      )
    })
  )
});

export const placeOrderSchema = z.object({
  channel: orderChannelSchema,
  items: z
    .array(
      z.object({
        productId: z.string().min(1),
        quantity: z.number().int().positive(),
        sizeId: z.string().optional(),
        selectedVariations: z.array(
          z.object({
            groupId: z.string(),
            choiceIds: z.array(z.string())
          })
        )
      })
    )
    .min(1),
  charges: z.object({
    bagFee: z.number().int().nonnegative(),
    serviceFee: z.number().int().nonnegative(),
    taxRatePercent: z.number().nonnegative(),
    discountAmount: z.number().int().nonnegative()
  })
});

export const storeSettingsUpdateSchema = z.object({
  storeName: z.string().min(1)
});
