"use client";
import React from "react";
import Greetings from "../ui/dashboard/Greetings";
import HeaderDashboard from "../ui/dashboard/Header";
import Statistics from "../ui/dashboard/Statistics";
import Leaderboard from "../ui/dashboard/Leaderboard";

const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard />
      <div className="mx-4">
        <Greetings />
        <div className="mt-6">
          <Statistics />
        </div>
        <div className="mt-2">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
