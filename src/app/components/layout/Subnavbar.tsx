"use client"

import { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel"
import Image from "next/image"
import { slides, type SlideType } from "../constants/slides"

interface FloatingIconProps {
  icon: React.ReactNode;
  delay?: string;
  position: string;
}

const FloatingIcon = ({ icon, delay = "0", position }: FloatingIconProps) => (
  <div 
    className={`absolute animate-bounce backdrop-blur-sm bg-white/30 p-3 rounded-full transform hover:scale-110 transition-transform duration-300 ${position}`}
    style={{ animation: `float 3s ease-in-out ${delay}s infinite` }}
  >
    {icon}
  </div>
)

export default function Subnavbar() {
  const [api, setApi] = useState<CarouselApi>()
  const intervalRef = useRef<NodeJS.Timeout>()


  useEffect(() => {
    if (!api) return
    intervalRef.current = setInterval(() => api.scrollNext(), 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [api])

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full h-[40rem] max-w-screen-xl mx-auto relative mt-10"
      onMouseEnter={() => { if (intervalRef.current) clearInterval(intervalRef.current) }}
      onMouseLeave={() => { intervalRef.current = setInterval(() => api?.scrollNext(), 3000) }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 min-h-[600px] items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">{slide.title}</h1>
                <p className="text-lg text-muted-foreground">{slide.subtitle}</p>
              </div>
              <div className="relative h-[500px]">
                <Image
                  src={slide.image}
                  alt="Feature illustration"
                  fill
                  className="rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-mint-50/30 to-transparent rounded-2xl" />
                {slide.icons.map((icon, i) => (
                  <FloatingIcon 
                    key={i} 
                    icon={icon.icon} 
                    delay={i.toString()} 
                    position={icon.position}
                  />
                ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute left-20 bottom-10 flex gap-2">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
    </Carousel>
  )
}