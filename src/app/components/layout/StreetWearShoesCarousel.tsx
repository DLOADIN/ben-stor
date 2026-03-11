import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, ShoppingBag } from 'lucide-react'

interface ShoeImage {
  id: number
  image: string
  category: string
}

const shoeImages: ShoeImage[] = [
  { id: 1, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239460/WhatsApp_Image_2026-02-19_at_12.33.40_kymrmp.jpg", category: "High Tops" },
  { id: 2, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239460/WhatsApp_Image_2026-02-19_at_12.33.38_yxcjep.jpg", category: "Sneakers" },
  { id: 3, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239460/WhatsApp_Image_2026-02-19_at_12.33.37_l1qxcp.jpg", category: "Low Tops" },
  { id: 4, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239460/WhatsApp_Image_2026-02-19_at_12.33.21_eddxvh.jpg", category: "Runners" },
  { id: 5, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239460/WhatsApp_Image_2026-02-19_at_12.33.39_sqem4x.jpg", category: "High Tops" },
  { id: 6, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.17_xocz28.jpg", category: "Sneakers" },
  { id: 7, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.35_hyfwhi.jpg", category: "Low Tops" },
  { id: 8, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.19_ekfd2c.jpg", category: "Runners" },
  { id: 9, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.20_j1qm08.jpg", category: "High Tops" },
  { id: 10, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.18_x7g9zx.jpg", category: "Sneakers" },
  { id: 11, image: "https://res.cloudinary.com/dyqfyqtjl/image/upload/v1773239459/WhatsApp_Image_2026-02-19_at_12.33.41_axutlq.jpg", category: "Low Tops" },
]

export default function StreetWearShoesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  const totalItems = shoeImages.length
  const visibleCount = 7

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    shoeImages.forEach((item, index) => {
      const img = new Image()
      img.onload = () => setLoadedImages(prev => new Set([...prev, index]))
      img.src = item.image
    })
  }, [])

  useEffect(() => {
    if (!isAutoPlaying || isTransitioning) return
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setCurrentIndex((prev) => (prev + 1) % totalItems)
      setTimeout(() => setIsTransitioning(false), 600)
    }, 3500)
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
    const opacity = Math.abs(normalizedDiff) <= 3 ? 1 : 0
    
    return { x, z, rotateY, scale, opacity, zIndex: Math.round(depth * 100), isActive: normalizedDiff === 0 }
  }

  const getVisibleIndices = () => {
    const indices: number[] = []
    for (let i = -3; i <= 3; i++) {
      indices.push((currentIndex + i + totalItems) % totalItems)
    }
    return indices
  }

  const currentItem = shoeImages[currentIndex]

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-black/5 text-gray-700 text-sm font-medium rounded-full mb-4">
            👟 Street Wear Shoes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            BS <span className="text-gray-600">Street Wear Shoes</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Step up your game with our exclusive street wear shoe collection
          </p>
        </motion.div>

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
                const item = shoeImages[index]
                const style = getCardStyle(index)
                const isLoaded = loadedImages.has(index)
                
                return (
                  <motion.div
                    key={`${item.id}-${index}`}
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
                        <img
                          src={item.image}
                          alt={`Street Wear ${item.category}`}
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

        <div className="text-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full shadow-lg"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold">{currentItem.category}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 text-sm font-medium"
          >
            {isAutoPlaying ? <><Pause className="w-4 h-4" /> Pause</> : <><Play className="w-4 h-4" /> Play</>}
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {['High Tops', 'Sneakers', 'Low Tops', 'Runners'].map((category) => {
            const catIndex = shoeImages.findIndex(a => a.category === category)
            const isActive = currentItem.category === category
            
            return (
              <button
                key={category}
                onClick={() => catIndex !== -1 && goToSlide(catIndex)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
          {[
            { label: 'Styles', value: '11+' },
            { label: 'Categories', value: '4' },
            { label: 'Premium Quality', value: '100%' },
            { label: 'Customer Rating', value: '4.8★' },
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
