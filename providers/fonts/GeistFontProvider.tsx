import React from "react";
import localFont from "next/font/local";

const Geist = localFont({
  src: [
    {
      path: "../../fonts/SpaceGrotesk-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/SpaceGrotesk-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/SpaceGrotesk-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

const GeistFontProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className={`${Geist.className}`}>{children}</div>;
};

export default GeistFontProvider;
