"use client";
import { useSession } from "@/shared/libs/auth/auth-client";
import React from "react";

const Greetings = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col ml-2 mt-2">
      <span>Selamat datang,</span>
      <span className="text-xl font-medium -mt-1">{session?.user?.name}</span>
    </div>
  );
};

export default Greetings;
