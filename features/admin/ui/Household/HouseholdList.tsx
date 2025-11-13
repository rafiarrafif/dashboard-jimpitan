"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Card, CardHeader } from "@heroui/react";
import React from "react";
import { useHeaderSearchListStore } from "../../store/HeaderSearchList.store";

const HouseholdList = ({
  householdList,
}: {
  householdList: HouseholdSimpleList[];
}) => {
  const householdSearchQuery = useHeaderSearchListStore(
    (query) => query.searchHousehold
  );
  return (
    <div className="flex flex-col gap-2 px-3 mt-2">
      {householdList
        .filter((household) =>
          household.householdName
            .toLowerCase()
            .includes(householdSearchQuery.toLowerCase())
        )
        .map((household, index) => (
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
