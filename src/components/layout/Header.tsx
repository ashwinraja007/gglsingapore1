
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
        : isHomePage 
          ? 'bg-transparent py-4' 
          : 'bg-white py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo section with responsive layout */}
          <div className="flex md:flex-row flex-col items-center md:items-center gap-2 md:gap-4">
            <img src="moltech logo.png" alt="Moltech Logo" className="h-11 md:h-16 w-auto object-fill transition-all duration-300" />
            <img 
              src="/1GlobalEnterprises.png" 
              alt="1 Global Enterprises Logo" 
              className={`h-10 md:h-16 w-auto object-contain transition-all duration-300 ${
                isHomePage && !scrolled 
                  ? 'bg-white/80 p-1 rounded' 
                  : ''
              }`}
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 rounded-full transition-all ${
              isHomePage && !scrolled 
                ? 'text-white bg-white/20 hover:bg-white/30' 
                : 'text-gray-800 hover:bg-gray-100'
            }`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link 
              to="/" 
              className={`
                ${isHomePage && !scrolled ? 'text-white' : 'text-gray-800'} 
                hover:opacity-80 font-medium transition duration-300 relative overflow-hidden group
              `}
            >
              Home
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                isHomePage && !scrolled ? 'bg-white' : 'bg-brand-blue-600'
              }`}></span>
            </Link>
            <Link 
              to="/about" 
              className={`
                ${isHomePage && !scrolled ? 'text-white' : 'text-gray-800'} 
                hover:opacity-80 font-medium transition duration-300 relative overflow-hidden group
              `}
            >
              About Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                isHomePage && !scrolled ? 'bg-white' : 'bg-brand-blue-600'
              }`}></span>
            </Link>
            <Link 
              to="/services" 
              className={`
                ${isHomePage && !scrolled ? 'text-white' : 'text-gray-800'} 
                hover:opacity-80 font-medium transition duration-300 relative overflow-hidden group
              `}
            >
              Services
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                isHomePage && !scrolled ? 'bg-white' : 'bg-brand-blue-600'
              }`}></span>
            </Link>
            <Link 
              to="/contact" 
              className={`
                ${isHomePage && !scrolled ? 'text-white' : 'text-gray-800'} 
                hover:opacity-80 font-medium transition duration-300 relative overflow-hidden group
              `}
            >
              Contact Us
              <span className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 ${
                isHomePage && !scrolled ? 'bg-white' : 'bg-brand-blue-600'
              }`}></span>
            </Link>
            <Link 
              to="/quote" 
              className={`
                px-5 py-2.5 rounded-full font-medium transition-all duration-300 btn-hover
                ${isHomePage && !scrolled 
                  ? 'bg-white text-brand-blue-700 hover:bg-opacity-90' 
                  : 'bg-brand-blue-600 text-white hover:bg-brand-blue-700'
                }
              `}
            >
              Get A Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation - Improved */}
        <div 
          className={`
            md:hidden mt-4 rounded-xl shadow-xl overflow-hidden transition-all duration-300 
            ${isMobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
            ${isHomePage && !scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-white'}
          `}
        >
          <nav className="flex flex-col p-4">
            <Link 
              to="/" 
              className={`py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                isHomePage && !scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                isHomePage && !scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                isHomePage && !scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                isHomePage && !scrolled 
                  ? 'text-white hover:bg-white/10' 
                  : 'text-gray-800 hover:bg-gray-100'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link 
              to="/quote" 
              className={`
                mt-2 py-3 px-4 rounded-lg font-medium transition-all duration-200 text-center
                ${isHomePage && !scrolled 
                  ? 'bg-white text-brand-blue-700' 
                  : 'bg-brand-blue-600 text-white'
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get A Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
