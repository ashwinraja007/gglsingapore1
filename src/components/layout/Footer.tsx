import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FacebookLogo from "/icons/facebook.svg";
import LinkedinLogo from "/icons/linkedin.svg";

export const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100 text-gray-700">
      <div className="container mx-auto px-4">
        {/* Top Gradient Border */}
        <div className="relative mb-8">
          <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-full"></div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo Section */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            className="flex flex-col items-start">
            <div className="mb-5">
              <img src="/lovable-uploads/GGL.png" alt="GGL Logo" className="h-14 w-auto" loading="lazy" />
              <img src="/1GlobalEnterprises.png" alt="1 Global Enterprises Logo" className="h-8 w-auto object-contain mt-2" />
            </div>
            <p className="text-sm md:text-base mb-6 text-gray-600">
              GGL is a global freight forwarder offering premium logistics services, 
              backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
            <div className="flex space-x-3 mt-2">
              <motion.a 
                href="https://www.facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-navy text-white p-2 rounded-full transition hover:bg-brand-gold hover:text-brand-navy"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <img src={FacebookLogo} alt="Facebook" className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/yourpage" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-brand-navy text-white p-2 rounded-full transition hover:bg-brand-gold hover:text-brand-navy"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                <img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Navigation */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerAnimation} transition={{ delay: 0.2 }}>
            <h3 className="font-bold text-lg text-brand-navy mb-5 relative">Navigation</h3>
            <div className="flex flex-col gap-3">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Services", path: "/services" }, { name: "Contact us", path: "/contact" }].map((link, index) => (
                <Link key={index} to={link.path} className="flex items-center gap-2 text-gray-600 hover:text-brand-gold transition">
                  <ArrowRight size={14} className="text-brand-gold" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Section */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerAnimation} transition={{ delay: 0.4 }}>
            <h3 className="font-bold text-lg text-brand-navy mb-5">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-gold" />
                <p>Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold" />
                <p>+61 432254969</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold" />
                <p>+61 388205157</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-gold" />
                <p>info@gglaustralia.com</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-300 pt-6">
          <p>© {currentYear} GGL • All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
