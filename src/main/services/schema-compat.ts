import { prisma } from "../db/prisma";

type TableInfoRow = {
  name: string;
};

let ensurePhase1SchemaPromise: Promise<void> | null = null;

async function ensureColumn(tableName: string, columnName: string, alterSql: string): Promise<void> {
  const rows = await prisma.$queryRawUnsafe<TableInfoRow[]>(`PRAGMA table_info("${tableName}")`);
  const hasColumn = rows.some((row) => row.name === columnName);
  if (hasColumn) {
    return;
  }

  try {
    await prisma.$executeRawUnsafe(alterSql);
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (!message.includes("duplicate column name")) {
      throw error;
    }
  }
}

export async function ensurePhase1SchemaCompat(): Promise<void> {
  if (!ensurePhase1SchemaPromise) {
    ensurePhase1SchemaPromise = (async () => {
      await ensureColumn(
        "StoreSettings",
        "businessProfile",
        "ALTER TABLE StoreSettings ADD COLUMN businessProfile TEXT NOT NULL DEFAULT 'MART'"
      );
      await ensureColumn(
        "Order",
        "channel",
        "ALTER TABLE \"Order\" ADD COLUMN channel TEXT NOT NULL DEFAULT 'TAKEOUT'"
      );
    })();
  }
  await ensurePhase1SchemaPromise;
}
