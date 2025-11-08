"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

const CreateButton = () => {
  const route = useRouter();

  return (
    <Button
      onPress={() => route.push("/admin/household/create")}
      className="w-14 h-14 min-w-0 px-0 py-0 rounded-sm -ml-2 bg-primary"
    >
      <Icon icon="ic:baseline-plus" className="text-3xl text-neutral-100" />
    </Button>
  );
};

export default CreateButton;
