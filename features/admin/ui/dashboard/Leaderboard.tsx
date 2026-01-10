import { getLeaderboardData } from "@/entities/collector/model/getLeaderboardData";
import {
  addToast,
  Card,
  CardBody,
  CardHeader,
  getKeyValue,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import React from "react";

const Leaderboard = () => {
  let list = useAsyncList<{
    id: string;
    name: string;
    monthly_count: number;
    total_count: number;
  }>({
    async load({ signal }) {
      const response = await getLeaderboardData();
      const dataCollectors = response.data;
      if (!response.success)
        addToast({
          title: "Connection Error",
          description: "Failed to load leaderboard data.",
          color: "danger",
        });
      console.log("Loading leaderboard data...", signal);
      return {
        items: dataCollectors || [],
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          let first = a[sortDescriptor.column as string];
          let second = b[sortDescriptor.column as string];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });
  return (
    <Card classNames={{ base: "rounded-sm" }}>
      <CardHeader className="pb-0">
        <h1 className="w-full font-medium text-center text-neutral-600">
          Leaderboard
        </h1>
      </CardHeader>
      <CardBody>
        <Table
          aria-label="Leaderboard Table"
          shadow="none"
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
          classNames={{
            wrapper: "p-0 ",
          }}
        >
          <TableHeader className="rounded-none">
            <TableColumn key="name" allowsSorting>
              NAMA
            </TableColumn>
            <TableColumn key="monthly_count" allowsSorting>
              BULANAN
            </TableColumn>
            <TableColumn key="total_count" allowsSorting>
              TOTAL
            </TableColumn>
          </TableHeader>
          <TableBody items={list.items}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => (
                  <TableCell key={columnKey}>
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Leaderboard;
