import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { Home, MapPin, Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/app/components/ui/carousel'

interface ApartmentVideo {
  id: string
  title: string
  description: string
  location: string
  src: string
  features: string[]
}

const apartmentVideos: ApartmentVideo[] = [
  {
    id: '1',
    title: 'BS Signature Residences',
    description: 'Step inside our premium BS apartments — modern interiors designed for comfortable, elevated living.',
    location: 'Kigali, Rwanda',
    src: 'https://res.cloudinary.com/dyqfyqtjl/video/upload/v1781904336/WhatsApp_Video_2026-06-19_at_19.19.11_up9nwm.mp4',
    features: ['Fully Furnished', 'Prime Location', '24/7 Security'],
  },
]

export default function ApartmentsCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  // Track the active slide
  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
      // Pause any video that's no longer in view
      videoRefs.current.forEach((video, i) => {
        if (video && i !== api.selectedScrollSnap()) {
          video.pause()
        }
      })
      setIsPlaying(false)
    }
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  const togglePlay = () => {
    const video = videoRefs.current[current]
    if (!video) return
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
      autoplay.current.stop()
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const next = !isMuted
    setIsMuted(next)
    videoRefs.current.forEach((video) => {
      if (video) video.muted = next
    })
  }

  return (
    <motion.section
      className="relative py-16 md:py-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-white to-gray-50" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 text-gray-700 text-sm font-medium rounded-full mb-4">
            <Home className="w-4 h-4" /> BS Apartments
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            BS <span className="text-gray-600">Apartments</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Premium living spaces crafted for comfort, style and convenience — take a tour.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative px-4 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{ loop: true, align: 'center' }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent>
              {apartmentVideos.map((apt, index) => (
                <CarouselItem key={apt.id}>
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl bg-black ring-1 ring-black/10"
                    whileHover={{ scale: 1.005 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative aspect-video w-full">
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el
                        }}
                        src={apt.src}
                        className="w-full h-full object-cover"
                        playsInline
                        muted={isMuted}
                        loop
                        preload="metadata"
                        onClick={togglePlay}
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none" />

                      {/* Location badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold backdrop-blur-md bg-white/90 text-black">
                          <MapPin className="w-3.5 h-3.5" /> {apt.location}
                        </span>
                      </div>

                      {/* Mute toggle */}
                      <button
                        onClick={toggleMute}
                        className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-colors"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 md:w-5 md:h-5" /> : <Volume2 className="w-4 h-4 md:w-5 md:h-5" />}
                      </button>

                      {/* Play / Pause */}
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center z-10"
                        aria-label={isPlaying ? 'Pause video' : 'Play video'}
                      >
                        <motion.span
                          className={`bg-white/90 hover:bg-white p-4 md:p-5 rounded-full shadow-xl transition-opacity duration-300 ${
                            isPlaying ? 'opacity-0' : 'opacity-100'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6 md:w-7 md:h-7 text-black" fill="currentColor" />
                          ) : (
                            <Play className="w-6 h-6 md:w-7 md:h-7 text-black ml-0.5" fill="currentColor" />
                          )}
                        </motion.span>
                      </button>

                      {/* Info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-10 pointer-events-none">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-2">{apt.title}</h3>
                        <p className="text-white/80 text-sm md:text-base max-w-2xl mb-3">{apt.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {apt.features.map((feature) => (
                            <span
                              key={feature}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm rounded-full"
                            >
                              <Sparkles className="w-3 h-3" /> {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {apartmentVideos.length > 1 && (
              <>
                <CarouselPrevious className="left-0 sm:-left-4 bg-white text-gray-800 border-gray-200 shadow-lg h-10 w-10" />
                <CarouselNext className="right-0 sm:-right-4 bg-white text-gray-800 border-gray-200 shadow-lg h-10 w-10" />
              </>
            )}
          </Carousel>

          {/* Dot indicators */}
          {apartmentVideos.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {apartmentVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to apartment ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  )
}
