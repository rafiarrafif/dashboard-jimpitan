import { prisma } from "@/shared/libs/database/prisma/connector";
import { getISOWeekYear, getISOWeek } from "date-fns";
export const generateWeeklyDues = async () => {
  console.log("✍️ Start generating dues invoice");

  const now = new Date();
  let day = now.getDay();

  const startDate = new Date(now);
  startDate.setDate(now.getDate() - day);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);

  const year = getISOWeekYear(now);
  const week = getISOWeek(now);

  const weekCode = `${year}-W${String(week).padStart(2, "0")}`;

  await prisma.$transaction(async (tx) => {
    const households = await tx.household.findMany({
      where: {
        deletedAt: null,
      },
      select: {
        id: true,
        householdName: true,
      },
    });

    for (const household of households) {
      await tx.weeklyDue.upsert({
        where: {
          householdId_weekCode: {
            householdId: household.id,
            weekCode,
          },
        },
        update: {},
        create: {
          householdId: household.id,
          weekCode,
          startDate,
          endDate,
          amount: Number(process.env.AMOUNT_DUE),
        },
      });
      console.log(
        `📄invoice for ${household.householdName.trim()} successfully generated`
      );
    }
  });

  console.log("✅️ Finish generating dues invoice");
};
