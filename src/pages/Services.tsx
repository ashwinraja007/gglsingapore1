
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plane, Ship, Truck, Warehouse, Package, Globe, Clock, Shield, CheckCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Scroll to Top on Route Change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);
  return null;
};

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Ship className="w-6 h-6" />,
      title: "Ocean Freight",
      image: "/ships2.png",
      description: "Comprehensive freight management services for LCL and FCL shipments with global partner network ensuring efficient door-to-door delivery.",
      features: ["LCL & FCL Services", "Global Partner Network", "Customs Clearance", "Real-time Tracking"],
      fullDescription: "At GGL, our dedicated Ocean Freight Department specializes in comprehensive freight management services for both Less-than-Container Load (LCL) and Full Container Load (FCL) shipments. Leveraging a well-established, reliable global partner network, we ensure efficient coordination of every step—from collection at the shipper's door, through secure storage and customs brokerage, to timely delivery at the consignee's door.",
      link: "/services/ocean-freight"
    },
    {
      id: 2,
      icon: <Truck className="w-6 h-6" />,
      title: "Transportation And Distribution",
      image: "/trucks.png",
      description: "Dedicated fleet ensuring timely domestic distribution with advanced route planning and real-time tracking technologies.",
      features: ["Dedicated Fleet", "Route Optimization", "Real-time Tracking", "Last-mile Delivery"],
      fullDescription: "GGL proudly operates a dedicated fleet of vehicles designed to guarantee timely and efficient domestic distribution and delivery services. Our modern and well-maintained fleet, combined with advanced route planning and real-time tracking technologies, ensures that your shipments reach their destinations promptly and securely.",
      link: "/services/transportation"
    },
    {
      id: 3,
      icon: <Warehouse className="w-6 h-6" />,
      title: "Warehousing",
      image: "/warehouse2.png",
      description: "Leading supply chain solutions with advanced WMS, providing complete visibility and real-time inventory control.",
      features: ["Advanced WMS", "Pick & Pack", "Inventory Management", "Value-Added Services"],
      fullDescription: "GGL is a leading supply chain solutions provider in Singapore, offering end-to-end logistics services tailored to a wide range of industries. We manage the full flow of goods—from suppliers to manufacturers, from manufacturers to resellers and consumers, and from consumers back to OEMs.",
      link: "/services/warehousing"
    },
    {
      id: 4,
      icon: <Plane className="w-6 h-6" />,
      title: "Air Freight",
      image: "/cargoplane3.png",
      description: "Comprehensive air freight solutions for time-sensitive shipments with door-to-door services across global trade lanes.",
      features: ["Time-Definite Delivery", "Express Services", "Specialized Handling", "Global Coverage"],
      fullDescription: "At GGL, we offer a comprehensive range of air freight solutions tailored to meet your time-sensitive and high-priority shipping needs. Our expert air freight teams handle air import, export, and express shipments with precision, offering seamless door-to-door services across global trade lanes.",
      link: "/services/air-freight"
    },
    {
      id: 5,
      icon: <Package className="w-6 h-6" />,
      title: "LCL Consolidation",
      image: "/lcl.png",
      description: "Leading LCL consolidator with global presence, offering reliable groupage services across key trade lanes worldwide.",
      features: ["Global Coverage", "Strategic Hubs", "Weekly Sailings", "Competitive Rates"],
      fullDescription: "GGL is a leading LCL consolidator with a strong global footprint, offering reliable groupage services across key trade lanes—including North America, the UK, the Middle East, the Indian Subcontinent, Southeast Asia, and the Far East.",
      link: "/services/lcl-consolidation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-grow pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-navy via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="Services" 
              className="w-full h-full object-cover opacity-20" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-blue-800/85 to-indigo-900/90"></div>
          </div>
          
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Comprehensive Logistics 
                <span className="text-brand-gold block mt-2">Solutions</span>
              </h1>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
                From air and ocean freight to specialized transportation and warehousing, 
                we deliver end-to-end logistics excellence across global trade lanes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="text-lg px-8 py-3">
                    Get a Quote
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-brand-navy">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Our Core Services
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive range of logistics solutions designed to streamline 
                your supply chain and drive business growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white overflow-hidden">
                    <div className="relative overflow-hidden">
                      <AspectRatio ratio={16 / 10}>
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-brand-gold text-brand-navy p-3 rounded-full mb-3">
                            {service.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        </div>
                      </AspectRatio>
                    </div>
                    
                    <CardContent className="p-6 flex-grow">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-brand-gold mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={service.link} className="block">
                        <Button 
                          variant="outline" 
                          className="w-full border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-all duration-300"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
                Why Choose GGL?
              </h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine industry expertise, cutting-edge technology, and personalized service 
                to deliver exceptional logistics solutions that drive your business forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-brand-gold" />,
                  title: "Global Network",
                  description: "Extensive worldwide partnerships ensuring seamless connectivity across all major trade lanes and destinations."
                },
                {
                  icon: <Shield className="w-8 h-8 text-brand-gold" />,
                  title: "Reliability & Trust",
                  description: "Proven track record of dependable service delivery with transparent communication and real-time visibility."
                },
                {
                  icon: <Clock className="w-8 h-8 text-brand-gold" />,
                  title: "Time-Critical Solutions",
                  description: "Specialized handling for urgent shipments with flexible delivery options to meet critical timelines."
                },
                {
                  icon: <Package className="w-8 h-8 text-brand-gold" />,
                  title: "Customized Approach",
                  description: "Tailored logistics strategies designed to meet your specific business requirements and operational needs."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-brand-gold" />,
                  title: "Quality Assurance",
                  description: "Rigorous quality control processes ensuring cargo safety and secure handling throughout the supply chain."
                },
                {
                  icon: <Truck className="w-8 h-8 text-brand-gold" />,
                  title: "End-to-End Service",
                  description: "Complete logistics solutions from origin to destination with integrated customs clearance and documentation."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow border-l-4 border-brand-gold">
                    <CardHeader className="pb-4">
                      <div className="bg-blue-50 p-4 rounded-full inline-block mx-auto mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-brand-navy">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-brand-navy to-blue-700">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Logistics?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Partner with GGL for world-class logistics solutions that drive efficiency, 
                reduce costs, and accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="lg" className="text-lg px-8 py-3">
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/global-presence">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-brand-navy">
                    View Global Network
                  </Button>
                </Link>
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
