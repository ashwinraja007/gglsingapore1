import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true" alt="Moltech Logo" className="h-12" loading="lazy" />
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