import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image Section */}
          <div className="w-full relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <AspectRatio ratio={4 / 3} className="h-auto">
                <img
                  alt="About Us"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  src="/lovable-uploads/b91d7108-4472-4301-a481-16d521230362.jpg"
                />
              </AspectRatio>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              GGL is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse portfolio in freight forwarding, supply chain management, and logistics technology. As part of this global network, GGL benefits from strategic investments across multiple brands specializing in transportation, warehousing, and supply chain solutions.
            </p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-sm">
                Learn More
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
