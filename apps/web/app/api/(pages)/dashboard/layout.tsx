

import { JSX } from "react";
import Navbar from "../../../src/components/Navbar";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
            <div className="relative flex flex-col text-white bg-[#000000] min-h-screen">
                <div className="z-10 sticky top-0 bg-[#000000]">
                    <Navbar />
                </div>

                <div className="flex-1 px-4 pt-4 pb-24">{children}</div>
            </div>
    );
}
