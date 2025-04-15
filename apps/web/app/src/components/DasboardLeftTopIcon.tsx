import { ReactNode } from "react";

interface DashboardLeftTopIconProps {
  svg: ReactNode;
}

export default function DashboardLeftTopIcon({ svg }: DashboardLeftTopIconProps) {
  return (
    <div className="group h-[66px] w-[66px] rounded-full border-2 border-purple-700 flex justify-center items-center backdrop-blur-md transition-shadow duration-300 shadow-[0_0_12px_#7e22ce44] hover:shadow-[0_0_25px_#7e22ceaa] cursor-pointer">

        {svg}
    </div>
  );
}
