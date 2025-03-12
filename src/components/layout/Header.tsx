import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section - Clicking redirects to Home */}
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/lovable-uploads/GGL.png"
              alt="GGL Logo"
              className="h-10 w-auto object-fill transition-all duration-300"
            />
            <div className="h-8 w-px bg-gray-200 hidden md:block"></div>
            <img
              src="/1GlobalEnterprises.png"
              alt="1 Global Enterprises Logo"
              className="h-8 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              to="/"
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1 ${
                location.pathname === "/" ? "text-brand-gold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1 ${
                location.pathname === "/about" ? "text-brand-gold" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1 ${
                location.pathname.includes("/services") ? "text-brand-gold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors relative animated-underline py-1 ${
                location.pathname === "/contact" ? "text-brand-gold" : ""
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 bg-[#F6B100] text-black rounded-full hover:bg-[#FFCC33] transition font-medium shadow-sm hover:shadow-gold-glow"
            >
              Get A Quote
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col py-4 gap-4 border-t mt-4 border-gray-100">
            <Link
              to="/"
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === "/" ? "text-brand-gold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === "/about" ? "text-brand-gold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname.includes("/services") ? "text-brand-gold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === "/contact" ? "text-brand-gold" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-brand-gold text-brand-navy rounded-md hover:bg-amber-500 text-center font-medium shadow-sm hover:shadow-gold-glow w-full"
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
