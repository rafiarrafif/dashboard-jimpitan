"use client";
import {
  getHouseholdCheckDues,
  HouseholdCheckDues,
} from "@/entities/household/model/getHouseholdCheckDues";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";
import HeaderPage from "../ui/viewDetails/HeaderPage";
import StatusPaymentThisWeek from "../ui/viewDetails/StatusPaymentThisWeek";
import TransactionHistory from "../ui/viewDetails/TransactionHistory";

const ViewDetail = ({ householdId }: { householdId: string }) => {
  const [householdData, setHouseholdData] = useState<HouseholdCheckDues | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const callback = await getHouseholdCheckDues(householdId);
      setHouseholdData(callback);
    })();
  }, []);

  return (
    <div>
      {householdData ? (
        <main className="mx-6 pt-8">
          <HeaderPage householdName={householdData.householdName} />
          <StatusPaymentThisWeek unpaidDues={householdData._count.WeeklyDues} />
          <TransactionHistory transactions={householdData.transactions} />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ViewDetail;
