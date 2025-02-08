import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Services = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Air Freight Services",
      description: "We offer a full suite of air freight solutions tailored to meet your shipping requirements. Our expert team ensures smooth handling of air imports, exports, and express shipments, all with the convenience of door-to-door service.",
      details: "Our company sets itself apart with competitive pricing and exceptional operational support, guaranteeing customer satisfaction with every shipment. Whether you prioritize speed, reliability, or cost-effectiveness, our air freight services provide the perfect balance, making us a trusted partner in global logistics.",
      image: "/lovable-uploads/airfreight.jpg",
      icon: "✈️"
    },
    {
      title: "Transportation and Distribution Services",
      description: "Moltech ensures efficient domestic distribution and timely deliveries. Our robust logistics infrastructure enhances productivity, offering frequent and reliable transportation services.",
      details: "Our comprehensive distribution network spans across major cities, supported by advanced tracking systems and professional teams. We specialize in both standard and temperature-controlled transportation, ensuring your cargo reaches its destination safely and on time.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-2.png",
      icon: "🚛"
    },
    {
      title: "Warehousing Solutions",
      description: "State-of-the-art warehousing facilities equipped with modern inventory management systems and security measures.",
      details: "Our warehousing solutions include temperature-controlled storage, inventory management, order fulfillment, and distribution center operations with 24/7 security monitoring.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-3.png",
      icon: "🏭"
    },
    {
      title: "Ocean Freight Services",
      description: "Comprehensive ocean freight solutions including FCL and LCL services with global coverage and competitive rates.",
      details: "We handle all aspects of ocean freight from documentation to customs clearance, offering reliable tracking and specialized container solutions for various cargo types.",
      image: "/lovable-uploads/ocean.jpg",
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
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] flex items-center justify-center bg-blue-50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-serif">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="relative min-h-[500px] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60 transition-opacity duration-300">
                      <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
                        <div className="max-w-3xl">
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center gap-4 mb-6"
                          >
                            <span className="text-4xl">{service.icon}</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white font-serif">
                              {service.title}
                            </h3>
                          </motion.div>
                          
                          <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-white/90 text-lg md:text-xl leading-relaxed font-light mb-6"
                          >
                            {service.description}
                          </motion.p>
                          
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ 
                              height: openItems[index] ? "auto" : 0,
                              opacity: openItems[index] ? 1 : 0
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <p className="text-white/90 text-lg leading-relaxed font-light mt-6">
                              {service.details}
                            </p>
                          </motion.div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => toggleAccordion(index)}
                          className="self-start py-3 px-6 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors mt-8 flex items-center gap-2 backdrop-blur-sm"
                        >
                          {openItems[index] ? "Show Less" : "Learn More"}
                          <ArrowRight size={16} className={`transform transition-transform duration-300 ${openItems[index] ? 'rotate-180' : ''}`} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
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
