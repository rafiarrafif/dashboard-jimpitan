"use client";
import { Spinner } from "@heroui/react";
import React, { useState } from "react";

const LoadingScreen = () => {
  const [loadingTimeout, setLoadingTimeout] = useState(false);

  setTimeout(() => {
    setLoadingTimeout(true);
  }, 8000);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-6">
      <Spinner className="-mt-42" />
      {loadingTimeout ? (
        <div className="text-sm text-center px-4 flex flex-col gap-2">
          <p className="text-neutral-600">
            Proses memuat data membutuhkan waktu lebih lama dari biasanya.
          </p>
          <a href="/" className="text-blue-600">
            Kembali ke beranda
          </a>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default LoadingScreen;
