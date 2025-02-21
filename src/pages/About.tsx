
import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white font-sans">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A global leader in logistics and supply chain solutions
            </p>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Moltech, a proud subsidiary of 1 Global Enterprises, stands at the forefront of innovation in freight forwarding, supply chain management, and logistics technology. As part of this dynamic global network, we leverage strategic investments across multiple brands to deliver excellence in transportation, warehousing, and cutting-edge management solutions.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Through our collaborative ecosystem and 1 Global Enterprise's industry expertise, we deliver comprehensive logistics solutions that transform challenges into opportunities. Our commitment to 24/7 customer support and full transparency ensures your peace of mind.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl aspect-[4/3]">
                    <img 
                      src="/lovable-uploads/gp.jpg" 
                      alt="Global Business Partnership" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
