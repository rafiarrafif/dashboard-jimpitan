"use client";

import React, { Suspense } from "react";
import CekIuranNavbar from "../ui/Navbar";
import SelectHousehold from "../ui/SelectHousehold";
import Loading from "../ui/Loading";

const CekIuran = () => {
  return (
    <div>
      <CekIuranNavbar />
      <Suspense fallback={<Loading />}>
        <SelectHousehold />
      </Suspense>
    </div>
  );
};

export default CekIuran;
