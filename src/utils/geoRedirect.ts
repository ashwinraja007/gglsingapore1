// Detect if user is from India and redirect to gglindia.com
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

    // Service 2: ip-api.com (if first fails)
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

    // If user is from India and not already on gglindia.com, redirect them
    if (countryCode === 'IN' && !window.location.href.includes('gglindia.com')) {
      console.log('Redirecting to gglindia.com for Indian user');
      setTimeout(() => {
        window.location.href = 'https://gglindia.com/';
      }, 100);
      return true;
    }

    // If not from India, just stay on the actual website
    console.log('User is not from India. No redirect.');
    return false;

  } catch (error) {
    console.error('Error detecting user location:', error);
    return false;
  }
};
