"use client";

import React, { useState } from "react";
import ScannerOrCode from "../ui/ScannerQR/ScannerOrCode";

const ScannerQR = () => {
  const [useCameraMethod, setUseCameraMethod] = useState(true);

  return (
    <div>
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold">Scan Jimpitan</h1>
        {useCameraMethod ? (
          <p>Arahkan kamera ke QR Code</p>
        ) : (
          <p>Masukan code diatas QR Code</p>
        )}
      </div>
      <ScannerOrCode
        useCameraMethod={useCameraMethod}
        setUseCameraMethod={setUseCameraMethod}
      />
    </div>
  );
};

export default ScannerQR;
