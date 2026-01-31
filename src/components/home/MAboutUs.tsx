import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MAboutUsProps {
    learnMorePath: string;
    imageSrc: string;
}

const MAboutUs = ({ learnMorePath, imageSrc }: MAboutUsProps) => {
  return (
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
            <Link to={learnMorePath}>
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
              src={imageSrc} 
              alt="Malaysia Operations" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MAboutUs;