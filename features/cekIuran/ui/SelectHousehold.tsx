"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { addToast, Button, Form, Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface SelectHouseholdInput {
  householdId: string;
}

const SelectHousehold = ({ props }: { props: HouseholdSimpleList[] }) => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);

  const formPayload = useForm<SelectHouseholdInput>();
  const { handleSubmit, register } = formPayload;

  const redirectUserToDestination: SubmitHandler<SelectHouseholdInput> = (
    data
  ) => {
    if (!data.householdId) {
      addToast({
        title: "Nama rumah belum dipilih",
        description: "Silahkan pilih nama perwakilan rumah terlebih dahulu.",
        color: "danger",
        timeout: 3000,
      });
    } else {
      setSubmitLoading(true);
      router.push(`/cek-iuran/${data.householdId}`);
    }
  };

  return (
    <div>
      <FormProvider {...formPayload}>
        <Form
          className="mt-2 mx-2"
          onSubmit={handleSubmit(redirectUserToDestination)}
        >
          <Select
            {...register("householdId")}
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
