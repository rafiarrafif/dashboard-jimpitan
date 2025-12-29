import { getHouseholdPopupPayment } from "@/entities/household/model/getHouseholdPopupPayment";
import { HouseholdSimpleList } from "@/entities/household/types";
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
  ] = React.useState<HouseholdSimpleList | null>(null);

  const [unpaidAmount, setUnpaidAmount] = useState<null | number>(3);

  useEffect(() => {
    if (!scannerValue) return;
    (async () => {
      const res = await getHouseholdPopupPayment(parseInt(scannerValue));
      setHouseholdData(res as HouseholdSimpleList);
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
                <Alert
                  color="danger"
                  title={`Ada ${unpaidAmount} tunggakan`}
                  description="Silahkan masukan nominal pembayaran."
                  classNames={{
                    base: "rounded-sm",
                  }}
                />
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
