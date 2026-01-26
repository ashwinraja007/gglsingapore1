import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Clock, Ship, Plane, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ScrollToTop from "@/components/common/ScrollToTop";

const pakistanNavPaths = {
  home: "/pakistan",
  about: "/pakistan/about",
  services: "/pakistan/services",
  careers: "/pakistan/careers",
  contact: "/pakistan/contact",
  globalPresence: "/pakistan/global-presence",
};

const PakistanHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header navPaths={pakistanNavPaths} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="Logistics Hub" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/70" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting Pakistan <br />
                <span className="text-brand-gold">To The World</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Your trusted partner for comprehensive logistics solutions in Pakistan. 
                Seamlessly integrating air, ocean, and land freight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/pakistan/contact">
                  <Button size="lg" className="bg-brand-gold text-brand-navy hover:bg-white hover:text-brand-navy font-bold w-full sm:w-auto">
                    Get a Quote
                  </Button>
                </Link>
                <Link to="/pakistan/services">
                  <Button size="lg" variant="outline" className="border-white text-brand-navy hover:bg-white hover:text-brand-navy w-full sm:w-auto">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Globe className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">Global Network</h3>
                <p className="text-gray-600">
                  Leveraging our extensive international network to provide seamless shipping solutions worldwide.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Shield className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">Secure Handling</h3>
                <p className="text-gray-600">
                  Ensuring the safety and security of your cargo with industry-leading standards and protocols.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Clock className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-xl font-bold text-brand-navy mb-4">On-Time Delivery</h3>
                <p className="text-gray-600">
                  Commitment to punctuality and efficient transit times for all your logistics needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Core Services</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img src="/oceanf.png" alt="Ocean Freight" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Ship className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="text-xl font-bold mb-2">Ocean Freight</h3>
                  <p className="text-gray-300 text-sm mb-4">Comprehensive LCL and FCL solutions.</p>
                  <Link to="/pakistan/services#ocean-freight" className="text-brand-gold flex items-center gap-2 text-sm font-medium hover:underline">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img src="/aircargo2.png" alt="Air Freight" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Plane className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="text-xl font-bold mb-2">Air Freight</h3>
                  <p className="text-gray-300 text-sm mb-4">Fast and reliable global air shipping.</p>
                  <Link to="/pakistan/services#air-freight" className="text-brand-gold flex items-center gap-2 text-sm font-medium hover:underline">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img src="/CARGO.png" alt="Transportation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <Truck className="w-8 h-8 text-brand-gold mb-3" />
                  <h3 className="text-xl font-bold mb-2">Transportation</h3>
                  <p className="text-gray-300 text-sm mb-4">Efficient inland distribution network.</p>
                  <Link to="/pakistan/services#transportation" className="text-brand-gold flex items-center gap-2 text-sm font-medium hover:underline">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/pakistan/services">
                <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PakistanHome;