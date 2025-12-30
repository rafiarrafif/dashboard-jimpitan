import { getHouseholdPopupPayment } from "@/entities/household/model/getHouseholdPopupPayment";
import { HouseholdCheckPayment } from "@/entities/household/types";
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
import SelectAmount from "./SelectAmount";

const PopupPayment = ({
  isOpen,
  onOpenChange,
  cameraStatus,
  scannerValue,
  setScannerValue,
}: {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  cameraStatus: React.Dispatch<React.SetStateAction<boolean>>;
  scannerValue: string;
  setScannerValue: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const [
    householdData,
    setHouseholdData,
  ] = React.useState<HouseholdCheckPayment | null>(null);

  const [unpaidAmount, setUnpaidAmount] = useState<null | number>(0);
  const [duesAmount, setDuesAmount] = useState<null | number>(0);
  const [nominalSelected, setNominalSelected] = useState<null | number>(0);

  useEffect(() => {
    if (!scannerValue) return;
    (async () => {
      const res = await getHouseholdPopupPayment(parseInt(scannerValue));
      setHouseholdData(res as HouseholdCheckPayment);
      setUnpaidAmount(res ? res.WeeklyDues.length : 0);
      setDuesAmount(
        res ? res.WeeklyDues.reduce((acc, curr) => acc + curr.amount, 0) : 0
      );
      setNominalSelected(res && res.WeeklyDues.length > 0 ? 2000 : 0);
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
                  <SelectAmount
                    duesAmount={duesAmount!}
                    nominalSelected={nominalSelected}
                    setNominalSelected={setNominalSelected}
                  />
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
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  setScannerValue(null);
                  onClose();
                }}
              >
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
