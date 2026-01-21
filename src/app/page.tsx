

import { motion } from "framer-motion"
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Products from "./components/layout/Products";
import Location from "./components/layout/Location";
import TestimonialsCarousel from "./components/layout/Testimonials";
import CEOCard from "./components/layout/CeoCard";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Subnavbar from "./components/layout/Subnavbar";

// Page metadata for SEO
const pageTitle = "BS BRAND";
const pageDescription = "The home page of BS BRAND & BEN STORES";

export default function Home() {
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

        <section className="sm:mt-10">
        <Subnavbar />
          </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="products" className="min-h-screen">
          <Products />
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
  );
}
