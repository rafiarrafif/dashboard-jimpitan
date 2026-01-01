"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";

export const getHouseholdPopupPayment = async (pinKey: number) => {
  try {
    const data = await prisma.household.findUnique({
      where: {
        pinKey,
      },
      select: {
        id: true,
        householdName: true,
        WeeklyDues: {
          where: {
            paidWith: null,
          },
        },
      },
    });
    return data;
  } catch (error) {
    return false;
  }
};
