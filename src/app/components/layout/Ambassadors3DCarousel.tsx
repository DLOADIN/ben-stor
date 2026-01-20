import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, MapPin } from 'lucide-react'

// Import ALL ambassador images from BS AMBASSADORS folder (JPG files)
import img0682 from '@/assets/BS AMBASSADORS/IMG_0682 (1).JPG'
import img0683 from '@/assets/BS AMBASSADORS/IMG_0683.JPG'
import img4439_1 from '@/assets/BS AMBASSADORS/IMG_4439 (1).JPG'
import img4439 from '@/assets/BS AMBASSADORS/IMG_4439.JPG'
import img4440 from '@/assets/BS AMBASSADORS/IMG_4440.JPG'
import img4441 from '@/assets/BS AMBASSADORS/IMG_4441.JPG'
import img4442_1 from '@/assets/BS AMBASSADORS/IMG_4442 (1).JPG'
import img4442 from '@/assets/BS AMBASSADORS/IMG_4442.JPG'
import img4443 from '@/assets/BS AMBASSADORS/IMG_4443.JPG'
import img4445 from '@/assets/BS AMBASSADORS/IMG_4445.JPG'
import img4446 from '@/assets/BS AMBASSADORS/IMG_4446.JPG'
import img4447 from '@/assets/BS AMBASSADORS/IMG_4447.JPG'
import img4449_1 from '@/assets/BS AMBASSADORS/IMG_4449 (1).JPG'
import img4449_2 from '@/assets/BS AMBASSADORS/IMG_4449 (2).JPG'
import img4449 from '@/assets/BS AMBASSADORS/IMG_4449.JPG'
import img4450_1 from '@/assets/BS AMBASSADORS/IMG_4450 (1).JPG'
import img4450_2 from '@/assets/BS AMBASSADORS/IMG_4450 (2).JPG'
import img4450 from '@/assets/BS AMBASSADORS/IMG_4450.JPG'
import img4451_1 from '@/assets/BS AMBASSADORS/IMG_4451 (1).JPG'
import img4451 from '@/assets/BS AMBASSADORS/IMG_4451.JPG'
import img4452 from '@/assets/BS AMBASSADORS/IMG_4452.JPG'
import img4453 from '@/assets/BS AMBASSADORS/IMG_4453.JPG'
import img4454 from '@/assets/BS AMBASSADORS/IMG_4454.JPG'
import img4455 from '@/assets/BS AMBASSADORS/IMG_4455.JPG'
import img4457 from '@/assets/BS AMBASSADORS/IMG_4457.JPG'
import img4458_2 from '@/assets/BS AMBASSADORS/IMG_4458 (2).JPG'
import img4459_1 from '@/assets/BS AMBASSADORS/IMG_4459 (1).JPG'
import img4460 from '@/assets/BS AMBASSADORS/IMG_4460.JPG'
import img4461 from '@/assets/BS AMBASSADORS/IMG_4461.JPG'
import img4462_1 from '@/assets/BS AMBASSADORS/IMG_4462 (1).JPG'
import img4462 from '@/assets/BS AMBASSADORS/IMG_4462.JPG'
import img4463 from '@/assets/BS AMBASSADORS/IMG_4463.JPG'
import img4464_1 from '@/assets/BS AMBASSADORS/IMG_4464 (1).JPG'
import img4464 from '@/assets/BS AMBASSADORS/IMG_4464.JPG'
import img4465_1 from '@/assets/BS AMBASSADORS/IMG_4465 (1).JPG'
import img4465 from '@/assets/BS AMBASSADORS/IMG_4465.JPG'
import img4466 from '@/assets/BS AMBASSADORS/IMG_4466.JPG'
import img4467_1 from '@/assets/BS AMBASSADORS/IMG_4467 (1).JPG'
import img4467 from '@/assets/BS AMBASSADORS/IMG_4467.JPG'
import img4468 from '@/assets/BS AMBASSADORS/IMG_4468.JPG'
import img4575_1 from '@/assets/BS AMBASSADORS/IMG_4575 (1).JPG'
import img4576_1 from '@/assets/BS AMBASSADORS/IMG_4576 (1).JPG'
import img4576 from '@/assets/BS AMBASSADORS/IMG_4576.JPG'
import img4716 from '@/assets/BS AMBASSADORS/IMG_4716.JPG'
import img4717 from '@/assets/BS AMBASSADORS/IMG_4717.JPG'
import img4719 from '@/assets/BS AMBASSADORS/IMG_4719.JPG'
import img4720 from '@/assets/BS AMBASSADORS/IMG_4720.JPG'
import img4721_1 from '@/assets/BS AMBASSADORS/IMG_4721 (1).JPG'
import img4721 from '@/assets/BS AMBASSADORS/IMG_4721.JPG'
import img6351 from '@/assets/BS AMBASSADORS/IMG_6351.JPG'
import img6352 from '@/assets/BS AMBASSADORS/IMG_6352.JPG'
import img8429 from '@/assets/BS AMBASSADORS/IMG_8429.JPG'
import img8435 from '@/assets/BS AMBASSADORS/IMG_8435.JPG'
import img8443 from '@/assets/BS AMBASSADORS/IMG_8443.JPG'
import img8446 from '@/assets/BS AMBASSADORS/IMG_8446.JPG'
import img8447 from '@/assets/BS AMBASSADORS/IMG_8447.JPG'
import img8491 from '@/assets/BS AMBASSADORS/IMG_8491.JPG'
import img8502 from '@/assets/BS AMBASSADORS/IMG_8502.JPG'
import img8530 from '@/assets/BS AMBASSADORS/IMG_8530.JPG'
import img8535 from '@/assets/BS AMBASSADORS/IMG_8535.JPG'
import img8540_1 from '@/assets/BS AMBASSADORS/IMG_8540 (1).JPG'

