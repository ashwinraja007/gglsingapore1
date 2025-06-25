import React, { useState, useEffect } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Phone, Mail, MapPin, Send, XCircle } from 'lucide-react';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Check if redirected from FormSubmit
    const url = new URL(window.location.href);
    if (url.searchParams.get('submitted') === 'true') {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 transition-all">
          <Send size={18} />
          Message sent successfully!
          <button onClick={() => setShowNotification(false)} className="ml-2">
            <XCircle size={18} />
          </button>
        </div>
      )}

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[40vh] flex items-center justify-center bg-blue-600 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-navy/90" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center px-4 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
              We're here to help and answer any questions you might have.
            </p>
          </motion.div>
        </motion.section>

        {/* Contact Info & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Singapore Office</h3>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <Phone className="mt-1 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+65 69080838</p>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 group">
                      <MapPin className="mt-1 text-blue-600 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">
                          GGL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t">
                    <p className="font-medium mb-4">Connect With Us</p>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://www.linkedin.com/company/gglus/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaLinkedin size={18} />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/gglusa"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        <FaFacebookF size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FormSubmit Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>
                <form
                  action="https://formsubmit.co/ajax/karthikjungleemara@gmail.com"
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="box" />
                  <input type="hidden" name="_subject" value="New Contact Submission!" />
                  <input type="hidden" name="_next" value="https://yourdomain.com/contact?submitted=true" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" name="First Name" required />
                    <Input placeholder="Last Name" name="Last Name" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Email" type="email" name="Email" required />
                    <Input placeholder="Phone" name="Phone" />
                  </div>

                  <Input placeholder="Organization/Company" name="Organization" />
                  <Textarea placeholder="Your Message" name="Message" required />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full text-white py-6 flex items-center justify-center gap-2 bg-brand-navy"
                    >
                      Send Message
                      <Send size={18} />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <MapPin className="text-blue-600" />
                Our Location
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                Visit us at our Singapore office location
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
              <div className="h-[500px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1GorHPvFj8yMbcANzh1a6NzHSIj-fDHs&ehbc=2E312F"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GGL Singapore Office Location"
                />
                <div className="absolute top-0 left-0 right-0 h-14 bg-white z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-14 bg-white z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
