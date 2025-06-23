import { Suspense, lazy } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Loader2 } from "lucide-react";
import Hero from "@/components/home/Hero";
import { useGeoRedirect } from "@/hooks/useGeoRedirect";

// Lazy load other components
const AboutUs = lazy(() => import("@/components/home/AboutUs"));
const Services = lazy(() => import("@/components/home/Services"));
const GlobalPresence = lazy(() => import("@/components/home/GlobalPresence"));
const QuickEnquiry = lazy(() => import("@/components/home/QuickEnquiry"));

// Loading component
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-[100px]">
    <Loader2 className="h-6 w-6 animate-spin text-brand-gold" />
  </div>
);

// Redirect loading component
const RedirectingComponent = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <div className="text-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-gold mx-auto mb-4" />
      <p className="text-lg font-medium text-gray-700">Redirecting to GGL India...</p>
      <p className="text-sm text-gray-500 mt-2">Please wait while we take you to the India website</p>
    </div>
  </div>
);

const Index = () => {
  const { isRedirecting } = useGeoRedirect();

  // Show redirecting screen if redirect is in progress
  if (isRedirecting) {
    return <RedirectingComponent />;
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        
        <Suspense fallback={<LoadingComponent />}>
          <AboutUs />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <GlobalPresence />
        </Suspense>
        
        <Suspense fallback={<LoadingComponent />}>
          <QuickEnquiry />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
