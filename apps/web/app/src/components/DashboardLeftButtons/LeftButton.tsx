"use client"
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface LeftButtonProps {
  text: string
  delay?: number
  onClick?: () => void
}

export default function LeftButton({ text, delay = 0, onClick }: LeftButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    if (!button) return

    // Entrance animation
    gsap.from(button, {
      opacity: 0,
      y: 20,
      delay,
      duration: 0.6,
      ease: 'power3.out',
    })

    // Hover animation
    const tl = gsap.timeline({ paused: true })
    tl.to(button, {
      backgroundColor: 'rgba(168, 139, 250, 0.1)',
      borderColor: '#a78bfa',
      color: '#eae4fe',
      boxShadow: '0 4px 20px rgba(167, 139, 250, 0.25)',
      scale: 1.04,
      backdropFilter: 'blur(6px)',
      duration: 0.4,
      ease: 'power3.out',
    })

    const onEnter = () => tl.play()
    const onLeave = () => tl.reverse()

    button.addEventListener('mouseenter', onEnter)
    button.addEventListener('mouseleave', onLeave)

    return () => {
      button.removeEventListener('mouseenter', onEnter)
      button.removeEventListener('mouseleave', onLeave)
    }
  }, [delay])

  const handleClick = (e: React.MouseEvent) => {
    const button = buttonRef.current
    const ripple = rippleRef.current
    if (!button || !ripple) return

    const rect = button.getBoundingClientRect()
    const size = Math.max(button.clientWidth, button.clientHeight)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    gsap.set(ripple, {
      top: y,
      left: x,
      width: size,
      height: size,
    })

    gsap.fromTo(ripple, {
      opacity: 0.4,
      scale: 0,
    }, {
      opacity: 0,
      scale: 2.5,
      duration: 0.6,
      ease: 'power2.out',
    })

    if (onClick) onClick()
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="relative overflow-hidden px-6 py-2 text-sm md:text-base font-medium text-gray-300 border border-transparent rounded-lg bg-[#1a1a1a]/40 backdrop-blur-md cursor-pointer select-none"
    >
      {text}
      <span
        ref={rippleRef}
        className="pointer-events-none absolute rounded-full bg-purple-400 opacity-0"
        style={{ transform: 'scale(0)', zIndex: 0 }}
      />
    </button>
  )
}
