
import React from 'react';

const Memberships = () => {
  const certifications = [
    { src: "/lovable-uploads/bifa.png", alt: "Industry Certification 1" },
    { src: "/lovable-uploads/fiata.png", alt: "Industry Certification 2" },
    { src: "/lovable-uploads/GGL.png", alt: "Industry Certification 3" },
    { src: "/lovable-uploads/wca.png", alt: "Industry Certification 4" },
  ];

  // Extend the list to ensure a smooth infinite scrolling effect
  const allCertifications = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <section className="section-spacing bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">
            Industry Certifications & Memberships
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by leading industry organizations and certified to meet the highest standards.
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          {/* Fading edges for visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Items */}
          <div className="flex gap-8 md:gap-16 items-center animate-scroll">
            {allCertifications.map((cert, index) => (
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
      </div>
    </section>
  );
};

export default Memberships;
