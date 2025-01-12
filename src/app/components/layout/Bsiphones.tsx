'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import iphone7 from '@/assets/Iphone/8.jpg'
import iphone8 from '@/assets/Iphone/7.jpg'
import iphoneX from '@/assets/Iphone/2.jpg'
import iphoneXS from '@/assets/Iphone/1.jpg'
import iphone11 from '@/assets/Iphone/6.jpg'
import iphone12 from '@/assets/Iphone/5.jpg'
import iphone13 from '@/assets/Iphone/4.jpg'
import iphone14 from '@/assets/Iphone/9.jpg'
import iphone15 from '@/assets/Iphone/10.jpg'
import iphone16 from '@/assets/Iphone/3.jpg'

interface IPhone {
  name: string
  tagline: string
  year: number
  features: string[]
  image: any
  isNew?: boolean
}

const iphones: IPhone[] = [
  {
    name: 'iPhone 16',
    tagline: 'Titanium. So strong. So light. So Pro.',
    year: 2023,
    features: ['A17 Pro chip', '5x Telephoto camera', 'Titanium design'],
    image: iphone16,
    isNew: true
  },
  {
    name: 'iPhone 15 Pro Max',
    tagline: 'Titanium. So strong. So light. So Pro.',
    year: 2023,
    features: ['A17 Pro chip', '5x Telephoto camera', 'Titanium design'],
    image: iphone15,
    isNew: true
  },
  {
    name: 'iPhone 14 Pro',
    tagline: 'Pro. Beyond.',
    year: 2022,
    features: ['A16 Bionic chip', 'Dynamic Island', '48MP Main camera'],
    image: iphone14
  },
  {
    name: 'iPhone 13 Pro',
    tagline: 'Oh. So. Pro.',
    year: 2021,
    features: ['A15 Bionic chip', 'ProMotion technology', 'Macro photography'],
    image: iphone13
  },
  {
    name: 'iPhone 12',
    tagline: 'Blast past fast.',
    year: 2020,
    features: ['A14 Bionic chip', '5G speed', 'Ceramic Shield'],
    image: iphone12
  },
  {
    name: 'iPhone 11',
    tagline: 'Just the right amount of everything.',
    year: 2019,
    features: ['A13 Bionic chip', 'Dual-camera system', 'Liquid Retina HD'],
    image: iphone11
  },
  {
    name: 'iPhone XS',
    tagline: 'Welcome to the big screens.',
    year: 2018,
    features: ['A12 Bionic chip', 'Dual-camera system', 'Face ID'],
    image: iphoneXS
  },
  {
    name: 'iPhone X',
    tagline: 'Say hello to the future.',
    year: 2017,
    features: ['A11 Bionic chip', 'Face ID', 'Super Retina display'],
    image: iphoneX
  },
  {
    name: 'iPhone 8',
    tagline: 'A new generation of iPhone.',
    year: 2017,
    features: ['A11 Bionic chip', 'Wireless charging', 'Retina HD display'],
    image: iphone8
  },
  {
    name: "iPhone 7",
    tagline: "Practically magic.",
    year: 2016,
    features: ["A10 Fusion chip", "Water and dust resistant", "Dual 12MP cameras"],
    image: iphone7
  }
]

export default function IPhoneShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % iphones.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % iphones.length)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + iphones.length) % iphones.length)
  }

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-black" id="iphones">
      <motion.div 
      className="max-w-3xl mx-auto text-center my-16"
      variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-6">
          Explore the World of iPhones <span className="italic">with</span> us
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          At Ben-stores, we are proud to offer our clients the latest iPhones and their accessories, providing an unparalleled shopping experience in Rwanda.
        </p>
      </motion.div>
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-5xl font-bold text-black">IPhones We Offer</h1>
          <p className="text-black font-medium">{iphones[currentIndex].year}</p>
        </div>
        
        <div className="relative h-[80vh]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ 
                opacity: 0,
                x: direction > 0 ? 1000 : -1000
              }}
              animate={{ 
                opacity: 1,
                x: 0
              }}
              exit={{ 
                opacity: 0,
                x: direction > 0 ? -1000 : 1000
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className="relative w-[500px] h-[600px] mx-auto mb-8">
                  <Image
                    src={iphones[currentIndex].image}
                    alt={iphones[currentIndex].name}
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
                {iphones[currentIndex].isNew && (
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-4"
                  >
                    New
                  </motion.span>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold text-black mb-2">{iphones[currentIndex].name}</h2>
                  <p className="text-xl text-gray-600 mb-6">{iphones[currentIndex].tagline}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-4 flex-wrap"
                >
                  {iphones[currentIndex].features.map((feature, index) => (
                    <span
                      key={feature}
                      className="px-4 py-2 bg-gray-100 rounded-full text-black text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black p-4 rounded-full transition-colors shadow-lg z-10"
            aria-label="Previous iPhone"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black p-4 rounded-full transition-colors shadow-lg z-10"
            aria-label="Next iPhone"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-20 flex justify-center gap-2">
          {iphones.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to iPhone ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}