"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export interface HouseholdMetaQR {
  householdName: string;
  pinKey: number;
}

export const getHouseholdMetaQR = async (
  id: string
): Promise<HouseholdMetaQR | null> => {
  return await prisma.household.findUnique({
    where: {
      id,
    },
    select: {
      householdName: true,
      pinKey: true,
    },
  });
};
