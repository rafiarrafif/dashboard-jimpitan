"use client";
import {
  getHouseholdMetaQR,
  HouseholdMetaQR,
} from "@/entities/household/model/getHouseholdMetaQR";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HouseholdQRCanvas from "../ui/CreateHousehold/ShowQR/HouseholdQRCanvas";

const ShowQRHousehold = () => {
  const householdId = useSearchParams().get("id");
  const [householdData, setHouseholdData] = useState<HouseholdMetaQR | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const callback = await getHouseholdMetaQR(householdId!);
      setHouseholdData(callback);
    })();
  }, []);

  return (
    <div>
      {householdData ? (
        <div>
          <HouseholdQRCanvas householdData={householdData} />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ShowQRHousehold;
