

import React from 'react'
import { motion } from "framer-motion"
import { Church, Cross, Heart, Settings, Users, Wallet } from 'lucide-react'

export default function About() {
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
        duration: 0.8
      }
    }
  }

  const steps = [
    {
      icon: <Church className="w-12 h-12 mb-4" />,
      title: "Christ-Centered Brand",
      description: "We'll start by understanding your mission and vision, seeing how we can align your brand with own values."
    },
    {
      icon: <Cross className="w-12 h-12 mb-4" />,
      title: "Divine Design",
      description: "With your fashion goals in mind, we'll create fashion that reflects both style and scripture."
    },
    {
      icon: <Heart className="w-12 h-12 mb-4" />,
      title: "Spread Love",
      description: "We'll help you share God's love through fashion that speaks to both heart and soul."
    }
  ]

  

  return (
    <section className="text-black py-24">
      <motion.div 
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
       >
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold mb-6">
            Our simple 3-step process we use to{' '}
            <span className="italic">serve</span> you.
          </h2>
          <p className="text-gray-400 text-xl">
            From modest wear to contemporary Christian brand, we've got you covered with designs, products and services that honor your faith.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
         >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-center items-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-8 text-center"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto p-6 rounded-xl border border-black/10 bg-gray-50 
           transform hover:text-pink-500 hover:scale-110 transition-all duration-500 cursor-pointer relative group
           ">
            <p className="text-lg text-black-600">
              The Lord is my shepherd; I shall not want - Psalms 23:1
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-2 text-center"
          variants={itemVariants}
        >                   
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-white/10 backdrop-blur-sm">
            <div className="px-6 py-2 rounded-full bg-white/10">
              <span className="text-sm font-medium">✝️ Guided by Faith, Designed with Purpose</span>
            </div>
          </div>
              </motion.div>      
              
        
      </motion.div>
      
    <motion.div 
        className="container mx-auto px-4 mt-44"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-5xl font-bold mb-6">
          Wear your faith, live your {' '}
            <span className="italic">purpose</span>
          </h2>
          <p className="text-gray-400 text-xl">
          We offer our customise brand designs that embody our deep faith and commitment to serving others, with each piece crafted as a testament to our belief in Jesus and a desire to serve Him.
          </p>
        </motion.div>
        </motion.div>
    </section>
    
  )
}
