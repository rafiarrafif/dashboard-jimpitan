"use client";
import LoadingScreen from "@/shared/ui/LoadingScreen";
import React, { useState } from "react";

const ViewDetail = ({ householdId }: { householdId: string }) => {
  const [householdData, useHouseholdData] = useState();

  return (
    <div>
      {householdData ? (
        <main>
          <h1>done</h1>
        </main>
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
};

export default ViewDetail;
