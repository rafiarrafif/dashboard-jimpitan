"use client";
import React from "react";
import {
  CreateHouseholdFormData,
  HouseholdSimpleList,
} from "@/entities/household/types";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const pronounOptions = [
  { value: "pak", label: "Pak" },
  { value: "bu", label: "Bu" },
  { value: "mas", label: "Mas" },
  { value: "mbak", label: "Mbak" },
  { value: "mbah", label: "Mbah" },
];

const FormCreateHousehold = ({
  householdList,
}: {
  householdList: HouseholdSimpleList[];
}) => {
  const formPayload = useForm<CreateHouseholdFormData>();
  const { handleSubmit, register } = formPayload;

  const sendFormData: SubmitHandler<CreateHouseholdFormData> = (data) =>
    console.log(data);

  return (
    <FormProvider {...formPayload}>
      <Form className="w-full px-4 mt-6" onSubmit={handleSubmit(sendFormData)}>
        <div className="w-full flex flex-col gap-2">
          <Input
            {...register("headOfHousehold")}
            label="Nama Perwakilan Keluarga"
            variant="bordered"
            radius="none"
            classNames={{
              inputWrapper: "border-neutral-400 border-1 rounded-sm",
            }}
            required
          />
          <Select
            {...register("householdPronoun")}
            items={pronounOptions}
            label="Sapaan"
            variant="bordered"
            radius="none"
            classNames={{
              trigger: "border-neutral-400 border-1 rounded-sm",
              popoverContent: "rounded-sm",
            }}
            required
          >
            {(pronounOptions) => (
              <SelectItem
                key={pronounOptions.value}
                classNames={{
                  base: "rounded-sm",
                }}
              >
                {pronounOptions.label}
              </SelectItem>
            )}
          </Select>
          <Select
            {...register("firstNeighborId")}
            items={householdList}
            label="Nama Tetangga 1 (Opsional)"
            variant="bordered"
            radius="none"
            classNames={{
              trigger: "border-neutral-400 border-1 rounded-sm",
              popoverContent: "rounded-sm",
            }}
          >
            {(householdList) => (
              <SelectItem
                key={householdList.id}
                classNames={{
                  base: "rounded-sm",
                }}
              >
                {householdList.householdName}
              </SelectItem>
            )}
          </Select>
          <Select
            {...register("secondNeighborId")}
            items={householdList}
            label="Nama Tetangga 2 (Opsional)"
            variant="bordered"
            radius="none"
            classNames={{
              trigger: "border-neutral-400 border-1 rounded-sm",
              popoverContent: "rounded-sm",
            }}
          >
            {(householdList) => (
              <SelectItem
                key={householdList.id}
                classNames={{
                  base: "rounded-sm",
                }}
              >
                {householdList.householdName}
              </SelectItem>
            )}
          </Select>
        </div>
        <Button
          type="submit"
          variant="shadow"
          color="primary"
          className="w-full rounded-sm text-white h-12 mt-2"
          radius="none"
        >
          Tambah
        </Button>
      </Form>
    </FormProvider>
  );
};

export default FormCreateHousehold;
