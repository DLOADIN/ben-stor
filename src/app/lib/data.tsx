"use client"

import image1 from '@/assets/AKAGERA/pexels-arthurbrognoli-2317536.jpg'
import image2 from '@/assets/AKAGERA/pexels-followalice-667205.jpg'
import image3 from '@/assets/AKAGERA/pexels-jesus-esteban-san-jose-11194232-30148522.jpg'
import image4 from '@/assets/AKAGERA/pexels-pixabay-55814.jpg'
import image5 from '@/assets/AKAGERA/pexels-pixabay-59873.jpg'
import image6 from '@/assets/AKAGERA/pexels-rachel-claire-4577147.jpg'
import image7 from '@/assets/AKAGERA/pexels-rachel-claire-4577163.jpg'
import image8 from '@/assets/AKAGERA/pexels-redrum-visuals-5819272.jpg'
import image81 from '@/assets/AKAGERA/pexels-jvdm-1526409.jpg'
import image9 from '@/assets/LAKE KIVU/pexels-davukilo-11612743 (1).jpg'
import image10 from '@/assets/LAKE KIVU/pexels-jka-travels-26037843-19827348.jpg'
import image11 from '@/assets/LAKE KIVU/pexels-riste-spiroski-2147701595-30151977.jpg'
import image13 from '@/assets/LAKE KIVU/pexels-riste-spiroski-2147701595-30152081.jpg'
import image15 from '@/assets/LAKE KIVU/pexels-umwizerwa-673551096-19755751.jpg'
import image16 from '@/assets/NYUNGWE/nyungwepark_458792994_923287313166193_6847211965772881630_n.jpg'
import image17 from '@/assets/NYUNGWE/nyungwepark_459065554_923286853166239_7232036473609694231_n.jpg'
import image18 from '@/assets/NYUNGWE/pexels-francesco-ungaro-1238272.jpg'
import image19 from '@/assets/NYUNGWE/pexels-magda-ehlers-pexels-3822815.jpg'
import image20 from '@/assets/NYUNGWE/pexels-mikhail-nilov-9366581.jpg'
import image21 from '@/assets/MUSEUMS/3b82bb42-f8ab-45b2-9fd2-9a8bfe7747b4.jpeg'
import image22 from '@/assets/MUSEUMS/caption.jpg'
import image23 from '@/assets/MUSEUMS/gallery.jpg'
import image24 from '@/assets/MUSEUMS/gisozi-genocide-memorial.jpg'
import image25 from '@/assets/MUSEUMS/maison-du-dr-kandt.jpg'
import image26 from '@/assets/MUSEUMS/national-museum-of-rwanda.jpg'
import image27 from '@/assets/MUSEUMS/the-main-museum-building.jpg'
import image28 from '@/assets/MUSEUMS/this-is-the-view-of-the.jpg'
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
  // Akagera National Park
  {
    id: 1,
    name: "Akagera National Park",
    vacations: 8,
    image: image1,
    description:
      "Explore the diverse wildlife of Akagera National Park, home to elephants, lions, zebras, and more. Enjoy game drives, boat safaris, and stunning savanna landscapes.",
    relatedImages: [
      { url: image8, title: "Zebra Herd", description: "Witness a breathtaking herd of zebras grazing in the savanna." },
      { url: image4, title: "Lion Pride", description: "Spot a majestic lion pride hunting in the grasslands." },
      { url: image6, title: "Elephant Gathering", description: "Observe a gathering of elephants at a watering hole." },
      { url: image3, title: "Birdwatching", description: "Enjoy birdwatching opportunities with a diverse array of avian species." },
      { url: image7, title: "Savanna Sunset & flat valley", description: "Experience a breathtaking sunset over the savanna; And get to see the flattest landscape in Rwanda" },
      { url: image81, title: "Gazelles and Antelopes", description: "Spot various species of gazelles and antelopes, such as impalas, topis, and elands, grazing in the savanna." },
      { url: image5, title: "Bush Walk", description: "Embark on a guided bush walk to observe wildlife up close." },
    ],
  },

  // Lake Kivu
  {
    id: 2,
    name: "Lake Kivu",
    vacations: 6,
    image: image9,
    description:
      "Relax on the shores of Lake Kivu, the largest lake in Rwanda. Enjoy stunning views, water sports, and vibrant local culture.",
    relatedImages: [
      { url: image10, title: "Trip to Chateau Le Marara", description: "Witness a mesmerizing chateau over the lake." },
      { url: image11, title: "Beach Relaxation & Enjoy Sunsets beaches", description: "Relax on the sandy beaches of Lake Kivu." },
      { url: image13, title: "Water Sports", description: "Enjoy water sports like kayaking, paddleboarding, and swimming." },
      { url: image15, title: "The Lake's View", description: "Immerse yourself in the vibrant local culture of the region, Get to have the best fish the lake has to offer and so much more" },
    ],
  },

  // Nyungwe National Park
  {
    id: 3,
    name: "Nyungwe National Park",
    vacations: 5,
    image: image16,
    description:
      "Explore the lush rainforest of Nyungwe National Park, home to chimpanzees, monkeys, and a diverse array of birdlife. Hike through scenic trails and enjoy stunning views.",
    relatedImages: [
      { url: image17, title: "Forest Canopy Walkway & Resorts", description: "Walk through the forest canopy on a thrilling suspension bridge, And cool of in the most amazing resorts in Nyungwe" },
      { url: image18, title: "Chimpanzee Trekking", description: "Embark on a chimpanzee trekking adventure." },
      { url: image19, title: "Primate Observation", description: "Observe various primates like monkeys and colobus." },
      { url: image20, title: "Birdwatching", description: "Enjoy birdwatching opportunities with a diverse array of avian species." },
    ],
  },

  // Museums
  {
    id: 4,
    name: "Museums",
    vacations: 7,
    image: image25,
    description:
      "Delve into the rich history and culture of Rwanda by visiting its fascinating museums. Learn about the country's past and present.",
    relatedImages: [
      { url: image24, title: "Gisozi Genocide Memorial", description: "Pay respects at the Gisozi Genocide Memorial." },
      { url: image22, title: "Richard Kandt Museum", description: "Visit the Maison du Dr. Kandt, a historical museum." },
      { url: image23, title: "Ineza Art Center", description: "Explore the Ineza Art Center."},
      { url: image28, title: "National Museum of Rwanda", description: "Explore the National Museum of Rwanda." },
      { url: image26, title: "King's Palace Museum", description: "Explore the King's Palace Museum." },
      { url: image27, title: "Kigali Genocide Memorial", description: "Visit the Kigali Genocide Memorial." },
    ],
  },
]

