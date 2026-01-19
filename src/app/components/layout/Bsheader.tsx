import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Navbar from "@/app/components/layout/Bsnavbar";
import Tours from "@/assets/Tours.jpg";
import Iphone from "@/assets/Iphone.jpg";
import TRUCK1 from "@/assets/IMG-20241007-WA0040.jpg";
import TRUCK2 from "@/assets/IMG-20241007-WA0043.jpg";
import TRUCK3 from "@/assets/IMG-20241007-WA0015.jpg";
import TRUCK4 from "@/assets/IMG-20241007-WA0018.jpg";
import TRUCK5 from "@/assets/IMG-20241007-WA0020.jpg";
import hike from "@/assets/pexels-aysun-i-lkan-903014248-29907672.jpg";
import laptop from "@/assets/pexels-pixabay-39284.jpg"

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const images = [
    { src: TRUCK1, alt: "TRUCK1" },
    { src: TRUCK2, alt: "TRUCK2" },
    { src: TRUCK3, alt: "TRUCK3" },
    { src: TRUCK4, alt: "TRUCK4" },
    { src: TRUCK5, alt: "TRUCK5" },
    { src: Tours, alt: "Tours" },
    { src: hike, alt:"Hike"},
    { src:laptop, alt:"Laptop"},
    { src: Iphone, alt: "Phones" }
  ];

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative min-h-screen text-black overflow-hidden">
      <Navbar />
      <div className="relative max-w-[1400px] mx-auto px-4 pt-20">
        <div className="flex flex-col iteÑms-center lg:grid lg:grid-cols-2 gap-12 min-h-[calc(100vh-80px)]">
          <div className="space-y-8 text-center lg:text-left max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Welcome
                <br />
                To Ben-stores
              </h1>
              <p className="text-lg text-gray-500 max-w-md mx-auto lg:mx-0">
                At Ben-stores we are more than just a fashion brand. We provide multiple services
                like renting cars, apartments and much more.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <Link to="#video">
                  <motion.button
                    className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get To Know More ↓
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {images.map((image, index) => (
                    <div key={index} className="relative flex-none w-full">
                      <div className="relative h-24 w-full flex justify-center lg:justify-start">
                        <div className="relative w-24 h-32 bg-black/40 backdrop-blur-sm p-1 rounded-xl">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="rounded-lg object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center lg:justify-start gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === selectedIndex ? 'bg-white' : 'bg-gray-600'
                    }`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 mt-4 text-center lg:text-left">
                More than 1000+ rental apartments, tours, cars and phones
                <br />
                have been provided by Ben-Stores
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex w-full mx-auto mb-10 
              h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]
              sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px]"
          >
            <div className="absolute inset-0 transform perspective-1000 rotate-y-[-12deg] origin-left">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src={images[selectedIndex].src}
                  alt="Featured image"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        
        </div>
      </div>
    </div>
  );
}
