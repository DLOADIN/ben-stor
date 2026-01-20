import { motion } from "framer-motion"
import Navbar from "../app/components/layout/Navbar"
import Header from "../app/components/layout/Header"
import VideoShowcase from "../app/components/layout/VideoShowcase"
import About from "../app/components/layout/About"
import Products from "../app/components/layout/Products"
import Ambassadors3DCarousel from "../app/components/layout/Ambassadors3DCarousel"
import Location from "../app/components/layout/Location"
import TestimonialsCarousel from "../app/components/layout/Testimonials"
import CEOCard from "../app/components/layout/CeoCard"
import Contact from "../app/components/layout/Contact"
import Footer from "../app/components/layout/Footer"
import Subnavbar from "../app/components/layout/Subnavbar"

export default function HomePage() {
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1.5}}
      style={{ backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)" }}
    >
      <Navbar />
      <main>
        <section id="home" className="pt-10">
          <Header />
        </section>

        {/* Video Showcase - BS Apartments & Trips */}
        <section id="showcase" className="py-8">
          <VideoShowcase />
        </section>

        <section className="sm:mt-10">
          <Subnavbar />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="products" className="min-h-screen">
          <Products />
        </section>

        {/* BS Ambassadors 3D Carousel */}
        <section id="ambassadors">
          <Ambassadors3DCarousel />
        </section>

        <section className="min-h-screen">
          <Location />
        </section>

        <section id="testimonials" className="mb-10">
          <TestimonialsCarousel />
        </section>

        <section className="min-h-screen">
          <CEOCard />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>

        <Footer />
      </main>
    </motion.div>
  )
}
