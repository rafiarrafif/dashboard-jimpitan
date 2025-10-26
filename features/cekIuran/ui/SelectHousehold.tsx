"use client";
import { Select, SelectItem } from "@heroui/react";
import React from "react";
import { getAllHousehold } from "../../../entities/household/model/getAllHousehold";
import { HouseholdList } from "@/entities/household/types";

let householdData: HouseholdList[] | null = null;
let fetchPromise: Promise<void> | null = null;

const SelectHousehold = () => {
  if (!fetchPromise) {
    fetchPromise = getAllHousehold().then((data) => {
      householdData = data.data;
    });
    throw fetchPromise;
  }

  if (!householdData) throw fetchPromise;

  return (
    <div>
      <Select label="Nama Rumah" placeholder="Pilih Rumah" variant="bordered">
        {householdData!.map((household) => (
          <SelectItem key={household.id}>
            {household.headOfHousehold}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectHousehold;
