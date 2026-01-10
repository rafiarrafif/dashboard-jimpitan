"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export const getLeaderboardData = async () => {
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
    const data = await prisma.collector.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            collections: true,
          },
        },
        collections: {
          where: {
            paidAt: {
              gte: startOfMonth,
              lt: startOfNextMonth,
            },
          },
          select: {
            id: true,
          },
        },
      },
    });

    const result = data.map((collector) => ({
      id: collector.id,
      name: collector.name,
      monthly_count: collector.collections.length,
      total_count: collector._count.collections,
    }));

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
