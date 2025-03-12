import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
export const Footer = () => {
  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return <footer className="bg-brand-gray text-white pt-16 pb-8 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} className="flex flex-col items-start">
            <div className="mb-5 bg-white p-2 rounded-lg inline-block">
              <img src="/lovable-uploads/GGL.png" alt="GGL Logo" className="h-14 w-auto" loading="lazy" />
            </div>
            <p className="text-sm md:text-base mb-6 font-normal text-gray-950">
              GGL is a global freight forwarder offering premium logistics services, 
              backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-white/10 hover:bg-brand-green p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand-green p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand-green p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-brand-green p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.2
        }}>
            <h3 className="font-bold mb-5 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-green text-gray-950">Navigation</h3>
            <div className="flex flex-col gap-3 mt-6">
              <a href="/" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Home</span>
              </a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">About</span>
              </a>
              <a href="/services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Services</span>
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Contact us</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.4
        }}>
            <h3 className="font-bold text-white mb-5 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-green">Useful Links</h3>
            <div className="flex flex-col gap-3 mt-6">
              <a href="/customer-login" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-zinc-950">Customer Login</span>
              </a>
              <a href="/agent-login" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Agent Login</span>
              </a>
              <a href="/tracking" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Tracking</span>
              </a>
              <a href="/schedule" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Sailing Schedule</span>
              </a>
              <a href="/converters" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                <ArrowRight size={14} className="text-brand-green group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-gray-950">Converters</span>
              </a>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={footerAnimation} transition={{
          delay: 0.6
        }}>
            <h3 className="font-bold text-white mb-5 text-lg relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-1 after:bg-brand-green">Contact Us</h3>
            <div className="space-y-4 mt-6">
              <div className="text-gray-300">
                <div className="flex items-start gap-3 mb-3 bg-inherit">
                  <MapPin size={18} className="text-brand-green mt-1 flex-shrink-0 bg-gray-950" />
                  <p className="text-gray-950">Suite 5, 7-9 Mallet Road,<br />Tullamarine, Victoria, 3043</p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={18} className="text-brand-green flex-shrink-0 bg-gray-950" />
                  <p className="text-gray-950">+61 432254969</p>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone size={18} className="text-brand-green flex-shrink-0 bg-gray-950" />
                  <p className="text-gray-950">+61 388205157</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-green flex-shrink-0 bg-gray-950" />
                  <p className="text-gray-950">info@ggl.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* White background container for the 1 Global Enterprises logo */}
        <div className="mt-8 w-full bg-white py-4 px-5 rounded-md flex justify-center">
          <img src="/lovable-uploads/65180320-fa21-4a42-a9c9-2888c73ef7f8.png" alt="1 Global Enterprises, Singapore" className="h-8 w-auto object-contain" loading="lazy" />
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p className="text-gray-950">&copy; {new Date().getFullYear()} GGL. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};