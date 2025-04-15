"use client"
import { useState } from "react"
import { DashboardLeftTop } from "./components/DashboardLeftTop"
import { DashboardRightTop } from "./components/DashboardRightTop"
import Preloader from "./components/Preloader"
import DashboardRightTopTest from "./components/DashboardRightTopTest"

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
            
            {!isLoading && (
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
            )}
        </>
    )
}

export default Dashboard