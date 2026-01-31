import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MHero = () => {
  return (
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
  );
};

export default MHero;