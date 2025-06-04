import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plane, ArrowRight, Truck, Package, Anchor, Warehouse } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Service Card Component
const EnhancedServiceCard = ({
  image,
  title,
  description,
  icon,
  link,
}: {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}) => {
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight": return "/planeh2.png";
      case "Ocean Freight": return "/ships.png";
      case "Transportation And Distribution": return "/truck.png";
      case "Warehousing": return "/warehouses.png";
      default: return image;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="group relative max-w-xs w-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100 flex flex-col"
    >
      <Link to={link} className="flex flex-col h-full" onClick={() => window.scrollTo(0, 0)}>
        <AspectRatio ratio={16 / 9}>
          <img
            src={getServiceImage()}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>

        <div className="flex flex-col justify-between flex-grow p-3 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-brand-navy bg-[#f6b100]">
                {icon && React.cloneElement(icon, { size: 14 })}
              </div>
              <h3 className="text-sm font-semibold text-brand-navy">{title}</h3>
            </div>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
          <div className="inline-flex items-center text-brand-gold font-medium text-xs group mt-2">
            Learn More
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            >
              <ArrowRight size={12} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

// Services Section
export const Services = () => {
  const services = [
    {
      image: "/lovable-uploads/oceanfrieght.jpg",
      title: "Ocean Freight",
      description:
        "GGL's ocean freight team specializes in complete freight services for LCL & FCL loads with global partner network.",
      icon: <Anchor />,
      link: "/services/ocean-freight",
    },
    {
      image: "/planeh2.png",
      title: "Air Freight",
      description:
        "We provide air freight import/export & express services on a convenient door-to-door basis at competitive rates.",
      icon: <Plane />,
      link: "/services/air-freight",
    },
    {
      image: "/transpoth.png",
      title: "Transportation And Distribution",
      description:
        "Our dedicated fleet ensures timely deliveries and efficient operations with high productivity and reliability.",
      icon: <Truck />,
      link: "/services/transportation",
    },
    {
      image: "/lovable-uploads/warehouse.jpg",
      title: "Warehousing",
      description:
        "GGL delivers complete warehousing solutions across supply chains from manufacturers to resellers and distributors.",
      icon: <Warehouse />,
      link: "/services/warehousing",
    },
    {
      image: "/lcl.png",
      title: "LCL Consolidation",
      description:
        "We offer LCL consolidation services worldwide with strong support, competitive prices, and strategic locations.",
      icon: <Warehouse />,
      link: "/services/lcl-consolidation",
    },
    {
      image: "/projectcargo.png",
      title: "Project Cargo",
      description:
        "Project cargo for transporting heavy, high-value equipment for infrastructure and construction projects.",
      icon: <Package />,
      link: "/services/lcl-consolidation",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="py-10 bg-gradient-to-b from-white to-brand-lightGray"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">Our Core Services</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Discover our comprehensive range of logistics solutions designed to meet your global shipping needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <EnhancedServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
            <Button
              variant="navy"
              className="group transition-all duration-300 text-sm flex items-center gap-2 navy-glow"
            >
              Explore All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
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
