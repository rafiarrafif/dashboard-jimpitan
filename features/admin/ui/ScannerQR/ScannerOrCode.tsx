"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Alert, Button, InputOtp, Link, Spinner } from "@heroui/react";
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
  const [loadingText, setLoadingText] = useState("Menghubungkan ke kamera");

  const getPermission = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setHasCameraPermission(true);
        window.location.reload();
      })
      .catch(() => {
        setHasCameraPermission(false);
        setLoadingText("Kamera tidak dapat terhubung");
      });
  };

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) => {
      const videoInputs = devices.filter((d) => d.kind === "videoinput");
      videoInputs[0].deviceId ? setHasCameraPermission(true) : getPermission();
    });
  }, []);

  return (
    <div>
      {useCameraMethod ? (
        <div>
          <div className="mx-8 rounded-sm overflow-hidden shadow-lg border border-neutral-300">
            {hasCameraPermission ? (
              <MainScanner />
            ) : (
              <div className="h-48 bg-neutral-50 px-2 flex flex-col items-center justify-center gap-4 ">
                <Spinner />
                <span>{loadingText}</span>
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
