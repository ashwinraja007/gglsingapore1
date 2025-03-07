
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`h-[350px] w-full overflow-hidden rounded-2xl shadow-xl transform ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/delievery.jpg" 
              alt="About Us" 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div className={isVisible ? 'animate-fade-in' : 'opacity-0'} style={{ transitionDelay: '0.4s' }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gradient">About Us</h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-left">
              Moltech is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse 
              portfolio in freight forwarding, supply chain management, and logistics technology. As part of this 
              global network, Moltech benefits from strategic investments across multiple brands specializing in 
              transportation, warehousing, and supply chain solutions, as well as cutting-edge freight and 
              warehouse management software.
            </p>
            <Button 
              variant="outline" 
              className="group btn-hover border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-700 hover:text-white"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
