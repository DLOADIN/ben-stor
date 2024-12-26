"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Features } from '../constants/Features'

export default function Bswhyus() {
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
        duration: 1.9
      }
    }
  }


  return(
  <section className="py-24" id="why-us">
     <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      whileInView="visible"
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>

      <motion.div className="max-w-3xl mx-auto text-center mb-4"
        variants={itemVariants}
      >
          <h2 className="text-4xl text-black md:text-5xl font-bold mb-4">
            Our Uniqueness & Business Approach
          </h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          >
          {Features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-10 rounded-3xl bg-white border border-transparent hover:shadow-xl transition-shadow backdrop-filter backdrop-blur-lg border-white/30"
              variants={itemVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-4"
                variants={{
                  initial: { rotate: 0, color: "rgb(0, 0, 0)" },
                  hover: { rotate: 360, color: "rgb(236, 72, 153)" }, 
                }}
                transition={{ duration: 0.8, ease: "easeInOut", color:"rgb(236 72 153)" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section> 
  )}