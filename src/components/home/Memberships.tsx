export const Memberships = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Industry Certifications & Memberships
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/545680efee8ad2b46047acda62e66025b4c5648a4a5369508eadfd794c06465c" 
               alt="Industry Certification 1" 
               className="h-20 object-contain mx-auto transform hover:scale-105 transition-transform" 
               loading="lazy" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b372b6e457e47a0a6850c7c00d1991e613eb4bbc85b05bdc7a6e1963ce616d4" 
               alt="Industry Certification 2" 
               className="h-20 object-contain mx-auto transform hover:scale-105 transition-transform" 
               loading="lazy" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d50cc616b000ac9c6875b1ad112428570513b137ae6d030098324229cfccf88" 
               alt="Industry Certification 3" 
               className="h-20 object-contain mx-auto transform hover:scale-105 transition-transform" 
               loading="lazy" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b02a0121879c0cf2ff359e2e7fb21e6c99b64759ac4b95e216fd12217eaadcf7" 
               alt="Industry Certification 4" 
               className="h-20 object-contain mx-auto transform hover:scale-105 transition-transform" 
               loading="lazy" />
        </div>
      </div>
    </section>
  );
};