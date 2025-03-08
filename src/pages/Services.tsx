
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Ship, FileCheck, Flask } from "lucide-react";
import { useEffect } from "react";

const ServiceCard = ({ icon, title, description, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link to={link} className="block h-full">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-50 rounded-full mr-4">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
          <div className="flex items-center text-blue-600 font-medium group">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Plane className="h-6 w-6 text-blue-600" />,
      title: "Air Freight",
      description: "Tailored Air Freight Solutions to Meet Your Unique Requirements. We offer flexible air freight solutions for time-sensitive documents or large-scale cargo.",
      link: "/services/air-freight"
    },
    {
      icon: <Ship className="h-6 w-6 text-blue-600" />,
      title: "Ocean Freight",
      description: "Comprehensive ocean freight services including FCL and LCL services with global coverage and competitive rates.",
      link: "/services/ocean-freight"
    },
    {
      icon: <FileCheck className="h-6 w-6 text-blue-600" />,
      title: "Customs Clearance",
      description: "Expert customs clearance services ensuring your shipments move smoothly across borders with accurate documentation and regulatory compliance.",
      link: "/services/customs-clearance"
    },
    {
      icon: <Flask className="h-6 w-6 text-blue-600" />,
      title: "Liquid Transportation",
      description: "Specialized solutions for transporting liquids safely and efficiently, utilizing ISO tanks, flexitanks, and specialized tankers managed by expert teams.",
      link: "/services/liquid-transportation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-blue-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity:-1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Logistics Services</h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                Discover our comprehensive range of logistics solutions designed to meet your shipping needs.
                We offer tailored services to ensure your cargo reaches its destination safely and efficiently.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-blue-700 rounded-md font-semibold hover:bg-blue-50 transition-colors"
                  >
                    Contact Us
                  </motion.button>
                </Link>
                <Link to="/quote">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-500 border border-white/20 transition-colors"
                  >
                    Get a Quote
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Our Core Services
              </h2>
              <p className="text-gray-600">
                Explore our range of specialized logistics services designed to meet your specific shipping needs.
                Click on any service to learn more about our capabilities and how we can support your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  index={index}
                />
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
