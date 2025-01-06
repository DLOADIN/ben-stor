"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { Card } from "../ui/card"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import teamMembers from "../constants/TeamMember"
import { motion } from "framer-motion"

export default function EndlessCarousel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 1300)
    }
    
    checkMobileView()
    window.addEventListener('resize', checkMobileView)
    return () => window.removeEventListener('resize', checkMobileView)
  }, [])

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
      duration: 3000,
    },
    [
      Autoplay({
        playOnInit: true,
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  )

  const handleMouseEnter = (index: number) => {
    if (isMobile) {
      setExpandedIndex(index)
    }
  }

  const handleMouseLeave = () => {
    if (isMobile) {
      setExpandedIndex(null)
    }
  }

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
      <div ref={emblaRef} className="overflow-hidden w-full h-full absolute inset-0">
        <div className="flex h-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`
                flex-none transition-all duration-500 ease-in-out 
                ${isMobile && expandedIndex === index 
                  ? 'w-3/4 z-10' 
                  : isMobile && expandedIndex !== null 
                    ? 'w-1/8 opacity-50' 
                    : 'w-2/4'
                } 
                h-full px-2 cursor-pointer
              `}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card 
                className={`
                  relative overflow-hidden border-0 h-full 
                  transition-all duration-500 
                  ${isMobile && expandedIndex === index ? 'scale-105' : ''}
                `}
              >
                <div className="relative h-full pb-20 group">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="
                      object-cover rounded-lg 
                      transform transition-transform duration-500 
                      group-hover:scale-[1.05]
                    "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-300">{member.role}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </div>
  )
}