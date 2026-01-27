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
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">
              Karachi Office
            </h2>

            {/* Address Box */}
            <div className="border rounded-lg p-4 mb-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-brand-navy" />
                <p>
                  Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal,
                  Block 6, PECHS, Karachi, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-navy" />
                <span className="font-medium">
                  +92-300-8282511 / +92-21-34302281-5
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-navy" />
                <a
                  href="mailto:khalid.pk@globalconsol.com"
                  className="font-medium hover:text-brand-gold"
                >
                  khalid.pk@globalconsol.com
                </a>
              </div>
            </div>

            {/* Clean Google Map */}
            <div className="rounded-lg overflow-hidden border">
              <iframe
                title="Karachi Office Map"
                src="https://www.google.com/maps?q=Fortune+Center+Shahrah-e-Faisal+Karachi&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Lahore Office */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">
              Lahore Office
            </h2>

            {/* Address Box */}
            <div className="border rounded-lg p-4 mb-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-brand-navy" />
                <p>
                  Office # 301, 3rd Floor, Gulberg Arcade Main Market,
                  Gulberg 2, Lahore, Pakistan
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-navy" />
                <span className="font-medium">
                  +92 42-35782306 / 07 / 08
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-navy" />
                <a
                  href="mailto:shazia.pklhe@globalconsol.com"
                  className="font-medium hover:text-brand-gold"
                >
                  shazia.pklhe@globalconsol.com
                </a>
              </div>
            </div>

            {/* Clean Google Map */}
            <div className="rounded-lg overflow-hidden border">
              <iframe
                title="Lahore Office Map"
                src="https://www.google.com/maps?q=Gulberg+Arcade+Main+Market+Lahore&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Quick Enquiry */}
        <section className="mt-16">
          <QuickEnquiry />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PakistanContact;
