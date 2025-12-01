"use client";
import { getTinyAllHousehold } from "@/entities/household/model/getTinyAllHousehold";
import { HouseholdSimpleList } from "@/entities/household/types";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useEffect, useState } from "react";
import SelectHousehold from "../ui/SelectHousehold";

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
          <SelectHousehold props={householdList} />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CekIuran;
