"use client";
import React from "react";
import Greetings from "../ui/dashboard/Greetings";
import HeaderDashboard from "../ui/dashboard/Header";

const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard />
      <div className="mx-4">
        <Greetings />
      </div>
    </div>
  );
};

export default Dashboard;
