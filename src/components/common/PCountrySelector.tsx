import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PCountrySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-800 hover:text-brand-gold transition-colors font-medium"
      >
        <Globe size={20} />
        <span>Pakistan</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
          <button
            onClick={() => handleSelect("/")}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>Global (Singapore)</span>
          </button>
          <button
            onClick={() => handleSelect("/bangladesh")}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
          >
            <span>Bangladesh</span>
          </button>
          <div className="w-full text-left px-4 py-2 text-sm text-brand-gold bg-gray-50 flex items-center justify-between font-medium">
            <span>Pakistan</span>
            <Check size={14} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PCountrySelector;