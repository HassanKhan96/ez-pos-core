import path from "node:path";
import fs from "node:fs";
import { app } from "electron";
import { PrismaClient } from "../../../prisma/generated/client";

declare global {
  var __prismaClient__: PrismaClient | undefined;
}

const dbPath = app.isPackaged
  ? path.join(app.getPath("userData"), "ez-pos.db")
  : path.resolve(process.cwd(), "prisma/dev.db");

if (app.isPackaged && !fs.existsSync(dbPath)) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
  const bundledDbPath = path.join(process.resourcesPath, "prisma", "dev.db");
  if (fs.existsSync(bundledDbPath)) {
    fs.copyFileSync(bundledDbPath, dbPath);
  } else {
    fs.closeSync(fs.openSync(dbPath, "w"));
  }
}

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
