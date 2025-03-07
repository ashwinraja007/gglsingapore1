
import { motion } from 'framer-motion';

const GlobalPresence = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-heading mb-4">Our Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With operations spanning across continents, we deliver world-class logistics services globally
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full overflow-hidden rounded-2xl shadow-xl"
        >
          <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden group">
            <img 
              src="/lovable-uploads/globalpresence1.png" 
              alt="Global Map" 
              className="w-full h-full object-cover object-center rounded-lg transition-transform duration-[2000ms] group-hover:scale-105" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { count: "120+", label: "Countries Served" },
            { count: "15K+", label: "Shipments Per Month" },
            { count: "250+", label: "Strategic Partners" },
            { count: "50M+", label: "Tons Shipped Annually" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl shadow-md bg-white card-hover"
            >
              <h3 className="text-3xl md:text-4xl font-bold gradient-heading mb-2">{stat.count}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GlobalPresence;
