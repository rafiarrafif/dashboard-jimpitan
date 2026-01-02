"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";

export const getHouseholdCheckDues = async (id: string) => {
  try {
    return await prisma.household.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        householdName: true,
        transactions: true,
        _count: {
          select: {
            WeeklyDues: {
              where: {
                paidWith: null,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log("Failed to get household detail payment: ", error);
    return false;
  }
};
