"use server";

import { prisma } from "@/shared/libs/database/prisma/connector";

interface SubmitPaymentResponse {
  success: boolean;
  message: string;
  error?: unknown;
}

interface SubmitPaymentParams {
  householdId: string;
  collectorId: string;
  amount: number;
}

export const submitPayment = async ({
  householdId,
  collectorId,
  amount,
}: SubmitPaymentParams): Promise<SubmitPaymentResponse> => {
  try {
    const weeksToPay = Math.floor(amount / Number(process.env.AMOUNT_DUE!));
    if (!weeksToPay)
      return {
        success: false,
        message: "Saldo tidak terpenuhi.",
      };

    await prisma.$transaction(async (tx) => {
      const weekDueAvaiable = await tx.weeklyDue.findMany({
        where: {
          householdId,
          paidWith: null,
        },
        orderBy: {
          startDate: "asc",
        },
        take: weeksToPay,
      });
      if (!weekDueAvaiable)
        throw new Error("Tidak terdapat tunggakan yang dapat dibayarkan.");

      const transaction = await tx.transaction.create({
        data: {
          householdId,
          amount,
          issuedby: collectorId,
        },
      });

      for (const due of weekDueAvaiable) {
        await tx.weeklyDue.update({
          where: { id: due.id },
          data: {
            paidWith: transaction.id,
          },
        });
      }
    });

    return {
      success: true,
      message: "Berhasil membayar",
    };
  } catch (error) {
    return {
      success: false,
      message: "Terjadi kesalahan, harap hubungi developer. (code: VRAC0221)",
      error,
    };
  }
};
