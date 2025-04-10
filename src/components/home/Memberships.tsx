
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Memberships = () => {
  const certifications = [
    {
      src: "/bifaa1.png",
      alt: "Industry Certification 1"
    }, 
    {
      src: "/fiataa1.png",
      alt: "Industry Certification 2"
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center">
              <div className="w-full max-w-[240px]">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={cert.src} 
                    alt={cert.alt}
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
