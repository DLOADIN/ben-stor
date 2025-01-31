"use client"

import { Metadata } from "next";
import HeroSection from "@/app/components/layout/Bsheader";
import StarryBackground from "@/app/components/effects/SnowEffect";
import VideoHero from "@/app/components/layout/BsSection";
import Bswhyus from "@/app/components/layout/Bswhyus"
import Footer from "@/app/components/layout/BsFooter"
import Bsheading from "@/app/components/layout/Bsheading"
import FAQ from "@/app/components/layout/BsFAQs"
import Projects from "@/app/components/layout/Bsservices"
import TravelCarousel from "@/app/components/layout/Bsproducts"
import Apartments from "@/app/components/layout/Bsapartments"
import IPhoneShowcase from "@/app/components/layout/Bsiphones"
import Accessories from "@/app/components/layout/Bsaccessorries"
import { motion } from "framer-motion"

const metadata: Metadata = {
  title: "BEN STORES",
  description: "The home page of BS BRAND & BEN STORES",
};

export default function Home() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1.5}}
      style={{
        backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
      }}
      className="min-h-screen relative"
    >
      <StarryBackground />
      <div className="relative z-10">
        <HeroSection />
        <Projects />
        <Apartments/>
        <Bsheading />
        <VideoHero />
        <TravelCarousel />
        <IPhoneShowcase />
        <Accessories />
        <Bswhyus />
          <FAQ />
        <Footer />
      </div>
    </motion.div>
  );
}

