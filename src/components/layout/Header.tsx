
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
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/lovable-uploads/GGL.png" alt="GGL Logo" className={`${scrolled ? 'h-10' : 'h-14'} w-auto object-fill transition-all duration-300`} />
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <img src="/1GlobalEnterprises.png" alt="1 Global Enterprises Logo" className={`${scrolled ? 'h-8' : 'h-10'} w-auto object-contain transition-all duration-300`} />
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1">About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1">Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1">Contact Us</Link>
            <Link to="/quote" className="px-5 py-2 bg-brand-gold text-brand-navy rounded-full hover:bg-amber-500 transition font-medium shadow-sm hover:shadow-gold-glow animate-pulse-slow">
              Get A Quote
            </Link>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-300 ease-in-out`}>
          <nav className="flex flex-col py-4 gap-4 border-t mt-4 border-gray-100">
            <Link to="/" className="text-gray-800 hover:text-brand-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-brand-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-brand-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="text-gray-800 hover:text-brand-gold font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link to="/quote" className="px-4 py-2 bg-brand-gold text-brand-navy rounded-md hover:bg-amber-500 text-center font-medium shadow-sm hover:shadow-gold-glow w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Get A Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
