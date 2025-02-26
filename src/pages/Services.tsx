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
      description: "We offer a full suite of air freight solutions tailored to meet your shipping requirements. Our expert team ensures smooth handling of air imports, exports, and express shipments, all with the convenience of door-to-door service.",
      details: "Our company sets itself apart with competitive pricing and exceptional operational support, guaranteeing customer satisfaction with every shipment. Whether you prioritize speed, reliability, or cost-effectiveness, our air freight services provide the perfect balance, making us a trusted partner in global logistics.",
      image: "/airfrieght1.jpg"
    },
    {
      title: "Transportation and Distribution Services",
      description: "Moltech ensures efficient domestic distribution and timely deliveries. Our robust logistics infrastructure enhances productivity, offering frequent and reliable transportation services.",
      details: "Our comprehensive distribution network spans across major cities, supported by advanced tracking systems and professional teams. We specialize in both standard and temperature-controlled transportation, ensuring your cargo reaches its destination safely and on time.",
      image: "/lovable-uploads/transport.jpg"
    },
    {
      title: "Warehousing Solutions",
      description: "State-of-the-art warehousing facilities equipped with modern inventory management systems and security measures.",
      details: "Our warehousing solutions include temperature-controlled storage, inventory management, order fulfillment, and distribution center operations with 24/7 security monitoring.",
      image: "/lovable-uploads/warehouse.jpg"
    },
    {
      title: "Ocean Freight Services",
      description: "Comprehensive ocean freight solutions including FCL and LCL services with global coverage and competitive rates.",
      details: "We handle all aspects of ocean freight from documentation to customs clearance, offering reliable tracking and specialized container solutions for various cargo types.",
      image: "/lovable-uploads/oceanfrieght.jpg"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      
      <main className="flex-grow mt-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[30vh] flex items-center justify-center bg-blue-50 overflow-hidden"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 font-inter">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter font-light">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    animate={{ height: openItems[index] ? '500px' : '400px' }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full overflow-hidden"
                  >
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      animate={{ 
                        scale: openItems[index] ? 1.1 : 1,
                        y: openItems[index] ? -20 : 0
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent flex items-center">
                      <div className="container mx-auto px-4">
                        <div className="max-w-xl ml-8 p-6 lg:p-8">
                          <motion.div className="mb-6">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white font-inter">
                              {service.title}
                            </h3>
                          </motion.div>
                          
                          <motion.p 
                            className="text-white/90 text-base lg:text-lg font-inter leading-relaxed mb-4"
                          >
                            {service.description}
                          </motion.p>

                          <AnimatePresence>
                            {openItems[index] && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/90 text-base lg:text-lg font-inter leading-relaxed mb-4"
                              >
                                {service.details}
                              </motion.p>
                            )}
                          </AnimatePresence>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleAccordion(index)}
                            className="mt-4 py-2.5 px-5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm font-inter"
                          >
                            {openItems[index] ? "Show Less" : "Learn More"}
                            <motion.div
                              animate={{ rotate: openItems[index] ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={16} />
                            </motion.div>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