// Import PNG files from GREAT LANDSCAPES subfolder
import capture1212 from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/1212Capture.PNG'
import capture1 from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/1Capture.PNG'
import capture2 from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/2Capture.PNG'
import capture from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/Capture.PNG'
import fyCapture from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/fyCapture.PNG'
import mountainCapture from '@/assets/BS AMBASSADORS/GREAT LANDSCAPES/mountainCapture.PNG'

// Ambassador image data with city assignments
interface AmbassadorImage {
  id: number
  image: string
  city: string
}

// All ambassador images with cities
const ambassadorImages: AmbassadorImage[] = [
  { id: 1, image: img0682, city: "Kentucky, USA" },
  { id: 2, image: img0683, city: "Lexington, USA" },
  { id: 3, image: img4439_1, city: "Louisville, USA" },
  { id: 4, image: img4439, city: "Phoenix, Arizona" },
  { id: 5, image: img4440, city: "Sydney, Australia" },
  { id: 6, image: img4441, city: "Kigali, Rwanda" },
  { id: 7, image: img4442_1, city: "Melbourne, Australia" },
  { id: 8, image: img4442, city: "Kentucky, USA" },
  { id: 9, image: img4443, city: "Lexington, USA" },
  { id: 10, image: img4445, city: "Louisville, USA" },
  { id: 11, image: img4446, city: "Phoenix, Arizona" },
  { id: 12, image: img4447, city: "Sydney, Australia" },
  { id: 13, image: img4449_1, city: "Kigali, Rwanda" },
  { id: 14, image: img4449_2, city: "Melbourne, Australia" },
  { id: 15, image: img4449, city: "Kentucky, USA" },
  { id: 16, image: img4450_1, city: "Lexington, USA" },
  { id: 17, image: img4450_2, city: "Louisville, USA" },
  { id: 18, image: img4450, city: "Phoenix, Arizona" },
  { id: 19, image: img4451_1, city: "Sydney, Australia" },
  { id: 20, image: img4451, city: "Kigali, Rwanda" },
  { id: 21, image: img4452, city: "Melbourne, Australia" },
  { id: 22, image: img4453, city: "Kentucky, USA" },
  { id: 23, image: img4454, city: "Lexington, USA" },
  { id: 24, image: img4455, city: "Louisville, USA" },
  { id: 25, image: img4457, city: "Phoenix, Arizona" },
  { id: 26, image: img4458_2, city: "Sydney, Australia" },
  { id: 27, image: img4459_1, city: "Kigali, Rwanda" },
  { id: 28, image: img4460, city: "Melbourne, Australia" },
  { id: 29, image: img4461, city: "Kentucky, USA" },
  { id: 30, image: img4462_1, city: "Lexington, USA" },
  { id: 31, image: img4462, city: "Louisville, USA" },
  { id: 32, image: img4463, city: "Phoenix, Arizona" },
  { id: 33, image: img4464_1, city: "Sydney, Australia" },
  { id: 34, image: img4464, city: "Kigali, Rwanda" },
  { id: 35, image: img4465_1, city: "Melbourne, Australia" },
  { id: 36, image: img4465, city: "Kentucky, USA" },
  { id: 37, image: img4466, city: "Lexington, USA" },
  { id: 38, image: img4467_1, city: "Louisville, USA" },
  { id: 39, image: img4467, city: "Phoenix, Arizona" },
  { id: 40, image: img4468, city: "Sydney, Australia" },
  { id: 41, image: img4575_1, city: "Kigali, Rwanda" },
  { id: 42, image: img4576_1, city: "Melbourne, Australia" },
  { id: 43, image: img4576, city: "Kentucky, USA" },
  { id: 44, image: img4716, city: "Lexington, USA" },
  { id: 45, image: img4717, city: "Louisville, USA" },
  { id: 46, image: img4719, city: "Phoenix, Arizona" },
  { id: 47, image: img4720, city: "Sydney, Australia" },
  { id: 48, image: img4721_1, city: "Kigali, Rwanda" },
  { id: 49, image: img4721, city: "Melbourne, Australia" },
  { id: 50, image: img6351, city: "Kentucky, USA" },
  { id: 51, image: img6352, city: "Lexington, USA" },
  { id: 52, image: img8429, city: "Louisville, USA" },
  { id: 53, image: img8435, city: "Phoenix, Arizona" },
  { id: 54, image: img8443, city: "Sydney, Australia" },
  { id: 55, image: img8446, city: "Kigali, Rwanda" },
  { id: 56, image: img8447, city: "Melbourne, Australia" },
  { id: 57, image: img8491, city: "Kentucky, USA" },
  { id: 58, image: img8502, city: "Lexington, USA" },
  { id: 59, image: img8530, city: "Louisville, USA" },
  { id: 60, image: img8535, city: "Phoenix, Arizona" },
  { id: 61, image: img8540_1, city: "Sydney, Australia" },
  { id: 62, image: capture1212, city: "Kigali, Rwanda" },
  { id: 63, image: capture1, city: "Melbourne, Australia" },
  { id: 64, image: capture2, city: "Kentucky, USA" },
  { id: 65, image: capture, city: "Lexington, USA" },
  { id: 66, image: fyCapture, city: "Louisville, USA" },
  { id: 67, image: mountainCapture, city: "Phoenix, Arizona" },
]

