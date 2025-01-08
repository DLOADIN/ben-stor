'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { Card } from "@/app/components/ui/card";
import { Dialog, DialogContent } from "@/app/components/ui/dialog";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { teamMembers, TeamMember } from "../constants/TeamMember"

export default function EnhancedCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<TeamMember | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [relatedItems, setRelatedItems] = useState<TeamMember[]>([]);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 1300);
    };
    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    duration: 3000,
  }, [Autoplay({
    playOnInit: true,
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  })]);
const findRelatedItems = (item: TeamMember) => {
  const keywords = item.name.toLowerCase().split(' ');
  return teamMembers.filter(member => {
    const memberKeywords = member.name.toLowerCase().split(' ');
    return (
      member !== item &&
      memberKeywords.some(keyword => keywords.includes(keyword))
    );
  });
};

const handleItemClick = (item: TeamMember) => {
  setSelectedItem(item);
  setRelatedItems(findRelatedItems(item));
  setShowModal(true);
};

  const handleMouseEnter = (index: number) => {
    if (isMobile) setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    if (isMobile) setExpandedIndex(null);
  };

  return (
    <div className="w-full h-screen overflow-hidden relative text-black">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div ref={emblaRef} className="overflow-hidden w-full h-full absolute inset-0">
          <div className="flex h-full">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`
                  flex-none transition-all duration-500 ease-in-out
                  ${isMobile && expandedIndex === index ? 'w-3/4 z-10' : 
                    isMobile && expandedIndex !== null ? 'w-1/8 opacity-50' : 'w-2/4'}
                  h-full px-2 cursor-pointer
                `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(member)}
              >
                <Card className={`relative overflow-hidden border-0 h-full 
                  transition-all duration-500 
                  ${isMobile && expandedIndex === index ? 'scale-105' : ''}`}
                >
                  <div className="relative h-full pb-20 group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg transform 
                        transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-300">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
  <DialogContent className="max-w-7xl h-[90vh] overflow-y-auto">
    {selectedItem && (
      <div className="space-y-8">
        <div className="relative h-[50vh]">
          <Image
            src={selectedItem.image}
            alt={selectedItem.name}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-2xl font-bold text-white">{selectedItem.name}</h2>
            <p className="text-gray-200">{selectedItem.role}</p>
          </div>
        </div>
        
        <div className="space-y-4">
            <h3 className="text-xl font-semibold">Related Items</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {relatedItems.map((item, index) => (
              <div key={index} className="relative h-64 group cursor-pointer"
                  onClick={() => handleItemClick(item)}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg transition-transform 
                    duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs text-gray-300">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </DialogContent>
</Dialog>
    </div>
  );
}

