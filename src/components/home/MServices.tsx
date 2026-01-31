import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MServicesProps {
    servicesPath: string;
    cardLinkPrefix?: string;
    singleDestination?: boolean;
}

const MServices = ({ servicesPath }: MServicesProps) => {
  return (
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
              <Link to={servicesPath} className="text-brand-gold font-semibold hover:text-amber-600 flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={servicesPath}>
            <Button variant="outline" size="lg" className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MServices;