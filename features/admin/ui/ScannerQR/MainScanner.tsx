"use client";

import React, { useState } from "react";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useDisclosure } from "@heroui/react";
import PopupPayment from "./PopupPayment/Main";

const MainScanner = () => {
  const [scannerValue, setScannerValue] = useState<string | null>(null);
  const [cameraPaused, setCameraPaused] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onScanHandler = (result: IDetectedBarcode[]) => {
    setCameraPaused(true);
    setScannerValue(result[0].rawValue);
    onOpen();
  };

  return (
    <div>
      <Scanner
        constraints={{ facingMode: "environment" }}
        onScan={onScanHandler}
        onError={(error) => console.log(error)}
        paused={cameraPaused}
      />
      <PopupPayment
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cameraStatus={setCameraPaused}
        scannerValue={scannerValue!}
      />
    </div>
  );
};

export default MainScanner;
