"use client"

import { useSession } from "next-auth/react";
import HoverText from "./DashboardTextHover";
import GlowingText from "./GsapTextHover";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <div className="bg-transparent pt-6 p-2 py-0 px-6 flex justify-between">
      {/* left */}
      <div className="text-xl font-semibold">
        <GlowingText text="GamerConnect"/>
      </div>

      {/* middle */}
      <div className="flex gap-x-10">
        <div>
          <HoverText text="Home"/>
        </div>
        <div>
          <HoverText text="Players"/>
        </div>
        <div>
          <HoverText text="Teams"/>
        </div>
        <div>
          <HoverText text="About"/>
        </div>
      </div>

      {/* right */}
      <div className="flex justify-center items-center gap-x-3 pr-3 mr-4">
        {session?.user?.image ? (
          <img 
            src={session.user.image} 
            alt="Profile picture"
            className="h-8 w-8 rounded-full object-cover" 
          />
        ) : (
          <div className="h-8 w-8 rounded-full bg-red-300"></div>
        )}
        <div className="text-[17px]">
          {session?.user?.name || null}
        </div>
      </div>
    </div>
  );
}
