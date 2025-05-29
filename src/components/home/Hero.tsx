import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCircle,
  SearchCode,
  Ship,
  Calendar,
  Globe
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();

  const sliderImages = ["/homeimage.jpg", "/transporth1.png", "/hero3.png", "/airfreighth.png"];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

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
      onClick: () => setIsCustomerPortalOpen(true)
    },
    {
      icon: <UserCircle className="w-5 h-5" />,
      title: "Partner Portal",
      description: "Manage partnership",
      url: "https://pp.onlinetracking.co/auth/login/3",
      external: true
    },
    {
      icon: <SearchCode className="w-5 h-5" />,
      title: "Tracking",
      description: "Track your shipment",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:59",
      external: true
    },
    {
      icon: <Ship className="w-5 h-5" />,
      title: "Sailing Schedule",
      description: "View schedules",
      url: "http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:59",
      external: true
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Online Quote",
      description: "Request a quote",
      url: "/contact",
      external: false
    }
  ];

  return (
    <section className="relative min-h-[75vh] md:min-h-[90vh] overflow-hidden pt-8 md:pt-16">

      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        {sliderImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ zIndex: activeSlide === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>

      {/* Portals Buttons (Bottom Section) */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {portalLinks.map((link, index) => (
                <div key={index} className="flex flex-col items-center">
                  {link.external ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-transparent border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors"
                      >
                        {link.icon}
                        <span className="font-medium">{link.title}</span>
                      </Button>
                    </a>
                  ) : link.onClick ? (
                    <Button
                      variant="outline"
                      className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-transparent border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors"
                      onClick={link.onClick}
                    >
                      {link.icon}
                      <span className="font-medium">{link.title}</span>
                    </Button>
                  ) : (
                    <Link to={link.url} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full h-16 flex flex-col gap-1 items-center justify-center text-xs sm:text-sm bg-transparent border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-colors"
                      >
                        {link.icon}
                        <span className="font-medium">{link.title}</span>
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
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
                {[
                  { src: "/GGL_demo1.mp4", label: "Getting Started" },
                  { src: "/GGL_promo.mp4", label: "Advanced Features" }
                ].map((video, i) => (
                  <div key={i} className="border rounded-lg overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <video controls className="w-full h-full object-cover">
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </AspectRatio>
                    <div className="p-2 bg-gray-50 text-sm font-medium">{video.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter className="flex justify-end">
            <a
              href="https://customer-portal.ggl.sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" className="font-semibold">Visit Portal</Button>
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};
