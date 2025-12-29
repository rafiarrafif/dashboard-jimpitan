"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export const getAllHousehold = async () => {
  const allHouseholdData = await prisma.household.findMany({
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
  return allHouseholdData;
};
