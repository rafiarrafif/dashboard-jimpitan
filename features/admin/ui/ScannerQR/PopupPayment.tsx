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
    >
      <ModalContent className={`${GeistFont.variable} font-geist`}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
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
                />
              ) : (
                <Alert
                  color="success"
                  title="Tidak ada tunggakan"
                  description="Semua pembayaran sudah lunas. Tidak dapat menambahkan pembayaran baru."
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PopupPayment;
