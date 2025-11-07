"use client";

import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";

const MainScanner = () => {
  const [cameraPaused, setCameraPaused] = useState(false);

  const onScanHandler = (result: IDetectedBarcode[]) => {
    console.log(`berhasil! ${JSON.stringify(result)}`);
    setCameraPaused(true);
    setTimeout(() => {
      setCameraPaused(false);
    }, 3000);
  };

  return (
    <div>
      <Scanner
        constraints={{ facingMode: "environment" }}
        onScan={onScanHandler}
        onError={(error) => console.log(error)}
        paused={cameraPaused}
      />
    </div>
  );
};

export default MainScanner;
