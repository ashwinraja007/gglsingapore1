import React from 'react';

const Memberships = () => {
  const certifications = [
    { src: "/lovable-uploads/bifa.png", alt: "Industry Certification 1" },
    { src: "/lovable-uploads/fiata.png", alt: "Industry Certification 2" },
    { src: "/lovable-uploads/wca.png", alt: "Industry Certification 3" },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="section-title mb-2 mx-auto relative">
            Industry Certifications & Memberships
            {/* Remove unwanted pseudo-elements */}
            <span className="hidden"></span>
          </h2>
          {/* Remove golden line div */}
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by leading industry organizations and certified to meet the highest standards.
          </p>
        </div>
        
        {/* Display certifications */}
        <div className="flex justify-center items-center gap-10 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex-shrink-0 group relative">
              <div className="h-16 w-28 flex items-center justify-center">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="max-h-12 md:max-h-16 w-auto object-contain transition-transform duration-300 transform group-hover:scale-110"
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
