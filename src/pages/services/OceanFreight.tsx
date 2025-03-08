
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Ship, Box, BoxesIcon, Package, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect } from "react";

const OceanFreight = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/ocean.jpg" 
              alt="Ocean Freight Services" 
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
                Ocean Freight Services
              </h1>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl mb-8">
                Connecting You Globally with Comprehensive Ocean Freight Solutions
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
                  We provide comprehensive ocean freight services designed to meet your diverse shipping needs. 
                  Leveraging our extensive global network and offering competitive rates, we ensure your cargo 
                  moves efficiently and reliably.
                </p>
              </motion.div>
              
              <Tabs defaultValue="lcl" className="mt-8 mb-12">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="lcl" className="text-base">LCL Shipping</TabsTrigger>
                  <TabsTrigger value="fcl" className="text-base">FCL Shipping</TabsTrigger>
                </TabsList>
                
                <TabsContent value="lcl" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6"
                  >
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Less than Container Load (LCL) Shipping</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      For shipments that don't require a full container, our LCL service offers a flexible and cost-effective 
                      solution. We consolidate your goods with other shipments, allowing you to ship smaller volumes without 
                      the expense of a dedicated container.
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      Our LCL service connects you to destinations worldwide through our robust network. We manage every 
                      aspect of your LCL shipment, from detailed documentation and seamless customs clearance to reliable 
                      tracking, ensuring a smooth and efficient shipping experience.
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mt-6 mb-3">LCL Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Cost-effective for smaller shipments</li>
                      <li>Flexibility in shipping volumes</li>
                      <li>Regular scheduled departures</li>
                      <li>Worldwide destination coverage</li>
                      <li>Full visibility and tracking</li>
                    </ul>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="fcl" className="mt-6">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6"
                  >
                    <div className="flex items-start mb-4">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <BoxesIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Full Container Load (FCL) Shipping</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      When your cargo volume requires a dedicated container, our FCL service provides a direct and efficient 
                      shipping solution. We offer a wide range of container types to accommodate various cargo sizes and 
                      specialized requirements.
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      Our team expertly manages all facets of your FCL shipment, including booking, documentation, customs 
                      clearance, and precise tracking, ensuring your cargo arrives on time. Benefit from our competitive 
                      rates for full container shipments, making your logistics cost-effective.
                    </p>
                    
                    <h4 className="font-semibold text-gray-800 mt-6 mb-3">FCL Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Exclusive use of container space</li>
                      <li>Reduced handling and risk of damage</li>
                      <li>Faster transit times</li>
                      <li>Direct shipping from origin to destination</li>
                      <li>Suitable for high-volume and high-value shipments</li>
                      <li>Various container types available (20', 40', 40'HC, Reefer, etc.)</li>
                    </ul>
                  </motion.div>
                </TabsContent>
              </Tabs>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
              >
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-blue-600" />
                    Global Coverage
                  </h3>
                  <p className="text-gray-700">
                    Our extensive network connects major ports worldwide, offering regular sailings to all key global destinations.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <Ship className="mr-2 h-5 w-5 text-blue-600" />
                    Specialized Equipment
                  </h3>
                  <p className="text-gray-700">
                    Access to a wide range of specialized containers including refrigerated, flat rack, open top, and high cube options.
                  </p>
                </div>
              </motion.div>
              
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
                  Contact our ocean freight specialists today to discuss your shipping requirements and discover 
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

export default OceanFreight;
