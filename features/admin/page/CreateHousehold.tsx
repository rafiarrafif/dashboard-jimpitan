"use client";
import React, { useEffect, useState } from "react";
import TitleCreateHousehold from "../ui/CreateHousehold/Title";
import FormCreateHousehold from "../ui/CreateHousehold/FormCard";
import { HouseholdSimpleList } from "@/entities/household/types";
import { getAllHousehold } from "@/entities/household/model/getAllHousehold";
import LoadingScreen from "@/shared/ui/LoadingScreen";

const CreateHousehold = () => {
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
    <div className="pt-8">
      {householdList ? (
        <div>
          <TitleCreateHousehold />
          <FormCreateHousehold />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default CreateHousehold;
