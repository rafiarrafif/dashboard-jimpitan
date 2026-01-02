import { Alert } from "@heroui/react";
import React from "react";

const StatusPaymentThisWeek = ({ unpaidDues }: { unpaidDues: number }) => {
  return (
    <div className="mt-4">
      {unpaidDues > 0 ? (
        <Alert
          classNames={{ base: "rounded-sm border border-danger-500" }}
          color="danger"
          title={<span className="font-normal">Status Iuran Minggu Ini</span>}
          description={
            <span className="font-semibold text-lg ">
              Belum Lunas {unpaidDues}
            </span>
          }
        />
      ) : (
        <Alert
          classNames={{ base: "rounded-sm border border-success-500" }}
          color="success"
          title={<span className="font-normal">Status Iuran Minggu Ini</span>}
          description={
            <span className="font-semibold text-lg ">Sudah Lunas</span>
          }
        />
      )}
    </div>
  );
};

export default StatusPaymentThisWeek;
