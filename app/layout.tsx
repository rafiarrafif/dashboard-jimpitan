import "./globals.css";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import HeroUIWrapper from "@/providers/HeroUIWrapper";
import { SessionProvider } from "next-auth/react";
import React from "react";

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
