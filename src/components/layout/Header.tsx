
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
    <header className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/GGL.png" 
              alt="GGL Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300" 
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" /> 
            ) : (
              <Menu className="h-5 w-5 text-gray-800" />
            )}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
            <Link 
              to="/" 
              className="text-sm font-medium transition-colors text-gray-800 hover:text-green-600"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium transition-colors text-gray-800 hover:text-green-600"
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium transition-colors text-gray-800 hover:text-green-600"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium transition-colors text-gray-800 hover:text-green-600"
            >
              Contact Us
            </Link>
            <Link 
              to="/quote" 
              className="px-4 py-1.5 rounded-full hover:shadow transition font-medium text-sm bg-green-600 text-white hover:bg-green-700"
            >
              Get A Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col py-4 gap-4 border-t mt-4 border-gray-100 bg-white">
            <Link to="/" className="text-gray-800 hover:text-green-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-green-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-green-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link 
              to="/quote" 
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-center font-medium shadow-sm hover:shadow w-full"
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
