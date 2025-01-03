"use client";

import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import About from "./components/layout/About";
import Products from "./components/layout/Products";
import Location from "./components/layout/Location";
import TestimonialsCarousel from "./components/layout/Testimonials";
import CEOCard from "./components/layout/CeoCard";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
      }}
      className="min-h-screen"
    >
      
      <Navbar />
      <main>
        <section id="home" className="min-h-screen">
          <Header />
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

        <section  className="min-h-screen">
          <CEOCard />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />

        </section>
        <Footer />
      </main>

    </div>
  );
}
