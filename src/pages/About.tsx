import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const About = () => {
  return <div className="min-h-screen flex flex-col relative">
      <Header />

      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <motion.section initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1
      }} className="relative h-[30vh] flex items-center justify-center bg-blue-50 overflow-hidden">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.2,
          duration: 0.8
        }} className="text-center px-4 relative z-10">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 font-inter">
              Who We Are
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter font-light">
              A global leader in logistics and supply chain solutions
            </p>
          </motion.div>
        </motion.section>

        {/* Main Content Section */}
        <section className="py-0">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8
              }} viewport={{
                once: true
              }} className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Our Story
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">At GGL, we are proud to be one of Singapore's leading logistics companies. We offer specialized divisions in warehousing, forwarding (air and ocean), and transportation. Our mission is to deliver comprehensive end-to-end solutions in global freight forwarding, managed through a trusted network of partners who excel in all logistics segments.</p>
                  <p className="text-gray-700 text-lg leading-relaxed">We are dedicated to fostering deep, collaborative relationships with our clients, and creating genuine partnerships that drive mutual growth. Our work goes beyond forwarding and logistics; it’s about building trust with our customers by delivering world-class service and solutions. At GGL, we are not just forwarders, but trusted partners and genuine solution providers backed by a highly experienced team.

We offer efficient, cost-effective, and innovative bespoke global logistics solutions, including comprehensive end-to-end packages. Renowned for our exceptional service quality, we are recognized as the most customer-driven logistics company. By delivering reliable and economical logistics solutions, we foster long-term partnerships with our clients.</p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8
              }} viewport={{
                once: true
              }} className="relative">
                  <div className="relative overflow-hidden rounded-xl shadow-lg h-[400px] w-full">
                    <img src="lovable-uploads/gp.jpg" alt="Global Business Partnership" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16 my-6">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-slate-50">
                Ready to Transform Your Supply Chain?
              </h2>
              <p className="text-xl text-blue-100 mb-8">Trust GGL for your logistics needs</p>
              <Link to="/contact">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.98
              }} className="px-8 py-3 bg-white text-blue-600 rounded-lg text-lg font-medium">
                  Contact Us Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;