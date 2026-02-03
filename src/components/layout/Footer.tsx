import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useCountryNavigation } from "@/hooks/useCountryNavigation";

export const Footer = () => {
  const { isBangladesh, isPakistan, isUK, isMalaysia, navPaths } =
    useCountryNavigation();

  const footerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const navigationLinks = [
    { name: "Home", path: navPaths.home },
    { name: "About", path: navPaths.about },
    { name: "Services", path: navPaths.services },
    { name: "Careers", path: navPaths.careers },
    { name: "Global Presence", path: navPaths.globalPresence },
    { name: "Contact Us", path: navPaths.contact },
  ];

  const singaporeContact = {
    title: "GGL (Singapore) Pte Ltd.",
    address: `Blk 511 Kampong Bahru Road
#03-01 Keppel Distripark
Singapore - 099447`,
    phone: "+65 69080838",
    email: "june@ggl.sg",
  };

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
    phone:
      "+92 21 34542881 / +92 21 34542882 / +92 21 34542883 / +92 21 34542884",
    email: "info.pk@ggl.sg",
  };

  const ukContact = {
    title: "GGL (UK) Ltd.",
    address:
      "167-169 Great Portland Street 5th Floor, London W1W 5PF, United Kingdom",
    phone: "+44(0)7305 856 612",
    email: "Sukant@ggl.sg",
  };

  const portKlangContact = {
    title: "GGL (Malaysia) - Port Klang",
    address:
      "MTBBT 2, 3A-5, Jalan Batu Nilam 16, The Landmark (Behind AEON Mall), Bandar Bukit Tinggi 2, 41200 Klang, Selangor D.E",
    phone: "+603 - 3319 2778 / 74 / 75",
    email: "jayesh@ggl.sg",
  };

  const pasirGudangContact = {
    title: "GGL (Malaysia) - Pasir Gudang",
    address:
      "Unit 20-03A, Level 20 Menara Zurich, 15 Jalan Dato Abdullah Tahir, 80300 Johor Bahru",
    phone: "603-3319 2778 / 74 / 75, 79",
    email: "jayesh@ggl.sg",
  };

  const contact = isBangladesh
    ? bangladeshContact
    : isUK
    ? ukContact
    : singaporeContact;

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="h-1 bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-4">
          {/* Column 1 */}
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
              >
                <Facebook size={18} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/company/gglus/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white p-2 rounded-full hover:bg-brand-gold transition"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 */}
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

          {/* Column 3 */}
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
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin size={18} className="text-brand-gold mt-1" />
                    <p className="whitespace-pre-line">
                      {karachiContact.title}
                      {"\n"}
                      {karachiContact.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-brand-gold" />
                    <p>{karachiContact.phone}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-gold" />
                    <a href={`mailto:${karachiContact.email}`}>
                      {karachiContact.email}
                    </a>
                  </div>
                </div>
              </div>
            ) : isMalaysia ? (
              <div className="space-y-6">
                {[portKlangContact, pasirGudangContact].map((office, i) => (
                  <div key={i} className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin size={18} className="text-brand-gold mt-1" />
                      <p className="whitespace-pre-line">
                        {office.title}
                        {"\n"}
                        {office.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={18} className="text-brand-gold" />
                      <p>{office.phone}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={18} className="text-brand-gold" />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-gold mt-1" />
                  <p className="whitespace-pre-line">
                    {contact.title}
                    {"\n"}
                    {contact.address}
                  </p>
                </div>

                {contact.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-brand-gold" />
                    <p>{contact.phone}</p>
                  </div>
                )}

                {contact.email && (
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-brand-gold" />
                    <a href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        <div className="text-center text-gray-600 mt-10 text-sm">
          &copy; {new Date().getFullYear()} GGL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
