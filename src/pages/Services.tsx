import React, { useState, useEffect } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Map, Package, Truck, Ship } from 'lucide-react';
const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    setIsInView(true);
  }, []);
  const services = [{
    title: "Air Freight Services",
    description: "Global air freight solutions with express shipping and door-to-door service.",
    details: "With our extensive network of airline partners, we offer premium air freight services that prioritize speed and reliability. Our expert team handles all aspects from documentation to customs clearance, ensuring your shipments arrive safely and on time regardless of destination.",
    image: "/airfrieght1.jpg",
    icon: <Package className="w-6 h-6" />,
    stats: [{
      value: "98%",
      label: "On-time delivery"
    }, {
      value: "200+",
      label: "Destinations"
    }, {
      value: "24/7",
      label: "Support"
    }]
  }, {
    title: "Transportation & Distribution",
    description: "Nationwide distribution network ensuring timely and reliable deliveries.",
    details: "Our comprehensive distribution infrastructure covers major metropolitan areas and beyond, supported by cutting-edge tracking technology. We specialize in both standard and temperature-controlled transportation, with flexible scheduling options to meet your specific business requirements.",
    image: "/lovable-uploads/transport.jpg",
    icon: <Truck className="w-6 h-6" />,
    stats: [{
      value: "1500+",
      label: "Vehicles"
    }, {
      value: "45+",
      label: "Distribution centers"
    }, {
      value: "99.7%",
      label: "Delivery accuracy"
    }]
  }, {
    title: "Warehousing Solutions",
    description: "State-of-the-art facilities with advanced inventory management systems.",
    details: "Our warehousing solutions include climate-controlled storage, real-time inventory tracking, order fulfillment, and value-added services. With 24/7 security monitoring and strategically located facilities, we ensure your inventory is stored safely and efficiently distributed when needed.",
    image: "/lovable-uploads/warehouse.jpg",
    icon: <Map className="w-6 h-6" />,
    stats: [{
      value: "1.2M+",
      label: "Sq ft of space"
    }, {
      value: "99.9%",
      label: "Inventory accuracy"
    }, {
      value: "60 min",
      label: "Average processing"
    }]
  }, {
    title: "Ocean Freight Services",
    description: "Comprehensive shipping solutions with global coverage and competitive rates.",
    details: "Our ocean freight services include both FCL and LCL options, backed by strategic partnerships with major carriers. We handle all documentation, customs clearance, and provide specialized container solutions for various cargo types, delivering cost-effective global shipping solutions.",
    image: "/lovable-uploads/oceanfrieght.jpg",
    icon: <Ship className="w-6 h-6" />,
    stats: [{
      value: "150+",
      label: "Global ports"
    }, {
      value: "25K+",
      label: "Annual shipments"
    }, {
      value: "15+",
      label: "Carrier partners"
    }]
  }];
  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-5 pattern-grid-lg"></div>
          
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6">
                LOGISTICS EXCELLENCE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="relative inline-block">
                  <span>Streamlined Solutions for</span>
                  <motion.span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500" initial={{
                  width: "0%"
                }} animate={{
                  width: "100%"
                }} transition={{
                  delay: 0.5,
                  duration: 0.8
                }}></motion.span>
                </span>
                <br />
                <span className="text-blue-700">Global Logistics</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                Our comprehensive suite of services is designed to optimize your supply chain, reduce costs, and deliver reliable results across every touchpoint.
              </p>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                Request a Quote
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 0.1
        }} transition={{
          delay: 0.5,
          duration: 1
        }} className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 0.1
        }} transition={{
          delay: 0.7,
          duration: 1
        }} className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></motion.div>
        </section>

        {/* Services Navigation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="flex flex-col items-center mb-12">
              <span className="text-blue-600 font-medium mb-2">OUR OFFERINGS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Comprehensive Logistics Services
              </h2>
              <div className="w-20 h-1 bg-blue-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {services.map((service, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className={`rounded-xl p-6 cursor-pointer transition-all duration-300 ${activeService === index ? "bg-blue-700 text-white shadow-xl" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`} onClick={() => setActiveService(index)}>
                  <div className={`p-3 rounded-full inline-flex mb-4 ${activeService === index ? "bg-white/20" : "bg-blue-100"}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className={`text-sm ${activeService === index ? "text-white/80" : "text-gray-600"}`}>
                    {service.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* Active Service Detail */}
        <AnimatePresence mode="wait">
          <motion.section key={activeService} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.5
        }} className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <motion.div initial={{
              scale: 1.1,
              opacity: 0
            }} animate={{
              scale: 1,
              opacity: 1
            }} transition={{
              duration: 0.8
            }} className="h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                <img src={services[activeService].image} alt={services[activeService].title} className="w-full h-full object-cover" />
              </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{
                x: -50,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.2,
                duration: 0.6
              }} className="text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-50">
                    {services[activeService].title}
                  </h2>
                  <p className="text-lg text-white/85 mb-8 leading-relaxed">
                    {services[activeService].details}
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {services[activeService].stats.map((stat, idx) => <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-white/70 text-sm">{stat.label}</p>
                      </div>)}
                  </div>
                  <motion.button whileHover={{
                  scale: 1.05
                }} whileTap={{
                  scale: 0.95
                }} className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                    Learn More About Our {services[activeService].title}
                    <ArrowRight size={16} />
                  </motion.button>
                </motion.div>

                <motion.div initial={{
                x: 50,
                opacity: 0
              }} animate={{
                x: 0,
                opacity: 1
              }} transition={{
                delay: 0.4,
                duration: 0.6
              }} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hidden lg:block">
                  <div className="bg-white rounded-lg p-6 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Request Specific Information</h3>
                    <p className="text-gray-600 mb-6">
                      Interested in our {services[activeService].title.toLowerCase()}? Fill out the form below for detailed information.
                    </p>
                    <form className="space-y-4">
                      <div>
                        <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                      </div>
                      <div>
                        <textarea placeholder="Tell us about your specific needs" className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
                      </div>
                      <motion.button whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300">
                        Submit Request
                      </motion.button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }} className="text-center mb-16">
              <span className="text-blue-600 font-medium">WHY CHOOSE US</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                Logistics Excellence at Every Step
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our dedication to quality service sets us apart in the competitive logistics industry
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
              title: "Global Network",
              description: "Access to worldwide shipping routes and partners",
              icon: "🌐"
            }, {
              title: "24/7 Support",
              description: "Round-the-clock customer service and tracking",
              icon: "⏰"
            }, {
              title: "Custom Solutions",
              description: "Tailored logistics strategies for your unique needs",
              icon: "🔧"
            }, {
              title: "Cost Efficiency",
              description: "Optimized routes and processes to minimize expenses",
              icon: "💰"
            }, {
              title: "Advanced Technology",
              description: "Real-time tracking and inventory management",
              icon: "📱"
            }, {
              title: "Experienced Team",
              description: "Industry veterans with specialized knowledge",
              icon: "👥"
            }, {
              title: "Sustainability",
              description: "Eco-friendly practices and reduced carbon footprint",
              icon: "🌱"
            }, {
              title: "Compliance Expertise",
              description: "Navigate complex international regulations with ease",
              icon: "📋"
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} viewport={{
              once: true
            }} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-700 relative overflow-hidden">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 0.1
        }} className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></motion.div>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 0.1
        }} className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} viewport={{
              once: true
            }} className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Supply Chain?
              </motion.h2>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }} viewport={{
              once: true
            }} className="text-xl mb-10 text-white/90">
                Get in touch with our experts today to discover how our logistics solutions can transform your business operations.
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4,
              duration: 0.6
            }} viewport={{
              once: true
            }} className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-all duration-300">
                  Contact Sales Team
                </motion.button>
                <motion.button whileHover={{
                scale: 1.05
              }} whileTap={{
                scale: 0.95
              }} className="px-8 py-4 bg-transparent text-white rounded-lg font-medium border-2 border-white hover:bg-white/10 transition-all duration-300">
                  View Case Studies
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Services;