
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Plane, Package, Clock, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AirFreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Clock className="h-10 w-10 p-2 text-blue-600" />,
      title: "Time-Critical Shipments",
      description: "Expedited air freight solutions for urgent deliveries with priority handling and fast transit times."
    },
    {
      icon: <Package className="h-10 w-10 p-2 text-blue-600" />,
      title: "Door-to-Door Service",
      description: "Complete logistics solution from pickup at origin to final delivery, including all documentation and customs clearance."
    },
    {
      icon: <Globe className="h-10 w-10 p-2 text-blue-600" />,
      title: "Global Network",
      description: "Extensive connections with airlines and handling agents worldwide ensuring comprehensive coverage."
    },
    {
      icon: <CheckCircle className="h-10 w-10 p-2 text-blue-600" />,
      title: "Quality Assurance",
      description: "Rigorous standards and practices to ensure your cargo is handled properly throughout its journey."
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
              src="/lovable-uploads/airfreight.jpg" 
              alt="Air Freight Services" 
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
                Air Freight Services
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Tailored Air Freight Solutions to Meet Your Unique Requirements
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
                  We understand that every shipment is different. That's why we offer flexible air freight 
                  solutions designed to meet your specific needs. Whether you're shipping time-sensitive 
                  documents or large-scale cargo, we have the expertise and resources to handle it efficiently.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our comprehensive services include air imports, exports, and express deliveries, all with 
                  the convenience of door-to-door service. We pride ourselves on our competitive pricing and 
                  our unwavering commitment to providing exceptional customer support. Let us optimize your 
                  air freight logistics and ensure your shipments reach their destinations seamlessly.
                </p>
              </motion.div>
              
              <div className="my-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Our Air Freight Advantages
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start mb-4">
                        <div className="bg-blue-100 rounded-full mr-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                          <p className="text-gray-600">{feature.description}</p>
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
                className="bg-blue-50 p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Ready to Ship with Us?
                </h3>
                <p className="text-gray-700 mb-6">
                  Contact our air freight specialists today to discuss your shipping requirements and discover 
                  how we can create a tailored solution for your business.
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

export default AirFreight;
