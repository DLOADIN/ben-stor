import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent } from "@/app/components/ui/dialog"
import { destinations, type Destination } from "@/app/lib/data"

export default function TravelCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
  }

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  
  useEffect(() => {
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setSelectedImageIndex(0)
  }, [selectedDestination])

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
    <div id="travel" className="text-black">
      <motion.div 
      className="max-w-3xl mx-auto text-center my-16"
      variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-6">
          Get To Travel<span className="italic">with</span> us
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          At Ben-stores we are proud to offer our clients <br /> 
          the most unforgettable travel & tours experiences in Rwanda.
        </p>
      </motion.div>
      <div className="relative h-[600px] w-full overflow-hidden rounded-xl">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div
              onClick={() => {
                setSelectedDestination(destinations[currentIndex])
                setDialogOpen(true)
              }}
              className="group relative h-full w-full cursor-pointer"
            >
              <img
                src={destinations[currentIndex].image}
                alt={destinations[currentIndex].name}
                className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-sm font-medium">
                    {destinations[currentIndex].vacations} VACATIONS
                  </div>
                  <h2 className="mt-2 text-4xl font-bold">
                    {destinations[currentIndex].name}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-gray-200">
                    {destinations[currentIndex].description}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 right-8 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
            onClick={previous}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl p-0">
          {selectedDestination && (
            <div className="grid gap-4 p-6">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-full w-full"
                >
                  <img
                    src={selectedDestination.relatedImages[selectedImageIndex].url}
                    alt={selectedDestination.relatedImages[selectedImageIndex].title}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                  <h3 className="text-xl font-bold">
                    {selectedDestination.relatedImages[selectedImageIndex].title}
                  </h3>
                  <p className="mt-2 text-sm">
                    {selectedDestination.relatedImages[selectedImageIndex].description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
                {selectedDestination.relatedImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-video overflow-hidden rounded-lg transition-all ${
                      selectedImageIndex === index
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:opacity-80"
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

