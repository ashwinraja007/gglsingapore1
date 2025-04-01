import { motion } from 'framer-motion';
import { MapPin, Globe, ExternalLink } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const GlobalPresence = () => {
  // Example presence locations
  const locations = [{
    id: 1,
    name: "Melbourne",
    position: {
      top: "75%",
      left: "85%"
    },
    country: "Australia"
  }, {
    id: 2,
    name: "Singapore",
    position: {
      top: "58%",
      left: "75%"
    },
    country: "Singapore"
  }, {
    id: 3,
    name: "Dubai",
    position: {
      top: "45%",
      left: "62%"
    },
    country: "UAE"
  }, {
    id: 4,
    name: "London",
    position: {
      top: "30%",
      left: "48%"
    },
    country: "UK"
  }, {
    id: 5,
    name: "New York",
    position: {
      top: "35%",
      left: "25%"
    },
    country: "USA"
  }, {
    id: 6,
    name: "Los Angeles",
    position: {
      top: "40%",
      left: "15%"
    },
    country: "USA"
  }, {
    id: 7,
    name: "Shanghai",
    position: {
      top: "40%",
      left: "80%"
    },
    country: "China"
  }, {
    id: 8,
    name: "Mumbai",
    position: {
      top: "50%",
      left: "68%"
    },
    country: "India"
  }, {
    id: 9,
    name: "Cape Town",
    position: {
      top: "75%",
      left: "52%"
    },
    country: "South Africa"
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const pinVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1
    }
  };

  return (
    <motion.section 
      initial="hidden" 
      whileInView="visible" 
      viewport={{once: true, amount: 0.2}} 
      variants={containerVariants} 
      className="py-16 bg-gradient-to-b from-brand-navy to-brand-navy/90 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }} 
            className="flex justify-center items-center gap-3 mb-2"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="h-8 w-8 text-brand-gold" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-50">Global Presence</h2>
          </motion.div>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-4"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Our logistics network spans across continents, enabling seamless global shipping solutions
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Key stats with improved design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { number: "25+", label: "Countries" },
              { number: "50+", label: "Global Partners" },
              { number: "1000+", label: "Successful Shipments" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 text-center border border-brand-gold/20 shadow-lg hover:shadow-gold-glow transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-brand-gold mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-navy font-semibold rounded-lg shadow-lg hover:shadow-gold-glow transition-all duration-300"
            >
              Explore Our Global Network <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GlobalPresence;
