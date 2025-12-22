import "./globals.css";
import { Metadata } from "next";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import HeroUIWrapper from "@/providers/HeroUIWrapper";
import React from "react";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Sistem Jimpitan Jatirejo",
  description: "Sistem transparansi jimpitan dan penggunaan dana desa jatirejo",
  openGraph: {
    description:
      "Sistem transparansi jimpitan dan penggunaan dana desa jatirejo",
  },
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="bg-[#E9E9E9]">
      <body>
        <GeistFontProvider>
          <SessionProvider>
            <HeroUIWrapper>{children}</HeroUIWrapper>
          </SessionProvider>
        </GeistFontProvider>
      </body>
    </html>
  );
};

export default RootLayout;
