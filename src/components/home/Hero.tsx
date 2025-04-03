import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserCircle, SearchCode, Ship, Box, ChevronDown, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Delay setting visibility for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  const portalLinks = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Portal",
      description: "Access shipping dashboard",
      url: "/customer-portal"
    },
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: "Partner Portal",
      description: "Manage partnership",
      url: "/partner-portal"
    },
    {
      icon: <SearchCode className="w-5 h-5" />,
      title: "Tracking",
      description: "Track your shipment",
      url: "/tracking"
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Sailing Schedule",
      description: "View schedules",
      url: "/schedule"
    },
    {
      icon: <Box className="w-5 h-5" />,
      title: "Container Sizes",
      description: "View dimensions",
      url: "/containers"
    }
  ];
  
  return <section className="relative min-h-[85vh] md:min-h-screen overflow-hidden pt-16 md:pt-24">
      {/* Mobile Navigation Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-white/80 rounded-md shadow-md">
          {isMobileMenuOpen ? <X className="h-6 w-6 text-brand-navy" /> : <Menu className="h-6 w-6 text-brand-navy" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{
            x: '100%'
          }} animate={{
            x: 0
          }} exit={{
            x: '100%'
          }} transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }} className="fixed top-0 right-0 w-4/5 h-screen bg-brand-navy/95 backdrop-blur-lg z-50 shadow-xl border-l border-brand-gold/30 flex flex-col">
            <div className="p-6 mt-12 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-brand-gold" />
                <h2 className="text-xl font-bold text-white">Global Logistics</h2>
              </div>
              
              <div className="space-y-4">
                {portalLinks.map((link, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }} className="border-b border-white/20 pb-3">
                    <Link to={link.url} className="flex items-center gap-3 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-brand-gold">{link.icon}</span>
                      <div>
                        <div className="font-medium">{link.title}</div>
                        <div className="text-xs text-white/70">{link.description}</div>
                      </div>
                    </Link>
                  </motion.div>)}
              </div>
              
              <div className="mt-8 space-y-3">
                <motion.a href="https://demo.logistics-quote.com" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="block">
                  <Button variant="gold" size="lg" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gold-glow bg-[#d4af37]">
                    Get A Quote
                  </Button>
                </motion.a>
                
                <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" variant="outline" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-white border-white hover:bg-white/20">
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background image with parallax effect */}
      <motion.div initial={{
      scale: 1.1,
      opacity: 0.8
    }} animate={{
      scale: 1,
      opacity: 1
    }} transition={{
      duration: 1.8,
      ease: "easeOut"
    }} className="absolute inset-0">
        <img src="homeimage.jpg" alt="Hero background" className="w-full h-full object-cover object-center" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/70 to-brand-navy/90" />
      </motion.div>

      {/* Main content */}
      <div className="absolute inset-0">
        <div className="container h-full flex flex-col justify-center px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl space-y-4 md:space-y-6"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center gap-3 mb-2"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                className="text-brand-gold"
              >
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-[0_0_8px_rgba(246,177,0,0.8)]" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="inline-block bg-brand-gold/20 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border border-brand-gold/30"
              >
                Beyond Logistics, a Complete Solution
              </motion.span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Delivering Excellence in <span className="text-[#f6b100]">Global Logistics</span> Solutions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed"
            >
              GGL brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gold-glow">
                    Get A Quote
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto"
              >
                <Link to="/services">
                  <Button variant="outline" size="lg" className="w-full font-semibold text-white border-white bg-transparent hover:bg-white/20">
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* MOBILE ONLY: Quick Access Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="container mx-auto px-4 sm:px-6 absolute bottom-8 left-0 right-0 z-10 md:hidden"
      >
        <Button 
          variant="gold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full flex items-center justify-between shadow-lg"
        >
          <span>Quick Access</span>
          <ChevronDown className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </Button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }} transition={{
              duration: 0.3
            }} className="space-y-2 mt-2 mb-4 overflow-hidden bg-brand-navy/80 backdrop-blur-md rounded-lg border border-brand-gold/30 shadow-lg">
              {portalLinks.map((link, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.07
          }} className="hover:bg-white/15 transition-colors">
                  <Link to={link.url} className="w-full p-4 flex items-center space-x-4 text-white">
                    <span className="text-brand-gold bg-white/10 p-2 rounded-full">{link.icon}</span>
                    <div className="text-left">
                      <div className="font-medium">{link.title}</div>
                      <div className="text-xs text-white/80">{link.description}</div>
                    </div>
                  </Link>
                </motion.div>)}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* DESKTOP ONLY: Portal Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="hidden md:block container px-4 sm:px-6 absolute bottom-16 left-0 right-0 z-10"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 grid grid-cols-5 gap-3">
          {portalLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.url}
              className="flex flex-col items-center bg-white/5 hover:bg-white/15 transition-colors p-3 rounded-xl group"
            >
              <div className="bg-brand-gold/20 p-3 rounded-full text-brand-gold mb-2 group-hover:bg-brand-gold/30 transition-colors">
                {link.icon}
              </div>
              <span className="text-white font-medium text-sm">{link.title}</span>
              <span className="text-white/70 text-xs">{link.description}</span>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator - desktop only */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-brand-gold rounded-full mt-1"
          />
        </motion.div>
      </motion.div>
    </section>;
};

export default Hero;
