
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    { image: "/lovable-uploads/airfreight.jpg", title: "Air Freight" },
    { image: "/lovable-uploads/ocean.jpg", title: "Ocean Freight (LCL & FCL)" },
    { image: "/lovable-uploads/cc.jpg", title: "Customs Clearance" },
    { image: "/lovable-uploads/liquid.jpg", title: "Liquid Transportation" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 space-y-4 md:space-y-0">
          <div>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Core Services
            </h2>
            <p className="mt-2 text-gray-600 max-w-xl">
              Discover our comprehensive range of logistics solutions designed to meet your shipping needs
            </p>
          </div>
          <Button 
            variant="outline" 
            className="group hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            All Services
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="aspect-square overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-white/90">
                  Learn more about our {service.title.toLowerCase()} services and solutions
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
