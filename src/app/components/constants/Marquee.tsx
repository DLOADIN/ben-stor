

import React, { useEffect, useRef, useState } from 'react'
import { cn } from "@/app/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  style: React.CSSProperties
}

export default function Marquee({ 
  className, 
  reverse = false, 
  pauseOnHover = false, 
  children 
}: MarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    const container = containerRef.current
    const content = contentRef.current

    const totalWidth = content.offsetWidth
    const duration = parseInt(getComputedStyle(container).getPropertyValue('--duration')) * 1000 || 20000
    const startPosition = reverse ? -totalWidth : 0
    const endPosition = reverse ? 0 : -totalWidth

    let startTime: number | null = null
    let animationFrame: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = ((timestamp - startTime) % duration) / duration
      const position = startPosition + (endPosition - startPosition) * progress

      content.style.transform = `translateX(${position}px)`

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [reverse])

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsHovered(false)
  }

  return (
    <div 
      ref={containerRef}
      className={cn("overflow-hidden", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={contentRef}
        className={cn(
          "inline-flex",
          isHovered ? "animate-pause" : "animate-marquee"
        )}
        style={{ 
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}

