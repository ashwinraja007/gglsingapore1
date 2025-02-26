import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo section with responsive layout */}
          <div className="flex md:flex-row flex-col items-center md:items-center gap-2 md:gap-4">
            <img src="moltech logo.png" alt="Moltech Logo" className="h-11 md:h-19 w-auto object-fill" />
            <img 
              src="/1GlobalEnterprises.png" 
              alt="1 Global Enterprises Logo" 
              className={`h-10 md:h-19 w-auto object-contain ${isHomePage ? 'bg-white/80 p-1 rounded' : ''}`}
            />
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-gray-600`}>Home</Link>
            <Link to="/about" className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-gray-600`}>About Us</Link>
            <Link to="/services" className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-gray-600`}>Services</Link>
            <Link to="/contact" className={`${isHomePage ? 'text-white' : 'text-gray-800'} hover:text-gray-600`}>Contact Us</Link>
            <Link to="/quote" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-center">
              Get A Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-white shadow-lg rounded-lg p-4`}>
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600">Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600">Contact Us</Link>
            <Link to="/quote" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center">
              Get A Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
