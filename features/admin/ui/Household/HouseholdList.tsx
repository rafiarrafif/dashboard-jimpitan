"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Card, CardHeader } from "@heroui/react";
import React from "react";

const HouseholdList = ({
  householdList,
}: {
  householdList: HouseholdSimpleList[];
}) => {
  return (
    <div className="flex flex-col gap-2 px-3 mt-2">
      {householdList.map((household, index) => (
        <Card className="rounded-sm" key={index}>
          <CardHeader>
            <span>{household.householdName}</span>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default HouseholdList;
