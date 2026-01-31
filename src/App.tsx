
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Transportation from "./pages/services/Transportation";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import BangladeshHome from "./pages/BangladeshHome";
import BangladeshAbout from "./pages/BangladeshAbout";
import BangladeshServices from "./pages/BangladeshServices";
import BangladeshContact from "./pages/BangladeshContact";
import BangladeshGlobalPresence from "./pages/BangladeshGlobalPresence";

import PakistanHome from "./pages/PakistanHome";
import PakistanContact from "./pages/PakistanContact";
import PakistanAbout from "./pages/pakistanaboutus";
import PakistanCareers from "./pages/pakistancareers";
import PakistanServices from "./pages/PakistanServices";
import PakistanGlobalPresence from "./pages/PakistanGlobalPresence";

import UKHome from "./pages/UKHome";
import UKContact from "./pages/UKContact";
import UKAbout from "./pages/UKAbout";
import UKServices from "./pages/UKServices";
import UKGlobalPresence from "./pages/UKGlobalPresence";
import UKCareers from "./pages/UKCareers";

import MalaysiaHome from "./pages/MalaysiaHome";
import MalaysiaContact from "./pages/MalaysiaContact";
import MalaysiaAbout from "./pages/MalaysiaAbout";
import MalaysiaServices from "./pages/MalaysiaServices";
import MalaysiaGlobalPresence from "./pages/MalaysiaGlobalPresence";
import MalaysiaCareers from "./pages/MalaysiaCareers";

import AdminDashboard from "./pages/admin/AdminDashboard";
import GlobalPresence from "./pages/GlobalPresence";
import { ScrollToTop } from "./components/common/ScrollToTop";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// App component as a regular function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Redirect routes */}
            <Route path="/india" element={<Navigate to="/" replace />} />
            <Route path="/index" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsOfUse />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
            
            <Route path="/bangladesh" element={<BangladeshHome />} />
            <Route path="/bangladesh/home" element={<BangladeshHome />} />
            <Route path="/bangladesh/contact" element={<BangladeshContact />} />
            <Route path="/bangladesh/about" element={<BangladeshAbout />} />
            <Route path="/bangladesh/careers" element={<Careers />} />
            <Route
              path="/bangladesh/services"
              element={<BangladeshServices />}
            />
            <Route
              path="/bangladesh/global-presence"
              element={<BangladeshGlobalPresence />}
            />
            {/* Bangladesh Service Routes */}
            <Route path="/bangladesh/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/bangladesh/contact" element={<BangladeshContact />} />
           
            {/* Pakistan Routes */}
            <Route path="/pakistan" element={<PakistanHome />} />
            <Route path="/pakistan/about" element={<PakistanAbout />} />
            <Route path="/pakistan/services" element={<PakistanServices />} />
            <Route path="/pakistan/careers" element={<PakistanCareers />} />
            <Route path="/pakistan/contact" element={<PakistanContact />} />
            <Route path="/pakistan/global-presence" element={<PakistanGlobalPresence />} />

            {/* Pakistan Service Routes */}
            <Route path="/pakistan/services/:serviceId" element={<ServiceDetail />} />

            {/* UK Routes */}
            <Route path="/uk" element={<UKHome />} />
            <Route path="/uk/about" element={<UKAbout />} />
            <Route path="/uk/services" element={<UKServices />} />
            <Route path="/uk/contact" element={<UKContact />} />
            <Route path="/uk/global-presence" element={<UKGlobalPresence />} />
            <Route path="/uk/careers" element={<UKCareers />} />

            {/* UK Service Routes */}
            <Route path="/uk/services/:serviceId" element={<ServiceDetail />} />

            {/* Malaysia Routes */}
            <Route path="/malaysia" element={<MalaysiaHome />} />
            <Route path="/malaysia/home" element={<MalaysiaHome />} />
            <Route path="/malaysia/about" element={<MalaysiaAbout />} />
            <Route path="/malaysia/services" element={<MalaysiaServices />} />
            <Route path="/malaysia/contact" element={<MalaysiaContact />} />
            <Route path="/malaysia/global-presence" element={<MalaysiaGlobalPresence />} />
            <Route path="/malaysia/careers" element={<MalaysiaCareers />} />

            {/* Malaysia Service Routes */}
            <Route path="/malaysia/services/:serviceId" element={<ServiceDetail />} />

             <Route path="/admin" element={<AdminDashboard />} />
            {/* Service specific pages */}
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="*" element={<Index  />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider> 
  );
}

export default App;
