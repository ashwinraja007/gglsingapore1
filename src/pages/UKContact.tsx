import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKQuickEnquiry from "@/components/home/UKQuickEnquiry";
import { MapPin, Phone } from "lucide-react";

const ukNavPaths = {
  home: "/uk",
  about: "/uk/about",
  services: "/uk/services",
  careers: "/uk/careers",
  contact: "/uk/contact",
  globalPresence: "/uk/global-presence",
};

const UKContact = () => {
  return (
    <>
      <Header navPaths={ukNavPaths} />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-brand-navy">Contact Us - UK</h1>
          
          <div className="max-w-3xl mx-auto mb-12 bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-600">167-169 Great Portland Street 5th Floor,<br/>London W1W 5PF, United Kingdom</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-brand-gold w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+44 (0) 203 393 9508</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 h-80">
              <iframe
                title="London Office Map"
                src="https://www.google.com/maps?q=167-169+Great+Portland+Street+London+W1W+5PF&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          
          <UKQuickEnquiry />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UKContact;