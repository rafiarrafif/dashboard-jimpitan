"use client";

import React, { useEffect, useState } from "react";
import MainScanner from "../ui/ScannerQR/MainScanner";

const ScannerQR = () => {
  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold">Scan Jimpitan</h1>
        <p>Arahkan kamera ke QR Code</p>
      </div>
      <div className="mx-8 rounded-sm overflow-hidden shadow-lg border border-neutral-400">
        <MainScanner />
      </div>
    </div>
  );
};

export default ScannerQR;
