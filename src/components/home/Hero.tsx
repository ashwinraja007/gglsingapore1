
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Users, 
  UserCircle, 
  SearchCode, 
  Ship, 
  Box,
  ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const portalLinks = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Portal",
      description: "Access your shipping dashboard"
    },
    {
      icon: <UserCircle className="w-6 h-6" />,
      title: "Partner Portal",
      description: "Manage your partnership"
    },
    {
      icon: <SearchCode className="w-6 h-6" />,
      title: "Tracking",
      description: "Track your shipment"
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Sailing Schedule",
      description: "View upcoming schedules"
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Container Sizes",
      description: "View dimensions & specs"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image and overlay */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="homeimage.jpg" 
          alt="Hero background" 
          className="w-full h-full object-cover object-center" 
          loading="lazy" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-brand-darkGreen/80" />
      </motion.div>

      {/* Main content */}
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl space-y-8"
          >
            {/* Hero content */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-block bg-brand-green/20 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium border border-brand-green/30"
            >
              Global Logistics Excellence
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Delivering Excellence in <span className="text-brand-lightGreen">Global Logistics</span> Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              GGL brings over 25 years of expertise in international logistics, 
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
                <Button size="lg" className="bg-white hover:bg-gray-100 text-brand-gray font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get A Quote
                </Button>
              </motion.a>
              
              <motion.a 
                href="/services" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 shadow-lg">
                  Our Services
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Portal Links Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="container mx-auto px-4 absolute bottom-24 md:bottom-16 left-0 right-0 z-10"
      >
        {/* Mobile dropdown button */}
        <motion.button 
          className="md:hidden w-full bg-brand-green/80 backdrop-blur-md p-4 rounded-lg shadow-lg mb-4 flex items-center justify-between text-white border border-white/20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-sm font-medium">Quick Access</span>
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>

        {/* Mobile menu */}
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
                  className="bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors border border-white/10"
                >
                  <button className="w-full p-4 flex items-center space-x-4 text-white">
                    <span className="text-brand-lightGreen/90">{link.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{link.title}</div>
                      <div className="text-sm text-white/70">{link.description}</div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4">
          {portalLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1.3 }}
              className="bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors group border border-white/10"
            >
              <button className="w-full h-full p-4 flex flex-col items-center justify-center space-y-3 text-white">
                <span className="text-brand-lightGreen transform group-hover:scale-110 transition-transform">
                  {link.icon}
                </span>
                <div className="text-center">
                  <div className="font-medium whitespace-nowrap">{link.title}</div>
                  <div className="text-sm text-white/70 mt-1">{link.description}</div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
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

export default Hero;
