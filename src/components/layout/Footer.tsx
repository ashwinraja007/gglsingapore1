export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 md:pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img 
              src="/moltech1.png" 
              alt="Moltech Logo" 
              className="h-14 md:h-16 mb-6" 
              loading="lazy" 
            />
            <p className="text-sm md:text-base text-gray-400">
              MOLTECH LTD, based in London, is a global freight forwarder offering premium logistics services, 
              backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Navigation</h3>
            <div className="flex flex-col gap-3 md:gap-4">
              <a href="/" className="text-sm md:text-base text-gray-400 hover:text-white">Home</a>
              <a href="/about" className="text-sm md:text-base text-gray-400 hover:text-white">About</a>
              <a href="/services" className="text-sm md:text-base text-gray-400 hover:text-white">Services</a>
              <a href="/contact" className="text-sm md:text-base text-gray-400 hover:text-white">Contact us</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Useful Links</h3>
            <div className="flex flex-col gap-3 md:gap-4">
              <a href="/customer-login" className="text-sm md:text-base text-gray-400 hover:text-white">Customer Login</a>
              <a href="/agent-login" className="text-sm md:text-base text-gray-400 hover:text-white">Agent Login</a>
              <a href="/tracking" className="text-sm md:text-base text-gray-400 hover:text-white">Tracking</a>
              <a href="/schedule" className="text-sm md:text-base text-gray-400 hover:text-white">Sailing Schedule</a>
              <a href="/converters" className="text-sm md:text-base text-gray-400 hover:text-white">Converters</a>
              <a href="/dimensions" className="text-sm md:text-base text-gray-400 hover:text-white">Dimensions</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6">Contact Us</h3>
            <div className="text-sm md:text-base text-gray-400">
              <p className="mb-4">167-169 Great Portland Street,<br />5th Floor, London W1W 5PF, UK</p>
              <p className="mb-2">+44 (0) 203 393 9508</p>
              <p className="mb-2">+44 (0) 203 393 1998</p>
              <p className="mb-2">operations@moltech</p>
              <p>+44 (0) 730 585 6612</p>
            </div>
          </div>
        </div>
        
        {/* White background area for the last image */}
        <div className="bg-white py-6 rounded-t">
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/65180320-fa21-4a42-a9c9-2888c73ef7f8.png"
              alt="1 Global Enterprises, Singapore"
              className="h-12 md:h-16 w-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
