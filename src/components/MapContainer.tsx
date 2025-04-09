
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const MapContainer = () => {
  const locations = [
    { id: 1, name: "Melbourne", position: { top: "75%", left: "85%" }, country: "Australia" },
    { id: 2, name: "Singapore", position: { top: "58%", left: "75%" }, country: "Singapore" },
    { id: 3, name: "Dubai", position: { top: "45%", left: "62%" }, country: "UAE" },
    { id: 4, name: "London", position: { top: "30%", left: "48%" }, country: "UK" },
    { id: 5, name: "New York", position: { top: "35%", left: "25%" }, country: "USA" },
    { id: 6, name: "Los Angeles", position: { top: "40%", left: "15%" }, country: "USA" },
    { id: 7, name: "Shanghai", position: { top: "40%", left: "80%" }, country: "China" },
    { id: 8, name: "Mumbai", position: { top: "50%", left: "68%" }, country: "India" },
    { id: 9, name: "Cape Town", position: { top: "75%", left: "52%" }, country: "South Africa" }
  ];

  return (
    <div className="relative h-full w-full border-r border-amber-100 bg-white">
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
        <AspectRatio ratio={16/9} className="w-full max-w-5xl">
          <div className="relative w-full h-full">
            {/* World map image */}
            <img 
              src="/lovable-uploads/earth.jpg" 
              alt="World Map" 
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            
            {/* Location pins */}
            {locations.map(location => (
              <motion.div 
                key={location.id}
                className="absolute cursor-pointer group"
                style={{ 
                  top: location.position.top, 
                  left: location.position.left 
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 * location.id 
                }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="relative">
                  <MapPin className="w-6 h-6 text-red-500 drop-shadow-md" />
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white/90 backdrop-blur-sm text-black text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {location.name}, {location.country}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default MapContainer;
