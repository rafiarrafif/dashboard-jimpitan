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
          <header className="text-center mt-8 mb-8">
            <h1 className="text-2xl font-semibold text-primary">Pilih rumah</h1>
            <p className="text-sm text-neutral-700">
              Masukan nama kepala rumah tangga sebagai perwakilan
            </p>
          </header>
          <SelectHousehold props={householdList} />
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CekIuran;
