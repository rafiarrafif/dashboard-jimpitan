import ShowQRHousehold from "@/features/admin/page/ShowQRHousehold";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ShowQRHousehold />
    </Suspense>
  );
};

export default page;
