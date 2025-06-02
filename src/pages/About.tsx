import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }} 
          className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.3, duration: 1 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About GGL</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">Driving global logistics with innovation, integrity, and reliability.</p>
          </motion.div>
        </motion.section>

        {/* Company Overview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}>
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                At GGL, we take pride in being one of Singapore’s premier logistics companies, offering specialized expertise across warehousing, freight forwarding (air and ocean), and transportation.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Our mission is to provide seamless, end-to-end global logistics solutions through a trusted network of partners, each excelling in their respective logistics segments.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our experienced team delivers world-class service tailored to each client's needs. From custom logistics strategies to full-spectrum solutions, we ensure efficiency, reliability, and value.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}>
              <img src="/images/gp.jpg" alt="Global Logistics" className="rounded-xl shadow-lg w-full object-cover h-[350px]" />
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: 'LCL Consolidation',
                  image: '/images/lcl.jpg',
                  text: 'Specializing in Less-than-Container Load services for global trade lanes with weekly sailings.'
                },
                {
                  title: 'Global Freight Forwarding',
                  image: '/images/freight.jpg',
                  text: 'End-to-end air and ocean freight solutions tailored to business needs worldwide.'
                },
                {
                  title: 'Real-Time Visibility',
                  image: '/images/visibility.jpg',
                  text: 'Internet-based platform offering shipment tracking from origin to destination.'
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6, delay: idx * 0.2 }} 
                  viewport={{ once: true }} 
                  className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-md">{service.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 text-center px-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Partner With GGL</h2>
            <p className="text-lg mb-6">We don’t just move freight — we move businesses forward.</p>
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow">
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
