
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Flask, Droplets, ShieldCheck, Route, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const LiquidTransportation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: <Flask className="h-10 w-10 p-2 text-blue-600" />,
      title: "Specialized Equipment",
      description: "ISO tanks, flexitanks, and specialized tankers designed specifically for different types of liquid cargo."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 p-2 text-blue-600" />,
      title: "Safety Protocols",
      description: "Comprehensive safety measures and trained personnel to handle hazardous and non-hazardous liquids."
    },
    {
      icon: <Route className="h-10 w-10 p-2 text-blue-600" />,
      title: "Route Optimization",
      description: "Strategic planning to determine the most efficient and safest routes for liquid transportation."
    },
    {
      icon: <Thermometer className="h-10 w-10 p-2 text-blue-600" />,
      title: "Temperature Control",
      description: "Advanced monitoring systems to maintain required temperatures for sensitive liquid products."
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
              src="/lovable-uploads/liquid.jpg" 
              alt="Liquid Transportation Services" 
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
                Liquid Transportation
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Specialized Solutions for Safe and Efficient Liquid Cargo Movement
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
                  Transporting liquids demands specialized expertise, and we provide comprehensive solutions ensuring 
                  the safe and efficient delivery of your valuable cargo. Understanding the unique challenges of liquid 
                  transport, whether chemicals, food-grade products, or other bulk liquids, we utilize a specialized 
                  fleet and equipment, including ISO tanks, flexitanks, and specialized tankers, managed by a team 
                  trained in strict safety protocols.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We offer end-to-end logistics, encompassing pre-shipment planning, route optimization, regulatory 
                  compliance, temperature-controlled transportation for sensitive liquids, secure loading/unloading, 
                  and real-time tracking. Our commitment to safety and reliability guarantees your liquid cargo arrives 
                  in perfect condition and on time, making us a trusted partner for both domestic and international 
                  liquid transportation needs.
                </p>
              </motion.div>
              
              <div className="my-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Our Liquid Transportation Capabilities
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="bg-blue-100 rounded-full mr-4">
                          {capability.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{capability.title}</h3>
                          <p className="text-gray-600">{capability.description}</p>
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
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-sm mb-12"
              >
                <div className="flex items-center mb-6">
                  <Droplets className="h-10 w-10 mr-4" />
                  <h3 className="text-xl font-bold">Types of Liquids We Transport</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Industrial Liquids</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/90">
                      <li>Chemicals and solvents</li>
                      <li>Lubricants and oils</li>
                      <li>Paints and coatings</li>
                      <li>Industrial raw materials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Food & Beverage</h4>
                    <ul className="list-disc pl-5 space-y-1 text-white/90">
                      <li>Edible oils</li>
                      <li>Juices and concentrates</li>
                      <li>Dairy products</li>
                      <li>Wine and spirits</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-blue-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ready to Transport Your Liquid Cargo?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact our liquid transportation specialists today to discuss your specific requirements and discover 
                  how our specialized solutions can meet your needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/quote">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
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

export default LiquidTransportation;
