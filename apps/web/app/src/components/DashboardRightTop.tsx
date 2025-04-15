"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function DashboardRightTop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nestedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    if (nestedRef.current) {
      gsap.to(nestedRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <div className="w-full pt-[100px] h-[700px] flex justify-end pr-20 items-center">
      {/* main div */}
      <div
        ref={containerRef}
        className="relative h-[320px] rounded-2xl w-[500px] flex justify-center items-center border border-transparent transition-all duration-300 bg-[#1a0d33] backdrop-blur-md hover:shadow-[0_0_12px_#7f4ddf80]"
      >
        {/* Background image */}
        <div className="absolute rounded-2xl inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/valo.jpeg"
            alt="valoImg"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* nested image */}
        <div
          ref={nestedRef}
          className="absolute rounded-2xl bottom-[-50px] right-[-60px] h-[158px] w-[280px] z-10 border border-transparent transition-all duration-300 
          bg-[#2c1a4d]/50 backdrop-blur-sm hover:shadow-[0_0_10px_#b783ff80]"
        >
          <img
            src="/valo2.jpeg"
            alt="valoImg"
            className="object-cover rounded-2xl w-full h-full brightness-75"
          />
        </div>
      </div>
    </div>
  );
}
