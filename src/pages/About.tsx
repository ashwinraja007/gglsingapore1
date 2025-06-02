
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Users, Target, Award, Ship, Truck, Warehouse, Plane } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { icon: <Globe className="w-8 h-8" />, number: "25+", label: "Countries Served" },
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Satisfied Clients" },
    { icon: <Ship className="w-8 h-8" />, number: "1000+", label: "Shipments Monthly" },
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" }
  ];

  const services = [
    { icon: <Ship className="w-6 h-6" />, title: "Ocean Freight", description: "LCL & FCL Solutions" },
    { icon: <Plane className="w-6 h-6" />, title: "Air Freight", description: "Express & Standard" },
    { icon: <Truck className="w-6 h-6" />, title: "Transportation", description: "Domestic Distribution" },
    { icon: <Warehouse className="w-6 h-6" />, title: "Warehousing", description: "Storage & Fulfillment" }
  ];

  const locations = [
    "Singapore", "Malaysia", "Sri Lanka", "Dubai", "Mumbai", "Chennai"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 text-white text-center px-4 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="About GGL" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-blue-800/85 to-indigo-900/90"></div>
          </div>
          
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              About 
              <span className="text-brand-gold block mt-2">GGL</span>
            </h1>
            <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 leading-relaxed">
              Singapore's premier logistics partner, driving global trade with innovation, 
              integrity, and unmatched reliability across all major trade lanes.
            </p>
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-brand-gold/10 p-4 rounded-full inline-block mb-4">
                    <div className="text-brand-gold">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-navy mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Main About Content */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                  Leading Singapore's Logistics Excellence
                </h2>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p className="text-xl font-medium text-brand-navy">
                      At GGL, we take pride in being one of Singapore's premier logistics companies, offering specialized expertise across warehousing, freight forwarding (air and ocean), and transportation.
                    </p>
                    
                    <p>
                      Our mission is to provide seamless, end-to-end global logistics solutions through a trusted network of partners, each excelling in their respective logistics segments.
                    </p>
                    
                    <p>
                      Our experienced team is dedicated to delivering world-class service, tailored to meet the unique needs of each client. Whether it's a custom-built logistics strategy or a full-spectrum solution, we ensure efficiency, reliability, and value every step of the way.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  {services.map((service, index) => (
                    <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="bg-brand-gold text-brand-navy p-3 rounded-full inline-block mx-auto mb-2">
                          {service.icon}
                        </div>
                        <CardTitle className="text-sm font-semibold">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-700 text-lg leading-relaxed"
              >
                <p>
                  To enhance customer experience, GGL leverages a powerful, internet-based software platform that offers real-time shipment visibility—from origin to destination. This technology ensures transparency, control, and timely updates, delivering a seamless and differentiated logistics experience.
                </p>
                
                <p>
                  Renowned for our exceptional service quality, GGL is recognized as one of the most customer-focused logistics companies in the region. Our ability to consistently deliver dependable and economical solutions has helped us build enduring partnerships with clients around the world.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LCL Consolidation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                  LCL Consolidation Excellence
                </h2>
                <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p className="text-xl font-medium text-brand-navy">
                      At GGL, we specialize in Less-than-Container Load (LCL) consolidation, offering global logistics solutions designed to simplify complex supply chains.
                    </p>
                    
                    <p>
                      As a trusted LCL consolidator, we provide seamless and cost-effective cargo movement across key global trade lanes—including North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East.
                    </p>
                    
                    <p>
                      Our core strength lies in our strategic presence at major transshipment hubs, including Singapore, Malaysia, Sri Lanka, and Dubai, allowing us to operate direct weekly sailings to major ports worldwide.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-brand-gold border-l-4">
                    <CardHeader>
                      <CardTitle className="text-xl text-brand-navy mb-4">Our LCL Specializations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          <span>Collecting smaller shipments from multiple clients</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          <span>Combining them into a single container at origin</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          <span>Managing customs clearance and documentation</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-brand-gold rounded-full mr-3"></div>
                          <span>Ensuring secure and timely deconsolidation and final delivery</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-12 space-y-6 text-gray-700 text-lg leading-relaxed"
              >
                <p>
                  This robust network ensures optimized transit times, reduced freight costs, and greater reliability for our clients.
                </p>
                
                <p>
                  With a deep commitment to service excellence, GGL combines global reach with local expertise. Our LCL groupage services are supported by dedicated customer service teams, ensuring smooth coordination, fast turnaround, and complete transparency from origin to destination—all at highly competitive rates.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Global Network
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Strategic locations across major transshipment hubs
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white px-6 py-3 rounded-full shadow-md border border-brand-gold/20"
                >
                  <span className="text-brand-navy font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Image Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img 
                src="/images/gp.jpg" 
                alt="GGL Global Logistics" 
                className="rounded-2xl shadow-2xl w-full max-w-5xl mx-auto object-cover h-[500px]" 
              />
            </motion.div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Moving Businesses Forward
              </h2>
              <p className="text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                With our strategic global hub network and advanced tracking systems, we provide reliable, 
                transparent, and economical solutions tailored to your supply chain needs.
              </p>
              <p className="text-3xl font-bold text-brand-gold mb-8">
                At GGL, we don't just move freight — we move businesses forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="text-lg px-8 py-3">
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-brand-navy">
                    Explore Services
                  </Button>
                </Link>
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
