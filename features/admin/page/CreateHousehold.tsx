"use client";
import React from "react";
import TitleCreateHousehold from "../ui/CreateHousehold/Title";
import FormCreateHousehold from "../ui/CreateHousehold/FormCard";

const CreateHousehold = () => {
  return (
    <div className="pt-8">
      <TitleCreateHousehold />
      <FormCreateHousehold />
    </div>
  );
};

export default CreateHousehold;
