"use client";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthBlockedCard = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center h-full text-center pt-24 px-8">
      <Icon icon="mdi:security-lock" className="h-auto w-12 text-neutral-100" />
      <h1 className="mt-6 text-xl font-semibold text-neutral-100">
        Kamu tidak diizinkan
      </h1>
      <p className="mt-2 text-neutral-200">
        Halaman admin terproteksi, dan hanya email admin yang diizinkan
        mengaksesnya. Email kamu tidak terdaftar sebagai admin
      </p>

      <div className="mt-4 text-neutral-400">
        <p>
          <span className="text-blue-600">{session?.user?.email}</span>{" "}
          unauthorized
        </p>
      </div>

      <div className="flex flex-col justify-center gap-2 w-full px-14 mt-8">
        <Button
          className="rounded-sm font-medium"
          onPress={() => signOut({ redirectTo: "/auth/login" })}
        >
          Keluar
        </Button>
        <Button
          as={Link}
          href="mailto:rafi@arrafif.com"
          className="rounded-sm bg-transparent text-neutral-300 font-medium border border-neutral-300"
        >
          Hubungi developer
        </Button>
      </div>
    </div>
  );
};

export default AuthBlockedCard;
