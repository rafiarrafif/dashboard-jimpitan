"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Button, Form, Select, SelectItem } from "@heroui/react";
import React, { useState } from "react";
import { FormProvider } from "react-hook-form";

const SelectHousehold = ({ props }: { props: HouseholdSimpleList[] }) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  return (
    <div>
      <FormProvider>
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
          <Button
            type="submit"
            variant="shadow"
            color="primary"
            className="w-full rounded-sm text-white h-12 mt-2"
            radius="none"
            isLoading={submitLoading}
          >
            Cek Iuran
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
};

export default SelectHousehold;
