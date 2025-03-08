import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Package, Truck, Map, Ship } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: "air-freight",
      title: "Air Freight Services",
      shortDescription: "Fast and reliable global air freight solutions",
      fullDescription: "We offer comprehensive air freight solutions tailored to meet your shipping requirements. Our expert team ensures smooth handling of air imports, exports, and express shipments, all with door-to-door service options.",
      benefits: [
        "Time-sensitive deliveries worldwide",
        "Competitive rates with premium carriers",
        "Complete documentation and customs clearance",
        "Specialized handling for fragile or high-value items"
      ],
      icon: <Package className="w-5 h-5 md:w-6 md:h-6" />,
      image: "/airfrieght1.jpg"
    },
    {
      id: "transportation",
      title: "Transportation & Distribution",
      shortDescription: "Nationwide distribution network with reliable delivery",
      fullDescription: "Moltech ensures efficient domestic distribution and timely deliveries. Our robust logistics infrastructure enhances productivity, offering frequent and reliable transportation services for businesses of all sizes.",
      benefits: [
        "Nationwide coverage with strategic distribution centers",
        "Temperature-controlled transportation options",
        "Real-time tracking and delivery confirmation",
        "Flexible scheduling for your business needs"
      ],
      icon: <Truck className="w-5 h-5 md:w-6 md:h-6" />,
      image: "/lovable-uploads/transport.jpg"
    },
    {
      id: "warehousing",
      title: "Warehousing Solutions",
      shortDescription: "Modern facilities with advanced inventory management",
      fullDescription: "Our state-of-the-art warehousing facilities are equipped with modern inventory management systems and comprehensive security measures to ensure your products are stored safely and efficiently.",
      benefits: [
        "Climate-controlled storage options",
        "Inventory management with real-time reporting",
        "Order fulfillment and distribution services",
        "24/7 security monitoring and controlled access"
      ],
      icon: <Map className="w-5 h-5 md:w-6 md:h-6" />,
      image: "/lovable-uploads/warehouse.jpg"
    },
    {
      id: "ocean-freight",
      title: "Ocean Freight Services",
      shortDescription: "Global shipping with competitive rates",
      fullDescription: "We provide comprehensive ocean freight solutions including FCL and LCL services with global coverage and competitive rates for businesses looking to ship internationally via sea routes.",
      benefits: [
        "FCL and LCL shipping options worldwide",
        "Strategic carrier partnerships for best rates",
        "Specialized container solutions for various cargo",
        "Complete documentation and customs clearance"
      ],
      icon: <Ship className="w-5 h-5 md:w-6 md:h-6" />,
      image: "/lovable-uploads/oceanfrieght.jpg"
    }
  ];

  const toggleService = (id) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section - Simple and mobile-friendly */}
        <section className="py-10 md:py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium mb-4">
                OUR SERVICES
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Comprehensive Logistics Solutions
              </h1>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
                We offer a complete range of logistics services designed to streamline your supply chain,
                reduce costs, and deliver reliable results for your business.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-sm md:text-base font-medium shadow-md transition duration-300 flex items-center gap-2 mx-auto">
                Get a Quote <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Services Section - Mobile-first cards */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-6"
            >
              {services.map((service) => (
                <motion.div 
                  key={service.id}
                  variants={itemVariants}
                  className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <div className="relative">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-4 md:p-6 w-full">
                        <div className="flex items-center justify-between">
                          <h2 className="text-xl md:text-2xl font-bold text-white">{service.title}</h2>
                          <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            {service.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 md:p-6">
                    <p className="text-gray-700 mb-4 text-sm md:text-base">{service.shortDescription}</p>
                    
                    <button 
                      onClick={() => toggleService(service.id)}
                      className="flex items-center gap-2 text-blue-600 font-medium text-sm md:text-base"
                    >
                      {expandedService === service.id ? "View Less" : "View Details"}
                      <motion.div
                        animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                    
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        <p className="text-gray-600 text-sm md:text-base">{service.fullDescription}</p>
                        
                        <div className="pt-2">
                          <h3 className="font-medium text-gray-800 mb-2 text-sm md:text-base">Key Benefits:</h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm md:text-base">
                                <div className="text-blue-600 mt-1 flex-shrink-0">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                                <span className="text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm md:text-base font-medium transition duration-300 mt-4">
                          Learn More About {service.title}
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Benefits Section - Simplified for mobile */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Why Choose Our Services</h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm md:text-base">Discover the advantages that set us apart in the logistics industry</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Global Network",
                  description: "Access to worldwide shipping routes and partners",
                  icon: "🌐"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer service and tracking",
                  icon: "⏰"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored logistics strategies for your unique needs",
                  icon: "🔧"
                },
                {
                  title: "Cost Efficiency",
                  description: "Optimized routes and processes to minimize expenses",
                  icon: "💰"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-4 md:p-6 rounded-lg border border-gray-100"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Mobile-optimized */}
        <section className="py-12 px-4 bg-blue-600 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-white/90 text-sm md:text-base max-w-2xl mx-auto">
              Contact our team today to discuss how our logistics solutions can help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium shadow-md hover:bg-gray-100 transition duration-300 text-sm md:text-base">
                Contact Us
              </button>
              <button className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition duration-300 text-sm md:text-base">
                View Services
              </button>
            </div>
          </div>
        </section>
        
        {/* FAQ Section - Simplified mobile accordions */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm md:text-base">Find answers to common questions about our logistics services</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What areas do your services cover?",
                  answer: "Our logistics services cover global destinations with particular strength in Asia, Europe, and the Americas. Our extensive network allows us to deliver to virtually any location worldwide."
                },
                {
                  question: "How do I track my shipment?",
                  answer: "We provide real-time tracking through our online portal. Once your shipment is processed, you'll receive a tracking number that you can use to monitor your shipment's progress at any time."
                },
                {
                  question: "What's the difference between FCL and LCL shipping?",
                  answer: "FCL (Full Container Load) means you're shipping enough goods to fill an entire container. LCL (Less than Container Load) means your goods share container space with other shipments. FCL is typically faster and involves less handling of your goods."
                },
                {
                  question: "How do you handle customs clearance?",
                  answer: "Our dedicated customs team manages all documentation and clearance procedures. We have expertise in international trade regulations and can advise on the most efficient ways to clear your goods through customs."
                }
              ].map((faq, index) => (
                <FaqItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// FAQ Item component for better mobile experience
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 md:p-5 flex justify-between items-center bg-white text-left"
      >
        <span className="font-medium text-gray-800 text-sm md:text-base">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} className="text-gray-500" />
        </motion.div>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 md:p-5 bg-gray-50 border-t border-gray-200"
        >
          <p className="text-gray-600 text-sm md:text-base">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default Services;
