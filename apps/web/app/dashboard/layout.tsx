"use client";

import { JSX } from "react";
import { DashboardMenu } from "../src/components/DashboardNavBar";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="relative flex flex-col min-h-screen text-white bg-[#000000] overflow-hidden">

      <div className="relative z-10">
        <SessionProvider>
          <DashboardMenu />
        </SessionProvider>

        <div className="flex-1 px-4 pt-4 pb-24">{children}</div>
      </div>
    </div>
  );
}
