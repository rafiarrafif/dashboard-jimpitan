"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";

export const getHouseholdPopupPayment = async (pinKey: number) => {
  console.log("hasil pin key: ", pinKey);
  try {
    const data = await prisma.household.findUnique({
      where: {
        pinKey,
      },
      select: {
        id: true,
        householdName: true,
      },
    });
    console.log("data berhasil diambil", data);
    return data;
  } catch (error) {
    console.log("Failed to get household detail payment: ", error);
    return false;
  }
};
