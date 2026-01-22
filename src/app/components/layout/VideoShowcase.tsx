import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Home, MapPin, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Video paths from public folder (works reliably in production)
const apartmentVideo = '/videos/apartment-video.mp4'
const tripVideo1 = '/videos/trip-video-1.mp4'
const tripVideo2 = '/videos/trip-video-2.mp4'
const tripVideo3 = '/videos/trip-video-3.mp4'

interface Video {
  id: string
  title: string
  description: string
  category: 'apartments' | 'trips'
  src: string
  features?: string[]
}

const bsVideos: Video[] = [
  {
    id: '1',
    title: 'BS Luxury Apartments',
    description: 'Premium living in Kigali\'s finest locations',
    category: 'apartments',
    src: apartmentVideo,
    features: ['Modern Amenities', '24/7 Security', 'Prime Location']
  },
  {
    id: '2',
    title: 'BS Safari Adventures',
    description: 'Explore Rwanda\'s stunning landscapes and wildlife',
    category: 'trips',
    src: tripVideo1,
    features: ['Expert Guides', 'All-Inclusive', 'Wildlife Encounters']
  },
  {
    id: '3',
    title: 'BS Mountain Treks',
    description: 'Journey through the Bigogwe landscapes',
    category: 'trips',
    src: tripVideo2,
    features: ['Gorilla Trekking', 'Professional Guides', 'Unforgettable Experience']
  },
  {
    id: '4',
    title: 'BS Nyungwe Forest Escape',
    description: 'Discover the beauty of Nyungwe Forest and much more',
    category: 'trips',
    src: tripVideo3,
    features: ['Beach Access', 'Water Sports', 'Scenic Views']
  },
]

