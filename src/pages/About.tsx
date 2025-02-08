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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center bg-blue-50">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-serif">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
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
            <motion.div 
              {...fadeInUp}
              className="max-w-4xl mx-auto mb-16"
            >
              <p className="text-gray-700 mb-8 text-lg leading-relaxed font-sans">
                Moltech, a proud subsidiary of 1 Global Enterprises, stands at the forefront of innovation in freight forwarding, supply chain management, and logistics technology. As part of this dynamic global network, we leverage strategic investments across multiple brands to deliver excellence in transportation, warehousing, and cutting-edge management solutions.
              </p>
              <p className="text-gray-700 mb-12 text-lg leading-relaxed font-sans">
                Through our collaborative ecosystem and 1 Global Enterprise's industry expertise, we deliver comprehensive logistics solutions that transform challenges into opportunities. Our commitment to 24/7 customer support and full transparency ensures your peace of mind.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-xl shadow-2xl mb-6">
                  <img 
                    src="/lovable-uploads/gp.jpg" 
                    alt="Global Business Partnership" 
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-sans">
                  We excel in providing efficient, cost-effective, and transparent global logistics solutions. Our experienced team ensures smooth handling while our worldwide network enables comprehensive solutions across continents.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-6 text-lg leading-relaxed font-sans">
                  As one of Australia's top logistics providers, we take pride in our specialized services in warehousing, freight forwarding, and supply chain management. Our unwavering commitment to excellence has earned us the trust of partners who value success in logistics.
                </p>
                <div className="group relative overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/earth.jpg" 
                    alt="Global Logistics Network" 
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-gray-700 text-lg leading-relaxed font-sans">
                To enhance transparency, we offer state-of-the-art online shipment tracking capabilities, providing our customers with complete visibility. Our digitized workflows streamline operations and improve efficiency, ensuring seamless communication while keeping costs optimized.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
