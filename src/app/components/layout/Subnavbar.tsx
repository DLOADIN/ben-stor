"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export default function Subnavbar() {
  const slides = [
    {
      title: "Discover a new way to buy, rent, and sell property with ease",
      subtitle: "The #1 platform real estate professionals trust — one property at a time.",
      cta: "Coming Soon *",
      stats: [
        { label: "24/7", description: "Customer support" },
        { label: "90%", description: "Satisfied clients" },
      ],
    },
    {
      title: "List It, Love It, Buy It - Your ultimate marketplace for all things awesome",
      subtitle: "Believe in finding it with the Africa's largest choice of anything — one item at a time.",
      cta: "Coming Soon *",
      stats: [
        { label: "Fast", description: "shipping" },
        { label: "Secure", description: "payments" },
      ],
    },
    {
      title: "Discover your new job or find a perfect hire seamlessly",
      subtitle: "Attract, screen, and manage the best candidates to grow your team — one great hire at a time.",
      cta: "Get Started",
      stats: [
        { label: "25K", description: "Jobs" },
        { label: "10", description: "Countries" },
      ],
    },
  ]

  return (
    <Carousel
      opts={{loop: true,align: "start",}}
      className="w-full max-w-screen-xl mx-auto"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 min-h-[600px] items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {slide.subtitle}
                </p>
                <Button variant="outline" size="lg">
                  {slide.cta}
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-50/50 to-transparent rounded-3xl" />
                <div className="grid grid-cols-2 gap-4">
                  {slide.stats.map((stat, i) => (
                    <Card key={i} className="p-6 bg-background/80 backdrop-blur">
                      <h3 className="text-2xl font-bold">{stat.label}</h3>
                      <p className="text-muted-foreground">{stat.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-4 left-4 flex gap-2">
        <CarouselPrevious className="relative" />
        <CarouselNext className="relative" />
      </div>
    </Carousel>
  )
}

