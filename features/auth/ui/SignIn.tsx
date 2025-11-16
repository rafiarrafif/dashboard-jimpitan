"use client";
import { signIn } from "@/shared/libs/auth/auth-client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

const SignIn = () => {
  const [loadingState, setLoadingState] = useState<boolean>(false);

  return (
    <Button
      variant="shadow"
      color="primary"
      className="w-full rounded-sm text-white h-12 mt-2"
      radius="none"
      isLoading={loadingState}
      startContent={
        <Icon className="w-4 h-4" icon="material-icon-theme:google" />
      }
      onPress={async () => {
        setLoadingState(true);
        await signIn.social({
          provider: "google",
          callbackURL: "/admin",
        });
      }}
    >
      Continue with Google
    </Button>
  );
};

export default SignIn;
