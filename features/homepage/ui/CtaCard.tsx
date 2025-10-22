import { Button, Link } from "@heroui/react";
import React from "react";

const CtaCard = () => {
  return (
    <div className="mx-4 mt-10 flex flex-col gap-4">
      <div className="w-full">
        <Button
          as={Link}
          className="w-full rounded-sm text-white h-14"
          radius="none"
          color="primary"
          href="cek-iuran"
        >
          Cek Status Pembayaran
        </Button>
        <p className="text-xs text-center mt-1 text-neutral-600">
          Lihat apakah iuran rumah Anda dan Tetangga Anda sudah tercatat minggu
          ini.
        </p>
      </div>
      <div>
        <Button
          className="w-full rounded-sm h-12"
          radius="none"
          color="primary"
          variant="bordered"
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
