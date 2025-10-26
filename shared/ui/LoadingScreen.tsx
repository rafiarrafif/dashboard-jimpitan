"use client";
import { Spinner } from "@heroui/react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner className="-mt-42" />
    </div>
  );
};

export default LoadingScreen;
