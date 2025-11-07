"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import React from "react";

const MainScanner = () => {
  return (
    <div>
      <Scanner
        constraints={{ facingMode: "environment" }}
        onScan={(result) => console.log(result)}
        onError={(error) => console.log(error)}
      />
    </div>
  );
};

export default MainScanner;
