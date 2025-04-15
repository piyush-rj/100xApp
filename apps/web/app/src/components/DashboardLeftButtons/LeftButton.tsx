"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export default function LeftButton({ text }: { text: string }) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!buttonRef.current) return

    const tl = gsap.timeline({ paused: true })
    
    tl.to(buttonRef.current, {
      backgroundColor: '#000',
      color: '#a78bfa',
      borderColor: '#a78bfa',
      duration: 0.3,
      ease: "power2.out"
    })
    
    const button = buttonRef.current
    button.addEventListener('mouseenter', () => tl.play())
    button.addEventListener('mouseleave', () => tl.reverse())
    
    return () => {
      if (button) {
        button.removeEventListener('mouseenter', () => tl.play())
        button.removeEventListener('mouseleave', () => tl.reverse())
      }
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className="relative overflow-hidden px-7 py-3 text-sm md:text-base font-medium text-gray-300 border-2 border-[#50309f] rounded-lg bg-black cursor-pointer select-none"
    >
      {text}
    </button>
  )
}
