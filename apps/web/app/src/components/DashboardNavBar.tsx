"use client"
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { useSession } from "next-auth/react"
import Link from "next/link";

export function DashboardMenu() {
    const { data: session } = useSession();

    const [query, setQuery] = useState("");

    return (
        <div className="min-w-screen bg-gradient-to-br from-[#121212]  to-[#1e1e1e] h-[60px] bg-white/5 border border-white/10 mt-3 mx-4 rounded-xl flex items-center justify-between px-6 ">  
            <div className="text-xl font-semibold text-white">
                <Link href="/dashboard">GamerConnect</Link>
            </div>

            <div className="flex justify-center flex-1 ml-2">
            <SearchBar
                value={query}
                onChange={(val) => setQuery(val)}
                placeholder="Search for players, games, or teams..."
            />
            </div>

            <div className="flex items-center space-x-3">
            {session?.user?.image && (
                <img
                src={session.user.image}
                alt={session.user.name || "User"}
                className="h-9 w-9 rounded-full"
                />
            )}
            {session?.user?.name && (
                <div className="text-white text-base">
                Welcome, {session.user.name}
                </div>
            )}
            </div>
        </div>
    );
}
