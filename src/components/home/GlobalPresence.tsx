
import { motion } from 'framer-motion';
import { MapPin, Globe, ExternalLink } from 'lucide-react';

const GlobalPresence = () => {
  // Example presence locations
  const locations = [
    {
      id: 1,
      name: "Melbourne",
      position: { top: "75%", left: "85%" },
      country: "Australia"
    },
    {
      id: 2,
      name: "Singapore",
      position: { top: "58%", left: "75%" },
      country: "Singapore"
    },
    {
      id: 3,
      name: "Dubai",
      position: { top: "45%", left: "62%" },
      country: "UAE"
    },
    {
      id: 4,
      name: "London",
      position: { top: "30%", left: "48%" },
      country: "UK"
    },
    {
      id: 5,
      name: "New York",
      position: { top: "35%", left: "25%" },
      country: "USA"
    },
    {
      id: 6,
      name: "Los Angeles",
      position: { top: "40%", left: "15%" },
      country: "USA"
    },
    {
      id: 7,
      name: "Shanghai",
      position: { top: "40%", left: "80%" },
      country: "China"
    },
    {
      id: 8,
      name: "Mumbai",
      position: { top: "50%", left: "68%" },
      country: "India"
    },
    {
      id: 9,
      name: "Cape Town",
      position: { top: "75%", left: "52%" },
      country: "South Africa"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const pinVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
          {/* Map background with improved styling */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-brand-navy shadow-xl border border-brand-gold/20">
            <div className="absolute inset-0 bg-[url('/world-map.png')] bg-contain bg-center bg-no-repeat opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/10 to-brand-navy/70"></div>
            
            {/* Location pins with improved animations */}
            {locations.map(location => (
              <motion.div
                key={location.id}
                className="absolute"
                style={{ top: location.position.top, left: location.position.left }}
                variants={pinVariants}
                whileHover={{ scale: 1.2, y: -5 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    className="w-3 h-3 bg-brand-gold rounded-full shadow-lg shadow-brand-gold/30"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-3 min-w-max px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none border border-brand-gold/30">
                    {location.name}, {location.country}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Enhanced connection lines */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-30">
              <motion.path
                d="M170,140 C250,100 350,120 430,180 C510,240 600,200 680,150"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M250,170 C350,220 450,180 550,120"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 2, delay: 0.8 }}
              />
              <motion.path
                d="M150,180 C300,230 500,230 650,180"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 2, delay: 1.1 }}
              />
              <motion.path
                d="M200,250 C350,200 450,250 600,260"
                stroke="#D4AF37"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>

            {/* World map overlay with glow effect */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-[url('/lovable-uploads/globalpresence1.png')] bg-contain bg-center bg-no-repeat"
              ></motion.div>
            </div>
          </div>

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
