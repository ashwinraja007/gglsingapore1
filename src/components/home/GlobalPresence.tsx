export const GlobalPresence = () => {
  const locations = [
    { name: "United States", flag: "🇺🇸" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Indonesia", flag: "🇮🇩" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "India", flag: "🇮🇳" },
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Netherlands", flag: "🇳🇱" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Global Presence</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
              alt="Global Map" 
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-lg"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid gap-6">
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 text-gray-800 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                >
                  <span className="text-2xl">{location.flag}</span>
                  <span className="text-lg font-medium">{location.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};