import { getHouseholdPopupPayment } from "@/entities/household/model/getHouseholdPopupPayment";
import {
  HouseholdCheckPayment,
  HouseholdSimpleList,
} from "@/entities/household/types";
import { GeistFont } from "@/providers/fonts/GeistFontProvider";
import {
  Alert,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";

const PopupPayment = ({
  isOpen,
  onOpenChange,
  cameraStatus,
  scannerValue,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cameraStatus: React.Dispatch<React.SetStateAction<boolean>>;
  scannerValue: string;
}) => {
  const [
    householdData,
    setHouseholdData,
  ] = React.useState<HouseholdCheckPayment | null>(null);

  const [unpaidAmount, setUnpaidAmount] = useState<null | number>(0);
  const [duesAmount, setDuesAmount] = useState<null | number>(0);

  useEffect(() => {
    if (!scannerValue) return;
    (async () => {
      const res = await getHouseholdPopupPayment(parseInt(scannerValue));
      setHouseholdData(res as HouseholdCheckPayment);
      setUnpaidAmount(res ? res.WeeklyDues.length : 0);
      setDuesAmount(
        res ? res.WeeklyDues.reduce((acc, curr) => acc + curr.amount, 0) : 0
      );
      console.log("res popup payment: ", res);
    })();
  }, [scannerValue]);

  return (
    <Modal
      hideCloseButton
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      isDismissable={false}
      onClose={() => {
        cameraStatus(false);
      }}
      classNames={{
        base: "rounded-sm",
      }}
    >
      <ModalContent className={`${GeistFont.variable} font-geist`}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 pb-2 text-xl text-center">
              {householdData?.householdName
                .trim()
                .replace(/\b\w/g, (char) => char.toUpperCase()) || "Loading..."}
            </ModalHeader>
            <ModalBody>
              {unpaidAmount ? (
                <div>
                  <Alert
                    color="danger"
                    title={`Ada ${unpaidAmount} tunggakan`}
                    description="Silahkan masukan nominal pembayaran."
                    classNames={{
                      base: "rounded-sm",
                    }}
                  />
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h1 className="text-neutral-800">Masukan nominal:</h1>
                      <h4 className="text-sm italic text-neutral-500">
                        Max Rp{duesAmount}
                      </h4>
                    </div>
                    <div className="flex items-center gap-0 border border-neutral-800 rounded-sm h-fit overflow-hidden">
                      <Button className="rounded-none min-w-5 min-h-5 bg-neutral-800">
                        <Icon
                          icon="lucide:plus"
                          className="text-white text-xl"
                        />
                      </Button>
                      <span className="px-2">2000</span>
                      <Button className="rounded-none min-w-5 min-h-5 bg-neutral-800">
                        <Icon
                          icon="lucide:minus"
                          className="text-white text-xl"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <Alert
                  color="success"
                  title="Tidak ada tunggakan"
                  description="Semua pembayaran sudah lunas. Tidak dapat menambahkan pembayaran baru."
                  classNames={{
                    base: "rounded-sm",
                  }}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Batal
              </Button>
              <Button
                isDisabled={!unpaidAmount}
                color="primary"
                className="text-white rounded-sm"
                onPress={onClose}
              >
                Bayar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PopupPayment;
