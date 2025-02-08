
import { Button } from "@/components/ui/button";

export const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/delievery.jpg" 
              alt="About Us" 
              className="w-full h-full object-cover" 
              loading="eager"
              fetchPriority="high"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-8">
              Moltech is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse 
              portfolio in freight forwarding, supply chain management, and logistics technology, as part of this 
              global network, Moltech benefits from strategic investments across multiple brands specializing in 
              transportation, warehousing, and supply chain solutions, as well as cutting-edge freight and 
              warehouse management software.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
