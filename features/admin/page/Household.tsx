"use client";
import React from "react";
import SearchHeader from "../ui/Household/SearchHeader";
import CreateButton from "../ui/Household/CreateButton";

const Household = () => {
  return (
    <div className="h-screen">
      <SearchHeader />
      <div className="fixed bottom-[12vh] right-[4vw]">
        <CreateButton />
      </div>
    </div>
  );
};

export default Household;
