
export const GlobalPresence = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6">Global Presence</h2>
            <div className="w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/globalpresence1.png" 
                alt="Global Map" 
                className="w-full h-full object-cover object-center rounded-lg" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
