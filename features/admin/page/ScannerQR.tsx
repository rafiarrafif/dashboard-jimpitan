"use client";

import React from "react";
import ScannerOrCode from "../ui/ScannerQR/ScannerOrCode";

const ScannerQR = () => {
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold">Scan Jimpitan</h1>
        <p>Arahkan kamera ke QR Code</p>
      </div>
      <ScannerOrCode />
    </div>
  );
};

export default ScannerQR;
