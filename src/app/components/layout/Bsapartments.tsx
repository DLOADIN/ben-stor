"use client"

import { motion } from "framer-motion";
import { apartments } from "@/app/components/constants/apartments"

export default function Apartments (){
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <div className="py-20 px-4 md:px-8 text-black" id="apartments">
      <motion.div 
        className="max-w-7xl mx-auto space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
      className="max-w-3xl mx-auto text-center my-16"
      variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-6">
          You can even <span className="italic">rent</span> the best Apartments in Rwanda
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          With Ben-stores we offer a variety of <br /> 
          amazing & luxurious apartments and many more.
        </p>
      </motion.div>
      <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     {apartments.map((apartment, index) => (
  <div className="grid md:grid-cols-2 gap-8 items-center py-10" key={index}>
    <div className={`${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
      <motion.h3 
        className="text-2xl font-semibold text-black mb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {apartment.title}
      </motion.h3>
      <motion.p 
        className="text-gray-400"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        {apartment.description}
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
      </motion.div>
    </div>
    <div className={`${index % 2 === 0 ? 'order-1 md:order-2' : 'order-1 md:order-1'} overflow-hidden rounded-lg w-full h-full`}>
      <motion.img
        src={typeof apartment.image === 'string' ? apartment.image : apartment.image.src}
        alt={apartment.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </div>
))}
    </motion.div>
      </motion.div>
    </div>
  );
};