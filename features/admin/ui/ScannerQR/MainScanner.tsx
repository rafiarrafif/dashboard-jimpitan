"use client";

import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import React, { useState } from "react";
import PopupPayment from "./PopupPayment";
import { useDisclosure } from "@heroui/react";

const MainScanner = () => {
  const [cameraPaused, setCameraPaused] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onScanHandler = (result: IDetectedBarcode[]) => {
    setCameraPaused(true);
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
      />
    </div>
  );
};

export default MainScanner;
