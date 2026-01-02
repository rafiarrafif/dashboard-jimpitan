"use client";
import { getHouseholdDetailPayment } from "@/entities/household/model/getHouseholdDetailPayment";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";
import HeaderPage from "../ui/viewDetails/HeaderPage";
import { HouseholdSimpleList } from "@/entities/household/types";
import StatusPaymentThisWeek from "../ui/viewDetails/StatusPaymentThisWeek";

const ViewDetail = ({ householdId }: { householdId: string }) => {
  const [
    householdData,
    setHouseholdData,
  ] = useState<HouseholdSimpleList | null>(null);

  useEffect(() => {
    (async () => {
      const callback = (await getHouseholdDetailPayment(
        householdId
      )) as HouseholdSimpleList;
      setHouseholdData(callback);
    })();
  }, []);

  return (
    <div>
      {householdData ? (
        <main className="mx-6 pt-8">
          <HeaderPage householdName={householdData.householdName} />
          <StatusPaymentThisWeek />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ViewDetail;
