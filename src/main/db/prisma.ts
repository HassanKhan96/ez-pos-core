import path from "node:path";
import { app } from "electron";
import { PrismaClient } from "../../../prisma/generated/client";

declare global {
  var __prismaClient__: PrismaClient | undefined;
}

const dbPath = app.isPackaged
  ? path.join(app.getPath("userData"), "ez-pos.db")
  : path.resolve(process.cwd(), "prisma/dev.db");

const datasourceUrl = `file:${dbPath}`;

export const prisma =
  global.__prismaClient__ ??
  new PrismaClient({
    datasources: {
      db: { url: datasourceUrl }
    }
  });

if (!app.isPackaged) {
  global.__prismaClient__ = prisma;
}
