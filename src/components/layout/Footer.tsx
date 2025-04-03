import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Decorative Line */}
        <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-full mb-8"></div>

        {/* Grid Layout: Logo (Left) | Navigation & Contact (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo (Left-Aligned) */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={footerAnimation} 
            className="flex flex-col items-start w-full md:w-1/3"
          >
            <div className="mb-5">
              <img 
                src="/lovable-uploads/GGL.png" 
                alt="GGL Logo" 
                className="h-14 w-auto object-contain"
                loading="lazy" 
              />
              <img 
                src="/1GlobalEnterprises.png" 
                alt="1 Global Enterprises Logo" 
                className="h-10 w-auto object-contain mt-2" 
              />
            </div>
            <p className="text-sm md:text-base text-gray-600 max-w-xs">
              GGL is a global freight forwarder offering premium logistics services, backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
            <div className="flex space-x-3 mt-4">
              <motion.a 
                href="https://www.facebook.com/gglusa" 
                target="_blank" 
                className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-gold transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/gglus/" 
                target="_blank" 
                className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-gold transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section: Navigation & Contact Us (Side-by-Side) */}
          <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-between">
            {/* Navigation */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={footerAnimation} 
              transition={{ delay: 0.2 }}
              className="flex flex-col items-start"
            >
              <h3 className="font-bold text-lg text-brand-navy mb-5">Navigation</h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "About", path: "/about" },
                  { name: "Services", path: "/services" },
                  { name: "Contact us", path: "/contact" },
                ].map((link, index) => (
                  <Link 
                    key={index} 
                    to={link.path} 
                    className="text-gray-600 hover:text-brand-gold transition flex items-center gap-2"
                  >
                    <ArrowRight size={14} className="text-brand-gold" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={footerAnimation} 
              transition={{ delay: 0.4 }}
              className="flex flex-col items-start"
            >
              <h3 className="font-bold text-lg text-brand-navy mb-5">Contact Us</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-gold mt-1" />
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
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10 text-sm">
          &copy; {new Date().getFullYear()} GGL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
