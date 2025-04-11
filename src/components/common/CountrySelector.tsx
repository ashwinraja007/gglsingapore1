
import React from 'react';
import { Button } from "@/components/ui/button";

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
}

const australiaCountry: CountryData = {
  country: "AUSTRALIA", 
  company: "GGL AUS", 
  website: "https://www.gglaustralia.com", 
  priority: 7, 
  flag: "/au.svg"
};

const CountrySelector = () => {
  // Handle redirect
  const handleCountrySelect = () => {
    window.open(australiaCountry.website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative z-50">
      <Button 
        variant="outline" 
        className="border-[#F6B100] bg-white text-gray-800 hover:bg-[#F6B100]/10 px-4 py-2 rounded-full flex items-center gap-2"
        onClick={handleCountrySelect}
      >
        <img 
          src={australiaCountry.flag} 
          alt={`${australiaCountry.country} flag`} 
          className="w-5 h-5 rounded-sm shadow-sm object-cover"
        />
        <span className="flex items-center gap-1">
          {australiaCountry.country}
        </span>
      </Button>
    </div>
  );
};

export default CountrySelector;
