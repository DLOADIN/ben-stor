import React from 'react';
import { Card } from "../ui/card";
import Kentucky from '@/PICS/Places/pexels-owen-outdoors-409204690-27330767.jpg'
import Rwanda from '@/PICS/Places/Rwanda 🇷🇼.jpg'
import Arizona from '@/PICS/Places/pexels-patrick-boyer-2209232-3868552.jpg'
import { motion } from "framer-motion"

const LOCATION_CARDS = [
  {
    country: "USA, Arizona - Phoenix",
    description: "Choosing Phoenix as the base for my Christian fashion brand was a strategic decision because its diverse and growing population offers a unique blend of cultural influences and strong faith communities, creating a receptive audience for my mission-driven designs.",
    stats: [
      { label: "Quality & Cost-Effective Products", value: "100%" },
      { label: "Average Work Time", value: "24/7 hours" },
    ],
    image: Arizona,
  },
  {
    country: "Rwanda, Kigali City",
    description: "Kigali City, Rwanda, as our headquarters, isn’t just a location. It’s the heart and soul of our brand, where innovation meets a rich tapestry of culture and creativity. We headquartered in one of Africa’s most dynamic cities is the ultimate power move for a global vision 🌍✨.",
    stats: [
      { label: "Customer satisfaction", value: "99%" },
      { label: "Average Work Time", value: "24/7 hours" },
    ],
    image: Rwanda,
  },
  {
    country: "USA,  Kentucky - Louisville & Lexington",
    description: "Louisville & Lexington, Kentucky, were chosen for their rich cultures, strong communities, and central locations, making them the perfect cities for connecting with a diverse audience. It’s a natural fit for our mission of blending tradition with faith-inspired fashion.",
    stats: [
      { label: "Delivery Satisfaction", value: "95%" },
      { label: "Average Work Time", value: "24/7 hours" },
    ],
    image: Kentucky,
  },
];

const LocationCard = ({ card }: { card: typeof LOCATION_CARDS[number] }) => (
  <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500">
  <div className="flex flex-col md:flex-row h-full">
    <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-8 text-center space-y-4">
      <h3 className="text-2xl md:text-3xl font-bold leading-tight">{card.country}</h3>
      <p className="text-sm md:text-base text-muted-foreground">{card.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {card.stats.map((stat, statIndex) => (
          <div key={statIndex} className="space-y-1">
            <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
            <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto min-h-[200px] md:min-h-full">
      <img
        src={card.image}
        alt={`Office location in ${card.country}`}
        className="object-cover w-full h-full"
      />
    </div>
  </div>
</Card>
);

export default function Location() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9
      }
    }
  }

  return(
    <motion.div 
        className="container mx-auto p-4 space-y-6 text-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
       >
        <motion.div 
          className="max-w-3xl mx-auto text-center mt-10 mb-16"
          variants={itemVariants}
         >
         <h2 className="text-5xl font-bold mb-6">
          We ship our products <span className="italic bold">all around </span> the globe.
         </h2>
         <p className="text-gray-400 text-xl">
          We work hand in hand with the Fastest Aerial Transportation Company in the World. 
          <span className="text-red-700 bg-yellow-500 italic text-3xl font-extrabold mx-1 rounded-md px-1"> DHL</span>
          Orders are received by customers from 1 - 2 days anywhere in the world.
          </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        className="space-y-6"
        >
          {LOCATION_CARDS.map((card, index) => (
          <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
          <LocationCard card={card} />
          </motion.div>
      ))}</motion.div>
    </motion.div>
    )
}
