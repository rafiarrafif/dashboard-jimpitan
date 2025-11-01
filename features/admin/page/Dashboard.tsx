"use client";
import React from "react";
import NavbarDashboard from "../ui/dashboard/Navbar";
import Greetings from "../ui/dashboard/Greetings";

const Dashboard = () => {
  return (
    <div>
      <NavbarDashboard />
      <div className="mx-4">
        <Greetings />
      </div>
    </div>
  );
};

export default Dashboard;
