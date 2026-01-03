import { NextResponse } from "next/server";
import { generateWeeklyDues } from "./model/generateWeeklyDues";

export async function POST(req: Request) {
  const secretKeyReq = req.headers.get("secret-key-generate");
  const secretKeyStored = process.env.GENERATE_DUE_SECRET_KEY;
  if (secretKeyReq !== secretKeyStored)
    return NextResponse.json(
      {
        success: false,
        message: "Invalid code for generating invoices dues.",
      },
      { status: 401 }
    );

  await generateWeeklyDues();
  return NextResponse.json(
    {
      success: true,
      message: "Invoice generated successfully",
    },
    { status: 201 }
  );
}
