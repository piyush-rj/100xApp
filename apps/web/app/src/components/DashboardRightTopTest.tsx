'use client'

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DashboardRightTopTest() {
    const imgRef = useRef<HTMLImageElement>(null);
    const lightningRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Floating animation
        gsap.to(imgRef.current, {
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2,
        });


    }, []);

    return (
        <div className="h-[800px] flex justify-center items-center relative">
            <div className="relative">
                <img
                    ref={imgRef}
                    className="w-[620px] h-[650px] relative"
                    src="/sideIMG.png"
                    alt=""
                />

                {/* Lightning overlay */}
                <div
                    ref={lightningRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 mix-blend-screen"
                >
                    <svg className="w-full h-full" viewBox="0 0 600 650" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        <polyline
                            points="300,50 280,150 320,150 290,250 310,250 270,350"
                            stroke="#00f0ff"
                            strokeWidth="4"
                            fill="none"
                            filter="url(#glow)"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
