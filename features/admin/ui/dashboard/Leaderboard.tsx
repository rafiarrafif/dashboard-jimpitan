import { Alert, Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";

const Leaderboard = () => {
  return (
    <Card classNames={{ base: "rounded-sm" }}>
      <CardHeader className="pb-0">
        <h1 className="w-full font-medium text-center text-neutral-600">
          Leaderboard
        </h1>
      </CardHeader>
      <CardBody>
        <Alert
          color="warning"
          title="Masih dalam pengembangan"
          description="Fitur leaderboard masih dalam pengembangan, segera hadir!"
        />
      </CardBody>
    </Card>
  );
};

export default Leaderboard;
