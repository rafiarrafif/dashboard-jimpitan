import {
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

const collectors = [
  {
    id: "1",
    name: "Rafi",
    monthly_count: 150,
    total_count: 1210,
  },
  {
    id: "2",
    name: "Budi",
    monthly_count: 120,
    total_count: 1100,
  },
  {
    id: "3",
    name: "Siti",
    monthly_count: 100,
    total_count: 950,
  },
  {
    id: "4",
    name: "Muh. Aziz",
    monthly_count: 90,
    total_count: 900,
  },
  {
    id: "5",
    name: "Dewi",
    monthly_count: 80,
    total_count: 850,
  },
];

const Leaderboard = () => {
  let list = useAsyncList<typeof collectors[number]>({
    async load({ signal }) {
      console.log("Loading leaderboard data...", signal);
      return {
        items: collectors,
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
