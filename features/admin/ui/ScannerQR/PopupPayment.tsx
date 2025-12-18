import { getHouseholdPopupPayment } from "@/entities/household/model/getHouseholdPopupPayment";
import { HouseholdSimpleList } from "@/entities/household/types";
import { GeistFont } from "@/providers/fonts/GeistFontProvider";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import React, { useEffect } from "react";

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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
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
