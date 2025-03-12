
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const EnhancedServiceCard = ({ image, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-card-hover h-full border border-gray-100"
    >
      <div className="aspect-square overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/90 to-transparent p-4">
        <h3 className="text-base font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2">
          {description}
        </p>
      </div>
      <motion.div 
        className="absolute top-3 right-3 bg-brand-gold text-brand-navy w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ rotate: 90 }}
      >
        <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    { 
      image: "/lovable-uploads/airfreight.jpg", 
      title: "Air Freight",
      description: "Tailored Air Freight Solutions to Meet Your Unique Requirements. We offer flexible air freight solutions for time-sensitive documents or large-scale cargo." 
    },
    { 
      image: "/lovable-uploads/ocean.jpg", 
      title: "Ocean Freight (LCL & FCL)",
      description: "Connecting you globally with comprehensive ocean freight services. We offer both LCL for smaller shipments and FCL for dedicated container needs." 
    },
    { 
      image: "/lovable-uploads/cc.jpg", 
      title: "Customs Clearance",
      description: "Expert customs clearance services ensuring your shipments move smoothly across borders with accurate documentation and regulatory compliance." 
    },
    { 
      image: "/lovable-uploads/liquid.jpg", 
      title: "Liquid Transportation",
      description: "Specialized solutions for transporting liquids safely and efficiently, utilizing ISO tanks, flexitanks, and specialized tankers managed by expert teams." 
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-b from-white to-brand-lightGray"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Discover our comprehensive range of logistics solutions designed to meet your global shipping needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <EnhancedServiceCard 
                  image={service.image}
                  title={service.title}
                  description={service.description}
                />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link to="/services">
            <Button 
              variant="navy" 
              className="group transition-all duration-300 text-sm flex items-center gap-2"
            >
              Explore All Services
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
