
const GlobalPresence = () => {
  return (
    <section className="section-spacing bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="section-title mb-3">Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Our logistics network spans across continents, enabling seamless global shipping solutions
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[450px] rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/globalpresence1.png" 
              alt="Global Map" 
              className="w-full h-full object-contain object-center rounded-lg" 
              loading="lazy"
              decoding="async"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
