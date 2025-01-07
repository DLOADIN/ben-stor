import { Compass, ShoppingCart, Briefcase, Clock, Globe, Shield, Tag, Truck, Cross } from 'lucide-react'
import image1 from '@/PICS/DGT_6785.jpg'
import image2 from '@/PICS/TAKI9680.jpg';
import image3 from '@/PICS/DGT_6752.jpg'


interface SlideType {
  title: string;
  subtitle: string;
  image: any;
  icons: Array<{
    icon: React.ReactNode;
    position: string;
  }>;
}

const slides: SlideType[] = [
  {
    title: "Welcome to BS Brand",
    subtitle: "The #1 platform where faith meets fashion, weaving garments that whisper hope and inspire the soul, a Jesus-centered haven where beauty knows no bounds.",
    image: image1,
    icons: [
      { icon: <Clock className="h-6 w-6 text-white" />, position: "top-1/4 left-1/4" },
      { icon: <Globe className="h-6 w-6 text-white" />, position: "top-1/3 right-1/4" },
      { icon: <Cross className="h-6 w-6 text-white" />, position: "top-1/2 right-1/4" },
      { icon: <Compass className="h-6 w-6 text-white" />, position: "bottom-1/4 left-1/3" },
    ]
  },
  {
    title: "We ship anywhere in the world with quality, protection and supervision",
    subtitle: "With precision and care, our expert team navigates global logistics with the latest technology, ensuring quality and protection every step of the way.",
    image: image2,
    icons: [
      { icon: <Shield className="h-6 w-6 text-white" />, position: "top-1/4 right-1/4" },
      { icon: <Truck className="h-6 w-6 text-white" />, position: "bottom-1/4 left-1/4" },
      { icon: <Tag className="h-6 w-6 text-white" />, position: "bottom-1/3 right-1/3" },
    ]
  },
  {
    title: "Just get into contact with us we shall deliver beyond your expectations",
    subtitle: "Attract, screen, and manage the best candidates to grow your team — one great hire at a time.",
    image: image3,
    icons: [
      { icon: <Briefcase className="h-6 w-6 text-white" />, position: "top-1/3 left-1/4" },
      { icon: <ShoppingCart className="h-6 w-6 text-white" />, position: "bottom-1/2 right-1/3" },
      { icon: <Globe className="h-6 w-6 text-white" />, position: "bottom-1/3 right-1/4" },
    ]
  }
]

export {slides, type SlideType}