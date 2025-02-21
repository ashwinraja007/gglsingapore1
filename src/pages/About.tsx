import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white font-sans">
      <Header />

      <main className="flex-grow">
       {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[40vh] flex items-center justify-center bg-blue-50 overflow-hidden"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-inter">
             Who We Are
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter font-light">
             A global leader in logistics and supply chain solutions
            </p>
          </motion.div>
        </motion.section>

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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Story
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
Moltech is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse portfolio in freight forwarding, supply chain management, and logistics technology, as part of this global network, Moltech benefits from strategic investments across multiple brands specializing in transportation, warehousing, and supply chain solutions, as well as cutting-edge freight and warehouse management software.                    </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
Backed by 1 Global Enterprises' industry expertise and innovation-driven approach, Moltech leverages synergies across its affiliated companies to provide integrated, technology-driven logistics solutions. This connection ensures operational excellence, financial stability, and access to world-class supply chain infrastructure, positioning Moltech as a leader in end-to-end global logistics services.                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                    <img
                      src="/lovable-uploads/gp.jpg"
                      alt="Global Business Partnership"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Our Global Impact
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "120+", label: "Countries Served" },
                  { value: "15,000+", label: "Global Fleet" },
                  { value: "25,000+", label: "Team Members" },
                  { value: "99.8%", label: "On-Time Delivery" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses that trust Moltech with their logistics needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-blue-600 rounded-lg text-lg font-medium"
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
