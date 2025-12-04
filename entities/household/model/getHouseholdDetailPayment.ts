"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";

export const getHouseholdDetailPayment = async (id: string) => {
  try {
    return await prisma.household.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log("Failed to get household detail payment: ", error);
    return false;
  }
};
