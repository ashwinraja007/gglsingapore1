
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Memberships = () => {
  const certifications = [{
    src: "/bifaa1.png",
    alt: "Industry Certification 1"
  }, {
    src: "/fiataa1.png",
    alt: "Industry Certification 2"
  }];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Memberships & Certifications</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="w-40 h-auto">
              <AspectRatio ratio={4/3}>
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  className="w-full h-full object-contain" 
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
