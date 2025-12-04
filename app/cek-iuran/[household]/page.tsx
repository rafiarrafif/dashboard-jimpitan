import ViewDetail from "@/features/cekIuran/page/ViewDetail";
import React from "react";

const page = async ({ params }: { params: Promise<{ household: string }> }) => {
  const { household } = await params;
  return (
    <div>
      <ViewDetail householdId={household} />
    </div>
  );
};

export default page;
