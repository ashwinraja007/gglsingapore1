// Utility for handling IP-based geographic redirection
export const detectUserCountryAndRedirect = async () => {
  try {
    let countryCode = '';

    // Service 1: ipapi.co
    try {
      const response = await fetch('https://ipapi.co/json/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        countryCode = data.country_code;
        console.log('Detected country from ipapi.co:', countryCode);
      }
    } catch (error) {
      console.log('ipapi.co failed, trying alternative service');
    }

    // Fallback: ip-api.com (HTTPS to avoid mixed content)
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

    // Final redirection based on country
    const redirectUrl = countryCode === 'IN'
      ? 'https://gglindia.com/'
      : 'https://ggl.sg';

    console.log(`Redirecting user to ${redirectUrl}`);

    setTimeout(() => {
      window.location.href = redirectUrl;
    }, 100);

    return true; // Indicates redirect will happen
  } catch (error) {
    console.error('Error detecting user location:', error);
    return false;
  }
};

// Fallback method using browser's timezone
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

    console.log(`Timezone-based redirect to ${redirectUrl}`);
    window.location.href = redirectUrl;
    return true;
  } catch (error) {
    console.error('Error detecting timezone:', error);
    return false;
  }
};

// Main function to run on page load
export const handleGeoRedirect = async () => {
  const redirected = await detectUserCountryAndRedirect();
  if (!redirected) {
    detectCountryByTimezone();
  }
};
