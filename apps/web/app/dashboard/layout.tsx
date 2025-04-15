"use client"

import { JSX } from "react";
import { DashboardMenu } from "../src/components/DashboardNavBar";
import { SessionProvider } from "next-auth/react";


export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <div className="relative flex flex-col text-white bg-[#000000] min-h-screen">
        
        <div className="z-10 sticky top-0 bg-[#000000]"> 
            <SessionProvider>
                <DashboardMenu/>
            </SessionProvider>
        </div>

        <div className="flex-1 px-4 pt-4 pb-24">{children}</div>
        </div>
    );
}
