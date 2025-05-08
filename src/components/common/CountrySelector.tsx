
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

interface CountryData {
  country: string;
  company: string;
  website: string;
  priority: number;
  flag?: string;
}

const countries: CountryData[] = [
  { country: "SINGAPORE", company: "GGL", website: "https://ggl.sg/", priority: 1, flag: "/sg.svg" },
  { country: "SINGAPORE", company: "GC", website: "https://www.globalconsol.com/", priority: 2, flag: "/sg.svg" },
  { country: "MALAYSIA", company: "OECL", website: "https://www.oecl.sg/malaysia/home", priority: 3, flag: "/my.svg" },
  { country: "INDONESIA", company: "OECL", website: "https://www.oecl.sg/indonesia/home", priority: 4, flag: "/id.svg" },
  { country: "THAILAND", company: "OECL", website: "https://www.oecl.sg/thailand/home", priority: 5, flag: "/th.svg" },
  { country: "MYANMAR", company: "GC", website: "https://www.globalconsol.com", priority: 6, flag: "/mm.svg" },
  { country: "CHINA", company: "HAIXUN", website: "https://www.haixun.co", priority: 7, flag: "/china.svg" },
  { country: "INDIA", company: "GGL", website: "https://ggl.sg/india", priority: 8, flag: "/in.svg" },
  { country: "BANGLADESH", company: "GC", website: "https://www.globalconsol.com", priority: 9, flag: "/bd.svg" },
  { country: "SRI LANKA", company: "GC", website: "https://www.globalconsol.com", priority: 10, flag: "/lk.svg" },
  { country: "PAKISTAN", company: "GC", website: "https://www.globalconsol.com", priority: 11, flag: "/pk.svg" },
  { country: "QATAR", company: "ONE", website: "https://oneglobalqatar.com/", priority: 12, flag: "/qa.svg" },
  { country: "SAUDI ARABIA", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 13, flag: "/sa.svg" },
  { country: "UAE", company: "AMASS", website: "https://amassmiddleeast.com/", priority: 14, flag: "/ae.svg" },
  { country: "USA", company: "GGL", website: "https://gglusa.us/", priority: 15, flag: "/us.svg" },
  { country: "UK", company: "MOLTECH", website: "https://moltech.uk/", priority: 16, flag: "/gb.svg" }
];

// Find Australia in the countries list
const findAustraliaCountry = () => {
  return countries.find(country => country.country === "AUSTRALIA") || countries[0];
};

// Get the Australia flag for display
const getAustraliaFlag = () => {
  const australia = findAustraliaCountry();
  return australia.flag || "/au.svg";
};

const CountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  // This state is only used for tracking the selected country for redirection
  const [selectedRedirectCountry, setSelectedRedirectCountry] = useState<CountryData>(findAustraliaCountry());
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // The Australia flag that always shows in the button
  const australiaFlag = getAustraliaFlag();

  // Sort countries by priority, with Australia first
  const sortedCountries = [...countries].sort((a, b) => {
    if (a.country === "AUSTRALIA") return -1;
    if (b.country === "AUSTRALIA") return 1;
    return a.priority - b.priority;
  });

  // Completely redesigned redirect function with reliable redirection strategy
  const handleCountrySelect = (country: CountryData) => {
    // Ensure clean url with protocol
    let url = country.website;
    if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    
    console.log("Redirecting to:", url);
    
    // Close dropdown first
    setIsOpen(false);
    
    // Execute redirect with a slight delay after UI updates
    setTimeout(() => {
      // Method 1: Direct browser navigation with fallback
      const openWindow = () => {
        // Create randomized target name to avoid browser caching issues
        const randomTarget = '_blank_' + Math.random().toString(36).substring(2, 15);
        const newWindow = window.open(url, randomTarget);
        
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          console.log("Method 1 failed, trying method 2");
          return false;
        }
        return true;
      };
      
      // Method 2: Link creation with simulation of user interaction
      const clickLink = () => {
        try {
          // Remove any existing temporary links
          const oldLinks = document.querySelectorAll('.temp-redirect-link');
          oldLinks.forEach(link => {
            if (document.body.contains(link)) {
              document.body.removeChild(link);
            }
          });
          
          // Create a new link element with unique class for cleanup
          const link = document.createElement('a');
          link.href = url;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.className = 'temp-redirect-link';
          link.style.position = 'absolute';
          link.style.opacity = '0';
          link.style.pointerEvents = 'none';
          link.textContent = 'Redirect';
          link.setAttribute('data-href', url); // Store URL for debugging
          
          // Attach to body
          document.body.appendChild(link);
          
          // Simulate user click
          link.click();
          
          // Clean up after a delay
          setTimeout(() => {
            if (document.body.contains(link)) {
              document.body.removeChild(link);
            }
          }, 1000);
          
          return true;
        } catch (e) {
          console.error("Method 2 failed:", e);
          return false;
        }
      };
      
      // Method 3: Location change with return (last resort)
      const locationChange = () => {
        try {
          // This is a last resort because it navigates away from the current page
          const backupUrl = window.location.href;
          window.location.href = url;
          
          // Set a timeout to return to the original page
          setTimeout(() => {
            window.location.href = backupUrl;
          }, 100);
          
          return true;
        } catch (e) {
          console.error("All methods failed:", e);
          return false;
        }
      };
      
      // Try each method in sequence
      if (!openWindow()) {
        if (!clickLink()) {
          // Only use location change as absolute last resort - generally shouldn't get here
          // locationChange();
        }
      }
    }, 100);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="border-[#F6B100] bg-white text-gray-800 hover:bg-[#F6B100]/10 px-4 py-2 rounded-full flex items-center gap-2"
          >
            {/* Always show Australia flag in the button */}
            <img 
              src="/au.svg" 
              alt="Australia flag" 
              className="w-5 h-5 rounded-sm shadow-sm object-cover"
            />
            <span className="flex items-center gap-1">
              Switch Country <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="center" 
          className="w-[280px] border border-amber-100 bg-white p-2 rounded-lg shadow-lg"
        >
          <ScrollArea className="h-[300px] w-full pr-2">
            <div className="grid grid-cols-1 gap-1 p-1">
              {sortedCountries.map((country) => (
                <div
                  key={country.country + country.company}
                  className="cursor-pointer hover:bg-amber-50 p-2 rounded-md flex items-center gap-2 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleCountrySelect(country);
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center w-full"
                  >
                    <div className="flex-shrink-0">
                      {country.flag ? (
                        <img 
                          src={country.flag} 
                          alt={`${country.country} flag`} 
                          className="w-6 h-6 rounded-sm shadow-sm object-cover"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-gray-200 rounded-sm flex items-center justify-center">
                          <Globe className="w-4 h-4 text-gray-500" />
                        </div>
                      )}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="font-medium text-sm">{country.country}</div>
                      <div className="text-xs text-gray-500">{country.company}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CountrySelector;
