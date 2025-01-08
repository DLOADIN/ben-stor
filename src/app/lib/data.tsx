"use client"

import image1 from '@/PICS/DGT_6785.jpg'
import image2 from '@/PICS/DGT_6547.jpg'
import image3 from '@/PICS/DGT_6752.jpg'
import image4 from '@/PICS/DGT_6563.jpg'
import image5 from '@/PICS/DGT_6595.jpg'
import image6 from '@/PICS/DGT_6634.jpg'
import image7 from '@/PICS/DGT_6642.jpg'
import image8 from '@/PICS/DGT_6665.jpg'
import image9 from '@/PICS/DGT_6687.jpg'
import image10 from '@/PICS/DGT_6716.jpg'
import image11 from '@/PICS/DGT_6760.jpg'
import image13 from '@/PICS/DGT_6756.jpg'
import image15 from '@/PICS/TAKI9572.jpg'
import image16 from '@/PICS/TAKI9585.jpg'
import image17 from '@/PICS/TAKI9680.jpg'
import image18 from '@/PICS/TAKI9606.jpg'
import image19 from '@/PICS/TAKI9610.jpg'
import image20 from '@/PICS/DGT_677.jpg'
import image21 from '@/PICS/TAKI9589.jpg'
import image22 from '@/PICS/TAKI9596.jpg'
import image23 from '@/PICS/TAKI9599.jpg'
import { StaticImageData } from 'next/image'

export interface RelatedImage {
  url: StaticImageData
  title: string
  description: string
}

export interface Destination {
  id: number
  name: string
  vacations: number
  image: StaticImageData
  description: string
  relatedImages: RelatedImage[]
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Tropical Paradise",
    vacations: 8,
    image: image1,
    description: "Experience the magic of our tropical paradise, where lush forests meet pristine beaches. This destination offers a perfect blend of natural beauty, adventure, and relaxation.",
    relatedImages: [
      {
        url: image2,
        title: "Secluded Beach Cove",
        description: "Discover a hidden gem nestled along the coastline, perfect for a peaceful retreat."
      },
      {
        url: image3,
        title: "Lush Jungle Trail",
        description: "Embark on an adventure through dense, vibrant forests teeming with exotic wildlife."
      },
      {
        url: image4,
        title: "Sunset at the Marina",
        description: "Experience breathtaking sunsets at our picturesque marina, ideal for evening strolls."
      }
    ]
  },
  {
    id: 2,
    name: "Mountain Retreat",
    vacations: 6,
    image: image5,
    description: "Escape to the serene beauty of our mountain retreat. Breathe in the crisp air, hike through stunning landscapes, and unwind in cozy lodges.",
    relatedImages: [
      {
        url: image6,
        title: "Alpine Lake View",
        description: "Enjoy the tranquil beauty of our crystal-clear alpine lakes surrounded by majestic peaks."
      },
      {
        url: image7,
        title: "Mountain Cabin",
        description: "Stay in charming, rustic cabins that offer comfort with a touch of adventure."
      },
      {
        url: image8,
        title: "Scenic Hiking Trail",
        description: "Explore well-maintained trails that lead to breathtaking vistas and hidden waterfalls."
      }
    ]
  },
  {
    id: 3,
    name: "Urban Explorer",
    vacations: 5,
    image: image9,
    description: "Dive into the vibrant energy of our urban destinations. From world-class cuisine to cutting-edge art scenes, experience the pulse of city life.",
    relatedImages: [
      {
        url: image10,
        title: "City Skyline",
        description: "Marvel at the impressive skyline, a testament to human architecture and innovation."
      },
      {
        url: image11,
        title: "Street Art District",
        description: "Wander through colorful streets showcasing the work of talented local and international artists."
      },
      {
        url: image13,
        title: "Rooftop Bar",
        description: "Sip cocktails and enjoy panoramic views of the city from our trendy rooftop bars."
      }
    ]
  },
  {
    id: 4,
    name: "Historical Journey",
    vacations: 7,
    image: image15,
    description: "Step back in time and explore the rich history of our cultural destinations. From ancient ruins to preserved old towns, immerse yourself in the stories of the past.",
    relatedImages: [
      {
        url: image16,
        title: "Ancient Ruins",
        description: "Walk among the remnants of ancient civilizations and imagine life in bygone eras."
      },
      {
        url: image17,
        title: "Medieval Castle",
        description: "Explore the grand halls and fortified walls of our well-preserved medieval castles."
      },
      {
        url: image18,
        title: "Traditional Market",
        description: "Experience the sights, sounds, and flavors of our bustling traditional markets."
      }
    ]
  },
  {
    id: 5,
    name: "Island Getaway",
    vacations: 9,
    image: image19,
    description: "Escape to paradise on our idyllic island getaways. Relax on pristine beaches, dive into crystal-clear waters, and experience the laid-back island lifestyle.",
    relatedImages: [
      {
        url: image20,
        title: "Overwater Bungalows",
        description: "Stay in luxurious overwater bungalows for a truly unforgettable tropical experience."
      },
      {
        url: image21,
        title: "Coral Reef Snorkeling",
        description: "Discover vibrant underwater worlds as you snorkel among colorful coral reefs."
      },
      {
        url: image22,
        title: "Beachfront Dining",
        description: "Enjoy fresh seafood and local cuisine with your toes in the sand at our beachfront restaurants."
      }
    ]
  }
]

