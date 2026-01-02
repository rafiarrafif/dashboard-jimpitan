"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";

export const getScanStatistics = async (collectorId: string) => {
  const now = new Date();
  const startOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
    0,
    0,
    0,
    0
  );
  const startOfNextMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
    0,
    0,
    0,
    0
  );

  try {
    const totalScans = await prisma.transaction.count({
      where: {
        issuedby: collectorId,
      },
    });
    const monthlyScans = await prisma.transaction.count({
      where: {
        issuedby: collectorId,
        paidAt: {
          gte: startOfMonth,
          lt: startOfNextMonth,
        },
      },
    });
    return {
      monthlyScans,
      totalScans,
    };
  } catch (error) {
    console.error(
      "Something went wront when get collector statistics: ",
      error
    );
  }
};
