import React, { useEffect, useState } from 'react';

export const Memberships = () => {
  // Duplicate the images to create a seamless loop
  const certifications = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/545680efee8ad2b46047acda62e66025b4c5648a4a5369508eadfd794c06465c",
      alt: "Industry Certification 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b372b6e457e47a0a6850c7c00d1991e613eb4bbc85b05bdc7a6e1963ce616d4",
      alt: "Industry Certification 2"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d50cc616b000ac9c6875b1ad112428570513b137ae6d030098324229cfccf88",
      alt: "Industry Certification 3"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b02a0121879c0cf2ff359e2e7fb21e6c99b64759ac4b95e216fd12217eaadcf7",
      alt: "Industry Certification 4"
    }
  ];

  // Duplicate array for seamless loop
  const allCertifications = [...certifications, ...certifications];
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-4">
            Industry Certifications & Memberships
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading industry organizations and certified to meet the highest standards
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Container */}
          <div 
            className={`flex gap-16 items-center ${!isHovered ? 'animate-scroll' : 'pause-animation'}`}
            style={{
              '--scroll-duration': '30s',
              '--scroll-distance': `${-50}%`
            }}
          >
            {allCertifications.map((cert, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group relative"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(var(--scroll-distance));
          }
        }

        .animate-scroll {
          animation: scroll var(--scroll-duration) linear infinite;
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Memberships;
