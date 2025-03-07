
/**
 * Utility to enable scroll-based animations throughout the site
 */
export const setupScrollAnimations = () => {
  // Get all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Set up the intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // Optional: Stop observing the element after it becomes visible
        // observer.unobserve(entry.target);
      } else {
        // Optional: Hide element again when it leaves viewport
        // entry.target.classList.remove('visible');
      }
    });
  }, { 
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element enters the viewport
  });

  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  return () => {
    // Cleanup function
    animatedElements.forEach(element => {
      observer.unobserve(element);
    });
  };
};
