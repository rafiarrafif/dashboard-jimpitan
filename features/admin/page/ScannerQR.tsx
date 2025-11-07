"use client";

import React, { useEffect, useState } from "react";
import { Spinner } from "@heroui/react";
import MainScanner from "../ui/ScannerQR/MainScanner";

const ScannerQR = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoInputs = devices.filter((d) => d.kind === "videoinput");
      console.log(`data dari input vide: ${JSON.stringify(videoInputs)}`);
      videoInputs[0].deviceId
        ? setHasCameraPermission(true)
        : setHasCameraPermission(false);
    });
  }, []);

  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold">Scan Jimpitan</h1>
        <p>Arahkan kamera ke QR Code</p>
      </div>
      <div className="mx-8 rounded-sm overflow-hidden shadow-lg border border-neutral-300">
        {hasCameraPermission ? (
          <MainScanner />
        ) : (
          <div className="h-48 bg-neutral-50 px-2 flex flex-col items-center justify-center gap-4 ">
            <Spinner />
            <span>Menghubungkan ke kamera</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScannerQR;
