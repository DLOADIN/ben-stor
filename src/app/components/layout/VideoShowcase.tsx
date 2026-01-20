import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause, Home, MapPin, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Import actual video files
import apartmentVideo from '@/assets/BS APARTMENTS/WhatsApp Video 2026-01-19 at 15.33.42.mp4'
import tripVideo1 from '@/assets/BS TRIPS/WhatsApp Video 2026-01-19 at 15.33.11.mp4'
import tripVideo2 from '@/assets/BS TRIPS/WhatsApp Video 2026-01-19 at 15.34.47 (1).mp4'
import tripVideo3 from '@/assets/BS TRIPS/WhatsApp Video 2026-01-19 at 15.34.55.mp4'

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
    description: 'Experience premium living in Kigali\'s finest locations with breathtaking city views and modern amenities',
    category: 'apartments',
    src: apartmentVideo,
    features: ['Modern Amenities', '24/7 Security', 'Prime Location']
  },
  {
    id: '2',
    title: 'BS Safari Adventures',
    description: 'Explore Rwanda\'s stunning wildlife at Akagera National Park with expert guides',
    category: 'trips',
    src: tripVideo1,
    features: ['Expert Guides', 'All-Inclusive', 'Wildlife Encounters']
  },
  {
    id: '3',
    title: 'BS Mountain Treks',
    description: 'Journey through the Virunga Mountains and meet the majestic mountain gorillas',
    category: 'trips',
    src: tripVideo2,
    features: ['Gorilla Trekking', 'Professional Guides', 'Unforgettable Experience']
  },
  {
    id: '4',
    title: 'BS Lake Kivu Getaway',
    description: 'Relax on the beautiful shores of Lake Kivu with stunning sunsets and water activities',
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
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const filteredVideos = activeFilter === 'all' 
    ? bsVideos 
    : bsVideos.filter(v => v.category === activeFilter)

  useEffect(() => {
    if (isPlaying && !isHovering) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredVideos.length)
      }, 5000)
    }

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current)
    }
  }, [isPlaying, isHovering, filteredVideos.length])

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeFilter])

  // Handle video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, currentIndex])

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
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % filteredVideos.length)
  }

  const goToPrev = () => {
    setIsPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + filteredVideos.length) % filteredVideos.length)
  }

  const goToSlide = (index: number) => {
    setIsPlaying(false)
    setCurrentIndex(index)
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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

        {/* Main Video Container */}
        <motion.div
          className="relative group rounded-3xl overflow-hidden shadow-2xl bg-black"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          variants={itemVariants}
        >
          {/* Actual Video Player */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentVideo?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-video bg-black"
            >
              <video
                ref={videoRef}
                src={currentVideo?.src}
                className="w-full h-full object-cover"
                loop
                playsInline
                onLoadedData={() => {
                  if (videoRef.current) {
                    videoRef.current.volume = volume
                    videoRef.current.muted = isMuted
                  }
                }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md ${
                  currentVideo?.category === 'apartments'
                    ? 'bg-white/90 text-black'
                    : 'bg-white/90 text-black'
                }`}>
                  {currentVideo?.category === 'apartments' ? (
                    <><Home className="w-4 h-4 inline mr-2" />BS Apartments</>
                  ) : (
                    <><MapPin className="w-4 h-4 inline mr-2" />BS Trips</>
                  )}
                </span>
              </div>

              {/* Volume Controls */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full px-3 py-2 transition-all duration-300 group/volume">
                <button
                  onClick={toggleMute}
                  className="text-white"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
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
                  className="w-0 group-hover/volume:w-20 transition-all duration-300 accent-white cursor-pointer"
                />
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center z-10"
              >
                <motion.div 
                  className={`bg-white/95 hover:bg-white p-5 rounded-full shadow-2xl transition-opacity duration-300 ${
                    isPlaying && !isHovering ? 'opacity-0' : 'opacity-100'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-black" fill="currentColor" />
                  ) : (
                    <Play className="w-8 h-8 text-black ml-1" fill="currentColor" />
                  )}
                </motion.div>
              </button>

              {/* Video Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {currentVideo?.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-lg mb-4 max-w-2xl">
                    {currentVideo?.description}
                  </p>
                  
                  {/* Features */}
                  {currentVideo?.features && (
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {currentVideo.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 md:px-4 py-1 md:py-2 bg-white/20 backdrop-blur-sm text-white text-xs md:text-sm rounded-full border border-white/30"
                        >
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={goToPrev}
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 md:p-4 rounded-full text-white hover:scale-110 z-10"
                aria-label="Previous video"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 md:p-4 rounded-full text-white hover:scale-110 z-10"
                aria-label="Next video"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentIndex + 1) / filteredVideos.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Thumbnail Strip */}
        <motion.div 
          className="mt-6 md:mt-8 flex gap-3 md:gap-4 overflow-x-auto pb-4 px-2 scrollbar-hide"
          variants={itemVariants}
        >
          {filteredVideos.map((video, index) => (
            <motion.button
              key={video.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-black shadow-lg scale-105'
                  : 'opacity-70 hover:opacity-100 hover:scale-102'
              }`}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <video
                src={video.src}
                className="w-28 h-16 sm:w-40 sm:h-24 object-cover"
                muted
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-medium truncate">{video.title}</p>
              </div>
              {index === currentIndex && (
                <div className="absolute top-2 right-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse block" />
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
