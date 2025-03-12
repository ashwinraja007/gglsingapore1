
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
 return (
    <header className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className={`bg-white ${scrolled ? '' : 'bg-opacity-95'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src="moltech logo.png" alt="Moltech Logo" className="h-10 md:h-14 w-auto object-fill transition-all duration-300" />
              <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
              <img 
                src="/1GlobalEnterprises.png" 
                alt="1 Global Enterprises Logo" 
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-gray focus:outline-none focus:ring-2 focus:ring-brand-green rounded-md p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" /> 
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                location.pathname === '/' ? 'text-brand-green' : 'text-brand-gray'
              } animated-underline`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                location.pathname === '/about' ? 'text-brand-green' : 'text-brand-gray'
              } animated-underline`}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                location.pathname.includes('/services') ? 'text-brand-green' : 'text-brand-gray'
              } animated-underline`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-brand-green ${
                location.pathname === '/contact' ? 'text-brand-green' : 'text-brand-gray'
              } animated-underline`}
            >
              Contact Us
            </Link>
            <Link 
              to="/quote" 
              className="px-5 py-2 rounded-full hover:shadow-md transition-all duration-300 font-medium text-sm bg-brand-green text-white hover:bg-brand-darkGreen"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col py-4 gap-5 mt-4 border-t border-gray-100 bg-white">
                <Link 
                  to="/" 
                  className={`text-base font-medium ${
                    location.pathname === '/' ? 'text-brand-green' : 'text-brand-gray'
                  } hover:text-brand-green`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className={`text-base font-medium ${
                    location.pathname === '/about' ? 'text-brand-green' : 'text-brand-gray'
                  } hover:text-brand-green`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/services" 
                  className={`text-base font-medium ${
                    location.pathname.includes('/services') ? 'text-brand-green' : 'text-brand-gray'
                  } hover:text-brand-green`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/contact" 
                  className={`text-base font-medium ${
                    location.pathname === '/contact' ? 'text-brand-green' : 'text-brand-gray'
                  } hover:text-brand-green`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link 
                  to="/quote" 
                  className="px-4 py-2.5 bg-brand-green text-white rounded-md hover:bg-brand-darkGreen text-center font-medium shadow-sm hover:shadow-md w-full transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get A Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
