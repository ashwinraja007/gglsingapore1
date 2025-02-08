
import { ServiceCard } from "../common/ServiceCard";
import { Button } from "@/components/ui/button";

export const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Core Services</h2>
          <Button variant="outline">All Services</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard image="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-1.png" title="Air Freight" />
          <ServiceCard image="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-2.png" title="Ocean Freight (LCL & FCL)" />
          <ServiceCard image="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-3.png" title="Customs Clearance" />
          <ServiceCard image="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-4.png" title="Liquid Transportation" />
        </div>
      </div>
    </section>
  );
};
