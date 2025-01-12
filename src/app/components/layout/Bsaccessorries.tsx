"use client"

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import airwatch from '@/assets/Accessories/Refurbished Apple Watch Series 6 Gps, 40mm Space Gray Aluminum Case with Black Sport Band - Regular, Adult Unisex, Size_40 mm.jpeg'
import airpods from '@/assets/Accessories/83563cd0-42f8-461a-a834-25a850a1130a.jpeg'
import Magsafe from "@/assets/Accessories/Apple MagSafe Charger (2m).jpeg"
import StudioDisplay from '@/assets/Accessories/Studio Display - Nano-texture glass - Tilt- and height-adjustable stand.jpeg'
import Macbook from '@/assets/Accessories/2022 Apple MacBook Pro .jpeg'
import airtag from '@/assets/Accessories/Apple Other _ Apple Airtag _ Color_ Silver_White _ Size_ Os.jpeg'
import Magickeyboard from '@/assets/Accessories/Magic Keyboard with Touch ID for Mac models with Apple silicon — US English.jpeg'
import ipad from '@/assets/Accessories/Apple iPad Pro 11.jpeg'

interface Accessory {
  name: string;
  description: string;
  image: StaticImageData | string;
}

const accessories: Accessory[] = [
  {
    name: "AirPods Pro",
    description: "Active noise cancellation with immersive spatial audio experience",
    image: airpods
  },
  {
    name: "MacBook Pro M2",
    description: "Powerful performance meets incredible battery life and design",
    image: Macbook
  },
  {
    name: "Apple Watch Ultra",
    description: "Adventure-ready smartwatch with premium outdoor sports features",
    image: airwatch
  },
  {
    name: "Magic Keyboard",
    description: "Comfortable typing experience with seamless device connectivity",
    image: Magickeyboard
  },
  {
    name: "iPad Pro",
    description: "Professional tablet with M2 chip and stunning display",
    image: ipad
  },
  {
    name: "MagSafe Charger",
    description: "Fast wireless charging with perfect magnetic alignment",
    image: Magsafe
  },
  {
    name: "AirTag",
    description: "Precision tracking for your valuable items anywhere",
    image: airtag
  },
  {
    name: "Studio Display",
    description: "5K Retina screen with exceptional color and clarity",
    image: StudioDisplay
  }
];

export default function AccessoriesCarousel() {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const SPEED = {
    interval: 20, 
    pixelsPerMove: 3
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev - SPEED.pixelsPerMove) % (accessories.length * 320));
    }, SPEED.interval);
    
    return () => clearInterval(interval);
  }, [isPaused]); // Add isPaused to dependencies

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause the carousel
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume the carousel
  };

  return (
    <div 
      className="w-full py-16 overflow-hidden text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto mb-8">
        <h2 className="text-4xl font-bold text-black mb-4">Essential Accessories</h2>
        <p className="text-gray-400">Enhance your Apple experience with these premium accessories</p>
      </div>
      
      <div className="relative">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: position
          }}
          transition={{
            duration: 0,
            ease: "linear"
          }}
          style={{
            width: `${accessories.length * 320}px`
          }}
        >
          {[...accessories, ...accessories].map((accessory, index) => (
            <div
              key={`${accessory.name}-${index}`}
              className="w-[300px] flex-shrink-0 group"
            >
              <div className="bg-gradient-to-t from-[#a8edea] to-[#fed6e3] rounded-3xl p-6 h-[400px] transition-transform transform group-hover:scale-105">
                <div className="relative w-full h-48 mb-6">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {accessory.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {accessory.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}