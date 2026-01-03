"use client";

import { HouseholdMetaQR } from "@/entities/household/model/getHouseholdMetaQR";
import { Button } from "@heroui/react";
import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const HouseholdQRCanvas = ({
  householdData,
}: {
  householdData: HouseholdMetaQR;
}) => {
  const canvasTarget = useRef<HTMLDivElement>(null);

  const downloadAsPDF = async () => {
    if (!canvasTarget.current) return;

    try {
      const dataUrl = await toPng(canvasTarget.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const img = new Image();
      img.src = dataUrl;

      img.onload = () => {
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [img.width, img.height],
        });

        pdf.addImage(img, "PNG", 0, 0, img.width, img.height);
        pdf.save("qr-code.pdf");
      };
    } catch (err) {
      console.error("PDF download failed:", err);
    }
  };

  const downloadAsPNG = async () => {
    if (!canvasTarget.current) return;

    try {
      const dataUrl = await toPng(canvasTarget.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const link = document.createElement("a");
      link.download = "qr-code.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG download failed:", err);
    }
  };

  return (
    <div>
      <div className="mx-2 pt-4 flex justify-center">
        <main ref={canvasTarget} className="p-2">
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
      </div>
      <div className="mt-6 mx-8 flex flex-col gap-2">
        <Button
          as="button"
          className="w-full rounded-sm text-white h-14"
          radius="none"
          color="primary"
          href="cek-iuran"
          onPress={() => downloadAsPDF()}
        >
          Unduh sebagai PDF
        </Button>
        <Button
          as="button"
          variant="bordered"
          className="w-full rounded-sm text-primary font-medium h-13.5"
          radius="none"
          color="primary"
          href="cek-iuran"
          onPress={() => downloadAsPNG()}
        >
          Unduh sebagai PNG
        </Button>
      </div>
    </div>
  );
};

export default HouseholdQRCanvas;
