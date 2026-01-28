import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();
  const isBangladesh = location.pathname.startsWith("/bangladesh");
  const isPakistan = location.pathname.startsWith("/pakistan");
  const isUK = location.pathname.startsWith("/uk");

  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Navigation links: switch to Bangladesh routes on Bangladesh pages
  const navigationLinks = isPakistan
    ? [
        { name: "Home", path: "/pakistan" },
        { name: "About", path: "/pakistan/about" },
        { name: "Services", path: "/pakistan/services" },
        { name: "Careers", path: "/pakistan/careers" },
        { name: "Global Presence", path: "/pakistan/global-presence" },
        { name: "Contact Us", path: "/pakistan/contact" },
      ]
    : isUK
    ? [
        { name: "Home", path: "/uk" },
        { name: "About", path: "/uk/about" },
        { name: "Services", path: "/uk/services" },
        { name: "Careers", path: "/uk/careers" },
        { name: "Global Presence", path: "/uk/global-presence" },
        { name: "Contact Us", path: "/uk/contact" },
      ]
    : isBangladesh
    ? [
        { name: "Home", path: "/bangladesh" },
        { name: "About", path: "/bangladesh/about" },
        { name: "Services", path: "/bangladesh/services" },
        { name: "Global Presence", path: "/bangladesh/global-presence" },
        { name: "Contact Us", path: "/bangladesh/contact" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms And Conditions", path: "/terms-and-conditions" },
      ];

  // Contact details: Singapore default, Bangladesh for /bangladesh/*
  const singaporeContact = {
    title: "GGL (Singapore) Pte Ltd.",
    address: `Blk 511 Kampong Bahru Road
#03-01 Keppel Distripark
Singapore - 099447`,
    phone: "+65 69080838",
    email: "june@ggl.sg",
  };

  // Replace address/phone/email with exact Bangladesh details when you have them
  const bangladeshContact = {
    title: "GGL (Bangladesh) Ltd.",
    address:
      "ID #9-N (New), 9-M(Old-N), 9th floor, Tower 1, Police Plaza Concord No.2, Road # 144, Gulshan Model Town, Dhaka 1215, Bangladesh",
    email: "info.bd@ggl.sg",
  };

  const karachiContact = {
    title: "GGL (Pakistan) - Karachi",
    address:
      "Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal, Block 6, PECHS, Karachi, Pakistan",
    phone: "+92-300-8282511 / +92-21-34302281-5",
    email: "khalid.pk@globalconsol.com",
  };

  const lahoreContact = {
    title: "GGL (Pakistan) - Lahore",
    address:
      "Office # 301, 3rd Floor, Gulberg Arcade Main Market, Gulberg 2, Lahore, Pakistan",
    phone: "+92 42-35782306/07/08",
    email: "shazia.pklhe@globalconsol.com",
  };

  const ukContact = {
    title: "GGL (UK) Ltd.",
    address: "167-169 Great Portland Street 5th Floor, London W1W 5PF, United Kingdom",
    phone: "+44 (0) 203 393 9508",
  };

  const contact = isBangladesh ? bangladeshContact : isUK ? ukContact : singaporeContact;

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        {/* Decorative Line */}
        <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-full mb-8" />

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1: Logo & About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            className="flex flex-col items-start"
          >
            <div className="mb-4">
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
            <p className="text-sm md:text-base text-gray-600 max-w-xs text-left">
              At GGL, we are proud to be one of Singapore&apos;s leading
              logistics companies. We offer specialized divisions in
              warehousing, forwarding (air and ocean), and transportation. Our
              mission is to deliver comprehensive end-to-end solutions in global
              freight forwarding, managed through a trusted network of partners
              who excel in all logistics segments.
            </p>
            <div className="flex space-x-3 mt-4">
              <motion.a
                href="https://www.facebook.com/gglusa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-gold transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/gglus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-gold transition"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start md:items-end lg:items-start lg:pl-10"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {navigationLinks.map((link, index) => (
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

          {/* Column 3: Contact Info (switches for Bangladesh) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={footerAnimation}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-start md:items-end lg:items-start lg:pl-10"
          >
            <h3 className="font-bold text-lg text-brand-navy mb-4">
              Contact Us
            </h3>
            {isPakistan ? (
              <div className="space-y-6">
                {/* Karachi Office */}
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={18}
                      className="text-brand-gold mt-1 flex-shrink-0"
                    />
                    <p className="whitespace-pre-line">
                      {karachiContact.title}
                      {"\n"}
                      {karachiContact.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone
                      size={18}
                      className="text-brand-gold flex-shrink-0"
                    />
                    <p>{karachiContact.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail
                      size={18}
                      className="text-brand-gold flex-shrink-0"
                    />
                    <a href={`mailto:${karachiContact.email}`} className="hover:text-brand-gold transition-colors">{karachiContact.email}</a>
                  </div>
                </div>
                {/* Lahore Office */}
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={18}
                      className="text-brand-gold mt-1 flex-shrink-0"
                    />
                    <p className="whitespace-pre-line">
                      {lahoreContact.title}
                      {"\n"}
                      {lahoreContact.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone
                      size={18}
                      className="text-brand-gold flex-shrink-0"
                    />
                    <p>{lahoreContact.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail
                      size={18}
                      className="text-brand-gold flex-shrink-0"
                    />
                    <a href={`mailto:${lahoreContact.email}`} className="hover:text-brand-gold transition-colors">{lahoreContact.email}</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                  <p className="whitespace-pre-line">
                    {contact.title}
                    {"\n"}
                    {contact.address}
                  </p>
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-brand-gold flex-shrink-0" />
                    <p>{contact.phone}</p>
                  </div>
                )}
                {contact.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-gold flex-shrink-0" />
                    <a href={`mailto:${contact.email}`} className="hover:text-brand-gold transition-colors">{contact.email}</a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 mt-10 text-sm">
          &copy; {new Date().getFullYear()} GGL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
