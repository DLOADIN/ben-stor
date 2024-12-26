"use client"

import { Card, CardContent } from "@/app/components/ui/card"
import { Cross } from 'lucide-react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Image1 from '@/PICS/CEO.jpg'

export default function CEOCard() {
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

  return (
    <motion.div
      className="container mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}>

      <motion.div className="max-w-3xl mx-auto text-center mb-4"
        variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-4">
          Get To <span className="italic font-bold">Meet Our CEO</span>
        </h2>
        <p className="text-gray-400 text-xl">
          A Young Christ-Driven Entrepreneur who aims to offer a clothing line that not only embodies style but also serves as a testament to his faith in Christ.
        </p>
      </motion.div>
      
      <motion.div 
          variants={containerVariants}
         >
      <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
      <Card className="max-w-4xl mx-auto overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardContent className="p-6 flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Igisubizo Benjamin</h2>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <Cross className="h-8 w-8 text-primary" />
            <p className="text-sm text-muted-foreground">
              Driven by his unwavering faith in Jesus Christ, Igisubizo Benjamin founded our fashion brand with a divine purpose.
            </p>
            <p className="text-sm">
              His vision: to create a fashion line that not only embodies style but also serves as a testament to his Christian beliefs.
            </p>
            <p className="text-sm">
              Inspired by his spiritual journey, Benjamin has dedicated himself to designing products that spread the message of hope and faith through contemporary fashion.
            </p>
            <blockquote className="italic text-sm text-muted-foreground border-l-4 border-primary pl-4 py-2 mt-4">
              "Our brand is more than fashion; it's a celebration of faith and a medium to share God's love through every stitch and design."
            </blockquote>
          </CardContent>
          <div className="relative h-full min-h-[300px] md:min-h-full">
            <Image
              src={Image1}
              alt="Igisubizo Benjamin"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </div>
        </div>
      </Card>
      </motion.div>
    </motion.div>
    </motion.div>
  );
}