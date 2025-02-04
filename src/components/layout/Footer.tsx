export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/957204e42a87db3fe346da194eef3800c94a260c35cdf12717dcb048ac4216c0?placeholderIfAbsent=true" alt="Moltech Logo" className="h-12 mb-6" loading="lazy" />
            <p className="text-gray-400">
              MOLTECH (UK) LTD, based in London, is a global freight forwarder offering premium logistics services, 
              backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Navigation</h3>
            <div className="flex flex-col gap-4">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <a href="/about" className="text-gray-400 hover:text-white">About</a>
              <a href="/services" className="text-gray-400 hover:text-white">Services</a>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact us</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <div className="flex flex-col gap-4">
              <a href="/customer-login" className="text-gray-400 hover:text-white">Customer Login</a>
              <a href="/agent-login" className="text-gray-400 hover:text-white">Agent Login</a>
              <a href="/tracking" className="text-gray-400 hover:text-white">Tracking</a>
              <a href="/schedule" className="text-gray-400 hover:text-white">Sailing Schedule</a>
              <a href="/converters" className="text-gray-400 hover:text-white">Converters</a>
              <a href="/dimensions" className="text-gray-400 hover:text-white">Dimensions</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="text-gray-400">
              <p className="mb-4">167-169 Great Portland Street,<br />5th Floor, London W1W 5PF, UK</p>
              <p className="mb-2">+44 (0) 203 393 9508</p>
              <p className="mb-2">+44 (0) 203 393 1998</p>
              <p className="mb-2">operations@moltech.uk</p>
              <p>+44 (0) 730 585 6612</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          © 2022 MOLTECH (UK) LTD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};