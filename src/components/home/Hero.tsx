import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserCircle, SearchCode, Ship, Box, ChevronDown, Globe, Menu, X, Calendar, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();

  // Image slider data
  const sliderImages = ["/homeimage.jpg", "/lovable-uploads/transport.jpg", "/hero3.png", "/hero4.png"];
  useEffect(() => {
    // Delay setting visibility for entrance animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

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
  const portalLinks = [{
    icon: <Users className="w-5 h-5" />,
    title: "Customer Portal",
    description: "Access shipping dashboard",
    onClick: () => setIsCustomerPortalOpen(true)
  }, {
    icon: <UserCircle className="w-5 h-5" />,
    title: "Partner Portal",
    description: "Manage partnership",
    url: "hhttps://pp.onlinetracking.co/auth/login/3",
    external: true
  }, {
    icon: <SearchCode className="w-5 h-5" />,
    title: "Tracking",
    description: "Track your shipment",
    url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
    external: true
  }, {
    icon: <Ship className="w-5 h-5" />,
    title: "Sailing Schedule",
    description: "View schedules",
    url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
    external: true
  }, {
    icon: <Calendar className="w-5 h-5" />,
    title: "Online Quote",
    description: "Request a quote",
    url: "/contact",
    external: false
  }];
  return <section className="relative min-h-[75vh] md:min-h-[90vh] overflow-hidden pt-8 md:pt-16">
      {/* Mobile Navigation Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="fixed top-0 left-0 w-4/5 h-screen bg-brand-navy/95 backdrop-blur-lg z-50 shadow-xl border-l border-brand-gold/30 flex flex-col">
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
                    {link.external ? <a href={link.url} className="flex items-center gap-3 text-white" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-brand-gold">{link.icon}</span>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          <div className="text-xs text-white/70">{link.description}</div>
                        </div>
                      </a> : link.onClick ? <button className="flex items-center gap-3 text-white w-full text-left" onClick={() => {
                link.onClick();
                setIsMobileMenuOpen(false);
              }}>
                        <span className="text-brand-gold">{link.icon}</span>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          <div className="text-xs text-white/70">{link.description}</div>
                        </div>
                      </button> : <Link to={link.url} className="flex items-center gap-3 text-white" onClick={() => setIsMobileMenuOpen(false)}>
                        <span className="text-brand-gold">{link.icon}</span>
                        <div>
                          <div className="font-medium">{link.title}</div>
                          <div className="text-xs text-white/70">{link.description}</div>
                        </div>
                      </Link>}
                  </motion.div>)}
              </div>
              
              <div className="mt-8 space-y-3">
                <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="gold" size="lg" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 gold-glow bg-[#d4af37]">
                      Get A Quote
                    </Button>
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="lg" variant="gold" className="w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-[#d4af37] text-brand-navy hover:bg-amber-500">
                      Our Services
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Background image with parallax effect - now converted to slider */}
      <div className="absolute inset-0 overflow-hidden">
        {sliderImages.map((image, index) => <motion.div key={index} initial={{
        opacity: 0
      }} animate={{
        opacity: activeSlide === index ? 1 : 0,
        scale: activeSlide === index ? 1 : 1.1
      }} transition={{
        duration: 1.2,
        ease: "easeInOut"
      }} className="absolute inset-0" style={{
        zIndex: activeSlide === index ? 1 : 0
      }}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover object-center" loading={index === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0" />
          </motion.div>)}
      </div>

      {/* Main content - portals bar at bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isVisible ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="max-w-7xl mx-auto">
          <div className="bg-brand-navy/80 backdrop-blur-md rounded-xl p-4 border border-brand-gold/20 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {portalLinks.map((link, index) => <div key={index} className="flex flex-col items-center">
                  {link.external ? <a href={link.url} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="gold" className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-brand-gold text-brand-navy shadow-gold-glow">
                        {link.icon}
                        <span className="font-medium">{link.title}</span>
                      </Button>
                    </a> : link.onClick ? <Button variant="gold" className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-brand-gold text-brand-navy shadow-gold-glow" onClick={link.onClick}>
                      {link.icon}
                      <span className="font-medium">{link.title}</span>
                    </Button> : <Link to={link.url} className="w-full">
                      <Button variant="gold" className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-brand-gold text-brand-navy shadow-gold-glow">
                        {link.icon}
                        <span className="font-medium">{link.title}</span>
                      </Button>
                    </Link>}
                </div>)}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Customer Portal Dialog */}
      <Dialog open={isCustomerPortalOpen} onOpenChange={setIsCustomerPortalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-brand-navy">Customer Portal</DialogTitle>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="space-y-4">
              <h3 className="font-medium text-gray-800">Tutorial Videos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <video controls className="w-full h-full object-cover">
                      <source src="/video-placeholder.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </AspectRatio>
                  <div className="p-2 bg-gray-50 text-sm font-medium">Getting Started</div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <video controls className="w-full h-full object-cover">
                      <source src="/video-placeholder-2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </AspectRatio>
                  <div className="p-2 bg-gray-50 text-sm font-medium">Advanced Features</div>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <a href="https://customer-portal.ggl.sg" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="gold" className="w-full flex items-center gap-2">
                Login <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <Button variant="outline" onClick={() => setIsCustomerPortalOpen(false)} className="w-full sm:w-auto">
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>;
};
export default Hero;
