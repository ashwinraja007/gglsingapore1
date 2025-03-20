import React from 'react';

const Memberships = () => {
  const certifications = [
    { src: "/lovable-uploads/bifa.png", alt: "Industry Certification 1" },
    { src: "/lovable-uploads/fiata.png", alt: "Industry Certification 2" },
    { src: "/lovable-uploads/wca.png", alt: "Industry Certification 4" },
  ];

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            Industry Certifications & Memberships
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by leading industry organizations and certified to meet the highest standards.
          </p>
        </div>
        
        {/* Static display of certifications */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex-shrink-0 group relative">
              <img
                src={cert.src}
                alt={cert.alt}
                className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 transform group-hover:scale-110"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                style={{ maxWidth: '120px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
