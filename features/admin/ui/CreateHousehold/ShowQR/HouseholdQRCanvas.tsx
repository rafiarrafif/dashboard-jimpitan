import { HouseholdMetaQR } from "@/entities/household/model/getHouseholdMetaQR";
import React from "react";

const HouseholdQRCanvas = ({
  householdData,
}: {
  householdData: HouseholdMetaQR;
}) => {
  return <div>{JSON.stringify(householdData)}</div>;
};

export default HouseholdQRCanvas;
