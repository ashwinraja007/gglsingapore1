
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building, Globe, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LocationInfo {
  id: number;
  name: string;
  country: string;
  address: string;
  phone?: string;
  email?: string;
  description?: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const locations: LocationInfo[] = [
    {
      id: 1,
      name: "Melbourne",
      country: "Australia",
      address: "Suite 5, 7-9 Mallet Road, Tullamarine, Victoria, 3043",
      phone: "+61 432254969",
      email: "info@gglaustralia.com",
      description: "Our headquarters in Australia provides full-service logistics solutions across the Asia-Pacific region."
    },
    {
      id: 2,
      name: "Singapore",
      country: "Singapore",
      address: "10 Anson Road, International Plaza, Singapore 079903",
      phone: "+65 63595818",
      email: "info@gglsingapore.com",
      description: "Strategic hub for South East Asian operations with specialized services in trans-shipment."
    },
    {
      id: 3,
      name: "Dubai",
      country: "UAE",
      address: "Jebel Ali Free Zone, Dubai, UAE",
      phone: "+971 48830726",
      email: "info@ggluae.com",
      description: "Middle East gateway offering comprehensive logistics services for the MENA region."
    },
    {
      id: 4,
      name: "London",
      country: "UK",
      address: "20 Fenchurch Street, London, EC3M 3BY",
      phone: "+44 2035144929",
      email: "info@ggluk.com",
      description: "European headquarters providing logistics services across the EU and UK market."
    },
    {
      id: 5,
      name: "New York",
      country: "USA",
      address: "One World Trade Center, New York, NY 10007",
      phone: "+1 2125245777",
      email: "info@gglusa.com",
      description: "East Coast operations center specializing in trans-Atlantic shipping and customs clearance."
    },
    {
      id: 6,
      name: "Los Angeles",
      country: "USA",
      address: "300 S Grand Ave, Los Angeles, CA 90071",
      phone: "+1 2135550147",
      email: "la@gglusa.com",
      description: "West Coast operations focusing on trans-Pacific routes and Asian trade lanes."
    },
    {
      id: 7,
      name: "Shanghai",
      country: "China",
      address: "Shanghai Tower, 501 Yincheng Middle Rd, Pudong, Shanghai",
      phone: "+86 2122192789",
      email: "info@gglchina.com",
      description: "Major hub for manufacturing logistics, handling imports and exports throughout China."
    },
    {
      id: 8,
      name: "Mumbai",
      country: "India",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      phone: "+91 2261875000",
      email: "info@gglindia.com",
      description: "Indian subcontinent headquarters with specialized services for textile and pharmaceutical shipments."
    },
    {
      id: 9,
      name: "Cape Town",
      country: "South Africa",
      address: "Convention Tower, Heerengracht St, Cape Town, 8001",
      phone: "+27 214183752",
      email: "info@gglsa.com",
      description: "African logistics hub supporting operations throughout the continent with focus on mining and agricultural exports."
    }
  ];

  return (
    <aside className={`h-full bg-sidebar border-l border-amber-100 overflow-auto`}>
      <div className="sticky top-0 bg-white z-10 p-4 border-b border-amber-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-brand-navy">Global Locations</h2>
        {isOpen && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="lg:hidden"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      <div className="p-4 space-y-6">
        {locations.map((location, index) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-amber-50 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-brand-gold" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-brand-navy flex items-center gap-2">
                  {location.name}
                  <span className="text-sm font-normal text-gray-500">{location.country}</span>
                </h3>
                
                <p className="text-sm text-gray-600 mt-2">{location.description}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Building className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{location.address}</span>
                  </div>
                  
                  {location.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                      <span className="text-sm text-gray-600">{location.phone}</span>
                    </div>
                  )}
                  
                  {location.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                      <span className="text-sm text-gray-600">{location.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
