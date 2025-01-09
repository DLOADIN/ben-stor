"use client"
import apartment1 from "@/assets/Apartments/pexels-heyho-6970026.jpg" 
import apartment2 from "@/assets/Apartments/pexels-pixabay-164938.jpg"
import apartment3 from "@/assets/Apartments/pexels-heyho-6782363.jpg"
import apartment4 from "@/assets/Apartments/pexels-fotoaibe-1643383.jpg"
import apartment5 from "@/assets/Apartments/pexels-heyho-7546596.jpg"
import apartment6 from "@/assets/Apartments/pexels-heyho-8089086.jpg"
import apartment7 from "@/assets/Apartments/pexels-heyho-8146333.jpg" 
import apartment8 from "@/assets/Apartments/pexels-itsterrymag-2631746.jpg"
import apartment9 from "@/assets/Apartments/pexels-jvdm-3753437.jpg"
import apartment10 from "@/assets/Apartments/pexels-heyho-6301168.jpg"
import { StaticImageData } from 'next/image';

interface ApartmentCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const apartments: ApartmentCardProps[] = [
  {
    title: "Modern One-Bedroom Apartment",
    description: "Enjoy modern living in this one-bedroom apartment featuring a fully equipped kitchen and a comfortable living area.",
    image: apartment1
  },
  {
    title: "Cozy Studio Apartment",
    description: "This charming studio apartment offers a comfortable and convenient living space, perfect for solo travelers or those seeking a more intimate living experience.",
    image: apartment2
  },
  {
    title: "Luxury Two-Bedroom Apartment", 
    description: "Indulge in the ultimate Kigali lifestyle with this luxurious two-bedroom apartment featuring high-end finishes and a spacious living area.",
    image: apartment3 
  },
  {
    title: "Family-Friendly Three-Bedroom Apartment",
    description: "Spacious and comfortable, this three-bedroom apartment is perfect for families.",
    image: apartment4
  },
  {
    title: "Affordable Studio Apartment",
    description: "This budget-friendly studio apartment offers a simple yet comfortable living space.",
    image: apartment5
  },
  {
    title: "Modern Two-Bedroom Apartment",
    description: "Experience modern living in this stylish two-bedroom apartment featuring a contemporary design and a fully equipped kitchen.",
    image: apartment6
  },
  {
    title: "Spacious Penthouse",
    description: "Enjoy breathtaking city views from this luxurious penthouse with high ceilings and a private terrace.",
    image: apartment7
  },
  {
    title: "Charming Townhouse",
    description: "This charming townhouse offers a unique living experience with multiple levels and a private garden.",
    image: apartment8
  },
  {
    title: "Modern Apartment Building",
    description: "This modern apartment building offers a range of units with various sizes and layouts to suit different needs.",
    image: apartment9
  },
  {
    title: "Exclusive Gated Community Apartment",
    description: "Experience the ultimate in security and exclusivity with this apartment located within a gated community.",
    image: apartment10
  },
];

export { apartments, type ApartmentCardProps }