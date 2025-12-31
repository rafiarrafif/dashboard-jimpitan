"use server";

interface SubmitPaymentResponse {
  success: boolean;
  message: string;
  error?: string;
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
  console.log(
    `${householdId} membayarkan sebesar ${amount} oleh ${collectorId}`
  );
  return {
    success: true,
    message: "Berhasil membayar",
  };
};
