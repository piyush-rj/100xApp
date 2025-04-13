"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "./Button";

gsap.registerPlugin(ScrollTrigger);

export function DashboardLeftBottom() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) return;

    const images = scrollElement.querySelectorAll(".scroll-image");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            scroller: scrollElement,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div className="relative bg-[#101010] text-white w-[300px] h-[240px] mt-6 rounded-2xl overflow-hidden">
        <div
          ref={scrollRef}
          className="h-full w-full overflow-y-scroll scroll-smooth"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 #1f1f1f",
          }}
        >
          <div className="flex flex-col gap-4 pb-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="scroll-image w-full h-[240px] flex-shrink-0 opacity-0"
              >
                <img
                  src={`/gameImages/${i}.jpeg`}
                  alt={`game-${i}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10">
          <Button text="GAMES"/>
        </div>
      </div>
    </div>
  );
}
