import { DashboardLeftTop } from "./components/DashboardLeftTop"
import { DashboardRightTop } from "./components/DashboardRightTop"
import DashboardRightTopTest from "./components/DashboardRightTopTest"

const Dashboard = () => {

    return (
        <>
            
                <main className="fade-in">
                    <div className="flex mx-10 mt-0">
                        <div className="w-[45%] h-full">
                            <DashboardLeftTop/>
                        </div>
                        <div className="h-full w-[55%]">
                            <DashboardRightTopTest/>
                        </div>
                    </div>
                </main>
        </>
    )
}

export default Dashboard