import DashboardLeftTopIcon from "./DasboardLeftTopIcon";
import DashboardTextBox from "./DashboardTextBox";
import { Gamepad, Gamepad2 } from "lucide-react";
import { Users } from "lucide-react"
import { Trophy } from "lucide-react"
import LeftButton from "./DashboardLeftButtons/LeftButton";
import RightButton from "./DashboardLeftButtons/RIghtButton";


<DashboardLeftTopIcon svg={<Gamepad2 className="text-purple-200 w-[30px] h-[30px]" />} />


export function DashboardLeftTop() {
    return <div className="pl-[50px] h-[700px] px-4 py-4 pt-[130px]">
        <div className="mb-4">
            <DashboardTextBox text="Your Professional Esports Team Finder"/>
        </div>
        <div className="mt-[70px] mb-4 text-[65px] w-[600px] leading-[70px] text-[#e4e4e4] font-semibold ">
            Find your perfect <span className="font-bold bg-gradient-to-r from-purple-400 to-gray-500 text-transparent bg-clip-text">Gaming Squad</span>
        </div>
        <div className="text-xl text-[#797979] leading-[32px] font-sans">
            Connect with gamers who share your skill level, play style, and ambitions. Build your dream team and dominate the competition together.
        </div>
        <div className="flex gap-x-5 mt-5">
            <div>
                <LeftButton text="Find Players"/>
            </div>
            <div>
                <RightButton text="Browse Teams" /> 
            </div>
        </div>
        <div className="flex gap-x-[150px] mt-9">
            <div>
                <DashboardLeftTopIcon svg={<Gamepad className="text-purple-200 w-[33px] h-[33px] " />} />
            </div>
            <div>
                <DashboardLeftTopIcon svg={<Users className="text-purple-200 w-[30px] h-[30px]" />} />
            </div>
            <div>
                <DashboardLeftTopIcon svg={<Trophy className="text-purple-200 w-[30px] h-[30px]" />} />
            </div>

        </div>
    </div>
}