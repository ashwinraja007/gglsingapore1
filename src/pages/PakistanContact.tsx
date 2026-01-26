import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

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
         <h1 className="text-3xl font-bold text-center mb-12 text-brand-navy">Contact Us - Pakistan</h1>
         <div className="grid md:grid-cols-2 gap-8">
            {/* Karachi */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">Karachi Office</h2>
                <div className="space-y-5 text-gray-700">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 mt-1 text-brand-navy flex-shrink-0" />
                        <p className="leading-relaxed">Suite No.301, 3rd Floor, Fortune Center, Shahrah-e-Faisal, Block 6, PECHS, Karachi, Pakistan</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-brand-navy flex-shrink-0" />
                        <p className="font-medium">+92-300-8282511 / +92-21-34302281-5</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-brand-navy flex-shrink-0" />
                        <a href="mailto:khalid.pk@globalconsol.com" className="hover:text-brand-gold transition-colors font-medium">khalid.pk@globalconsol.com</a>
                    </div>
                </div>
            </div>

            {/* Lahore */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <h2 className="text-2xl font-bold mb-6 text-brand-gold border-b pb-2">Lahore Office</h2>
                <div className="space-y-5 text-gray-700">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 mt-1 text-brand-navy flex-shrink-0" />
                        <p className="leading-relaxed">Office # 301, 3rd Floor, Gulberg Arcade Main Market, Gulberg 2, Lahore, Pakistan</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-brand-navy flex-shrink-0" />
                        <p className="font-medium">+92 42-35782306/07/08</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-brand-navy flex-shrink-0" />
                        <a href="mailto:shazia.pklhe@globalconsol.com" className="hover:text-brand-gold transition-colors font-medium">shazia.pklhe@globalconsol.com</a>
                    </div>
                </div>
            </div>
         </div>
      </main>
      <Footer />
    </div>
  );
};
export default PakistanContact;