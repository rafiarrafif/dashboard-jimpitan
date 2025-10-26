"use client";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import React from "react";

const pronounOptions = [
  { value: "pak", label: "Pak" },
  { value: "bu", label: "Bu" },
  { value: "mas", label: "Mas" },
  { value: "mbak", label: "Mbak" },
  { value: "mbah", label: "Mbah" },
];

const FormCreateHousehold = () => {
  return (
    <Form className="w-full px-4 mt-6">
      <div className="w-full flex flex-col gap-2">
        <Input
          label="Nama Perwakilan Keluarga"
          variant="bordered"
          radius="none"
          classNames={{
            inputWrapper: "border-neutral-400 border-1 rounded-sm",
          }}
        />
        <Select
          items={pronounOptions}
          label="Sapaan"
          variant="bordered"
          radius="none"
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
          items={pronounOptions}
          label="Nama Tetangga 1 (Opsional)"
          variant="bordered"
          radius="none"
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
          items={pronounOptions}
          label="Nama Tetangga 2 (Opsional)"
          variant="bordered"
          radius="none"
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
      </div>
      <Button
        type="button"
        variant="shadow"
        color="primary"
        className="w-full rounded-sm text-white h-12 mt-2"
        radius="none"
      >
        Tambah
      </Button>
    </Form>
  );
};

export default FormCreateHousehold;
