"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const SignIn = () => {
  return (
    <Button
      type="submit"
      variant="shadow"
      color="primary"
      className="w-full rounded-sm text-white h-12 mt-2"
      radius="none"
      isLoading={false}
      startContent={
        <Icon className="w-4 h-4" icon="material-icon-theme:google" />
      }
    >
      Continue with Google
    </Button>
  );
};

export default SignIn;
