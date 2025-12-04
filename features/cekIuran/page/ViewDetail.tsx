"use client";
import { getHouseholdDetailPayment } from "@/entities/household/model/getHouseholdDetailPayment";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";

const ViewDetail = ({ householdId }: { householdId: string }) => {
  const [householdData, setHouseholdData] = useState<any>();

  useEffect(() => {
    (async () => {
      const callback = await getHouseholdDetailPayment(householdId);
      setHouseholdData(callback);
    })();
  }, []);

  return (
    <div>
      {householdData ? (
        <main>
          <h1>{JSON.stringify(householdData)}</h1>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ViewDetail;
