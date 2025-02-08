
export const GlobalPresence = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="w-full h-full">
            <h2 className="text-3xl font-bold mb-8">Global Presence</h2>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-4.png" 
                alt="Global Map" 
                className="w-full h-full object-cover rounded-lg" 
                loading="lazy" 
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <img 
              src="/lovable-uploads/edc263ae-b375-4eda-917c-3a8a627c6350-1.png" 
              alt="Global Network" 
              className="w-full h-auto rounded-lg" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
