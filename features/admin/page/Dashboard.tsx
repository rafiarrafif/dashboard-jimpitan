"use client";
import React from "react";
import Greetings from "../ui/dashboard/Greetings";
import HeaderDashboard from "../ui/dashboard/Header";
import Statistics from "../ui/dashboard/Statistics";

const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard />
      <div className="mx-4">
        <Greetings />
        <div className="mt-6">
          <Statistics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
