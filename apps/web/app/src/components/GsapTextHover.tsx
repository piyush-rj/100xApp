"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface GlowingTextProps {
  text: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text }) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const glow = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: {
        ease: 'power2.inOut',
        duration: 1.0,
      },
    });

    glow.to(el, {
      filter: `drop-shadow(0 0 8px #711571) drop-shadow(0 0 12px #0369a1)`,
    });

    glow.to(el, {
      filter: `drop-shadow(0 0 1px #371337) drop-shadow(0 0 4px #0ea5e9)`,
    });
  }, []);

  return (
    <span
      ref={textRef}
      className="text-cyan-100 text-[22px] font-semibold tracking-wide select-none"
    >
      {text}
    </span>
  );
};

export default GlowingText;