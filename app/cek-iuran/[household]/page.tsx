import React from "react";

const page = async ({ params }: { params: Promise<{ household: string }> }) => {
  const { household } = await params;
  return (
    <div>
      <h1>Halaman household: {household}</h1>
    </div>
  );
};

export default page;
