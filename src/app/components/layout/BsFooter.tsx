"use client"

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

const links = [
  { href: "/benstore", label: "Ben-Stores", type: "navigate" },
  { href: "../", label: "Home", type: "scroll" },
  { href: "#services", label: "Services", type: "scroll" },
  { href: "#why-us", label: "Why-us", type: "scroll" },
  { href: "#faqs", label: "FAQs", type: "scroll" },
];

export default function Footer() {
  const thisyear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="bg-pink-100 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-black mb-4">Ben Store</h2>
            <p className="mb-4">Anything we got ou covered - Just call us away | We are more than a Fashion Brand</p>
            <div className="flex space-x-4">
            <Link href="/benstore" className="flex items-center space-x-2">
              <button className="bg-white hover:bg-pink-50 text-pink-500 font-bold py-2 px-4 rounded border border-pink-500">
                Try Ben Stores
              </button>
              </Link>
            <Link href="../" className="flex items-center space-x-2">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                  Try BS Brand
              </button>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-pink-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Email: bsbrand777@gmail.com</p>
            <p className="mb-4">Phone: (+250) 790 113 350</p>
            <div className="flex space-x-4">
              <a 
               href="https://api.whatsapp.com/send/?phone=250790113350&text&type=phone_number&app_absent=0"
               target="_blank"
               rel="noopener noreferrer"
              className="text-black hover:text-pink-600 duration-300">
                <FaWhatsapp size={24} />
              </a>
              
              <a 
              href="https://www.instagram.com/bs_brand_now_/"
              target="_blank"
              rel="noopener noreferrer"
               className="text-black hover:text-pink-600 duration-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:flex mt-8 pt-8 border-t border-pink-200 text-center justify-between">
          <p className="block sm:inline-block hover:text-pink-500 transition-colors duration-400 delay-200">
            &copy; {thisyear} BS Brand. All rights reserved.
          </p>
          <p
            className="block sm:inline-block hover:text-pink-500 transition-all duration-500 ease-in-out mt-2 sm:mt-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered
              ? "themanzi.david@gmail.com / (+250) 791 291 003"
              : <span>Designed & Crafted by <span className="font-bold italic">Manzi David</span></span>}
          </p>
        </div>
      </div>
    </footer>
  );
}

