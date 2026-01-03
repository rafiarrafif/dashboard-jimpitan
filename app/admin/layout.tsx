import { auth } from "@/auth";
import { redirect } from "next/navigation";
import BottomNavbar from "@/features/admin/ui/shared/BottomNavbar";
import React from "react";

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await auth();
  if (!session?.user.realId) return redirect("/auth/blocked");
  return (
    <div>
      {children}
      <div className="h-32 w-full" />
      <div className="fixed bottom-0">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default layout;