export default function Ambassadors3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const totalItems = ambassadorImages.length
  const visibleCount = 7

  // Preload all images on mount for synchronized display
  useEffect(() => {
    const preloadImages = () => {
      ambassadorImages.forEach((amb, index) => {
        const img = new Image()
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, index]))
        }
        img.src = amb.image
      })
    }
    preloadImages()
  }, [])

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return
    
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % totalItems)
      setTimeout(() => setIsTransitioning(false), 600)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, totalItems, isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % totalItems)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [totalItems, isTransitioning])

  const goToPrev = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [totalItems, isTransitioning])

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [currentIndex, isTransitioning])

  // Calculate 3D card positioning
  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff = ((diff + totalItems / 2) % totalItems) - totalItems / 2
    
    const angle = normalizedDiff * (360 / Math.min(visibleCount, totalItems))
    const radius = 400
    const radian = (angle * Math.PI) / 180
    
    const x = Math.sin(radian) * radius
    const z = Math.cos(radian) * radius - radius
    const rotateY = -angle * 0.6
    
    const depth = (z + radius) / (radius * 2)
    const scale = 0.5 + depth * 0.5
    const opacity = Math.abs(normalizedDiff) <= 3 ? (0.2 + depth * 0.8) : 0
    
    return {
      x,
      z,
      rotateY,
      scale,
      opacity,
      zIndex: Math.round(depth * 100),
      isActive: normalizedDiff === 0,
    }
  }

  // Get visible indices
  const getVisibleIndices = () => {
    const indices: number[] = []
    for (let i = -3; i <= 3; i++) {
      indices.push((currentIndex + i + totalItems) % totalItems)
    }
    return indices
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const currentAmbassador = ambassadorImages[currentIndex]

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Clean light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-2 bg-black/5 text-gray-700 text-sm font-medium rounded-full mb-4">
            🌍 Our Global Network
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            BS <span className="text-gray-600">Ambassadors</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Representing excellence across the globe
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <motion.div 
          className="relative h-[400px] md:h-[500px]"
          variants={itemVariants}
          ref={containerRef}
          style={{ perspective: '1200px' }}
        >
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <AnimatePresence mode="sync">
              {getVisibleIndices().map((index) => {
                const ambassador = ambassadorImages[index]
                const style = getCardStyle(index)
                const isLoaded = loadedImages.has(index)
                
                return (
                  <motion.div
                    key={`${ambassador.id}-${index}`}
                    className="absolute cursor-pointer"
                    style={{
                      transformStyle: 'preserve-3d',
                      width: style.isActive ? '320px' : '260px',
                    }}
                    animate={{
                      x: style.x,
                      z: style.z,
                      rotateY: style.rotateY,
                      scale: style.scale,
                      opacity: isLoaded ? style.opacity : 0,
                      zIndex: style.zIndex,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    onClick={() => goToSlide(index)}
                    whileHover={style.isActive ? { scale: style.scale * 1.05, y: -10 } : {}}
                  >
                    {/* Clean card - no text overlay */}
                    <div className={`
                      relative rounded-2xl overflow-hidden shadow-2xl bg-white
                      ${style.isActive ? 'ring-4 ring-black/10' : ''}
                      transition-shadow duration-300
                    `}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                        {/* Loading spinner */}
                        {!isLoaded && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                            <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                          </div>
                        )}
                        
                        {/* Image - clean, no overlay */}
                        <img
                          src={ambassador.image}
                          alt={`Ambassador from ${ambassador.city}`}
                          className={`
                            w-full h-full object-cover transition-all duration-500
                            ${isLoaded ? 'opacity-100' : 'opacity-0'}
                            ${style.isActive ? 'scale-100' : 'scale-105'}
                          `}
                          loading="eager"
                          decoding="async"
                          onLoad={() => setLoadedImages(prev => new Set([...prev, index]))}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <button
            onClick={goToPrev}
            disabled={isTransitioning}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full text-gray-800 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>

        {/* City Display - Outside images */}
        <motion.div className="text-center mt-6" variants={itemVariants}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">{currentAmbassador.city}</span>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Play/Pause */}
        <motion.div className="flex justify-center mt-6" variants={itemVariants}>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-all duration-300 text-sm font-medium"
          >
            {isAutoPlaying ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Play</>}
          </button>
        </motion.div>

        {/* City Pills */}
        <motion.div className="flex flex-wrap justify-center gap-2 mt-8" variants={itemVariants}>
          {['Kentucky, USA', 'Lexington, USA', 'Louisville, USA', 'Phoenix, Arizona', 'Sydney, Australia', 'Kigali, Rwanda', 'Melbourne, Australia'].map((city) => {
            const cityIndex = ambassadorImages.findIndex(a => a.city === city)
            const isActive = currentAmbassador.city === city
            
            return (
              <motion.button
                key={city}
                onClick={() => cityIndex !== -1 && goToSlide(cityIndex)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-3 h-3 inline mr-1" />
                {city}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Progress */}
        <motion.div className="mt-8 max-w-md mx-auto" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 font-medium">{currentIndex + 1}</span>
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-sm text-gray-500 font-medium">{totalItems}</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16" variants={itemVariants}>
          {[
            { label: 'Countries', value: '3+' },
            { label: 'Cities', value: '7+' },
            { label: 'Ambassadors', value: '67+' },
            { label: 'Communities', value: '100+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
            >
              <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
