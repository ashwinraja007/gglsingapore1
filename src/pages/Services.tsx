import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Package, Truck, Map, Ship } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const services = [
    {
      id: "air-freight",
      title: "Air Freight Services",
      shortDescription: "Fast and reliable global air freight solutions",
      fullDescription: "We offer comprehensive air freight solutions tailored to meet your shipping requirements.",
      benefits: [
        "Time-sensitive deliveries worldwide",
        "Competitive rates with premium carriers",
        "Complete documentation and customs clearance",
        "Specialized handling for fragile or high-value items"
      ],
      icon: <Package className="w-6 h-6 text-blue-600" />,
      image: "/airfreight1.jpg"
    },
    {
      id: "transportation",
      title: "Transportation & Distribution",
      shortDescription: "Nationwide distribution network with reliable delivery",
      fullDescription: "Moltech ensures efficient domestic distribution and timely deliveries.",
      benefits: [
        "Nationwide coverage with strategic distribution centers",
        "Temperature-controlled transportation options",
        "Real-time tracking and delivery confirmation",
        "Flexible scheduling for your business needs"
      ],
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      image: "/lovable-uploads/transport.jpg"
    },
    {
      id: "warehousing",
      title: "Warehousing Solutions",
      shortDescription: "Modern facilities with advanced inventory management",
      fullDescription: "Our state-of-the-art warehousing facilities are equipped with modern inventory management systems.",
      benefits: [
        "Climate-controlled storage options",
        "Inventory management with real-time reporting",
        "Order fulfillment and distribution services",
        "24/7 security monitoring and controlled access"
      ],
      icon: <Map className="w-6 h-6 text-blue-600" />,
      image: "/lovable-uploads/warehouse.jpg"
    },
    {
      id: "ocean-freight",
      title: "Ocean Freight Services",
      shortDescription: "Global shipping with competitive rates",
      fullDescription: "We provide comprehensive ocean freight solutions including FCL and LCL services.",
      benefits: [
        "FCL and LCL shipping options worldwide",
        "Strategic carrier partnerships for best rates",
        "Specialized container solutions for various cargo",
        "Complete documentation and customs clearance"
      ],
      icon: <Ship className="w-6 h-6 text-blue-600" />,
      image: "/lovable-uploads/oceanfreight.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <img src={service.image} alt={service.title} className="w-full h-52 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
                      <div className="p-2 rounded-full bg-blue-100">{service.icon}</div>
                    </div>
                    <p className="text-gray-600 mt-2">{service.shortDescription}</p>
                    <button 
                      onClick={() => toggleService(service.id)}
                      className="flex items-center gap-2 text-blue-600 font-medium mt-3"
                    >
                      {expandedService === service.id ? "View Less" : "View Details"}
                      <ChevronDown className={`transition-transform ${expandedService === service.id ? "rotate-180" : "rotate-0"}`} size={16} />
                    </button>
                    {expandedService === service.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        transition={{ duration: 0.3 }} 
                        className="mt-4"
                      >
                        <p className="text-gray-700">{service.fullDescription}</p>
                        <ul className="mt-2 space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600">
                              <span className="text-blue-600">✔</span> {benefit}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </div>
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
