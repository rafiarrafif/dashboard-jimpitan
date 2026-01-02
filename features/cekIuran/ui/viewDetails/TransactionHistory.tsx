import { HouseholdCheckDues } from "@/entities/household/model/getHouseholdCheckDues";
import { Card, CardBody, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

const TransactionHistory = ({
  transactions,
}: {
  transactions: HouseholdCheckDues["transactions"];
}) => {
  return (
    <div className="mt-6">
      <h1 className="text-lg text-neutral-800 font-medium">
        Riwayat Pembayaran
      </h1>
      <div className="flex flex-col gap-2 mt-4">
        {transactions.map((transaction, index) => (
          <Card key={index} classNames={{ base: "rounded-sm" }}>
            <CardBody>
              <div className="relative">
                <h1 className="text-xl text-primary font-semibold pb-2">
                  Rp{transaction.amount.toLocaleString("id-ID")}
                </h1>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="material-symbols:payments"
                    className="text-xl text-neutral-700"
                  />
                  <p className="text-neutral-700">
                    {new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                      timeZone: "Asia/Jakarta",
                    }).format(new Date(transaction.paidAt))}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Icon
                    icon="si:fact-check-fill"
                    className="text-xl text-neutral-700"
                  />
                  <p className="text-neutral-700">
                    {new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "Asia/Jakarta",
                    }).format(
                      new Date(transaction.dueCoverages[0].startDate)
                    )}{" "}
                    -{" "}
                    {new Intl.DateTimeFormat("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                      timeZone: "Asia/Jakarta",
                    }).format(
                      new Date(transaction.dueCoverages.at(-1)?.endDate || "")
                    )}
                  </p>
                </div>
                <div className="absolute top-0 right-0">
                  <Chip
                    color="primary"
                    className="text-sm text-neutral-100 font-medium"
                    classNames={{ base: "rounded-sm py-0" }}
                  >
                    {transaction.issuer.name}
                  </Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
