"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const ShowQRHousehold = () => {
  const householdId = useSearchParams().get("id");
  return <div>{householdId}</div>;
};

export default ShowQRHousehold;