export default function VideoShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isHovering, setIsHovering] = useState(false)
  const [activeFilter, setActiveFilter] = useState<'all' | 'apartments' | 'trips'>('all')
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredVideos = activeFilter === 'all' 
    ? bsVideos 
    : bsVideos.filter(v => v.category === activeFilter)

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }, [activeFilter])

  // Handle video ended - auto advance to next video
  const handleVideoEnded = () => {
    // Move to next video and continue playing
    setCurrentIndex((prev) => {
      const nextIndex = (prev + 1) % filteredVideos.length
      return nextIndex
    })
    // Keep playing the next video
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, 100)
  }

  // Handle video play/pause and load new video when index changes
  useEffect(() => {
    if (videoRef.current) {
      // Load the new video source
      videoRef.current.load()
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Auto-play was prevented, user interaction needed
          setIsPlaying(false)
        })
      }
    }
  }, [currentIndex])

  // Handle play state changes
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          setIsPlaying(false)
        })
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  // Handle video mute and volume
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = volume
    }
  }, [isMuted, volume])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const goToNext = () => {
    const wasPlaying = isPlaying
    setCurrentIndex((prev) => (prev + 1) % filteredVideos.length)
    // Continue playing if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play()
      }, 100)
    }
  }

  const goToPrev = () => {
    const wasPlaying = isPlaying
    setCurrentIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length)
    // Continue playing if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play()
      }, 100)
    }
  }

  const goToSlide = (index: number) => {
    const wasPlaying = isPlaying
    setCurrentIndex(index)
    // Continue playing if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        if (videoRef.current) videoRef.current.play()
      }, 100)
    }
  }

  // Helper function to get adjacent video indices (for preview cards)
  const getAdjacentIndex = (offset: number) => {
    return (currentIndex + offset + filteredVideos.length) % filteredVideos.length
  }

  const currentVideo = filteredVideos[currentIndex]

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div 
      className="w-full py-16 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-12"
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-2 bg-black text-white text-sm font-semibold rounded-full mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Explore Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover <span className="italic">BS Experiences</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            From luxurious apartments to breathtaking travel adventures, we've got everything you need for an unforgettable experience in Rwanda.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-10 flex-wrap"
          variants={itemVariants}
        >
          {[
            { key: 'all', label: 'All', icon: Sparkles },
            { key: 'apartments', label: 'BS Apartments', icon: Home },
            { key: 'trips', label: 'BS Trips', icon: MapPin }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key as typeof activeFilter)}
              className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeFilter === key
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-black shadow-md border border-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Phone-Style Video Carousel */}
        <motion.div 
          className="relative flex items-center justify-center"
          variants={itemVariants}
        >
          {/* Navigation - Left */}
          <button
            onClick={goToPrev}
            className="hidden md:flex absolute left-4 lg:left-8 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 text-gray-800"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Video Cards Container */}
          <div className="flex items-center justify-center gap-3 md:gap-6 w-full max-w-6xl px-4">
            
            {/* Left Preview Card (hidden on small screens) */}
            <motion.div 
              className="hidden lg:block relative w-40 xl:w-48 flex-shrink-0 cursor-pointer"
              onClick={goToPrev}
              whileHover={{ scale: 1.02, opacity: 0.8 }}
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg opacity-40">
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={filteredVideos[getAdjacentIndex(-1)]?.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </motion.div>

            {/* Main Video Card - Phone Style */}
            <motion.div 
              className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] flex-shrink-0"
              layout
            >
              {/* Phone Frame */}
              <div className="relative bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] p-1.5 md:p-2 shadow-2xl">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-28 h-5 md:h-6 bg-gray-900 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-12 md:w-16 h-3 md:h-4 bg-black rounded-full" />
                </div>

                {/* Video Container - Portrait Aspect Ratio */}
                <div className="relative aspect-[9/16] rounded-[1.75rem] md:rounded-[2.25rem] overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentVideo?.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        playsInline
                        preload="auto"
                        crossOrigin="anonymous"
                        onEnded={handleVideoEnded}
                        onLoadedData={() => {
                          if (videoRef.current) {
                            videoRef.current.volume = volume
                            videoRef.current.muted = isMuted
                          }
                        }}
                        onError={(e) => console.error('Video error:', e)}
                      >
                        <source src={currentVideo?.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* Category Badge */}
                  <div className="absolute top-8 md:top-10 left-1/2 -translate-x-1/2 z-10">
                    <span className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md bg-white/90 text-black`}>
                      {currentVideo?.category === 'apartments' ? (
                        <><Home className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />BS Apartments</>
                      ) : (
                        <><MapPin className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />BS Trips</>
                      )}
                    </span>
                  </div>

                  {/* Volume Controls */}
                  <div className="absolute top-8 md:top-10 right-2 md:right-4 z-10 flex items-center gap-1 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-300 group/volume">
                    <button
                      onClick={toggleMute}
                      className="text-white"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        const newVolume = parseFloat(e.target.value)
                        setVolume(newVolume)
                        if (newVolume > 0 && isMuted) setIsMuted(false)
                        if (newVolume === 0) setIsMuted(true)
                      }}
                      className="w-0 group-hover/volume:w-16 transition-all duration-300 accent-white cursor-pointer"
                    />
                  </div>

                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center z-10"
                  >
                    <motion.div 
                      className={`bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-xl transition-opacity duration-300 ${
                        isPlaying && !isHovering ? 'opacity-0' : 'opacity-100'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 md:w-6 md:h-6 text-black" fill="currentColor" />
                      ) : (
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-black ml-0.5" fill="currentColor" />
                      )}
                    </motion.div>
                  </button>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-base md:text-lg font-bold text-white mb-1 line-clamp-1">
                        {currentVideo?.title}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm mb-2 line-clamp-2">
                        {currentVideo?.description}
                      </p>
                      
                      {/* Features - Compact */}
                      {currentVideo?.features && (
                        <div className="flex flex-wrap gap-1">
                          {currentVideo.features.slice(0, 2).map((feature, i) => (
                            <span 
                              key={i}
                              className="px-2 py-0.5 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs rounded-full"
                            >
                              ✓ {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-[1.75rem] md:rounded-b-[2.25rem] overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / filteredVideos.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Phone Home Bar */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-gray-600 rounded-full" />
              </div>
            </motion.div>

            {/* Right Preview Card (hidden on small screens) */}
            <motion.div 
              className="hidden lg:block relative w-40 xl:w-48 flex-shrink-0 cursor-pointer"
              onClick={goToNext}
              whileHover={{ scale: 1.02, opacity: 0.8 }}
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-lg opacity-40">
                <video
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={filteredVideos[getAdjacentIndex(1)]?.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </motion.div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-4 lg:right-8 z-20 bg-white/90 hover:bg-white p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 text-gray-800"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-4">
          <button
            onClick={goToPrev}
            className="bg-white p-3 rounded-full shadow-lg text-gray-800"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="bg-white p-3 rounded-full shadow-lg text-gray-800"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Thumbnail Strip - Portrait Style */}
        <motion.div 
          className="mt-6 md:mt-8 flex justify-center gap-2 md:gap-3 overflow-x-auto pb-4 px-2 scrollbar-hide"
          variants={itemVariants}
        >
          {filteredVideos.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 md:ring-3 ring-black shadow-lg scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <video
                src={video.src}
                className="w-12 h-20 sm:w-14 sm:h-24 md:w-16 md:h-28 object-cover"
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              {index === currentIndex && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Dot Indicators & Counter */}
        <motion.div 
          className="mt-4 md:mt-6 flex flex-col items-center gap-3"
          variants={itemVariants}
        >
          <div className="flex justify-center gap-2 md:gap-3">
            {filteredVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 md:w-10 h-2 md:h-3 bg-black'
                    : 'w-2 md:w-3 h-2 md:h-3 bg-gray-300 hover:bg-gray-500'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
          
          <p className="text-gray-500 text-sm font-medium">
            {currentIndex + 1} of {filteredVideos.length}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-8 md:mt-10 text-center"
          variants={itemVariants}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-black text-white font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          > 
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
