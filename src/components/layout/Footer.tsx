
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/GGL.png" 
              alt="GGL Logo" 
              className="h-14 mb-3 bg-white p-2 rounded-lg" 
              loading="lazy" 
            />
            <p className="font-medium text-white mb-2"></p>
            <p className="text-sm md:text-base text-gray-400">
              GGL is a global freight forwarder offering premium logistics services, 
              backed by a team with over 25 years of expertise in international and domestic transportation.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-2">Navigation</h3>
            <div className="flex flex-col gap-3">
              <a href="/" className="text-sm text-gray-400 hover:text-green-400">Home</a>
              <a href="/about" className="text-sm text-gray-400 hover:text-green-400">About</a>
              <a href="/services" className="text-sm text-gray-400 hover:text-green-400">Services</a>
              <a href="/contact" className="text-sm text-gray-400 hover:text-green-400">Contact us</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Useful Links</h3>
            <div className="flex flex-col gap-3">
              <a href="/customer-login" className="text-sm text-gray-400 hover:text-green-400">Customer Login</a>
              <a href="/agent-login" className="text-sm text-gray-400 hover:text-green-400">Agent Login</a>
              <a href="/tracking" className="text-sm text-gray-400 hover:text-green-400">Tracking</a>
              <a href="/schedule" className="text-sm text-gray-400 hover:text-green-400">Sailing Schedule</a>
              <a href="/converters" className="text-sm text-gray-400 hover:text-green-400">Converters</a>
              <a href="/dimensions" className="text-sm text-gray-400 hover:text-green-400">Dimensions</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-2">Contact Us</h3>
            <div className="space-y-6">
              <div className="text-sm text-gray-400">
                <p className="font-medium text-white mb-2">Australia Office</p>
                <p className="mb-3">Suite 5, 7-9 Mallet Road,<br />Tullamarine, Victoria, 3043</p>
                <p className="mb-1">Mob: +61 432254969</p>
                <p className="mb-1">Tel: +61 388205157</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* White background container for the 1 Global Enterprises logo */}
        <div className="mt-5 w-full bg-white py-3 px-4 rounded-md flex justify-center">
          <img 
            src="/lovable-uploads/65180320-fa21-4a42-a9c9-2888c73ef7f8.png"
            alt="1 Global Enterprises, Singapore"
            className="h-8 w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
};
