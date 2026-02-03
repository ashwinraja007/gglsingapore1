import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import PQuickEnquiry from "@/components/home/PQuickEnquiry";

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

        <div className="grid md:grid-cols-1 gap-8">
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
                Suite No. 507 & 508, 5th Floor Fortune Center, Block-6, P.E.C.H.S, Shahrah-e-Faisal, Karachi, Pakistan.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-navy" />
                <span className="font-medium">
                  +92 21 34542881/ +92 21 34542882/ +92 21 34542883/ +92 21 34542884
                </span>
              </div>

                <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-navy" />
                <span className="font-medium">
                 info.pk@ggl.sg
                </span>
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
         
        </div>

        {/* Quick Enquiry */}
        <section className="mt-16">
          <PQuickEnquiry />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PakistanContact;
