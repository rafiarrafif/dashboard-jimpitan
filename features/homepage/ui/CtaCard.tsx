import { Button } from "@heroui/react";
import React from "react";

const CtaCard = () => {
  return (
    <div className="mx-4 mt-10 flex flex-col gap-4">
      <div className="w-full">
        <Button className="w-full rounded-sm" radius="none" color="primary">
          Cek Status Pembayaran
        </Button>
        <p className="text-xs text-center mt-1 text-neutral-600">
          Lihat apakah iuran rumah Anda dan Tetangga Anda sudah tercatat minggu
          ini.
        </p>
      </div>
      <div>
        <Button
          className="w-full rounded-sm"
          radius="none"
          color="primary"
          isDisabled
        >
          Laporan Keuangan
        </Button>
        <p className="text-xs text-center mt-1 text-neutral-600">
          Segera hadir. pantau total iuran yang terkumpul dan penggunaannya
          secara transparan.
        </p>
      </div>
    </div>
  );
};

export default CtaCard;
