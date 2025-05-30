
import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Ship, Package, Box, Globe, FileCheck, Anchor, Container, MapPin, Timer, Gauge } from "lucide-react";
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Transportation = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <motion.h1 initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5
              }} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  Transportation Solutions
                </motion.h1>
                <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }} className="text-lg text-gray-700 mb-6">
                  Reliable domestic and international transportation services
                </motion.p>
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to="/contact" className="px-6 py-3 bg-brand-gold hover:bg-amber-400 text-brand-navy font-medium rounded-md shadow-md transition-all">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div initial={{
                opacity: 0,
                scale: 0.95
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5
              }} className="rounded-xl overflow-hidden shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="Transportation Service" className="w-full h-full object-cover" src="/trucks.png" />
                  </AspectRatio>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
                Comprehensive Transportation Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">
                We provide comprehensive transportation services designed to meet your diverse logistics needs. Our dedicated fleet and operational infrastructure ensure reliable, efficient delivery solutions.
              </p>
            </div>
            
            {/* Transportation Services */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img src="/trucks.png" alt="Road Transportation" className="w-full h-full object-cover" />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">Road Transportation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="h-6 w-6 text-brand-gold" />
                    <h4 className="text-lg font-semibold">Domestic Distribution</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    Our dedicated fleet of vehicles ensures timely domestic distribution with an efficient operational infrastructure providing high productivity and reliable service for all your transportation needs.
                  </p>
                  <p className="text-gray-600 text-justify">We manage every aspect of your ground transportation, from route optimization and real-time tracking to secure handling, ensuring your cargo reaches its destination safely and on time.</p>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.5
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="relative">
                  <AspectRatio ratio={16 / 9}>
                    <img alt="Specialized Transportation" className="w-full h-full object-cover" src="/transports.png" />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end my-0">
                    <h3 className="text-white text-xl font-bold p-6">Specialized Transportation</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Box className="h-6 w-6 text-brand-gold" />
                    <h4 className="text-lg font-semibold">Custom Solutions</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-justify">
                    When your cargo requires specialized handling, our custom transportation solutions provide tailored services for oversized, fragile, or high-value shipments.
                  </p>
                  <p className="text-gray-600 text-justify">Our experienced team manages all specialized requirements, including permit procurement, route planning, and escort services, ensuring compliance with regulations and safe delivery.</p>
                </div>
              </motion.div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[{
              title: "Fleet Management",
              description: "Modern fleet with GPS tracking and maintenance scheduling",
              icon: <Globe className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Route Optimization",
              description: "Efficient routing to minimize costs and delivery times",
              icon: <Container className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Documentation",
              description: "Complete handling of shipping and customs documentation",
              icon: <FileCheck className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Real-time Tracking",
              description: "Live updates on shipment location and delivery status",
              icon: <MapPin className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Timely Delivery",
              description: "Committed to on-time delivery with flexible scheduling",
              icon: <Timer className="h-5 w-5 text-brand-gold" />
            }, {
              title: "Load Optimization",
              description: "Maximize efficiency with optimized load planning",
              icon: <Gauge className="h-5 w-5 text-brand-gold" />
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="mb-3 bg-blue-50 p-2 rounded-full inline-block">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>)}
            </div>
            
            {/* CTA Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Ready to Transport Your Cargo?</h3>
              <p className="mb-6 text-blue-50">
                Contact our team today for reliable transportation solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-brand-navy px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default Transportation;
