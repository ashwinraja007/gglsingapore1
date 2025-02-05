import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="moltechlogo.png" alt="Moltech Logo" className="h-10" />
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About Us</Link>
          <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact Us</Link>
          <Link to="/quote" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get A Quote
          </Link>
        </nav>
      </div>
    </header>
  );
};
