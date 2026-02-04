import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Linkedin, Facebook } from "lucide-react";
import CountrySelector from "../common/CountrySelector";
import BCountrySelector from "../common/BCountrySelector"; // <- BD selector
import PCountrySelector from "../common/PCountrySelector"; // <- PK selector
import UKCountrySelector from "../common/UKCountrySelector";
import MCountrySelector from "../common/MCountrySelector";// <- UK selector
import { useCountryNavigation } from "@/hooks/useCountryNavigation";

interface NavPaths {
  home: string;
  about: string;
  services: string;
  careers: string;
  contact: string;
  globalPresence: string;
}

export const Header = ({ navPaths }: { navPaths?: NavPaths }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isBangladesh, isPakistan, isUK, isMalaysia, navPaths: autoNavPaths } = useCountryNavigation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const paths: NavPaths = navPaths || autoNavPaths;

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
    navigate(paths.home);
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
              alt="GGL Logo"
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
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-6 items-center relative">
            <button
              onClick={() => handleNavClick(paths.home)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname === paths.home ? "text-brand-gold" : ""
              }`}
            >
              Home
            </button>

            {/* INFO DROPDOWN */}
            <div className="relative" ref={infoRef}>
              <button
                onClick={() => setIsInfoOpen(!isInfoOpen)}
                className={`text-gray-800 font-medium hover:text-brand-gold ${
                  [paths.about, paths.careers].includes(location.pathname)
                    ? "text-brand-gold"
                    : ""
                }`}
              >
                Info
              </button>

              {isInfoOpen && (
                <div className="absolute bg-white shadow-lg rounded-md top-full left-0 mt-2">
                  <button
                    onClick={() => handleNavClick(paths.about)}
                    className={`block px-4 py-2 text-left hover:bg-gray-100 ${
                      location.pathname === paths.about ? "text-brand-gold" : ""
                    }`}
                  >
                    About Us
                  </button>

                  <button
                    onClick={() => handleNavClick(paths.careers)}
                    className={`block px-4 py-2 text-left hover:bg-gray-100 ${
                      location.pathname === paths.careers ? "text-brand-gold" : ""
                    }`}
                  >
                    Careers
                  </button>
                </div>
              )}
            </div>

            {/* SERVICES */}
            <button
              onClick={() => handleNavClick(paths.services)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname.startsWith(paths.services)
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Services
            </button>

            {/* GLOBAL PRESENCE */}
            <button
              onClick={() => handleNavClick(paths.globalPresence)}
              className={`text-gray-800 font-medium hover:text-brand-gold ${
                location.pathname === paths.globalPresence
                  ? "text-brand-gold"
                  : ""
              }`}
            >
              Global Presence
            </button>

            {/* COUNTRY SELECTOR (BD vs PK vs Global) */}
            {isBangladesh ? (
              <BCountrySelector />
            ) : isPakistan ? (
              <PCountrySelector />
            ) : isUK ? (
              <UKCountrySelector />
            ) : isMalaysia ? (
              <MCountrySelector /> 
            ) : (
              <CountrySelector />
            )}

            {/* CONTACT BUTTON */}
            <button
              onClick={() => handleNavClick(paths.contact)}
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
            <button onClick={() => handleNavClick(paths.home)}>Home</button>

            <button onClick={() => handleNavClick(paths.about)}>About Us</button>

            <button onClick={() => handleNavClick(paths.services)}>
              Services
            </button>

            <button onClick={() => handleNavClick(paths.careers)}>Careers</button>

            <button onClick={() => handleNavClick(paths.contact)}>
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

            {/* COUNTRY SELECTOR (BD vs PK vs Global) */}
            {isBangladesh ? (
              <BCountrySelector />
            ) : isPakistan ? (
              <PCountrySelector />
            ) : isUK ? (
              <UKCountrySelector />
            ) : isMalaysia ? (
              <MCountrySelector />
            ) : (
              <CountrySelector />
            )}

            <button
              onClick={() => handleNavClick(paths.contact)}
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
