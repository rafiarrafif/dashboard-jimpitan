"use client";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import React from "react";

const Statistics = () => {
  return (
    <Card classNames={{ base: "rounded-sm" }}>
      <CardHeader className="pb-0">
        <h1 className="w-full font-medium text-center text-neutral-600">
          Statistik Admin
        </h1>
      </CardHeader>
      <CardBody className="pb-4">
        <div className="flex h-12 space-x-4 w-full">
          <div className="flex flex-col flex-1 items-center">
            <span>Scan Total</span>
            <span className="text-xl font-semibold">1500</span>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col flex-1 items-center">
            <span>Scan Bulanan</span>
            <span className="text-xl font-semibold">29</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Statistics;
