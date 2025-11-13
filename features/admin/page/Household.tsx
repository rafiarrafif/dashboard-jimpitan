"use client";
import React, { useEffect, useState } from "react";
import { HouseholdSimpleList } from "@/entities/household/types";
import SearchHeader from "../ui/Household/SearchHeader";
import CreateButton from "../ui/Household/CreateButton";
import HouseholdList from "../ui/Household/HouseholdList";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import { getAllHousehold } from "@/entities/household/model/getAllHousehold";
import { useHeaderSearchListStore } from "../store/HeaderSearchList.store";

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

  const searchHousehold = useHeaderSearchListStore(
    (state) => state.searchHousehold
  );

  return (
    <div className="h-screen">
      {householdList ? (
        <div>
          <SearchHeader />
          <p>{searchHousehold}</p>
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
