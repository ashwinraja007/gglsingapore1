import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
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
              className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center">
              <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact Us</Link>
              <Link to="/quote" className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-medium shadow-sm hover:shadow">
                Get A Quote
              </Link>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <div 
            className={`${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
          >
            <nav className="flex flex-col py-4 gap-4 border-t mt-4 border-gray-100">
              <Link to="/" className="text-gray-800 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="text-gray-800 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              <Link 
                to="/quote" 
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center font-medium shadow-sm hover:shadow w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
