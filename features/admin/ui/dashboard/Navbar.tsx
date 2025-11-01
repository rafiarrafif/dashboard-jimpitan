"use client";
import { Avatar, Navbar, NavbarContent } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import React from "react";

const NavbarDashboard = () => {
  const { data: session } = useSession();

  return (
    <Navbar classNames={{ base: "bg-[#e9e9e9]" }}>
      <NavbarContent>
        <Icon
          icon="material-symbols:logout-rounded"
          className="text-2xl text-primary"
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <h1 className="font-medium text-lg">Dashboard</h1>
      </NavbarContent>
      <NavbarContent justify="end">
        <Avatar
          size="md"
          src={session?.user?.image as string}
          classNames={{
            base: "rounded-sm",
          }}
        />
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarDashboard;
