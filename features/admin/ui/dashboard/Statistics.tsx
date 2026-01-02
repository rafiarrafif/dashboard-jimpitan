"use client";
import { getScanStatistics } from "@/entities/collector/model/getScanStatistics";
import { addToast, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";

const Statistics = () => {
  const { data: session } = useSession();
  const [statisticsData, setStatisticsData] = React.useState({
    totalScans: 0,
    monthlyScans: 0,
  });

  useEffect(() => {
    (async () => {
      const response = await getScanStatistics(session?.user.realId as string);
      response
        ? setStatisticsData(response)
        : addToast({
            color: "danger",
            title: "Tidak dapat memuat statistik",
            description: "Koneksi ke server terputus.",
          });
    })();
  }, []);

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
            <span className="text-xl font-semibold">
              {statisticsData.totalScans}
            </span>
          </div>
          <Divider orientation="vertical" />
          <div className="flex flex-col flex-1 items-center">
            <span>Scan Bulanan</span>
            <span className="text-xl font-semibold">
              {statisticsData.monthlyScans}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Statistics;
