"use client";
import { signOut, useSession } from "next-auth/react";
import { Avatar, Button, Navbar, NavbarContent } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

import React from "react";

const HeaderDashboard = () => {
  const { data: session } = useSession();

  return (
    <Navbar classNames={{ base: "bg-[#e9e9e9]" }}>
      <NavbarContent>
        <Button
          className="w-10 min-w-0 px-0 py-0 rounded-sm -ml-2"
          onPress={() => signOut()}
          variant="light"
        >
          <Icon
            icon="material-symbols:logout-rounded"
            className="text-2xl text-primary"
          />
        </Button>
      </NavbarContent>
      <NavbarContent justify="center">
        <h1 className="font-medium text-lg">Dashboard</h1>
      </NavbarContent>
      <NavbarContent justify="end">
        <Avatar
          draggable={false}
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

export default HeaderDashboard;
