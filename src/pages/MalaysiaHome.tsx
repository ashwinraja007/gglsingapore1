import React, { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const malaysiaNavPaths = {
  home: "/malaysia",
  about: "/malaysia/about",
  services: "/malaysia/services",
  careers: "/malaysia/careers",
  contact: "/malaysia/contact",
  globalPresence: "/malaysia/global-presence",
};

const MalaysiaHome = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Header navPaths={malaysiaNavPaths} />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/gp.jpg" 
              alt="Malaysia Logistics" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Connecting Malaysia <br/> to the World
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
                Your trusted partner for integrated logistics solutions in Port Klang and Pasir Gudang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/malaysia/services">
                  <Button size="lg" className="bg-brand-gold hover:bg-amber-600 text-brand-navy font-bold min-w-[160px]">
                    Our Services
                  </Button>
                </Link>
                <Link to="/malaysia/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy font-bold min-w-[160px]">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                  Logistics Excellence in Malaysia
                </h2>
                <div className="w-20 h-1 bg-brand-gold mb-6"></div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  GGL Malaysia extends our world-class logistics services to the heart of Southeast Asia. 
                  With strategic offices in Port Klang and Pasir Gudang, we are perfectly positioned to handle 
                  your import and export requirements with efficiency and reliability.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  We specialize in connecting Malaysian businesses to international markets through efficient 
                  air, sea, and land transportation, supported by our global network.
                </p>
                <Link to="/malaysia/about">
                  <Button className="bg-brand-navy hover:bg-blue-900 text-white group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-xl overflow-hidden shadow-xl"
              >
                <img 
                  src="/oceanf.png" 
                  alt="Malaysia Operations" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Services</h2>
              <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Ocean Freight", icon: "🚢", desc: "Comprehensive sea freight solutions including FCL and LCL." },
                { title: "Air Freight", icon: "✈️", desc: "Fast and reliable air cargo services for time-sensitive shipments." },
                { title: "Land Transport", icon: "🚛", desc: "Efficient road transport connectivity across Peninsular Malaysia." }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link to="/malaysia/services" className="text-brand-gold font-semibold hover:text-amber-600 flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/malaysia/services">
                <Button variant="outline" size="lg" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MalaysiaHome;