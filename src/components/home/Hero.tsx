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
        <div className="container mx-auto px-4 h-full flex flex-col justify-center pt-20">
          <h1 className="text-5xl font-semibold text-white mb-6 max-w-2xl font-blinker">
  We can provide effective and excellent logistics solutions for your company
</h1>
>
          <p className="text-xl text-white mb-8 max-w-2xl">
            MOLTECH (UK) LTD, headquartered in London, is a global freight forwarder and logistics provider 
            with over 25 years of expertise in international and domestic transportation.
          </p>
          <Button size="lg" className="w-fit">Get A Quote</Button>
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
