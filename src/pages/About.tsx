import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ChevronDown, Globe, Truck, Clock, Shield, Users, BarChart } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: <Globe className="w-8 h-8 text-blue-500" />, value: "120+", label: "Countries Served" },
    { icon: <Truck className="w-8 h-8 text-blue-500" />, value: "15,000+", label: "Global Fleet" },
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: "25,000+", label: "Team Members" },
    { icon: <BarChart className="w-8 h-8 text-blue-500" />, value: "99.8%", label: "On-Time Delivery" }
  ];

  const values = [
    { title: "Excellence", description: "We relentlessly pursue the highest standards in all we do." },
    { title: "Innovation", description: "We embrace new technologies and ideas to stay ahead of industry trends." },
    { title: "Reliability", description: "Our clients trust us with their most valuable shipments every day." },
    { title: "Sustainability", description: "We're committed to reducing our environmental footprint globally." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white font-sans">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Parallax Effect */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="Logistics Network" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4 z-10 max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Redefining <span className="text-blue-400">Global</span> Logistics
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
              Moltech connects businesses across continents with innovative supply chain solutions that drive growth in a changing world
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Discover Our Solutions
            </motion.button>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 z-10"
          >
            <ChevronDown size={36} className="text-white/80" />
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto mb-20 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From humble beginnings to global excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-semibold text-gray-800 mb-6">A Legacy of Leadership</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Moltech, a proud subsidiary of <span className="font-semibold">1 Global Enterprises</span>, stands at the forefront of innovation in freight forwarding, supply chain management, and logistics technology. As part of this dynamic global network, we leverage strategic investments across multiple brands to deliver excellence in transportation, warehousing, and cutting-edge management solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through our collaborative ecosystem and 1 Global Enterprise's industry expertise, we deliver comprehensive logistics solutions that transform challenges into opportunities. Our commitment to 24/7 customer support and full transparency ensures your peace of mind.
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center text-blue-600 font-medium cursor-pointer mt-4"
                >
                  Learn about our leadership team
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <img 
                    src="/lovable-uploads/gp.jpg" 
                    alt="Global Business Partnership" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-sm font-medium text-blue-300 mb-1">GLOBAL REACH</div>
                    <div className="text-2xl font-semibold">Building connections across continents</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-blue-100 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-yellow-100 -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">{stat.icon}</div>
                    <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-blue-200">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision we make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-blue-900/90"></div>
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="Logistics Background" 
              className="w-full h-full object-cover mix-blend-overlay opacity-20"
            />
          </div>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                Join thousands of businesses that trust Moltech with their most critical logistics needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-blue-900 rounded-lg text-lg font-medium shadow-lg"
                >
                  Request a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-medium"
                >
                  View Case Studies
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
