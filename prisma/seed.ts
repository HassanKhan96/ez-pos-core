import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItemVariation.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.variationChoice.deleteMany();
  await prisma.variationGroup.deleteMany();
  await prisma.productSize.deleteMany();
  await prisma.inventoryStock.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.storeSettings.deleteMany();

  await prisma.storeSettings.create({
    data: {
      id: 1,
      storeName: "EZ Demo Store"
    }
  });

  const foodCategory = await prisma.category.create({
    data: { name: "Restaurant", description: "Prepared food and beverages" }
  });
  const groceryCategory = await prisma.category.create({
    data: { name: "Grocery", description: "Staples and packaged grocery items" }
  });
  const pharmacyCategory = await prisma.category.create({
    data: { name: "Pharmacy", description: "Medicines and health products" }
  });

  await prisma.product.create({
    data: {
      name: "Veg Burger",
      sku: "RST-001",
      categoryId: foodCategory.id,
      basePrice: 6000,
      trackInventory: true,
      stock: { create: { qty: 180 } },
      sizes: {
        create: [
          { name: "Regular", priceDelta: 0, sortOrder: 0 },
          { name: "Large", priceDelta: 1500, sortOrder: 1 }
        ]
      },
      variationGroups: {
        create: [
          {
            name: "Add-ons",
            minSelectable: 0,
            maxSelectable: 3,
            required: false,
            sortOrder: 0,
            choices: {
              create: [
                { name: "Cheese", priceDelta: 600, sortOrder: 0 },
                { name: "Olives", priceDelta: 500, sortOrder: 1 },
                { name: "Extra Patty", priceDelta: 1400, sortOrder: 2 }
              ]
            }
          }
        ]
      }
    }
  });

  await prisma.product.create({
    data: {
      name: "Basmati Rice 5kg",
      sku: "GRC-104",
      categoryId: groceryCategory.id,
      basePrice: 78000,
      trackInventory: true,
      stock: { create: { qty: 75 } }
    }
  });

  await prisma.product.create({
    data: {
      name: "Paracetamol 500mg",
      sku: "PHM-209",
      categoryId: pharmacyCategory.id,
      basePrice: 2200,
      trackInventory: true,
      stock: { create: { qty: 300 } }
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
