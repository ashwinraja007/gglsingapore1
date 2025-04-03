import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const AboutUs = () => {
  return <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="h-[250px] md:h-[300px] w-full overflow-hidden rounded-lg shadow-lg">
            <AspectRatio ratio={16 / 9} className="h-full">
              <img src="/lovable-uploads/delievery.jpg" alt="About Us" className="w-full h-full object-cover" loading="lazy" />
            </AspectRatio>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">About Us</h2>
            <p className="text-gray-600 mb-5 text-sm md:text-base">GGL is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse portfolio in freight forwarding, supply chain management, and logistics technology, as part of this global network, GGL benefits from strategic investments across multiple brands specializing in transportation, warehousing, and supply chain solutions.</p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;