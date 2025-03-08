
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { FileCheck, Layers, ShieldCheck, BarChart4, GanttChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CustomsClearance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Layers className="h-10 w-10 p-2 text-blue-600" />,
      title: "Documentation Management",
      description: "Comprehensive preparation and verification of all required customs documents including commercial invoices, packing lists, and certificates of origin."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 p-2 text-blue-600" />,
      title: "Regulatory Compliance",
      description: "Ensuring all shipments comply with international trade regulations, import/export restrictions, and local laws."
    },
    {
      icon: <BarChart4 className="h-10 w-10 p-2 text-blue-600" />,
      title: "Tariff Classification",
      description: "Expert classification of goods according to the Harmonized System (HS) to determine applicable duties and taxes."
    },
    {
      icon: <GanttChart className="h-10 w-10 p-2 text-blue-600" />,
      title: "Process Optimization",
      description: "Streamlining customs procedures to minimize delays and expedite the clearance process for your shipments."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/cc.jpg" 
              alt="Customs Clearance Services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Customs Clearance
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Expert Services for Smooth Border Crossings and Regulatory Compliance
              </p>
              <Link to="/quote">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  Get a Free Quote
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Navigating the complexities of global trade is simplified with our expert customs clearance services. 
                  We ensure your shipments move smoothly across borders, handling all aspects of the process from 
                  accurate documentation and tariff classification to regulatory compliance and specialized cargo handling.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our experienced team stays abreast of evolving regulations, leverages advanced technology for expedited clearance, 
                  and maintains strong relationships with customs authorities worldwide. We prioritize transparency and open 
                  communication, providing real-time updates and peace of mind, allowing you to focus on your core business.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-12">
                  Trust us to manage your import and export needs, minimizing delays and ensuring your shipments reach their 
                  destinations efficiently and compliantly.
                </p>
              </motion.div>
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Our Customs Clearance Services
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-blue-50 p-8 rounded-xl shadow-sm mb-12"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Why Choose Our Customs Clearance Services?
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-gray-700">
                  <li>Experienced customs brokers with deep knowledge of global trade regulations</li>
                  <li>Advanced electronic systems for faster processing and real-time tracking</li>
                  <li>Strong relationships with customs authorities for facilitated clearance</li>
                  <li>Proactive problem-solving approach to potential customs issues</li>
                  <li>Complete transparency throughout the clearance process</li>
                  <li>Consistent compliance with ever-changing international trade regulations</li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-blue-600 text-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold mb-4">
                  Ready to Streamline Your Customs Process?
                </h3>
                <p className="mb-6">
                  Contact our customs clearance specialists today to discuss your import/export requirements and discover 
                  how we can simplify your cross-border trade operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/quote">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Request a Quote
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomsClearance;
