import React, { useState } from 'react';

const Memberships = () => {
  const certifications = [
    { src: "/lovable-uploads/bifa.png", alt: "Industry Certification 1" },
    { src: "/lovable-uploads/fiata.png", alt: "Industry Certification 2" },
    { src: "/lovable-uploads/GGL.png", alt: "Industry Certification 3" },
    { src: "/lovable-uploads/wca.png", alt: "Industry Certification 4" },
  ];

  // Extend the list to ensure a smooth infinite scrolling effect
  const allCertifications = [...certifications, ...certifications, ...certifications, ...certifications];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            Industry Certifications & Memberships
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading industry organizations and certified to meet the highest standards.
          </p>
        </div>

        {/* Scrolling Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fading edges for visual effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Items */}
          <div 
            className={`flex gap-8 md:gap-16 items-center ${!isHovered ? 'animate-scroll' : 'pause-animation'}`}
          >
            {allCertifications.map((cert, index) => (
              <div key={index} className="flex-shrink-0 group relative">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 transform group-hover:scale-110"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{ maxWidth: '150px' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
          }

          .pause-animation {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Memberships;
