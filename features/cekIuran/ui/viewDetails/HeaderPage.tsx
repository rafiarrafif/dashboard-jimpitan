import React from "react";

const HeaderPage = ({ householdName }: { householdName: string }) => {
  return (
    <header className="flex flex-col">
      <span className="">Pengecekan iuran mingguan</span>
      <span className="text-2xl font-medium">
        {householdName
          .split(" ")
          .map(
            (char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()
          )
          .join(" ")}
      </span>
    </header>
  );
};

export default HeaderPage;
