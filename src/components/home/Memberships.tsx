
import React, { useState, useEffect, useRef } from 'react';

const Memberships = () => {
  const certifications = [
    {
      src: "/lovable-uploads/bifa.png",
      alt: "BIFA Certification"
    },
    {
      src: "/lovable-uploads/fiata.png",
      alt: "FIATA Certification"
    },
    {
      src: "/lovable-uploads/GGL.png",
      alt: "GGL Certification"
    },
    {
      src: "/lovable-uploads/wca.png",
      alt: "WCA Certification"
    }
  ];

  const allCertifications = [...certifications, ...certifications];
  
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Industry Certifications & Memberships
          </h2>
          <p className="section-description">
            Trusted by leading industry organizations and certified to meet the highest standards
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div 
            className={`flex gap-8 md:gap-16 items-center justify-center ${!isHovered ? 'animate-scroll' : 'pause-animation'}`}
            style={{
              '--scroll-duration': '30s',
              '--scroll-distance': '-50%'
            } as React.CSSProperties}
          >
            {allCertifications.map((cert, index) => (
              <div 
                key={index}
                className="flex-shrink-0 group relative"
              >
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="h-16 md:h-24 w-auto object-contain transition-all duration-500 transform group-hover:scale-110 filter group-hover:brightness-110 group-hover:drop-shadow-md"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{ maxWidth: '150px' }}
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
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
        `}
      </style>
    </section>
  );
};

export default Memberships;
