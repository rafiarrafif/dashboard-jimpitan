"use client";
import React, { useState } from "react";
import {
  CreateHouseholdFormData,
  HouseholdSimpleList,
} from "@/entities/household/types";
import {
  addToast,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateNewHouseholdSchema } from "@/entities/household/validation/CreateNewHousehold";
import { insertNewHousehold } from "@/entities/household/model/insertNewHousehold";
import { useRouter } from "next/navigation";

const pronounOptions = [
  { value: "bapak", label: "Bapak" },
  { value: "ibu", label: "Ibu" },
  { value: "mas", label: "Mas" },
  { value: "mbak", label: "Mbak" },
  { value: "mbah", label: "Mbah" },
];

const FormCreateHousehold = ({
  householdList,
}: {
  householdList: HouseholdSimpleList[];
}) => {
  const router = useRouter();
  const [submitLoading, setSubmitLoading] = useState(false);

  const formPayload = useForm<CreateHouseholdFormData>({
    resolver: zodResolver(CreateNewHouseholdSchema),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = formPayload;

  const sendFormData: SubmitHandler<CreateHouseholdFormData> = async (data) => {
    setSubmitLoading(true);
    try {
      const callback = await insertNewHousehold(data);
      if (callback.success) {
        addToast({
          title: callback.message.title,
          description: callback.message.description,
          color: "success",
        });
        setTimeout(() => router.push("/"), 3000);
      } else {
        addToast({
          title: "Terjadi masalah",
          description: "Terjadi masalah saat ingin menambahkan data",
          color: "danger",
        });
        setSubmitLoading(false);
      }
    } catch (error) {
      console.log(error);
      addToast({
        title: "Koneksi ke server terputus",
        description: "Pastikan koneksi anda tidak terganggu",
        color: "danger",
      });
      setSubmitLoading(false);
    }
  };

  return (
    <FormProvider {...formPayload}>
      <Form className="w-full px-4 mt-6" onSubmit={handleSubmit(sendFormData)}>
        <div className="w-full flex flex-col gap-2">
          <Input
            {...register("headOfHousehold")}
            label="Nama Perwakilan Keluarga"
            variant="bordered"
            radius="none"
            isInvalid={errors.headOfHousehold ? true : false}
            errorMessage={errors.headOfHousehold?.message as string}
            classNames={{
              inputWrapper: "border-neutral-400 border-1 rounded-sm",
            }}
          />
          <Select
            {...register("householdPronoun")}
            items={pronounOptions}
            label="Sapaan"
            variant="bordered"
            radius="none"
            isInvalid={errors.householdPronoun ? true : false}
            errorMessage={errors.householdPronoun?.message as string}
            classNames={{
              trigger: "border-neutral-400 border-1 rounded-sm",
              popoverContent: "rounded-sm",
            }}
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
            isInvalid={errors.firstNeighborId ? true : false}
            errorMessage={errors.firstNeighborId?.message as string}
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
            isInvalid={errors.secondNeighborId ? true : false}
            errorMessage={errors.secondNeighborId?.message as string}
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
          isLoading={submitLoading}
        >
          Tambah
        </Button>
      </Form>
    </FormProvider>
  );
};

export default FormCreateHousehold;
