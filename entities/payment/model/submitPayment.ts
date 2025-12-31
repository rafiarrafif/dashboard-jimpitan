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
    success: false,
    message: "unknown error encountered",
    error: "terjadi masalah",
  };
};
