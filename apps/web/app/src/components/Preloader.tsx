"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const currentRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 10) + 1;
      const nextValue = Math.min(100, currentRef.current + randomIncrement);

      currentRef.current = nextValue;
      setCount(nextValue); // updates state (optional)

      if (displayRef.current) {
        gsap.to(displayRef.current, {
          innerText: nextValue,
          duration: 0.5,
          snap: { innerText: 1 },
          ease: 'power2.out',
        });
      }

      if (nextValue >= 100) {
        clearInterval(interval);
        gsap.to(containerRef.current, {
          y: '-100%',
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: onComplete,
        });
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black text-white flex flex-col justify-center items-center z-50"
    >
      <div ref={displayRef} className="text-6xl font-bold mb-4">
        0%
      </div>
      <div className="text-purple-400 tracking-wide">Loading...</div>
    </div>
  );
};

export default Preloader;
