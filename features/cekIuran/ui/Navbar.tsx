"use client";
import { Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const CekIuranNavbar = () => {
  return (
    <div className="flex justify-between border-b-1 border-neutral-300 py-2">
      <Link href="/" className="flex items-center flex-1 text-blue-500">
        <Icon
          icon="solar:alt-arrow-left-linear"
          className="font-bold text-2xl"
        />
        <span className="text-sm -ml-0.5">Kembali</span>
      </Link>
      <span className="text-center flex-1">Cek Iuran</span>
      <div className="flex-1" />
    </div>
  );
};

export default CekIuranNavbar;
