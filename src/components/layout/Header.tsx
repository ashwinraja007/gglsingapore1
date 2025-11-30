import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import CountrySelector from "../common/CountrySelector";
import BCountrySelector from "../common/BCountrySelector"; // <- BD selector

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement | null>(null);

  // AUTO DETECT BANGLADESH MODE
  const isBangladesh = location.pathname.startsWith("/bangladesh");

  const base = isBangladesh ? "/bangladesh" : "";

  const homePath = isBangladesh ? "/bangladesh" : "/";
  const aboutPath = `${base}/about`;
  const servicesPath = `${base}/services`;
  const careersPath = `${base}/careers`;
  const contactPath = `${base}/contact`;
  const globalPresencePath = `${base}/global-presence`;

  // Sticky Header Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setIsInfoOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (path: string, scrollToId?: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname === path && scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        if (scrollToId) {
          const el = document.getElementById(scrollToId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }
      }, 400);
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
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <img
              src="/lovable-uploads/GGL.png"
              alt="Logo"
              onClick={handleLogoClick}
              className="h-16 w-auto cursor-pointer"
            />
            <div className="h-8 w-px bg-gray-200 hidden md:block" />

            <a
              href="https://1ge.sg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/1GlobalEnterprises.png"
                className="hidden md:block h-10 w-auto"
              />
            </a>
          </div>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 items-center relative">
            <button
              onClick={() => handleNavClick(homePath)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname === homePath ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>

            {/* INFO DROPDOWN */}
            <div className="relative" ref={infoRef}>
              <button
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                className={`text-gray-800 font-medium hover:text-brand-gold ${
                  [aboutPath, careersPath].includes(location.pathname)
                    ? "text-brand-gold"
                    : ""
                }`}
              >
                Info
              </button>

              {isInfoOpen && (
                <div className="absolute bg-white shadow-lg rounded-md top-full left-0 mt-2">
                  <button
                    onClick={() => handleNavClick(aboutPath)}
                    className={`block px-4 py-2 text-left hover:bg-gray-100 ${
                      location.pathname === aboutPath ? "text-brand-gold" : ""
                    }`}
                  >
                    About Us
                  </button>

                  <button
                    onClick={() => handleNavClick(careersPath)}
                    className={`block px-4 py-2 text-left hover:bg-gray-100 ${
                      location.pathname === careersPath ? "text-brand-gold" : ""
                    }`}
                  >
                    Careers
                  </button>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <button
              onClick={() => handleNavClick(servicesPath)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname.startsWith(servicesPath)
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Services
            </button>

            {/* GLOBAL PRESENCE */}
            <button
              onClick={() => handleNavClick(globalPresencePath)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname === globalPresencePath
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Global Presence
            </button>

            {/* COUNTRY SELECTOR (BD vs Global) */}
            {isBangladesh ? <BCountrySelector /> : <CountrySelector />}

            {/* CONTACT BUTTON */}
            <button
              onClick={() => handleNavClick(contactPath)}
              className="px-5 py-2 bg-[#F6B100] rounded-full text-black"
            >
              Contact / Quote
            </button>
          </nav>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`md:hidden transition-all ${
            isMobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col gap-4 border-t pt-4">
            <button onClick={() => handleNavClick(homePath)}>Home</button>

            <button onClick={() => handleNavClick(aboutPath)}>About Us</button>

            <button onClick={() => handleNavClick(servicesPath)}>
              Services
            </button>

            <button onClick={() => handleNavClick(careersPath)}>Careers</button>

            <button onClick={() => handleNavClick(contactPath)}>
              Contact Us
            </button>

            {/* Social */}
            <div className="flex items-center gap-4 py-2">
              <a href="https://www.linkedin.com/company/gglus/">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/gglusa">
                <Facebook size={20} />
              </a>
            </div>

            {/* COUNTRY SELECTOR (BD vs Global) */}
            {isBangladesh ? <BCountrySelector /> : <CountrySelector />}

            <button
              onClick={() => handleNavClick(contactPath)}
              className="px-4 py-2 bg-brand-gold rounded-md text-black"
            >
              Get A Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
