"use client";

import { Building2, Briefcase } from "lucide-react";
import { testimonials, Testimonial } from "../constants/Testaments";
import { cn } from "@/app/lib/utils";
import Marquee from "../constants/Marquee";
import { motion } from "framer-motion"
import Image from 'next/image'

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure
    className={cn(
      "relative w-[400px] cursor-pointer overflow-hidden rounded-xl border p-6 mx-3",
      "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
      "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
    )}
  >
    <div className="flex items-start gap-4 mb-4">
      <Image
        src={typeof testimonial.image === 'string' ? testimonial.image : testimonial.image.src}
        alt={`Profile picture of ${testimonial.name}`}
        width={typeof testimonial.image === 'object' ? testimonial.image.width : 48}
        height={typeof testimonial.image === 'object' ? testimonial.image.height : 48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <figcaption className="font-semibold dark:text-white">
          {testimonial.name}
        </figcaption>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <Briefcase className="w-3 h-3" />
          <span>{testimonial.role}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300">
          <Building2 className="w-3 h-3" />
          <span>{testimonial.company}</span>
        </div>
      </div>
    </div>
    <blockquote className="text-sm dark:text-gray-300">
      &ldquo;{testimonial.quote}&rdquo;
    </blockquote>
  </figure>
);


export default function TestimonialsCarousel() {
  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));
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
         className="w-full overflow-hidden text-black"
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}>

      <motion.div 
      className="max-w-3xl mx-auto text-center my-16"
      variants={itemVariants}
      >
        <h2 className="text-5xl font-bold mb-6">
          Don't take our <span className="italic">word</span> for it.
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Hear what real people have to say about us.
        </p>
      </motion.div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <div className="marquee-container group">
        <Marquee
          className="[--duration:100s]"
          style={{
            animationPlayState: "running",
          }}>
            {firstRow.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="marquee-container group">
          <Marquee
            reverse
            className="[--duration:100s]"
            style={{
              animationPlayState: "running",
            }}
          >
            {secondRow.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
}
