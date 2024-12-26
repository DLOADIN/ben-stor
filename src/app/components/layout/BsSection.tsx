'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VideoHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const [isPlaying, setIsPlaying] = useState(false)
  const [error, setError] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [showHeading, setShowHeading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() =>{
      setShowHeading(false);
    }, 12000 );

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        const playPromise = videoRef.current.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error: Error) => {
              console.error("Video playback failed:", error)
              setError(true)
            })
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoError = () => {
    console.error("Video failed to load")
    setError(true)
  }

  return (
    <motion.div 
      className="container mx-auto px-4 relative w-screen h-screen overflow-hidden rounded-3xl" 
      id="video"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >
        {error ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xl">Video failed to load. Please check the file path and try again.</p>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            loop
            playsInline
            onError={handleVideoError}
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center">
            <button
              onClick={togglePlay}
              className="mb-8 p-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-12 h-12 text-white" />
              ) : (
                <Play className="w-12 h-12 text-white" />
              )}
            </button>
            
            {showHeading && (
              <h1 className="text-white text-7xl font-bold tracking-tight text-center px-4">
                Ben Stores Apartments
              </h1>
            )}
          </div>
        </>
      )}
    </motion.div>
  )
}