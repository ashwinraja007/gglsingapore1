import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Section with Motion */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full rounded-lg overflow-hidden shadow-lg"
          >
            <img 
              src="/lovable-uploads/b91d7108-4472-4301-a481-16d521230362.jpg" 
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
              About <span className="text-blue-600">GGL</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              GGL is a proud subsidiary of <strong>1 Global Enterprises</strong>, a dynamic investment 
              company with a diverse portfolio in freight forwarding, supply chain management, and 
              logistics technology. As part of this global network, GGL benefits from strategic investments 
              across multiple brands specializing in transportation, warehousing, and supply chain solutions.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg" className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition">
                Learn More
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
