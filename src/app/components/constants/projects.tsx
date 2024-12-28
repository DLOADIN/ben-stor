"use client"

import iphones from "@/assets/IMG-20241007-WA0032.jpg"
import car from "@/assets/IMG-20241007-WA0019.jpg"
import fashion from "@/assets/DGT_6771.jpg"
import OtherTours from "@/assets/OtherTours.jpg"
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const services: ProjectCardProps[] = [
  {
    title: "CAR & APARTMENTS RENTALS",
    description: "Whether you’re visiting Rwanda or exploring new destinations, we provide reliable vehicles and comfortable accommodations tailored to your needs.",
    image: car
  },
  {
    title: "LATEST FASHION & FOOTWEAR",
    description: "Shop our premium-quality clothing and first-class shoes to stay stylish wherever you go.",
    image: fashion,
  },
  {
    title: "IPHONES & ACCESSORIES FOR SALE",
    description: "Capture every moment in stunning detail with the latest iPhones available at competitive prices.",
    image: iphones,
  },
  {
    title: "TRIP ORGANISATION WORLDWIDE",
    description: "From local adventures to global tours and journeys, let us plan your next trip with care and expertise.",
    image: OtherTours,
  },
];