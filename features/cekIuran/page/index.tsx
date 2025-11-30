"use client";
import { getTinyAllHousehold } from "@/entities/household/model/getTinyAllHousehold";
import { HouseholdSimpleList } from "@/entities/household/types";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";

const CekIuran = () => {
  const [householdList, setHouseholdList] = useState<
    HouseholdSimpleList[] | null
  >(null);

  useEffect(() => {
    (async () => {
      const simpleHouseholdList = await getTinyAllHousehold();
      setHouseholdList(simpleHouseholdList);
    })();
  }, []);

  return (
    <div>
      {householdList ? (
        <main>
          <h1>{JSON.stringify(householdList)}</h1>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CekIuran;
