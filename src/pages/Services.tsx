import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const services = [
    {
      title: "Air Freight Services",
      description: "We offer a full suite of air transportation services to meet your specific needs. Our global network ensures reliable and efficient air freight solutions.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-1.png",
      details: "Our air freight services include express delivery, consolidated shipments, and charter services. We handle all types of cargo with specialized care and attention to detail."
    },
    {
      title: "Transportation and Distribution Services",
      description: "Efficient transportation and distribution solutions across global routes. We ensure reliable and scalable shipping solutions.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-2.png",
      details: "We provide end-to-end transportation and distribution services including road freight, intermodal solutions, and last-mile delivery with real-time tracking capabilities."
    },
    {
      title: "Warehousing",
      description: "Get a flexible range of storage solutions across our global network. Modern facilities with advanced inventory management systems.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-3.png",
      details: "Our warehousing services include temperature-controlled storage, inventory management, order fulfillment, and distribution center operations."
    },
    {
      title: "FCL Services",
      description: "Complete container load solutions for your shipping needs. We handle documentation and customs clearance for seamless delivery.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-4.png",
      details: "We offer door-to-door FCL services, customs clearance, cargo insurance, and specialized container solutions for various cargo types."
    },
    {
      title: "LCL Consolidation",
      description: "Cost-effective consolidation services for smaller shipments. Optimize your logistics with our global network of consolidation points.",
      image: "/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-5.png",
      details: "Our LCL services include cargo consolidation, deconsolidation, multi-country consolidation, and flexible scheduling options."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
            
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <div className="relative h-[200px] w-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50">
                      <div className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-white/90">
                            {service.description}
                          </p>
                        </div>
                        <Accordion type="single" collapsible>
                          <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger className="bg-gray-200/20 text-white hover:bg-gray-200/30 px-4 py-2 rounded-lg">
                              Learn More
                            </AccordionTrigger>
                            <AccordionContent className="bg-white/90 text-gray-800 p-4 rounded-lg mt-2">
                              {service.details}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
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