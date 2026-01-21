import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, MapPin } from 'lucide-react'

// Import ALL ambassador images from BS AMBASSADORS folder
import img0316 from '@/assets/BS AMBASSADORS/IMG_0316.JPG.jpeg'
import img0334 from '@/assets/BS AMBASSADORS/IMG_0334.JPG.jpeg'
import img0682 from '@/assets/BS AMBASSADORS/IMG_0682 (1).JPG'
import img0683 from '@/assets/BS AMBASSADORS/IMG_0683.JPG'
import img0915 from '@/assets/BS AMBASSADORS/IMG_0915.JPG.jpeg'
import img0918 from '@/assets/BS AMBASSADORS/IMG_0918.JPG.jpeg'
import img4439 from '@/assets/BS AMBASSADORS/IMG_4439.JPG'
import img4464 from '@/assets/BS AMBASSADORS/IMG_4464.JPG'
import img4466 from '@/assets/BS AMBASSADORS/IMG_4466.JPG'
import img4575_1 from '@/assets/BS AMBASSADORS/IMG_4575 (1).JPG'
import img4576 from '@/assets/BS AMBASSADORS/IMG_4576.JPG'
import img4719 from '@/assets/BS AMBASSADORS/IMG_4719.JPG'
import img4721_1 from '@/assets/BS AMBASSADORS/IMG_4721 (1).JPG'
import img6351 from '@/assets/BS AMBASSADORS/IMG_6351.JPG'
import img7328 from '@/assets/BS AMBASSADORS/IMG_7328.JPG'
import img7341 from '@/assets/BS AMBASSADORS/IMG_7341.JPG'
import img7347 from '@/assets/BS AMBASSADORS/IMG_7347.JPG'
import img7349 from '@/assets/BS AMBASSADORS/IMG_7349.JPG'
import img7350 from '@/assets/BS AMBASSADORS/IMG_7350.JPG'
import img7353 from '@/assets/BS AMBASSADORS/IMG_7353.JPG'
import img7716_1 from '@/assets/BS AMBASSADORS/IMG_7716 (1).JPG'
import img8322 from '@/assets/BS AMBASSADORS/IMG_8322.JPG.jpeg'
import img8427 from '@/assets/BS AMBASSADORS/IMG_8427.JPG'
import img8429 from '@/assets/BS AMBASSADORS/IMG_8429.JPG'
import img8435 from '@/assets/BS AMBASSADORS/IMG_8435.JPG'
import img8443 from '@/assets/BS AMBASSADORS/IMG_8443.JPG'
import img8446 from '@/assets/BS AMBASSADORS/IMG_8446.JPG'
import img8447 from '@/assets/BS AMBASSADORS/IMG_8447.JPG'
import img8491 from '@/assets/BS AMBASSADORS/IMG_8491.JPG'
import img8502 from '@/assets/BS AMBASSADORS/IMG_8502.JPG'
import img8535 from '@/assets/BS AMBASSADORS/IMG_8535.JPG'
import img8540_1 from '@/assets/BS AMBASSADORS/IMG_8540 (1).JPG'

interface AmbassadorImage {
  id: number
  image: string
  city: string
}

const ambassadorImages: AmbassadorImage[] = [
  { id: 1, image: img0316, city: "Kentucky, USA" },
  { id: 2, image: img0334, city: "Lexington, USA" },
  { id: 3, image: img0682, city: "Louisville, USA" },
  { id: 4, image: img0683, city: "Phoenix, Arizona" },
  { id: 5, image: img0915, city: "Sydney, Australia" },
  { id: 6, image: img0918, city: "Kigali, Rwanda" },
  { id: 7, image: img4439, city: "Melbourne, Australia" },
  { id: 8, image: img4464, city: "Kentucky, USA" },
  { id: 9, image: img4466, city: "Lexington, USA" },
  { id: 10, image: img4575_1, city: "Louisville, USA" },
  { id: 11, image: img4576, city: "Phoenix, Arizona" },
  { id: 12, image: img4719, city: "Sydney, Australia" },
  { id: 13, image: img4721_1, city: "Kigali, Rwanda" },
  { id: 14, image: img6351, city: "Melbourne, Australia" },
  { id: 15, image: img7328, city: "Kentucky, USA" },
  { id: 16, image: img7341, city: "Lexington, USA" },
  { id: 17, image: img7347, city: "Louisville, USA" },
  { id: 18, image: img7349, city: "Phoenix, Arizona" },
  { id: 19, image: img7350, city: "Sydney, Australia" },
  { id: 20, image: img7353, city: "Kigali, Rwanda" },
  { id: 21, image: img7716_1, city: "Melbourne, Australia" },
  { id: 22, image: img8322, city: "Kentucky, USA" },
  { id: 23, image: img8427, city: "Lexington, USA" },
  { id: 24, image: img8429, city: "Louisville, USA" },
  { id: 25, image: img8435, city: "Phoenix, Arizona" },
  { id: 26, image: img8443, city: "Sydney, Australia" },
  { id: 27, image: img8446, city: "Kigali, Rwanda" },
  { id: 28, image: img8447, city: "Melbourne, Australia" },
  { id: 29, image: img8491, city: "Kentucky, USA" },
  { id: 30, image: img8502, city: "Lexington, USA" },
  { id: 31, image: img8535, city: "Louisville, USA" },
  { id: 32, image: img8540_1, city: "Phoenix, Arizona" },
]

