"use client";
import { Button, Card, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import React from "react";

const BottomNavbar = () => {
  const route = usePathname();
  return (
    <div className="w-screen h-24 p-2">
      <Card
        radius="none"
        className="w-full h-full flex flex-row px-4gap-2"
        classNames={{ base: "rounded-sm" }}
      >
        <Link
          className={`flex-1 flex flex-col items-center justify-center gap-1 ${
            route === "/admin" ? "text-primary" : "text-neutral-400"
          }`}
        >
          <Icon icon="ph:squares-four-fill" className="text-2xl" />
          <span className="text-sm">Dashboard</span>
        </Link>
        <div className="w-[30vw] h-full py-2 ">
          <Button className="h-full w-full flex flex-col items-center justify-center gap-1 bg-primary text-neutral-100 rounded-sm">
            <Icon icon="bx:qr-scan" className="text-2xl" />
            <span className="text-sm">Scan</span>
          </Button>
        </div>
        <Link
          className={`flex-1 flex flex-col items-center justify-center gap-1 ${
            route.startsWith("/admin/household")
              ? "text-primary"
              : "text-neutral-400"
          }`}
        >
          <Icon icon="ri:home-5-fill" className="text-2xl" />
          <span className="text-sm">Iuran Rumah</span>
        </Link>
      </Card>
    </div>
  );
};

export default BottomNavbar;
