"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Select, SelectItem } from "@heroui/react";
import React from "react";

const SelectHousehold = ({ props }: { props: HouseholdSimpleList[] }) => {
  return (
    <div>
      <Select label="Nama Rumah" placeholder="Pilih Rumah" variant="bordered">
        {props.map((household) => (
          <SelectItem key={household.id}>{household.householdName}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectHousehold;
