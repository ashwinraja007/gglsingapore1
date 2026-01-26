import { Suspense, lazy } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";
import PHero from "@/components/home/PHero";

const pakistanNavPaths = {
  home: "/pakistan",
  about: "/pakistan/about",
  services: "/pakistan/services",
  careers: "/pakistan/careers",
  contact: "/pakistan/contact",
  globalPresence: "/pakistan/global-presence",
};

// Lazy load other components
const PAboutUs = lazy(() => import("@/components/home/PAboutUs"));
const PServices = lazy(() => import("@/components/home/PServices"));
const PGlobalPresence = lazy(() => import("@/components/home/PGlobalPresence"));
const PQuickEnquiry = lazy(() => import("@/components/home/PQuickEnquiry"));

// Loading component
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[100px]">
    <Loader2 className="h-6 w-6 animate-spin text-brand-gold" />
  </div>
);

const PakistanHome = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Pakistan-specific header with PK nav paths */}
      <Header navPaths={pakistanNavPaths} />

      <main className="flex-grow pt-16">
        {/* Pakistan Hero */}
        <PHero />

        {/* About Pakistan section */}
        <Suspense fallback={<LoadingComponent />}>
          <PAboutUs
            learnMorePath="/pakistan/about"
            imageSrc="/lovable-uploads/1c085df7-9363-40dc-a724-ff004b473cac.png"
          />
        </Suspense>

        {/* Pakistan services */}
        <Suspense fallback={<LoadingComponent />}>
          <PServices />
        </Suspense>

        {/* Pakistan global presence block */}
        <Suspense fallback={<LoadingComponent />}>
          <PGlobalPresence />
        </Suspense>

        {/* Enquiry form */}
        <Suspense fallback={<LoadingComponent />}>
          <PQuickEnquiry />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default PakistanHome;