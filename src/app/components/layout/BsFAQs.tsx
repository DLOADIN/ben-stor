"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus } from 'lucide-react'
import { useState } from "react"
import { faqs } from "../constants/FAQs"

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0) 
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

  return (
    <motion.div 
        className="w-full max-w-3xl mx-auto p-4 space-y-2 mb-10"
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         id="faqs">

      <motion.div 
      className="max-w-3xl mx-auto text-center my-16"
      variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-6">
          The most <span className="italic">asked</span> questions.
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          We are here to respond any question and give more information < br/>
          on any inquiry from our customers locally & internatinally. 
        </p>
      </motion.div>
    
    <motion.div variants={itemVariants}>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            backgroundColor: expandedIndex === index ? "rgba(255, 255, 255, 0.03)" : "transparent",
          }}
          className="rounded-xl overflow-hidden"
        >
          <motion.button
            onClick={() => setExpandedIndex(index === expandedIndex ? null : index)}
            className="flex justify-between items-center w-full p-4 text-left"
            initial={false}
            animate={{
              backgroundColor: expandedIndex === index ? "rgba(255, 255, 255, 0.03)" : "transparent",
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-md font-medium text-black">{faq.question}</span>
            <motion.div
              initial={false}
              animate={{
                rotate: expandedIndex === index ? 180 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              {expandedIndex === index ? (
                <Minus className="h-4 w-4 text-black" />
              ) : (
                <Plus className="h-4 w-4 text-black" />
              )}
            </motion.div>
          </motion.button>
          <AnimatePresence initial={false}>
            {expandedIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.3,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15,
                    },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.3,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                }}
              >
                <div className="px-4 pb-4">
                  <p className="text-[16px] text-gray-400">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
      </motion.div>
    </motion.div>
  )
}

