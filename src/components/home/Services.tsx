import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Package, Anchor, Warehouse } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EnhancedServiceCard = ({
  image,
  title,
  description,
  icon,
  link
}: {
  image: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}) => {
  const getServiceImage = () => {
    switch (title) {
      case "Air Freight":
        return "/planeh2.png";
      case "Ocean Freight":
        return "/ships.png";
      case "Transportation And Distribution":
        return "/transpoth.png";
      case "Warehousing":
        return "/warehouses.png";
      default:
        return image;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col"
    >
      <Link to={link} className="flex flex-col h-full" onClick={() => window.scrollTo(0, 0)}>
        <div className="overflow-hidden">
          <AspectRatio ratio={3 / 2}>
            <img
              src={getServiceImage()}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </AspectRatio>
        </div>

        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-brand-navy bg-[#f6b100]">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          <div className="inline-flex items-center text-brand-gold font-medium text-sm group mt-4">
            Learn More
            <motion.span
              className="ml-1"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Services = () => {
  const services = [
    {
      image: "/lovable-uploads/oceanfrieght.jpg",
      title: "Ocean Freight",
      description:
        "GGL's dedicated ocean freight department specialize in the complete range freight management services for LCL and FCL loads, supported thru a well established and reliable partner network around the world, for efficient collection, storage & delivery from shippers door to door.",
      icon: <Anchor size={20} />,
      link: "/services/ocean-freight"
    },
    {
      image: "/planeh2.png",
      title: "Air Freight",
      description:
        "At GGL, we provide a comprehensive range of air freight services designed to meet all your shipping needs. Our expert air freight teams offer seamless air import, export, and express options, all on a convenient door-to-door basis. GGL stands out with competitive rates.",
      icon: <Package size={20} />,
      link: "/services/air-freight"
    },
    {
      image: "/transpoth.png",
      title: "Transportation And Distribution",
      description:
        "GGL boasts a dedicated fleet of vehicles to ensure timely domestic distribution and deliveries. Our efficient operational infrastructure provides our clients with high productivity, frequent services, and fast, reliable distribution operations. GGL is committed to delivering excellence.",
      icon: <Truck size={20} />,
      link: "/services/transportation"
    },
    {
      image: "/lovable-uploads/warehouse.jpg",
      title: "Warehousing",
      description:
        "GGL is a premier supply chain solutions provider in Singapore, addressing the full spectrum of logistics needs for our clients. We facilitate the movement of goods from suppliers to manufacturers (for parts and components), from manufacturers and brand owners to resellers and distributors.",
      icon: <Warehouse size={20} />,
      link: "/services/warehousing"
    },
    {
      image: "/lcl.png",
      title: "LCL Consolidation",
      description:
        "GGL is a LCL Consolidator with global presence covering North America, UK, Middle East, Indian Sub Continent, South East Asia and Far East. Our LCL Groupage services is backed by very efficient customer support at competitive prices.The GGL Group is strategically located in the cargo transhipment hubs to all major destinations worldwide",
      icon: <Warehouse size={20} />,
      link: "/services/warehousing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
      <div className="container mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-3">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Discover our comprehensive range of logistics solutions designed to meet your global shipping needs.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full flex"
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
            <Button variant="navy" className="group transition-all duration-300 text-sm flex items-center gap-2 navy-glow">
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
