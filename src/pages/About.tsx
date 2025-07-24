import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow mt-16">
        {/* Image + Intro Content Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                About <span className="text-yellow-500">GGL</span>
              </h2>
              <div className="space-y-6 text-gray-700 text-base leading-relaxed">
                <p>
                  GGL is a proud subsidiary of 1 Global Enterprises, a Singapore-based investment group with a robust and diverse portfolio spanning freight forwarding, supply chain management, and logistics technology. As part of this global network, GGL leverages strategic investments across multiple brands specializing in transportation, warehousing, and integrated supply chain solutions.
                </p>
                <p>
                  With a strong foundation backed by 1 Global Enterprises’ industry expertise and innovation-driven approach, GGL delivers seamless, technology-enabled logistics solutions. This affiliation ensures operational excellence, financial stability, and access to world-class infrastructure—positioning GGL as a leading provider of end-to-end global logistics services.
                </p>
                <p>
                  The 1 Global Group operates in 16 countries with a dedicated team of over 700 professionals. Its business verticals include Supply Chain Solutions, Renewable Energy, Information Technology, and Business Process Outsourcing, each managed by domain experts committed to delivering impactful results.
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  alt="GGL Global Logistics"
                  className="w-full h-[500px] object-cover"
                  src="/lovable-uploads/41795fb5-562d-45d1-a8d3-f26724bc079b.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Additional Content Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-gray-700 text-base leading-relaxed space-y-6">
            <p>
              At GGL Singapore, we specialize in offering comprehensive logistics services such as:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Freight Management</li>
              <li>Warehouse Management</li>
              <li>Transport Management</li>
              <li>Liquid Logistics</li>
              <li>Oversized Shipments & Project Cargo</li>
            </ul>
            <p>
              With the support of our in-house IT company, we are making significant investments in cutting-edge technologies—including Artificial Intelligence, Automation, and Data Analytics—to optimize operations and enhance transparency, efficiency, and client satisfaction.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
