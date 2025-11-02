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
        <Button
          className={`h-full flex-1 flex flex-col items-center justify-center gap-1 bg-transparent rounded-none ${
            route === "/admin" ? "text-primary" : "text-neutral-400"
          }`}
          as={Link}
          href="/admin"
        >
          <Icon icon="ph:squares-four-fill" className="text-2xl" />
          <span className="text-sm">Dashboard</span>
        </Button>
        <div className="w-[30vw] h-full py-2 ">
          <Button
            variant="bordered"
            className={`h-full w-full flex flex-col items-center justify-center gap-1 rounded-sm ${
              route === "/admin/scan"
                ? "bg-transparent !border-3 border-neutral-700 text-primary"
                : "bg-primary text-neutral-100"
            }`}
            as={Link}
            href="/admin/scan"
          >
            <Icon icon="bx:qr-scan" className="text-2xl" />
            <span className="text-sm">Scan</span>
          </Button>
        </div>
        <Button
          className={`h-full flex-1 flex flex-col items-center justify-center gap-1 bg-transparent rounded-none ${
            route.startsWith("/admin/household")
              ? "text-primary"
              : "text-neutral-400"
          }`}
          as={Link}
          href="/admin/household"
        >
          <Icon icon="ri:home-5-fill" className="text-2xl" />
          <span className="text-sm">Iuran Rumah</span>
        </Button>
      </Card>
    </div>
  );
};

export default BottomNavbar;
