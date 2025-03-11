
import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plane, Ship, FileText, Droplets } from "lucide-react";

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  image, 
  link 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <div className="bg-green-600 text-white p-2 rounded-full inline-block mb-2">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <Link 
          to={link} 
          className="text-green-600 font-medium hover:text-green-700 inline-flex items-center"
        >
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Plane className="w-5 h-5" />,
      title: "Air Freight",
      image: "/lovable-uploads/airfreight.jpg",
      description: "Tailored Air Freight Solutions to Meet Your Unique Requirements. We understand that every shipment is different. That's why we offer flexible air freight solutions designed to meet your specific needs.",
      link: "/services/air-freight"
    },
    {
      id: 2,
      icon: <Ship className="w-5 h-5" />,
      title: "Ocean Freight",
      image: "/lovable-uploads/ocean.jpg",
      description: "We provide comprehensive ocean freight services designed to meet your diverse shipping needs. Leveraging our extensive global network and offering competitive rates, we ensure your cargo moves efficiently and reliably.",
      link: "/services/ocean-freight"
    },
    {
      id: 3,
      icon: <FileText className="w-5 h-5" />,
      title: "Customs Clearance",
      image: "/lovable-uploads/cc.jpg",
      description: "Navigating the complexities of global trade is simplified with our expert customs clearance services. We ensure your shipments move smoothly across borders, handling all aspects of the process.",
      link: "/services/customs-clearance"
    },
    {
      id: 4,
      icon: <Droplets className="w-5 h-5" />,
      title: "Liquid Transportation",
      image: "/lovable-uploads/liquid.jpg",
      description: "Transporting liquids demands specialized expertise, and we provide comprehensive solutions ensuring the safe and efficient delivery of your valuable cargo.",
      link: "/services/liquid-transportation"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Our Comprehensive Services
              </h1>
              <p className="text-lg text-gray-700">
                From air and ocean freight to specialized liquid transportation, we offer end-to-end logistics solutions tailored to your unique needs.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Why Choose Our Logistics Services
              </h2>
              <p className="text-gray-700">
                We combine industry expertise, advanced technology, and personalized care to deliver exceptional logistics solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Global Network",
                  description: "Leverage our extensive worldwide connections for efficient shipping to any destination."
                },
                {
                  title: "Customized Solutions",
                  description: "Tailored logistics plans designed specifically for your unique business requirements."
                },
                {
                  title: "Advanced Technology",
                  description: "Real-time tracking and cutting-edge systems to monitor your cargo every step of the way."
                },
                {
                  title: "Expert Team",
                  description: "Seasoned professionals with years of experience in international logistics."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Up-to-date knowledge of global trade regulations to ensure smooth operations."
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer service to address any concerns or inquiries."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white p-8 text-center max-w-4xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Logistics?</h3>
              <p className="mb-6 text-green-50">
                Contact us today for a personalized consultation and see how we can transform your supply chain.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/quote" 
                  className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
