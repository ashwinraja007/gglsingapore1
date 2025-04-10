
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Memberships = () => {
  const certifications = [{
    src: "/bifaa1.png",
    alt: "Industry Certification 1"
  }, {
    src: "/fiataa1.png",
    alt: "Industry Certification 2"
  }, {
    src: "/wcaa1.png",
    alt: "Industry Certification 3"
  }];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Industry Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 flex items-center justify-center bg-gray-50 hover:shadow-md transition-shadow">
              <div className="w-full max-w-[200px]">
                <AspectRatio ratio={3/2}>
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
