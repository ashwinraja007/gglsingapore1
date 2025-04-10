
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
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Memberships</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="w-40 h-auto">
              <AspectRatio ratio={16/9}>
                <img src={cert.src} alt={cert.alt} className="object-contain w-full h-full" />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
