// @ts-expect-error: allow side-effect CSS import without type declarations
import "./globals.css";
import GeistFontProvider from "@/providers/fonts/GeistFontProvider";
import HeroUIWrapper from "@/providers/HeroUIWrapper";
import SessionWrapper from "@/providers/SessionWrapper";
import React from "react";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" className="bg-[#E9E9E9]">
      <body>
        <GeistFontProvider>
          <SessionWrapper>
            <HeroUIWrapper>{children}</HeroUIWrapper>
          </SessionWrapper>
        </GeistFontProvider>
      </body>
    </html>
  );
};

export default RootLayout;
