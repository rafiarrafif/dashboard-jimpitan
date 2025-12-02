"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Form, Select, SelectItem } from "@heroui/react";
import React from "react";

const SelectHousehold = ({ props }: { props: HouseholdSimpleList[] }) => {
  return (
    <div>
      <Form className="mt-2 mx-2">
        <Select
          items={props}
          label="Nama Rumah"
          placeholder="Pilih Rumah"
          variant="bordered"
          classNames={{
            trigger: "border-neutral-400 border-1 rounded-sm",
            popoverContent: "rounded-sm",
          }}
        >
          {props.map((household) => (
            <SelectItem
              key={household.id}
              classNames={{
                base: "rounded-sm",
              }}
            >
              {household.householdName}
            </SelectItem>
          ))}
        </Select>
      </Form>
    </div>
  );
};

export default SelectHousehold;
