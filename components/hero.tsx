"use client"

import Image from "next/image"

export function Hero() {
  return (
    <div className="relative w-full">
      {/* Hero Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Dragon Hero" fill className="object-cover" priority />
        {/* Fade overlay - adjust fade-height for different fade percentages */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent fade-height" />
      </div>
    </div>
  )
}
