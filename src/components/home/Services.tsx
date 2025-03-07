
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EnhancedServiceCard = ({ image, title, index }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl card-hover animate-on-scroll"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-square overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-heading">{title}</h3>
        <p className="text-sm text-white/90 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Learn more about our {title.toLowerCase()} services and solutions
        </p>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-3 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white border-white hover:bg-white hover:text-black"
        >
          View Details
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export const Services = () => {
  const services = [
    { image: "/lovable-uploads/airfreight.jpg", title: "Air Freight" },
    { image: "/lovable-uploads/ocean.jpg", title: "Ocean Freight (LCL & FCL)" },
    { image: "/lovable-uploads/cc.jpg", title: "Customs Clearance" },
    { image: "/lovable-uploads/liquid.jpg", title: "Liquid Transportation" }
  ];

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
      { threshold: 0.1 }
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

  useEffect(() => {
    if (isVisible) {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, 150 * index);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50 font-sans">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-4 md:space-y-0 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <h2 className="section-title">
              Core Services
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl text-left">
              Discover our comprehensive range of logistics solutions designed to meet your shipping needs
            </p>
          </div>
          <Button 
            variant="outline" 
            className="group hover:bg-brand-blue-600 hover:text-white border-brand-blue-600 text-brand-blue-700 btn-hover"
          >
            All Services
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard 
              key={index}
              image={service.image}
              title={service.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
