"use client";
import { HouseholdSimpleList } from "@/entities/household/types";
import { Card, CardBody, CardHeader, Chip } from "@heroui/react";
import { useHeaderSearchListStore } from "../../store/HeaderSearchList.store";
import React from "react";

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
            <CardHeader className="flex flex-row justify-between">
              <span className="font-medium text-lg">
                {household.householdName.replace(/\b\w/g, (char) =>
                  char.toUpperCase()
                )}
              </span>
              <Chip
                color="success"
                variant="flat"
                classNames={{
                  base: "rounded-sm",
                }}
              >
                <span>Lunas</span>
              </Chip>
            </CardHeader>
          </Card>
        ))}
    </div>
  );
};

export default HouseholdList;
