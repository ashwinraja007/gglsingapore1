import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import CountrySelector from "../common/CountrySelector";

type HeaderProps = {
  // For Bangladesh use basePath="/bangladesh"
  // For main site just use <Header /> (no prop)
  basePath?: string;
};

export const Header: React.FC<HeaderProps> = ({ basePath = "" }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement | null>(null);

  // Build paths based on basePath
  const homePath = basePath || "/";
  const aboutPath = basePath ? `${basePath}/about` : "/about";
  const servicesPath = basePath ? `${basePath}/services` : "/services";
  const careersPath = basePath ? `${basePath}/careers` : "/careers";
  const contactPath = basePath ? `${basePath}/contact` : "/contact";
  const globalPresencePath = basePath
    ? `${basePath}/global-presence`
    : "/global-presence";

  // Scroll effect for sticky header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setIsInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigate + optional scroll to ID
  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(path);
      setTimeout(() => {
        if (scrollToId) {
          const el = document.getElementById(scrollToId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, 500);
    }
  };

  const handleLogoClick = () => {
    navigate(homePath);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white py-2 shadow-md" : "bg-white/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/GGL.png"
              alt="GGL Logo"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer transition-all duration-300 object-fill"
            />
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <a
              href="https://1ge.sg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit 1 Global Enterprises Website"
            >
              <img
                src="/1GlobalEnterprises.png"
                alt="1 Global Enterprises Logo"
                className="hidden md:block h-10 w-auto object-contain transition-all duration-300"
              />
            </a>
          </div>

          {/* Hamburger for Mobile */}
          <button
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-md p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center relative">
            <button
              onClick={() => handleNavClick(homePath)}
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors py-1 ${
                location.pathname === homePath ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>

            {/* Info Dropdown */}
            <div className="relative" ref={infoRef}>
              <button
                onClick={() => setIsInfoOpen((prev) => !prev)}
                className={`text-gray-800 hover:text-brand-gold font-medium transition-colors py-1 ${
                  [aboutPath, careersPath].includes(location.pathname)
                    ? "text-brand-gold"
                    : ""
                }`}
              >
                Info
              </button>
              {isInfoOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md z-50 min-w-[160px]">
                  <button
                    onClick={() => {
                      handleNavClick(aboutPath);
                      setIsInfoOpen(false);
                    }}
                    className={`block px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100 ${
                      location.pathname === aboutPath ? "text-brand-gold" : ""
                    }`}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => {
                      handleNavClick(careersPath);
                      setIsInfoOpen(false);
                    }}
                    className={`block px-4 py-2 w-full text-left text-gray-800 hover:bg-gray-100 ${
                      location.pathname === careersPath ? "text-brand-gold" : ""
                    }`}
                  >
                    Careers
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick(servicesPath)}
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors py-1 ${
                location.pathname.startsWith(servicesPath)
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick(globalPresencePath)}
              className={`text-gray-800 hover:text-brand-gold font-medium transition-colors py-1 ${
                location.pathname === globalPresencePath
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Global Presence
            </button>

            <CountrySelector />

            <button
              onClick={() => handleNavClick(contactPath, "contact-form")}
              className="px-5 py-2 bg-[#F6B100] text-black rounded-full hover:bg-[#FFCC33] transition font-medium"
            >
              Contact / Quote
            </button>
          </nav>
        </div>

        {/* Mobile Nav */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="flex flex-col gap-4 border-t mt-4 border-gray-100">
            <button
              onClick={() => handleNavClick(homePath)}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === homePath ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick(aboutPath)}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === aboutPath ? "text-brand-gold" : ""
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick(servicesPath)}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname.startsWith(servicesPath)
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick(careersPath)}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === careersPath ? "text-brand-gold" : ""
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavClick(contactPath)}
              className={`text-gray-800 hover:text-brand-gold font-medium ${
                location.pathname === contactPath ? "text-brand-gold" : ""
              }`}
            >
              Contact Us
            </button>

            <div className="flex items-center gap-4 py-2">
              <a
                href="https://www.linkedin.com/company/gglus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-gold transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.facebook.com/gglusa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>

            <CountrySelector />

            <button
              onClick={() => handleNavClick(contactPath, "contact-form")}
              className="px-4 py-2 bg-brand-gold text-brand-navy rounded-md hover:bg-amber-500 text-center font-medium w-full"
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
