import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="relative mb-8">
          <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-full mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerAnimation} className="flex flex-col">
            <div className="mb-5">
              <div className="flex flex-col space-y-2">
                <img src="/lovable-uploads/GGL.png" alt="GGL Logo" className="h-14 w-auto" loading="lazy" />
                <img src="/1GlobalEnterprises.png" alt="1 Global Enterprises Logo" className="h-8 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm md:text-base mb-6 text-gray-600">
              GGL is a global freight forwarder offering premium logistics services, backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
            <div className="flex space-x-3 mt-2">
              <motion.a href="https://www.facebook.com/gglusa" target="_blank" className="bg-brand-navy text-white p-2 rounded-full transition-colors duration-300 hover:bg-brand-gold hover:text-brand-navy" whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Facebook size={18} />
              </motion.a>
              <motion.a href="https://www.linkedin.com/company/gglus/" target="_blank" className="bg-brand-navy text-white p-2 rounded-full transition-colors duration-300 hover:bg-brand-gold hover:text-brand-navy" whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerAnimation} transition={{ delay: 0.2 }}>
            <h3 className="font-bold mb-5 text-lg text-brand-navy">Navigation</h3>
            <div className="flex flex-col gap-3 mt-6">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Services", path: "/services" }, { name: "Contact us", path: "/contact" }].map((link, index) => (
                <Link key={index} to={link.path} className="text-gray-600 hover:text-brand-gold transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-brand-gold group-hover:translate-x-1 transition-transform duration-300" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerAnimation} transition={{ delay: 0.6 }}>
            <h3 className="font-bold text-brand-navy mb-5 text-lg">Contact Us</h3>
            <div className="space-y-4 mt-6 text-gray-600">
              <div className="flex items-start gap-3 mb-3">
                <MapPin size={18} className="text-brand-gold mt-1" />
                <p>Suite 5, 7-9 Mallet Road,<br />Tullamarine, Victoria, 3043</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Phone size={18} className="text-brand-gold" />
                <p>+61 432254969</p>
              </div>
              <div className="flex items-center gap-3 mb-3">
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
      </div>
    </footer>
  );
};
