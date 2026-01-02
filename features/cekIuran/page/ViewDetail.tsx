"use client";
import { getHouseholdCheckDues } from "@/entities/household/model/getHouseholdCheckDues";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";
import HeaderPage from "../ui/viewDetails/HeaderPage";
import {
  HouseholdCheckDues,
  HouseholdCheckPayment,
} from "@/entities/household/types";
import StatusPaymentThisWeek from "../ui/viewDetails/StatusPaymentThisWeek";

const ViewDetail = ({ householdId }: { householdId: string }) => {
  const [householdData, setHouseholdData] = useState<HouseholdCheckDues | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const callback = (await getHouseholdCheckDues(
        householdId
      )) as HouseholdCheckDues;
      setHouseholdData(callback);
      console.log("household detail payment: ", callback);
    })();
  }, []);

  return (
    <div>
      {householdData ? (
        <main className="mx-6 pt-8">
          <HeaderPage householdName={householdData.householdName} />
          <StatusPaymentThisWeek unpaidDues={householdData._count.WeeklyDues} />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ViewDetail;
