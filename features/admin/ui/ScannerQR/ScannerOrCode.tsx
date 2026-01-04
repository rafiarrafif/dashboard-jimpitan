"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Alert, Button, InputOtp, Link } from "@heroui/react";
import MainScanner from "./MainScanner";

interface ScannerOrCodeProps {
  useCameraMethod: boolean;
  setUseCameraMethod: Dispatch<SetStateAction<boolean>>;
}

const ScannerOrCode = ({
  useCameraMethod,
  setUseCameraMethod,
}: ScannerOrCodeProps) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [isCameraBlocked, setIsCameraBlocked] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const requestCameraPermission = async () => {
    setIsButtonLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach((track) => track.stop());
      setHasCameraPermission(true);
    } catch (error) {
      setHasCameraPermission(false);
      setIsCameraBlocked(true);
    }
  };

  return (
    <div>
      {useCameraMethod ? (
        <div>
          <div className="mx-8 rounded-sm overflow-hidden shadow-lg border border-neutral-300">
            {isCameraBlocked ? (
              <div className="h-48 bg-neutral-50 px-4 flex flex-col items-center justify-center gap-4 ">
                <h1 className="font-medium text-lg">Tidak mendapatkan akses</h1>
                <p className="text-sm text-center text-neutral-700">
                  Hal ini dapat terjadi jika permintaan akses kamera sebelumnya
                  ditolak. Silahkan reset perizinan situs ini pada setelan
                  browser.
                </p>
              </div>
            ) : (
              <div>
                {hasCameraPermission ? (
                  <MainScanner />
                ) : (
                  <div className="h-48 bg-neutral-50 px-2 flex flex-col items-center justify-center gap-4 ">
                    <Button
                      onPress={requestCameraPermission}
                      className="w-fit rounded-sm text-white text-md h-12"
                      color="primary"
                      isLoading={isButtonLoading}
                    >
                      Buka kamera
                    </Button>
                    <span className="text-sm text-center text-neutral-700">
                      Tekan tombol diatas untuk membuka scanner
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="w-full flex justify-center mt-3">
            <span className="text-sm text-neutral-600">
              Kamera bermasalah?{" "}
              <Link
                onPress={() => setUseCameraMethod(false)}
                className="text-blue-400 text-sm"
              >
                masukan code
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full pt-4">
          <InputOtp
            classNames={{
              segmentWrapper: "gap-x-0",
              segment: [
                "relative",
                "h-10",
                "w-10",
                "border-y",
                "border-r",
                "first:rounded-l-md",
                "first:border-l",
                "last:rounded-r-md",
                "border-default-400",
                "data-[active=true]:border",
                "data-[active=true]:z-20",
                "data-[active=true]:ring-2",
                "data-[active=true]:ring-offset-2",
                "data-[active=true]:ring-offset-background",
                "data-[active=true]:ring-foreground",
              ],
            }}
            length={8}
            radius="none"
          />
          <div className="px-12">
            <Alert
              title="Launchpad not available"
              description={
                <span>
                  This feature is not available yet.{" "}
                  <a className="text-blue-500" href="mailto:rafi@arrafif.com">
                    Contact developer
                  </a>{" "}
                  for more information.
                </span>
              }
              color="warning"
            ></Alert>
          </div>
          <div className="w-full flex justify-center mt-2">
            <span className="text-sm text-neutral-600">
              Pakai kamera?{" "}
              <Link
                onPress={() => setUseCameraMethod(true)}
                className="text-blue-400 text-sm"
              >
                gunakan scanner
              </Link>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScannerOrCode;
