import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Package, Truck, Shield, Globe, Settings, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';
const ProjectCargo = () => {
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
                  Project Cargo Services
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
                  Specialized logistics solutions for complex, heavy, and oversized shipments
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
                  <img src="/cargoproject.png" alt="Project Cargo Service" className="w-full h-auto object-cover" />
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
                End-to-End Project Cargo Solutions
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-gray-700 mb-6 text-justify">
                We specialize in delivering end-to-end logistics solutions for complex, heavy, and oversized shipments—commonly known as project cargo. Our expertise spans across industries including oil & gas, construction, renewable energy, mining, and manufacturing, where standard shipping methods simply won't suffice.
              </p>
              <p className="text-gray-700 text-justify">
                From initial planning and route surveys to final delivery and installation support, our dedicated project cargo team manages every aspect of your shipment. We combine technical expertise, specialized equipment, and global partnerships to ensure your critical cargo reaches its destination safely, on time, and within budget.
              </p>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Package className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Heavy Lift Solutions</h3>
                  <p className="text-gray-600 text-justify">
                    Specialized handling for heavy machinery, industrial equipment, and oversized components requiring advanced lifting and transportation techniques.
                  </p>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Settings className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Custom Engineering</h3>
                  <p className="text-gray-600 text-justify">
                    Tailored engineering solutions including route planning, load calculations, and specialized packaging for unique cargo requirements.
                  </p>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} viewport={{
              once: true
            }} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <Shield className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">Risk Management</h3>
                  <p className="text-gray-600 text-justify">
                    Comprehensive insurance coverage and risk assessment to protect your valuable cargo throughout the entire transportation process.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Additional Services */}
            
            
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
          }} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-50">Need Project Cargo Solutions?</h3>
              <p className="mb-6 text-blue-50">
                Contact our project cargo specialists for customized logistics solutions.
              </p>
              <Link to="/contact" className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ProjectCargo;