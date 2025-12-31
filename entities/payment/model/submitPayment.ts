"use server";

interface SubmitPaymentResponse {
  success: boolean;
  message: string;
  error?: string;
}

export const submitPayment = async (
  householdId: string,
  amount: number
): Promise<SubmitPaymentResponse> => {
  console.log(`${householdId} membayarkan sebesar ${amount}`);
  return {
    success: true,
    message: "Berhasil membayar",
  };
};
