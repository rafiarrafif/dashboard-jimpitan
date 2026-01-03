"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export const getAllHousehold = async () => {
  const allHouseholdData = await prisma.household.findMany({
    where: {
      deletedAt: null,
    },
    select: {
      id: true,
      householdName: true,
    },
  });
  return allHouseholdData;
};
