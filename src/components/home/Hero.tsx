import { Button } from "@/components/ui/button";
import { PortalLink } from "../common/PortalLink";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portalLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Customer Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Partner Portal"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Tracking"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Sailing Schedule"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7",
      title: "Container Sizes & Dimensions"
    }
  ];

  return (
    <section className="relative min-h-screen">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d564740b070a89f62cdebb12ae5e7dcda48b805aed08acac5ffb9d67e85f0d7" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover object-center" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Delivering Excellence in Global Logistics Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              MOLTECH (UK) LTD brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://demo.logistics-quote.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                  Get A Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Portal Links Section - Adjusted positioning */}
      <div className="container mx-auto px-4 absolute bottom-24 md:bottom-16 left-0 right-0 z-10">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden w-full bg-gray-600/40 backdrop-blur-sm p-3 rounded-lg shadow-sm mb-4 flex items-center justify-between text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-sm font-medium">Select Option</span>
          <Menu className="h-5 w-5" />
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} space-y-2 mb-4`}>
          {portalLinks.map((link, index) => (
            <PortalLink key={index} {...link} />
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-4">
          {portalLinks.map((link, index) => (
            <PortalLink key={index} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};