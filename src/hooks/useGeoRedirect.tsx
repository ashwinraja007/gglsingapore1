import { useEffect, useState } from 'react';
import { detectUserCountryAndRedirect, detectCountryByTimezone } from '@/utils/geoRedirect';

export const useGeoRedirect = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    const handleGeoRedirection = async () => {
      // Prevent multiple checks
      if (hasChecked) return;
      
      setHasChecked(true);
      
      try {
        setIsRedirecting(true);
        
        // First try IP-based detection
        const ipRedirectTriggered = await detectUserCountryAndRedirect();
        
        // If IP detection failed or didn't trigger redirect, try timezone fallback
        if (!ipRedirectTriggered) {
          const timezoneRedirectTriggered = detectCountryByTimezone();
          
          if (!timezoneRedirectTriggered) {
            console.log('User not detected as being from India');
          }
        }
      } catch (error) {
        console.error('Geo-redirection error:', error);
      } finally {
        // Only set redirecting to false if no redirect happened
        setTimeout(() => {
          setIsRedirecting(false);
        }, 1000);
      }
    };

    // Run the check after a small delay to ensure page is ready
    const timer = setTimeout(handleGeoRedirection, 500);

    return () => clearTimeout(timer);
  }, [hasChecked]);

  return { isRedirecting };
};
