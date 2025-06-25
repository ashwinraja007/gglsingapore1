// Utility for handling IP-based geographic redirection
export const detectUserCountryAndRedirect = async () => {
  try {
    let countryCode = '';

    // Service 1: ipapi.co
    try {
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        const data = await response.json();
        countryCode = data.country_code;
        console.log('Detected country from ipapi.co:', countryCode);
      }
    } catch (error) {
      console.log('ipapi.co failed, trying fallback...');
    }

    // Fallback: ip-api.com (HTTPS)
    if (!countryCode) {
      try {
        const response = await fetch('https://ip-api.com/json/', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          countryCode = data.countryCode;
          console.log('Detected country from ip-api.com:', countryCode);
        }
      } catch (error) {
        console.log('ip-api.com also failed');
      }
    }

    // Determine target URL
    const redirectUrl = countryCode === 'IN'
      ? 'https://gglindia.com/'
      : 'https://ggl.sg';

    // Prevent infinite redirect loop
    if (!window.location.href.startsWith(redirectUrl)) {
      console.log(`Redirecting to ${redirectUrl}`);
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100);
    } else {
      console.log('Already on the correct site, no redirect needed');
    }

    return true;
  } catch (error) {
    console.error('Error detecting user location:', error);
    return false;
  }
};

// Fallback using browser's timezone
export const detectCountryByTimezone = () => {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log('User timezone:', timezone);

    const indianTimezones = [
      'Asia/Kolkata',
      'Asia/Calcutta',
      'Asia/Mumbai',
      'Asia/Delhi'
    ];

    const redirectUrl = indianTimezones.includes(timezone)
      ? 'https://gglindia.com/'
      : 'https://ggl.sg';

    if (!window.location.href.startsWith(redirectUrl)) {
      console.log(`Timezone-based redirect to ${redirectUrl}`);
      window.location.href = redirectUrl;
    } else {
      console.log('Already on correct site (timezone fallback), skipping redirect');
    }

    return true;
  } catch (error) {
    console.error('Error detecting timezone:', error);
    return false;
  }
};

// Main function to run on page load (client-only)
export const handleGeoRedirect = async () => {
  if (typeof window !== 'undefined') {
    const redirected = await detectUserCountryAndRedirect();
    if (!redirected) {
      detectCountryByTimezone();
    }
  }
};
