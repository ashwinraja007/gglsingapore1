export const GlobalPresence = () => {
  const locations = [
    "United States",
    "UAE",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Thailand",
    "India",
    "Sri Lanka",
    "Netherlands"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Global Presence</h2>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09ae28b91440ecce70294f3302875e1fb332e62512d1de2ab68132c5e8843302?placeholderIfAbsent=true" alt="Global Map" className="w-full rounded-lg" loading="lazy" />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {Array.from({ length: 9 }).map((_, i) => (
                <img
                  key={i}
                  src={`URL_${32 + i}`}
                  alt={`Location ${i + 1}`}
                  className="w-12 h-12"
                  loading="lazy"
                />
              ))}
            </div>
            
            <div className="space-y-2">
              {locations.map((location, index) => (
                <p key={index} className="text-gray-600">{location}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};