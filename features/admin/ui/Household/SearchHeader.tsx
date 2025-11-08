"use client";
import { Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const SearchHeader = () => {
  return (
    <div className="p-3">
      <Input
        placeholder="Nama Perwakilan Keluarga"
        variant="bordered"
        radius="none"
        size="lg"
        classNames={{
          inputWrapper: "border-neutral-400 border-1 rounded-sm",
        }}
        endContent={<Icon icon="ri:search-line" className="text-neutral-900" />}
      />
    </div>
  );
};

export default SearchHeader;
