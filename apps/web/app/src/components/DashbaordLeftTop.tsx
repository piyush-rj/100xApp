import { Button } from "./Button"
import { HoverText } from "./HoverText"

export function DashboardLeftTop() {
    return (
        <div>
            <div className="flex justify-center items-center text-[#e4e4e4] font-semibold tracking-wide text-xl  bg-gradient-to-br from-[#121212] to-[#1c1c1c] h-[50px] mt-2 w-[300px] rounded-2xl cursor-pointer border border-gray-700 backdrop-blur-md">
                POST
            </div>

            <div className="text-white bg-gradient-to-br from-[#1f1f1f] to-[#0a0a0a] h-[320px] mt-2 w-[300px] rounded-2xl border border-gray-700 backdrop-blur-md">
                <div className="w-full h-full p-4">
                    <HoverText text="PROFILE" />
                    <HoverText text="TEAMS" />
                    <HoverText text="PLAYERS" />
                    <HoverText text="MESSAGES" />
                    <HoverText text="SEARCH" />
                </div>
            </div>
            
        </div>


    )
}