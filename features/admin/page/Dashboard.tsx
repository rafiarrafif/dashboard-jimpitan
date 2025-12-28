"use client";
import React from "react";
import Greetings from "../ui/dashboard/Greetings";
import HeaderDashboard from "../ui/dashboard/Header";
import Leaderboard from "../ui/dashboard/Leaderboard";

const Dashboard = () => {
  return (
    <div>
      <HeaderDashboard />
      <div className="mx-4">
        <Greetings />
        <div className="mt-6">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
