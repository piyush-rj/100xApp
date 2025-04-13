import { DashboardLeftTop } from "./DashbaordLeftTop";
import { DashboardLeftBottom } from "./DashboardLeftBottom";
import DashboardMain from "./DashboardMain";


export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen min-w-screen">
      <div className="w-full md:w-1/4 flex flex-col sticky top-0 h-screen">
        <DashboardLeftTop />
        <DashboardLeftBottom />
      </div>

      <div className="w-full h-full overflow-y-auto">
        <DashboardMain />
      </div>
    </div>
  );
}
