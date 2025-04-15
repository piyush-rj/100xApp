import DashboardLeftTopIcon from "./DasboardLeftTopIcon";
import DashboardTextBox from "./DashboardTextBox";
import { Gamepad, Gamepad2 } from "lucide-react";
import { Users } from "lucide-react"
import { Trophy } from "lucide-react"
import LeftButton from "./DashboardLeftButtons/LeftButton";


<DashboardLeftTopIcon svg={<Gamepad2 className="text-purple-200 w-[30px] h-[30px]" />} />


export function DashboardLeftTop() {
    return <div className="pl-10 h-[700px] px-4 py-4 pt-[100px]">
        <div className="mb-5">
            <DashboardTextBox text="Your Professional Esports Team Finder"/>
        </div>
        <div className="mt-8 mb-4 text-7xl w-[600px] leading-[75px] font-semibold tracking-wide">
            Find your perfect <span className="text-purple-400">Gaming Squad</span>
        </div>
        <div className="text-2xl text-[#8f8f8f] leading-[38px] tracking-wide font-sans">
            Connect with gamers who share your skill level, play style, and ambitions. Build your dream team and dominate the competition together.
        </div>
        <div>
            <div>
                <LeftButton text="Find Players"/>
            </div>
            <div>

            </div>
        </div>
        <div className="flex gap-x-[60px] mt-5">
            <div>
                <DashboardLeftTopIcon svg={<Gamepad className="text-purple-200 w-[33px] h-[33px]" />} />
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