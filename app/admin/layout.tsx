import BottomNavbar from "@/features/admin/ui/shared/BottomNavbar";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      {children}
      <div className="fixed bottom-0">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default layout;
