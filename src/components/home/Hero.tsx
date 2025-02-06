import { Button } from "@/components/ui/button";
import { PortalLink } from "../common/PortalLink";

export const Hero = () => {
  return (
    <section className="relative">
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d564740b070a89f62cdebb12ae5e7dcda48b805aed08acac5ffb9d67e85f0d7" 
        alt="Hero background" 
        className="w-full h-[700px] object-cover object-center" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Delivering Excellence in Global Logistics Solutions
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              MOLTECH (UK) LTD brings over 25 years of expertise in international logistics, 
              offering comprehensive solutions tailored to your business needs.
            </p>
            <div className="flex gap-4 pt-2 pb-4">
              <a href="https://demo.logistics-quote.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-800">
                  Get A Quote
                </Button>
              </a>
              <a href="https://demo.logistics-services.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <PortalLink icon="https://cdn.builder.io/api/v1/image/assets/TEMP/10ea87f043601fd974383dd77aafe3a63a9e4225cffeda820fb7c97e06ab41e7" title="Customer Portal" />
          <PortalLink icon="URL_4" title="Partner Portal" />
          <PortalLink icon="URL_5" title="Tracking" />
          <PortalLink icon="URL_6" title="Sailing Schedule" />
          <PortalLink icon="URL_7" title="Container Sizes & Dimensions" />
        </div>
      </div>
    </section>
  );
};