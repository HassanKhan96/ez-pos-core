import type { SalesSummary } from "../../shared/contracts";
import { prisma } from "../db/prisma";

export async function salesSummary(dateISO: string): Promise<SalesSummary> {
  const target = new Date(dateISO);
  const dayStart = new Date(target);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(target);
  dayEnd.setHours(23, 59, 59, 999);

  const monthStart = new Date(target.getFullYear(), target.getMonth(), 1);
  const monthEnd = new Date(target.getFullYear(), target.getMonth() + 1, 0, 23, 59, 59, 999);

  const [day, month, topProductRows] = await Promise.all([
    prisma.order.aggregate({
      where: { createdAt: { gte: dayStart, lte: dayEnd } },
      _sum: { total: true }
    }),
    prisma.order.aggregate({
      where: { createdAt: { gte: monthStart, lte: monthEnd } },
      _sum: { total: true }
    }),
    prisma.orderItem.groupBy({
      by: ["productName"],
      _sum: { quantity: true, lineTotal: true },
      orderBy: { _sum: { quantity: "desc" } },
      take: 10
    })
  ]);

  return {
    daySales: day._sum.total ?? 0,
    monthSales: month._sum.total ?? 0,
    topProducts: topProductRows.map((r) => ({
      productName: r.productName,
      qtySold: r._sum.quantity ?? 0,
      revenue: r._sum.lineTotal ?? 0
    }))
  };
}
