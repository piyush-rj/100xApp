import { ReactNode } from "react";

interface DashboardLeftTopIconProps {
  svg: ReactNode;
}

export default function DashboardLeftTopIcon({ svg }: DashboardLeftTopIconProps) {
  return (
    <div className="h-[70px] w-[70px] rounded-full border-2 border-purple-700 flex justify-center items-center">
      <div className="h-[60px] w-[60px] border-[0.5px] border-purple-600 rounded-full flex justify-center items-center">
        {svg}
      </div>
    </div>
  );
}
