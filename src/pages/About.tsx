import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Ship, Truck, Package, Clock, Shield, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
const About = () => {
  const stats = [{
    number: "15+",
    label: "Years Experience",
    icon: Clock
  }, {
    number: "500+",
    label: "Global Partners",
    icon: Users
  }, {
    number: "50+",
    label: "Countries Served",
    icon: Globe
  }, {
    number: "99%",
    label: "On-Time Delivery",
    icon: Award
  }];
  const services = [{
    icon: Ship,
    title: "Ocean Freight",
    description: "Comprehensive sea freight solutions with global coverage"
  }, {
    icon: Package,
    title: "Air Freight",
    description: "Fast and reliable air cargo services worldwide"
  }, {
    icon: Truck,
    title: "Land Transport",
    description: "Efficient ground transportation and last-mile delivery"
  }, {
    icon: Shield,
    title: "Warehousing",
    description: "Secure storage and inventory management solutions"
  }];
  const features = ["Real-time shipment tracking and visibility", "Dedicated customer service teams", "Strategic global hub network", "Advanced logistics technology platform", "Customs clearance expertise", "Cost-effective LCL consolidation"];
  return <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        

        {/* Stats Section */}
        

        {/* About Content */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center py-[70px]">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Singapore's Premier <span className="text-blue-600">Logistics Partner</span>
                </h2>
                
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    At GGL, we take pride in being one of Singapore's premier logistics companies, offering specialized expertise across warehousing, freight forwarding, and transportation. Our mission is to provide seamless, end-to-end global logistics solutions through a trusted network of partners.
                  </p>
                  
                  <p>
                    Our experienced team delivers world-class service, tailored to meet unique client needs. Whether it's a custom logistics strategy or full-spectrum solution, we ensure efficiency, reliability, and value every step of the way.
                  </p>
                  
                  <div className="pt-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose GGL?</h3>
                    <div className="grid gap-3">
                      {features.map((feature, index) => <motion.div key={index} initial={{
                      opacity: 0,
                      x: -20
                    }} whileInView={{
                      opacity: 1,
                      x: 0
                    }} transition={{
                      delay: index * 0.1,
                      duration: 0.5
                    }} viewport={{
                      once: true
                    }} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>)}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="/images/gp.jpg" alt="GGL Global Logistics" className="w-full h-[500px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Global Network</h4>
                      <p className="text-sm text-gray-600">50+ countries worldwide</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white px-6">
          <div className="max-w-7xl mx-auto">
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
          }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-blue-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive logistics solutions designed to streamline your supply chain operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1,
              duration: 0.6
            }} viewport={{
              once: true
            }} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="mb-6">
                    <div className="p-4 bg-blue-100 rounded-xl w-fit group-hover:bg-blue-200 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* LCL Consolidation Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-slate-50">
                  LCL Consolidation <span className="text-slate-50">Expertise</span>
                </h2>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  As a trusted LCL consolidator, we provide seamless and cost-effective cargo movement across key global trade lanes, including North America, the UK, Middle East, Indian Subcontinent, Southeast Asia, and the Far East.
                </p>

                <div className="space-y-4 mb-8">
                  {["Collecting smaller shipments from multiple clients", "Combining them into a single container at origin", "Managing customs clearance and documentation", "Ensuring secure deconsolidation and final delivery"].map((item, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  delay: index * 0.1,
                  duration: 0.5
                }} viewport={{
                  once: true
                }} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                      <span className="text-blue-100">{item}</span>
                    </motion.div>)}
                </div>

                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>

              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }} viewport={{
              once: true
            }} className="relative">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 text-slate-50">Global Hub Network</h3>
                  <div className="space-y-4">
                    {["Singapore", "Malaysia", "Sri Lanka", "Dubai"].map((hub, index) => <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                        <span className="font-medium">{hub}</span>
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6">
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
        }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
              Ready to <span className="text-slate-50">Partner</span> With Us?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              We don't just move freight — we move businesses forward. Let's discuss how we can optimize your supply chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;