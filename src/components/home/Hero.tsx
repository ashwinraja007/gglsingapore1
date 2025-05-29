import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Users, UserCircle, SearchCode, Ship, Calendar, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const Hero = () => {
  const [isCustomerPortalOpen, setIsCustomerPortalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();

  const sliderImages = ["/homeimage.jpg", "/transporth1.png", "/hero3.png", "/airfreighth.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

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
    <section className="relative min-h-[90vh] overflow-hidden pt-16">
      {/* Background slider */}
      <div className="absolute inset-0">
        {sliderImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeSlide === index ? 1 : 0,
              scale: activeSlide === index ? 1 : 1.05
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        ))}
      </div>

      {/* Title & Buttons */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full max-w-7xl mx-auto px-6 pb-16 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Global Freight & Logistics Solutions
        </motion.h1>

        <div className="flex flex-wrap gap-4">
          <Link to="/contact">
            <Button size="lg" variant="gold" className="bg-[#d4af37] text-brand-navy font-semibold shadow-md">
              Get a Quote
            </Button>
          </Link>
          <Link to="/services">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Dialog */}
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
                      <source src="/GGL_demo1.mp4" type="video/mp4" />
                    </video>
                  </AspectRatio>
                  <div className="p-2 bg-gray-50 text-sm font-medium">Getting Started</div>
                </div>
                <div className="border rounded-lg overflow-hidden">
                  <AspectRatio ratio={16 / 9}>
                    <video controls className="w-full h-full object-cover">
                      <source src="/GGL_promo.mp4" type="video/mp4" />
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
    </section>
  );
};

export default Hero;
