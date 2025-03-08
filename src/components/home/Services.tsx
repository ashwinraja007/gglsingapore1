
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EnhancedServiceCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
          role="img"
          aria-label={title}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Learn more about our {title.toLowerCase()} services and solutions
        </p>
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

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            Core Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Discover our comprehensive range of logistics solutions designed to meet your shipping needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <EnhancedServiceCard 
              key={index}
              image={service.image}
              title={service.title}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:mt-10">
          <Button 
            variant="outline" 
            className="group hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm"
          >
            All Services
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
