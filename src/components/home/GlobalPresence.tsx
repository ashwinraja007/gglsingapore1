
const GlobalPresence = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our logistics network spans across continents, enabling seamless global shipping solutions
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/globalpresence1.png" 
              alt="Global Map" 
              className="w-full h-full object-contain object-center rounded-lg" 
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
