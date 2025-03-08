
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="h-[250px] md:h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/delievery.jpg" 
              alt="About Us" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
          
          <div>
            <h2 className="section-title mb-4">About Us</h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Moltech is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse 
              portfolio in freight forwarding, supply chain management, and logistics technology, as part of this 
              global network, Moltech benefits from strategic investments across multiple brands specializing in 
              transportation, warehousing, and supply chain solutions, as well as cutting-edge freight and 
              warehouse management software.
            </p>
            <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
