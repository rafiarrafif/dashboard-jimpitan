"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";
import { CreateHouseholdFormData } from "../types";
import { HouseholdPronouns } from "@/app/generated/prisma/enums";

export const insertNewHousehold = async (data: CreateHouseholdFormData) => {
  try {
    const createdHousehold = prisma.household.create({
      data: {
        householdName: `${data.householdPronoun} ${data.headOfHousehold}`,
        headOfHousehold: data.headOfHousehold.toLocaleLowerCase(),
        householdPronoun: data.householdPronoun as HouseholdPronouns,
        firstNeighborId: data.firstNeighborId || null,
        secondNeighborId: data.secondNeighborId || null,
      },
    });

    return {
      success: true,
      message: {
        title: "Berhasil ditambahkan",
        description: "Data rumah tangga baru berhasil ditambahkan",
      },
      data: createdHousehold,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: {
        title: "Ada masalah",
        description: "Terdapat kesalahan saat ingin menyimpan data",
      },
      data: error,
    };
  }
};
