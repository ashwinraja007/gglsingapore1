import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import QuickEnquiry from "@/components/home/QuickEnquiry";

const pakistanNavPaths = {
  home: "/pakistan",
  about: "/pakistan/about",
  services: "/pakistan/services",
  careers: "/pakistan/careers",
  contact: "/pakistan/contact",
  globalPresence: "/pakistan/global-presence",
};

const PakistanContact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header navPaths={pakistanNavPaths} />

      <main className="flex-grow pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-center mb-12 text-brand-navy">
          Contact Us - Pakistan
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Karachi Office */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">
              Karachi Office
            </h2>

            {/* Karachi Map */}
            <div className="mb-6 rounded-lg overflow-hidden border">
              <iframe
                title="Karachi Office Map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1reXoq38Nt5GKCCpv-f_cb1UwG-Ko30o&ehbc=2E312F&noprof=1&ll=24.870120920877522%2C67.04667544386298&z=14"
                className="absolute left-0 top-[-52px] w-full h-[540px] border-0"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-brand-navy flex-shrink-0" />
                <p className="leading-relaxed">
                  Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal,
                  Block 6, PECHS, Karachi, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <p className="font-medium">
                  +92-300-8282511 / +92-21-34302281-5
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <a
                  href="mailto:khalid.pk@globalconsol.com"
                  className="hover:text-brand-gold transition-colors font-medium"
                >
                  khalid.pk@globalconsol.com
                </a>
              </div>
            </div>
          </div>

          {/* Lahore Office */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">
              Lahore Office
            </h2>

            {/* Lahore Map */}
            <div className="mb-6 rounded-lg overflow-hidden border">
              <iframe
                title="Lahore Office Map"
                src="https://www.google.com/maps/d/u/0/embed?mid=1ObHyVRDeNaWR7qOyMHKqqvqWbqjsCVk&ehbc=2E312F&noprof=1&ll=31.531188300000032%2C74.35251260000001&z=17"
                className="absolute left-0 top-[-52px] w-full h-[540px] border-0"
                loading="lazy"
              />
            </div>

            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 text-brand-navy flex-shrink-0" />
                <p className="leading-relaxed">
                  Office # 301, 3rd Floor, Gulberg Arcade Main Market,
                  Gulberg 2, Lahore, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <p className="font-medium">
                  +92 42-35782306 / 07 / 08
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-brand-navy flex-shrink-0" />
                <a
                  href="mailto:shazia.pklhe@globalconsol.com"
                  className="hover:text-brand-gold transition-colors font-medium"
                >
                  shazia.pklhe@globalconsol.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Enquiry Section */}
        <section className="mt-16">
          <QuickEnquiry />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PakistanContact;
