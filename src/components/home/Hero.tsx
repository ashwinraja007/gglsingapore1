import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PortalLink } from "../common/PortalLink";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const portalLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Customer Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Partner Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Tracking"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Sailing Schedule"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Container Sizes & Dimensions"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d564740b070a89f62cdebb12ae5e7dcda48b805aed08acac5ffb9d67e85f0d7" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-3000" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
      </motion.div>

      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Delivering Excellence in Global Logistics Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              MOLTECH (UK) LTD brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-4 pt-2"
            >
              <motion.a 
                href="https://demo.logistics-quote.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get A Quote
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="container mx-auto px-4 absolute bottom-24 md:bottom-16 left-0 right-0 z-10"
      >
        <motion.button 
          className="md:hidden w-full bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between text-white border border-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm font-medium">Select Option</span>
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden space-y-2 mb-4"
            >
              {portalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PortalLink {...link} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4">
          {portalLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.3 }}
            >
              <PortalLink {...link} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { PortalLink } from "../common/PortalLink";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const portalLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Customer Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Partner Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Tracking"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Sailing Schedule"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Container Sizes & Dimensions"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d564740b070a89f62cdebb12ae5e7dcda48b805aed08acac5ffb9d67e85f0d7" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-3000" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
      </motion.div>

      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl space-y-6"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Delivering Excellence in Global Logistics Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              MOLTECH (UK) LTD brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex gap-4 pt-2"
            >
              <motion.a 
                href="https://demo.logistics-quote.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get A Quote
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="container mx-auto px-4 absolute bottom-24 md:bottom-16 left-0 right-0 z-10"
      >
        <motion.button 
          className="md:hidden w-full bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between text-white border border-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm font-medium">Select Option</span>
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden space-y-2 mb-4"
            >
              {portalLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PortalLink {...link} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4">
          {portalLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.3 }}
            >
              <PortalLink {...link} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
