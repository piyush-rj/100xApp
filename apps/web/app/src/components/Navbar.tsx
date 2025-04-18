"use client"

import { signOut, useSession } from "next-auth/react";
import HoverText from "./DashboardTextHover";
import GlowingText from "./GsapTextHover";
import { useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleLogout = () => {
    signOut({ callbackUrl: '/auth/signin' });
  }

  return (
    <div className="bg-transparent pt-6 p-2 py-4 px-6 flex justify-between backdrop-blur-xl">
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
      <div onClick={handleMenu} className="cursor-pointer flex justify-center items-center gap-x-3 pr-3 mr-4 relative">
        {session?.user?.image ? (
          <img 
            src={session.user.image} 
            alt="Profile picture"
            className="h-8 w-8 rounded-full object-cover" 
          />
        ) : (
          // image div
          <div className="h-8 w-8 rounded-full"></div>
        )}
        <div className="text-[17px]">
          {session?.user?.name || null}
        </div>

        {/* dropdown menu */}

        { menuOpen && (
          <div className="absolute flex justify-center top-12 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-36 z-10">
            <span onClick={handleLogout} className="text-[16px] text-[#e4e4e4] hover:text-red-500 hover:underline transition-all transform duration-150 cursor-pointer ">Logout</span>
          </div>
        )}

      </div>
    </div>
  );
}
