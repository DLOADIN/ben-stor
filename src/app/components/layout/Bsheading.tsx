"use client";
import {motion} from "framer-motion"

export default function Bsheading() {
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
  <div 
  className="container mx-auto px-4 text-black">
  <motion.div 
            className="mx-auto my-10 items-center justify-end max-w-3xl text-center"
            variants={itemVariants}
            >
              <h2 className="text-5xl font-bold mb-6">
                Get To <span className="italic">see one of </span>our apartments.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                We are here to provide any product/service that you might need.
              </p>
          </motion.div>

  </div>
)}