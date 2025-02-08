
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

const Services = () => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  
  const services = [
    {
      title: "Air Freight Services",
      description: "We offer a full suite of air freight solutions tailored to meet your shipping requirements. Our expert team ensures smooth handling of air imports, exports, and express shipments, all with the convenience of door-to-door service.",
      details: "Our company sets itself apart with competitive pricing and exceptional operational support, guaranteeing customer satisfaction with every shipment. Whether you prioritize speed, reliability, or cost-effectiveness, our air freight services provide the perfect balance, making us a trusted partner in global logistics.",
      image: "/lovable-uploads/airfreight.jpg"
    },
    {
      title: "Transportation and Distribution Services",
      description: "Moltech ensures efficient domestic distribution and timely deliveries. Our robust logistics infrastructure enhances productivity, offering frequent and reliable transportation services.",
      details: "Our comprehensive distribution network spans across major cities, supported by advanced tracking systems and professional teams. We specialize in both standard and temperature-controlled transportation, ensuring your cargo reaches its destination safely and on time.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-2.png"
    },
    {
      title: "Warehousing Solutions",
      description: "State-of-the-art warehousing facilities equipped with modern inventory management systems and security measures.",
      details: "Our warehousing solutions include temperature-controlled storage, inventory management, order fulfillment, and distribution center operations with 24/7 security monitoring.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-3.png"
    },
    {
      title: "Ocean Freight Services",
      description: "Comprehensive ocean freight solutions including FCL and LCL services with global coverage and competitive rates.",
      details: "We handle all aspects of ocean freight from documentation to customs clearance, offering reliable tracking and specialized container solutions for various cargo types.",
      image: "/lovable-uploads/ocean.jpg"
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="rounded-lg overflow-hidden">
                  <div className="relative min-h-[400px] group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40">
                      <div className="p-8 h-full flex flex-col justify-between relative z-10">
                        <div className="max-w-2xl">
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {service.title}
                          </h3>
                          <p className="text-white/90 text-lg mb-4">
                            {service.description}
                          </p>
                          {openItems[index] && (
                            <p className="text-white/90 text-lg mt-4">
                              {service.details}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="self-start py-2 px-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors mt-4"
                        >
                          {openItems[index] ? "Learn Less" : "Learn More"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
