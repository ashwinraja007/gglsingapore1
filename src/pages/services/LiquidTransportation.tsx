import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCountryNavigation } from '@/hooks/useCountryNavigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LiquidTransportation = () => {
  const { navPaths } = useCountryNavigation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = {
    title: "Liquid Transportation",
    description: "Specialized transport solutions for bulk liquid cargo.",
    longDescription: "We offer specialized liquid transportation services for hazardous and non-hazardous bulk liquids. Our fleet is equipped with the latest safety technology to ensure secure and efficient delivery of your liquid cargo, utilizing ISO tanks and flexibags tailored to your requirements.",
    features: ["ISO Tanks", "Flexibags", "Hazardous Cargo", "Bulk Liquid Transport"],
    image: "/transports.png"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header navPaths={navPaths} />
      
      <main className="flex-grow pt-20">
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {service.description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                to={navPaths.services} 
                className="inline-flex items-center text-brand-navy hover:text-brand-gold mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Link>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold text-brand-navy mb-6">Overview</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.longDescription}
                    </p>

                    <h3 className="text-2xl font-bold text-brand-navy mb-4">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                          <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0" />
                          <span className="font-medium text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="md:col-span-1">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24"
                  >
                    <h3 className="text-xl font-bold text-brand-navy mb-4">Ready to ship?</h3>
                    <p className="text-gray-600 mb-6">
                      Contact our team today for a customized quote tailored to your specific needs.
                    </p>
                    <Link to={navPaths.contact}>
                      <Button className="w-full bg-brand-navy hover:bg-brand-gold hover:text-brand-navy transition-colors">
                        Get a Quote
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LiquidTransportation;