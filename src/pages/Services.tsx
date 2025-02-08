import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Services = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const services = [
    {
      title: "Air Freight Services",
      description: "We offer a full suite of air freight solutions tailored to meet your shipping requirements.",
      details: "Our company sets itself apart with competitive pricing and exceptional operational support, guaranteeing customer satisfaction with every shipment.",
      image: "/public/airfrieght1.jpg",
      icon: "✈️"
    },
    {
      title: "Transportation and Distribution Services",
      description: "Moltech ensures efficient domestic distribution and timely deliveries.",
      details: "Our comprehensive distribution network spans across major cities, supported by advanced tracking systems and professional teams.",
      image: "/lovable-uploads/transport.jpg",
      icon: "🚛"
    },
    {
      title: "Warehousing Solutions",
      description: "State-of-the-art warehousing facilities equipped with modern inventory management systems and security measures.",
      details: "Our warehousing solutions include temperature-controlled storage, inventory management, order fulfillment, and distribution center operations.",
      image: "/lovable-uploads/warehouse.jpg",
      icon: "🏭"
    },
    {
      title: "Ocean Freight Services",
      description: "Comprehensive ocean freight solutions including FCL and LCL services with global coverage and competitive rates.",
      details: "We handle all aspects of ocean freight from documentation to customs clearance, offering reliable tracking and specialized container solutions.",
      image: "/lovable-uploads/oceanfrieght.jpg",
      icon: "🚢"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Section */}
                  <motion.div className="h-64 md:h-auto">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </motion.div>
                  
                  {/* Text Section */}
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{service.icon}</span>
                        <h3 className="text-2xl font-bold text-gray-800 font-serif">{service.title}</h3>
                      </div>
                      <p className="text-gray-700 text-lg mb-4">{service.description}</p>
                      <AnimatePresence>
                        {openItems[index] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-600 text-lg"
                          >
                            {service.details}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                    >
                      {openItems[index] ? "Show Less" : "Learn More"}
                      <motion.div
                        animate={{ rotate: openItems[index] ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
