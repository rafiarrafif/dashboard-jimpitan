"use client";
import React, { useEffect, useState } from "react";
import { HouseholdSimpleList } from "@/entities/household/types";
import SearchHeader from "../ui/Household/SearchHeader";
import CreateButton from "../ui/Household/CreateButton";
import HouseholdList from "../ui/Household/HouseholdList";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import { getAllHousehold } from "@/entities/household/model/getAllHousehold";

const Household = () => {
  const [householdList, setHouseholdList] = useState<
    HouseholdSimpleList[] | null
  >(null);

  useEffect(() => {
    (async () => {
      const callback = await getAllHousehold();
      setHouseholdList(callback);
    })();
  }, []);

  return (
    <div className="h-screen">
      {householdList ? (
        <div>
          <SearchHeader />
          <HouseholdList householdList={householdList} />
        </div>
      ) : (
        <LoadingScreen />
      )}
      <div className="fixed bottom-[12vh] right-[4vw]">
        <CreateButton />
      </div>
    </div>
  );
};

export default Household;
