import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface MGlobalPresenceProps {
    linkPath: string;
}

const MGlobalPresence = ({ linkPath }: MGlobalPresenceProps) => {
  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/world-map-dots.png')] opacity-10 bg-center bg-no-repeat bg-contain"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Globe className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Global Network, Local Expertise</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            From our hubs in Malaysia, we connect you to GGL's extensive global network, 
            ensuring your cargo reaches any corner of the world with the same reliability and care.
          </p>
          <Link to={linkPath}>
            <Button size="lg" className="bg-brand-gold hover:bg-amber-600 text-brand-navy font-bold">
              Explore Our Global Presence
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MGlobalPresence;