"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export const getTinyAllHousehold = async () => {
  console.log("Mengambil data");
  const tinyAllHouseholdList = await prisma.household.findMany({
    where: {
      deletedAt: null,
    },
    select: {
      id: true,
      householdName: true,
    },
  });
  return tinyAllHouseholdList;
};
