"use client";

import { HouseholdMetaQR } from "@/entities/household/model/getHouseholdMetaQR";
import { usePDF } from "react-to-pdf";
import QRCode from "react-qr-code";
import React from "react";
import { Button } from "@heroui/react";

const HouseholdQRCanvas = ({
  householdData,
}: {
  householdData: HouseholdMetaQR;
}) => {
  const { toPDF, targetRef } = usePDF({
    filename: `qr-${householdData.householdName
      .trim()
      .toLowerCase()
      .split(" ")
      .join("-")}.pdf`,
  });

  return (
    <div>
      <main ref={targetRef} className="mx-4 pt-6 flex justify-center">
        <div className="bg-primary w-fit rounded-md flex flex-col items-center p-2">
          <div className="py-2">
            <span className="font-medium text-neutral-100 text-2xl">
              {householdData.householdName
                .split(" ")
                .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
                .join(" ")}
            </span>
          </div>
          <div className="p-2 bg-white rounded-sm w-fit">
            <QRCode value={householdData.pinKey.toString()} />
          </div>
          <div className="text-white text-4xl flex gap-1 my-2">
            <span>{householdData.pinKey.toString().slice(0, 4)}</span>
            <span>-</span>
            <span>{householdData.pinKey.toString().slice(4, 8)}</span>
          </div>
          <div className="text-neutral-300 text-sm flex flex-col items-center">
            <span>Sistem pembayaran jimpitan</span>
            <span>Muda Mudi Pratama Jatirejo</span>
          </div>
        </div>
      </main>
      <div className="mt-6 mx-8">
        <Button
          as="button"
          className="w-full rounded-sm text-white h-14"
          radius="none"
          color="primary"
          href="cek-iuran"
          onPress={() => toPDF()}
        >
          Download as PDF
        </Button>
      </div>
    </div>
  );
};

export default HouseholdQRCanvas;
