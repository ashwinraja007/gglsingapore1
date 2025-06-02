import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1
      }} className="h-[40vh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-4">
          <motion.div initial={{
          y: 20,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          delay: 0.3,
          duration: 1
        }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-50">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-50">
              Driving global logistics with innovation, integrity, and reliability.
            </p>
          </motion.div>
        </motion.section>

        {/* About Us Content */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  At GGL, we take pride in being one of Singapore's premier logistics companies, offering specialized expertise across warehousing, freight forwarding (air and ocean), and transportation. Our mission is to provide seamless, end-to-end global logistics solutions through a trusted network of partners, each excelling in their respective logistics segments.
                </p>
                
                <p>
                  Our experienced team is dedicated to delivering world-class service, tailored to meet the unique needs of each client. Whether it's a custom-built logistics strategy or a full-spectrum solution, we ensure efficiency, reliability, and value every step of the way.
                </p>
                
                <p>
                  To enhance customer experience, GGL leverages a powerful, internet-based software platform that offers real-time shipment visibility—from origin to destination. This technology ensures transparency, control, and timely updates, delivering a seamless and differentiated logistics experience.
                </p>
                
                <p>
                  Renowned for our exceptional service quality, GGL is recognized as one of the most customer-focused logistics companies in the region. Our ability to consistently deliver dependable and economical solutions has helped us build enduring partnerships with clients around the world.
                </p>
                
                <p>
                  At GGL, we specialize in Less-than-Container Load (LCL) consolidation, offering global logistics solutions designed to simplify complex supply chains. As a trusted LCL consolidator, we provide seamless and cost-effective cargo movement across key global trade lanes—including North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East.
                </p>
                
                <p>
                  Our core strength lies in our strategic presence at major transshipment hubs, including Singapore, Malaysia, Sri Lanka, and Dubai, allowing us to operate direct weekly sailings to major ports worldwide. This robust network ensures optimized transit times, reduced freight costs, and greater reliability for our clients.
                </p>
                
                <p>
                  With a deep commitment to service excellence, GGL combines global reach with local expertise. Our LCL groupage services are supported by dedicated customer service teams, ensuring smooth coordination, fast turnaround, and complete transparency from origin to destination—all at highly competitive rates.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* LCL Consolidation Section */}
        <section className="py-16 bg-gray-50 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">GGL's Role in LCL Consolidation</h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>As an LCL consolidator, GGL specializes in:</p>
                
                <ul className="list-disc pl-8 space-y-2">
                  <li>Collecting smaller shipments from multiple clients</li>
                  <li>Combining them into a single container at origin</li>
                  <li>Managing customs clearance and documentation</li>
                  <li>Ensuring secure and timely deconsolidation and final delivery</li>
                </ul>
                
                <p>
                  With our strategic global hub network and advanced tracking systems, we provide reliable, transparent, and economical LCL solutions tailored to your supply chain needs.
                </p>
                
                <p className="text-xl font-semibold text-gray-800 text-center mt-8">
                  At GGL, we don't just move freight — we move businesses forward.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Image Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <img src="/images/gp.jpg" alt="GGL Global Logistics" className="rounded-xl shadow-lg w-full max-w-4xl mx-auto object-cover h-[400px]" />
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-700 text-white py-16 text-center px-6">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl font-bold mb-4 text-slate-50">Partner With GGL</h2>
            <p className="text-lg mb-6 text-slate-50">We don't just move freight — we move businesses forward.</p>
            <Link to="/contact">
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow">
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;