import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const uuidSql = `
lower(
  hex(randomblob(4)) || '-' ||
  hex(randomblob(2)) || '-' ||
  '4' || substr(hex(randomblob(2)), 2) || '-' ||
  substr('89ab', abs(random()) % 4 + 1, 1) || substr(hex(randomblob(2)), 2) || '-' ||
  hex(randomblob(6))
)
`;

async function exec(sql: string) {
  await prisma.$executeRawUnsafe(sql);
}

async function main() {
  await exec("PRAGMA foreign_keys = OFF");
  await exec("BEGIN IMMEDIATE");

  try {
    await exec("DROP TABLE IF EXISTS __map_category");
    await exec(`CREATE TEMP TABLE __map_category AS SELECT id AS old_id, ${uuidSql} AS new_id FROM Category`);
    await exec(
      "UPDATE Product SET categoryId = (SELECT new_id FROM __map_category WHERE old_id = Product.categoryId) WHERE categoryId IS NOT NULL"
    );
    await exec("UPDATE Category SET id = (SELECT new_id FROM __map_category WHERE old_id = Category.id)");
    await exec("DROP TABLE __map_category");

    await exec("DROP TABLE IF EXISTS __map_product");
    await exec(`CREATE TEMP TABLE __map_product AS SELECT id AS old_id, ${uuidSql} AS new_id FROM Product`);
    await exec("UPDATE InventoryStock SET productId = (SELECT new_id FROM __map_product WHERE old_id = InventoryStock.productId)");
    await exec("UPDATE ProductSize SET productId = (SELECT new_id FROM __map_product WHERE old_id = ProductSize.productId)");
    await exec("UPDATE VariationGroup SET productId = (SELECT new_id FROM __map_product WHERE old_id = VariationGroup.productId)");
    await exec("UPDATE OrderItem SET productId = (SELECT new_id FROM __map_product WHERE old_id = OrderItem.productId)");
    await exec("UPDATE Product SET id = (SELECT new_id FROM __map_product WHERE old_id = Product.id)");
    await exec("DROP TABLE __map_product");

    await exec("DROP TABLE IF EXISTS __map_variation_group");
    await exec(`CREATE TEMP TABLE __map_variation_group AS SELECT id AS old_id, ${uuidSql} AS new_id FROM VariationGroup`);
    await exec(
      "UPDATE VariationChoice SET groupId = (SELECT new_id FROM __map_variation_group WHERE old_id = VariationChoice.groupId)"
    );
    await exec("UPDATE VariationGroup SET id = (SELECT new_id FROM __map_variation_group WHERE old_id = VariationGroup.id)");
    await exec("DROP TABLE __map_variation_group");

    await exec("DROP TABLE IF EXISTS __map_order");
    await exec(`CREATE TEMP TABLE __map_order AS SELECT id AS old_id, ${uuidSql} AS new_id FROM "Order"`);
    await exec("UPDATE OrderItem SET orderId = (SELECT new_id FROM __map_order WHERE old_id = OrderItem.orderId)");
    await exec("UPDATE \"Order\" SET id = (SELECT new_id FROM __map_order WHERE old_id = \"Order\".id)");
    await exec("DROP TABLE __map_order");

    await exec("DROP TABLE IF EXISTS __map_order_item");
    await exec(`CREATE TEMP TABLE __map_order_item AS SELECT id AS old_id, ${uuidSql} AS new_id FROM OrderItem`);
    await exec(
      "UPDATE OrderItemVariation SET orderItemId = (SELECT new_id FROM __map_order_item WHERE old_id = OrderItemVariation.orderItemId)"
    );
    await exec("UPDATE OrderItem SET id = (SELECT new_id FROM __map_order_item WHERE old_id = OrderItem.id)");
    await exec("DROP TABLE __map_order_item");

    await exec(`UPDATE InventoryStock SET id = ${uuidSql}`);
    await exec(`UPDATE ProductSize SET id = ${uuidSql}`);
    await exec(`UPDATE VariationChoice SET id = ${uuidSql}`);
    await exec(`UPDATE OrderItemVariation SET id = ${uuidSql}`);

    await exec("COMMIT");
  } catch (error) {
    await exec("ROLLBACK");
    throw error;
  } finally {
    await exec("PRAGMA foreign_keys = ON");
  }
}

main()
  .then(async () => {
    console.log("ID migration to UUID completed.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error("UUID ID migration failed:", error);
    await prisma.$disconnect();
    process.exit(1);
  });