export default function Ambassadors3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const totalItems = ambassadorImages.length
  const visibleCount = 7

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    ambassadorImages.forEach((amb, index) => {
      const img = new Image()
      img.onload = () => setLoadedImages(prev => new Set([...prev, index]))
      img.src = amb.image
    })
  }, [])

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

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex
    const normalizedDiff = ((diff + totalItems / 2) % totalItems) - totalItems / 2
    const angle = normalizedDiff * (360 / Math.min(visibleCount, totalItems))
    const radius = isMobile ? 280 : 650
    const radian = (angle * Math.PI) / 180
    const x = Math.sin(radian) * radius
    const z = Math.cos(radian) * radius - radius
    const rotateY = -angle * 0.6
    const depth = (z + radius) / (radius * 2)
    const scale = 0.5 + depth * 0.5
    const opacity = Math.abs(normalizedDiff) <= 3 ? (0.2 + depth * 0.8) : 0
    
    return { x, z, rotateY, scale, opacity, zIndex: Math.round(depth * 100), isActive: normalizedDiff === 0 }
  }

  const getVisibleIndices = () => {
    const indices: number[] = []
    for (let i = -3; i <= 3; i++) {
      indices.push((currentIndex + i + totalItems) % totalItems)
    }
    return indices
  }

  const currentAmbassador = ambassadorImages[currentIndex]

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Clean background - NO overlay */}
      <div className="absolute inset-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
        <div 
          className="relative h-[700px] md:h-[620px]"
                  style={{ perspective: '1800px' }}
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
                      width: isMobile 
                        ? (style.isActive ? '240px' : '180px') 
                        : (style.isActive ? '600px' : '400px'),
                    }}
                    animate={{
                      x: style.x,
                      z: style.z,
                      rotateY: style.rotateY,
                      scale: style.scale,
                      opacity: isLoaded ? style.opacity : 0,
                      zIndex: style.zIndex,
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => goToSlide(index)}
                    whileHover={style.isActive ? { scale: style.scale * 1.05, y: -10 } : {}}
                  >
                    {/* Card - CLEAN with NO overlay */}
                    <div className={`
                      relative rounded-2xl overflow-hidden shadow-2xl
                      ${style.isActive ? 'ring-4 ring-black/10' : ''}
                    `}>
                      <div className={`relative overflow-hidden ${isMobile ? 'w-[240px] h-[320px]' : 'w-[70vh] h-[90vh]'}`}>
                        {!isLoaded && (
                          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
                            <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                          </div>
                        )}
                        {/* Image - NO gradient overlay, NO white overlay */}
                        <img
                          src={ambassador.image}
                          alt={`Ambassador from ${ambassador.city}`}
                          className="w-full h-full object-cover"
                          loading="eager"
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
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full text-gray-800 shadow-lg border border-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-50 p-3 md:p-4 rounded-full text-gray-800 shadow-lg border border-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* City Display */}
        <div className="text-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">{currentAmbassador.city}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Play/Pause */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 text-sm font-medium"
          >
            {isAutoPlaying ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Play</>}
          </button>
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['Kentucky, USA', 'Lexington, USA', 'Louisville, USA', 'Phoenix, Arizona', 'Sydney, Australia', 'Kigali, Rwanda', 'Melbourne, Australia'].map((city) => {
            const cityIndex = ambassadorImages.findIndex(a => a.city === city)
            const isActive = currentAmbassador.city === city
            
            return (
              <button
                key={city}
                onClick={() => cityIndex !== -1 && goToSlide(cityIndex)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <MapPin className="w-3 h-3 inline mr-1" />
                {city}
              </button>
            )
          })}
        </div>

        {/* Progress */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 font-medium">{currentIndex + 1}</span>
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-black rounded-full"
                animate={{ width: `${((currentIndex + 1) / totalItems) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-500 font-medium">{totalItems}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {[
            { label: 'Countries', value: '3+' },
            { label: 'Cities', value: '7+' },
            { label: 'Ambassadors', value: '32+' },
            { label: 'Communities', value: '100+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
