import {
  Card,
  CardBody,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React from "react";

const collectors = [
  {
    name: "Rafi",
    monthly_count: 150,
    total_count: 1210,
  },
  {
    name: "Budi",
    monthly_count: 120,
    total_count: 1100,
  },
  {
    name: "Siti",
    monthly_count: 100,
    total_count: 950,
  },
  {
    name: "Muh. Aziz",
    monthly_count: 90,
    total_count: 900,
  },
  {
    name: "Dewi",
    monthly_count: 80,
    total_count: 850,
  },
];

const Leaderboard = () => {
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
          classNames={{
            wrapper: "p-0 ",
          }}
        >
          <TableHeader className="rounded-none">
            <TableColumn key="name">NAMA</TableColumn>
            <TableColumn key="monthly_count">BULANAN</TableColumn>
            <TableColumn key="total_count">TOTAL</TableColumn>
          </TableHeader>
          <TableBody>
            {collectors.map((collector, index) => (
              <TableRow key={index}>
                <TableCell key="name">{collector.name}</TableCell>
                <TableCell key="monthly_count">
                  {collector.monthly_count}
                </TableCell>
                <TableCell key="total_count">{collector.total_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default Leaderboard;
