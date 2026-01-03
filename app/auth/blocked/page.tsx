import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AuthBlockedCard from "@/features/auth/ui/Blocked";
import React from "react";

const page = async () => {
  const session = await auth();
  if (session?.user.realId) redirect("/admin");
  return (
    <div className="bg-black h-screen w-screen text-white">
      <AuthBlockedCard />
    </div>
  );
};

export default page;
