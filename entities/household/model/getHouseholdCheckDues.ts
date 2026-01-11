"use server";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/shared/libs/database/prisma/connector";

export type HouseholdCheckDues = Prisma.HouseholdGetPayload<{
  select: {
    id: true;
    householdName: true;
    transactions: {
      select: {
        amount: true;
        paidAt: true;
        dueCoverages: {
          select: {
            startDate: true;
            endDate: true;
          };
        };
        issuer: {
          select: {
            name: true;
          };
        };
      };
      orderBy: {
        paidAt: "desc";
      };
    };
    _count: {
      select: {
        WeeklyDues: {
          where: {
            paidWith: null;
          };
        };
      };
    };
  };
}>;

export const getHouseholdCheckDues = async (id: string) => {
  try {
    return (await prisma.household.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        householdName: true,
        transactions: {
          select: {
            amount: true,
            paidAt: true,
            dueCoverages: {
              orderBy: {
                startDate: "asc",
              },
              select: {
                startDate: true,
                endDate: true,
              },
            },
            issuer: {
              select: {
                name: true,
              },
            },
          },
          orderBy: {
            paidAt: "desc",
          },
        },
        _count: {
          select: {
            WeeklyDues: {
              where: {
                paidWith: null,
              },
            },
          },
        },
      },
    })) as HouseholdCheckDues | null;
  } catch (error) {
    console.log("Failed to get household detail payment: ", error);
    return null;
  }
};
