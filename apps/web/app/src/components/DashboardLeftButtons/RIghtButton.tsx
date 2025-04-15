"use client"
import { useRef, useEffect } from 'react'

export default function DarkButton({ text }: { text: string }) {
  return (
    <button
      className="relative overflow-hidden px-7 py-3 text-sm md:text-base font-medium text-gray-200 border-2 border-[#452c83] rounded-lg bg-[#452c83] cursor-pointer backdrop-blur-md shadow-[0_0_12px_#7e22ce33] hover:shadow-[0_0_25px_#7e22ceaa] transition-all duration-200 hover:bg-transparent"
    >
      {text}
    </button>
  )
}
