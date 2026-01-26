import { Suspense, lazy } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";
import BHero from "@/components/home/BHero";

const pakistanNavPaths = {
  home: "/pakistan",
  about: "/pakistan/about",
  services: "/pakistan/services",
  careers: "/pakistan/careers",
  contact: "/pakistan/contact",
  globalPresence: "/pakistan/global-presence",
};

// Lazy load other components
const BAboutUs = lazy(() => import("@/components/home/BAboutUs"));
const BServices = lazy(() => import("@/components/home/BServices"));
const BGlobalPresence = lazy(() => import("@/components/home/BGlobalPresence"));
const BQuickEnquiry = lazy(() => import("@/components/home/BQuickEnquiry"));

// Loading component
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[100px]">
    <Loader2 className="h-6 w-6 animate-spin text-brand-gold" />
  </div>
);

const pakistanHome = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* pakistan-specific header with BD nav paths */}
      <Header navPaths={pakistanNavPaths} />

      <main className="flex-grow pt-16">
        {/* pakistan Hero */}
        <PHero />

        {/* About pakistan section */}
        <Suspense fallback={<LoadingComponent />}>
          <PAboutUs
            learnMorePath="/pakistan/about"
            imageSrc="/lovable-uploads/1c085df7-9363-40dc-a724-ff004b473cac.png"
          />
        </Suspense>

        {/* pakistan services */}
        <Suspense fallback={<LoadingComponent />}>
          <PServices
            servicesPath="/pakistan/services"
            cardLinkPrefix="/pakistan/services"
            singleDestination
          />
        </Suspense>

        {/* pakistan global presence block */}
        <Suspense fallback={<LoadingComponent />}>
          <PGlobalPresence linkPath="/pakistan/global-presence" />
        </Suspense>

        {/* Common enquiry form (can be used for BD as well) */}
        <Suspense fallback={<LoadingComponent />}>
          <PQuickEnquiry />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default pakistanHome;
