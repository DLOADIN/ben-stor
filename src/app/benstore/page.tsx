"use client"

import HeroSection from "@/app/components/layout/Bsheader";
import StarryBackground from "@/app/components/effects/SnowEffect";
import VideoHero from "@/app/components/layout/BsSection";
import Bswhyus from "@/app/components/layout/Bswhyus"
import Footer from "@/app/components/layout/BsFooter"
import Bsheading from "@/app/components/layout/Bsheading"
import FAQ from "@/app/components/layout/BsFAQs"

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)",
      }}
      className="min-h-screen relative"
    >
      <StarryBackground />
      <div className="relative z-10">
        <HeroSection />
        <Bsheading />
        <VideoHero />
        <Bswhyus />
          <FAQ />
        <Footer />
      </div>
    </div>
  );
}

