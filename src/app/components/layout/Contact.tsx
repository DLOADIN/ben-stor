'use client'

import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/constants/Textarea"
import Image from "next/image"
import imageone from "@/PICS/Untitled design.jpg"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ 
      ...prevForm, 
      [name]: value 
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    // Add email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      alert('Please fill in all fields');
      setLoading(false);
      return;
    }
  
    if (!emailRegex.test(form.email)) {
      alert('Please enter a valid email address');
      setLoading(false);
      return;
    }
  
    emailjs
      .send(
        'service_y3ei9iq',
        'template_im61mr2', 
        {
          from_name: `${form.firstName} ${form.lastName}`,
          to_name: 'David',
          from_email: form.email, 
          to_email: 'themanzi.david@gmail.com',
          message: form.message,
        },
         'wwYkKxTEBel0rSkzS'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I'll get back to you as soon as possible.");
          setForm({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

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
    <motion.div className="container mx-auto px-4"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
   >
      <motion.div 
        className="max-w-3xl mx-auto text-center mb-4" 
        variants={itemVariants}
        >
        <h2 className="text-5xl font-bold mb-4">
          Leave <span className="italic font-bold">Us A </span> Message
        </h2>
        <p className="text-gray-400 text-xl">
          As we strive to serve you with excellence, we would be grateful if you could take a moment to share a review or message, as we are committed to being a source of support and guidance for you.
        </p>
      </motion.div>


      <motion.div variants={containerVariants}>
        <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
      <Card className="max-w-7xl mx-auto overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-orange-500 font-medium mb-2">Get in Touch</h4>
                <h1 className="text-4xl font-bold mb-3">Let's Chat, Reach Out to Us</h1>
                <p className="text-xl">
                  Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-lg font-medium">
                      First Name
                    </label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Your First name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-lg font-medium">
                      Last Name
                    </label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Your Last name" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-lg font-medium">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email address" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Leave Us A Message"
                    className="min-h-[150px] text-lg"
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-white font-medium bg-black rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
                  >
                    <div
                      className="absolute -inset-1 rounded-lg bg-black"
                      aria-hidden="true"
                    ></div>
                    <span className="relative">
                      {loading ? 'Sending...' : 'Send Message'}
                    </span>
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
              <div className="absolute inset-0 bg-blue-100 opacity-20" />
              <Image
                src={imageone}
                alt="Contact support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
    </motion.div>
    </motion.div>
  )
}