
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MapContainer from '@/components/MapContainer';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, Map, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);
  
  useEffect(() => {
    // For mobile, initially show sidebar instead of map
    if (isMobile) {
      setShowMap(false);
      setIsSidebarOpen(true);
    } else {
      setShowMap(true);
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleView = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50/30 to-white">
      <Header />
      
      <div className="flex flex-1 relative overflow-hidden">
        {/* Main content with map - 60% on desktop, full on mobile when active */}
        {(!isMobile || (isMobile && showMap)) && (
          <main className={`transition-all duration-300 ease-in-out ${isMobile ? 'w-full' : 'w-[60%]'}`}>
            <MapContainer />
          </main>
        )}
        
        {/* Sidebar for locations - 35% on desktop, full width on mobile when active */}
        {(!isMobile || (isMobile && !showMap)) && (
          <div className={`transition-all duration-300 ease-in-out ${isMobile ? 'w-full' : 'w-[35%]'}`}>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          </div>
        )}
        
        {/* Mobile toggle buttons */}
        {isMobile && (
          <div className="fixed bottom-4 right-4 z-50 flex gap-2">
            <Button 
              className="rounded-full size-12 shadow-lg bg-amber-500 hover:bg-amber-600 text-white"
              onClick={toggleView}
              aria-label={showMap ? "View Locations" : "View Map"}
            >
              {showMap ? <Menu className="size-5" /> : <Map className="size-5" />}
            </Button>
          </div>
        )}
      </div>
      
      <footer className="bg-white border-t border-amber-100 py-2 shadow-inner">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <span className="hidden sm:inline">GGL Global Presence Map — Interactive Company Locations</span>
          <span className="sm:hidden">GGL Global Map</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
