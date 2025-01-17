"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bslogo from "@/assets/bslogo.png";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/benstore", label: "Ben-Stores", type: "navigate" },
    { href: "#home", label: "Home", type: "scroll" },
    { href: "#about", label: "About Us", type: "scroll" },
    { href: "#products", label: "Products", type: "scroll" },
    { href: "#testimonials", label: "Testimonials", type: "scroll" },
    { href: "#contact", label: "Contact Us", type: "scroll" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md text-black">
      <div className="flex h-20 items-center justify-between px-6 sm:px-12 md:px-16 lg:px-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src={bslogo}
              alt="Brand Logo"
              height={130}
              width={130}
              priority
              className="dark:invert"
            />
            <p className="font-bold text-base text-black px-4 py-2 rounded-[25px] bg-gray-200 relative hover:text-white overflow-hidden group">
              <span className="relative z-10">BS - BRAND</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-500 transition-transform duration-[600ms] transform scale-x-0 origin-left group-hover:scale-x-100"></span>
            </p>
          </Link>
        </div>

        <nav className="hidden lg:flex justify-center items-center space-x-8 text-center font-bold ml-auto">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${
                pathname === href ? "text-pink-500" : ""
              } hover:text-pink-500 transform hover:scale-110 transition-all duration-500 cursor-pointer relative group`}
            >
              {label}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 transform ${
                  pathname === href ? "scale-x-100" : "scale-x-0"
                } transition-transform duration-300 group-hover:scale-x-100`}
              ></span>
            </Link>
          ))}

          <div className="flex items-center space-x-4 ml-6">
            <a
              href="https://www.instagram.com/bs_brand_now"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 transition-all duration-300"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=250790113350&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 transition-all duration-300"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden block text-black focus:outline-none"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
            <span className="block w-8 h-1 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-gray-50 shadow-md rounded-lg mt-2 mx-4 py-4 px-6 space-y-4">
          {links.map(({ href, label, type }) =>
            type === "scroll" ? (
              <button
                key={href}
                onClick={() => {
                  scrollToSection(href.slice(1));
                  setMenuOpen(false);
                }}
                className="block text-sm font-bold py-2 px-3 rounded hover:text-pink-500 hover:bg-gray-100 transition"
              >
                {label}
              </button>
            ) : (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-bold py-2 px-3 rounded hover:text-pink-500 hover:bg-gray-100 transition"
              >
                {label}
              </Link>
            )
          )}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/bs_brand_now"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 transition-all duration-300"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=250790113350&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-pink-500 transition-all duration-300"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
