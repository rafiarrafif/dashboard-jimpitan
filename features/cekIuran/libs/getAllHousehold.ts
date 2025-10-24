"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

export const getAllHousehold = async () => {
  // const allHouseholdData = await prisma.household.findMany();
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const allHouseholdData = {
    data: [
      {
        id: 1,
        headOfHousehold: "John Doe",
        address: "123 Main St",
        numberOfMembers: 4,
      },
      {
        id: 2,
        headOfHousehold: "Jane Smith",
        address: "456 Oak Ave",
        numberOfMembers: 3,
      },
    ],
  };
  return allHouseholdData;
};
