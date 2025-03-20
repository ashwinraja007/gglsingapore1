import React from 'react';

const Memberships = () => {
  const certifications = [
    { src: "/bifaa1.png", alt: "Industry Certification 1" },
    { src: "/fiataa1.png", alt: "Industry Certification 2" },
    { src: "/wcaa1.png", alt: "Industry Certification 3" },
  ];
  
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2 mx-auto relative">
            Industry Certifications & Memberships
            <span className="hidden"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by leading industry organizations and certified to meet the highest standards.
          </p>
        </div>
        
        {/* Display certifications with larger images */}
        <div className="flex justify-center items-center gap-12 md:gap-20">
          {certifications.map((cert, index) => (
            <div key={index} className="flex-shrink-0 group relative">
              <div className="h-24 w-40 flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 transform group-hover:scale-110"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
