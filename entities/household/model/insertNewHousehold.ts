"use server";
import { prisma } from "@/shared/libs/database/prisma/connector";
import { CreateHouseholdFormData } from "../types";
import { HouseholdPronouns } from "@/generated/prisma/enums";
import { Household } from "@/generated/prisma/client";

interface InsertNewHousehold {
  success: boolean;
  message: {
    title: string;
    description: string;
  };
  data?: Household;
  error?: unknown;
}

export const insertNewHousehold = async (
  data: CreateHouseholdFormData
): Promise<InsertNewHousehold> => {
  try {
    const createdHousehold = await prisma.household.create({
      data: {
        householdName: `${
          data.householdPronoun
        } ${data.headOfHousehold.toLocaleLowerCase()}`,
        headOfHousehold: data.headOfHousehold.toLocaleLowerCase(),
        pinKey: Math.floor(10000000 + Math.random() * 90000000),
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
      error: error,
    };
  }
};
