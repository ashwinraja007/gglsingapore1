import { Button } from "@/components/ui/button";
import { PortalLink } from "../common/PortalLink";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portalLinks = [
    {
      icon: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=50&h=50&fit=crop",
      title: "Customer Portal"
    },
    {
      icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=50&h=50&fit=crop",
      title: "Partner Portal"
    },
    {
      icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=50&h=50&fit=crop",
      title: "Tracking"
    },
    {
      icon: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=50&h=50&fit=crop",
      title: "Sailing Schedule"
    },
    {
      icon: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=50&h=50&fit=crop",
      title: "Container Sizes & Dimensions"
    }
  ];

  return (
    <section className="relative min-h-screen">
      <img 
        src="https://images.unsplash.com/photo-1506506447188-78e2a1051d9e?w=1600&h=900&fit=crop" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Delivering Excellence in Global Logistics Solutions
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed">
              MOLTECH (UK) LTD brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://demo.logistics-quote.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-14 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 text-base">
                  Get A Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 absolute bottom-16 md:bottom-12 left-0 right-0 z-10">
        <button 
          className="md:hidden w-full bg-gray-600/40 backdrop-blur-sm p-3 rounded-lg shadow-sm mb-4 flex items-center justify-between text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-sm font-medium">Select Option</span>
          <Menu className="h-5 w-5" />
        </button>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} space-y-2 mb-4`}>
          {portalLinks.map((link, index) => (
            <PortalLink key={index} {...link} />
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-3">
          {portalLinks.map((link, index) => (
            <PortalLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};