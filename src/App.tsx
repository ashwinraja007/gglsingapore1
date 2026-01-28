
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
import LiquidTransportation from "./pages/services/LiquidTransportation";
import AirFreight from "./pages/services/AirFreight";
import OceanFreight from "./pages/services/OceanFreight";
import LCLConsolidation from "./pages/services/LCLConsolidation";
import Warehousing from "./pages/services/Warehousing";
import ProjectCargo from "./pages/services/ProjectCargo";

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

import CustomsClearance from "./pages/services/CustomsClearance";
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
            <Route path="/services/transportation" element={<Transportation />} />
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
            <Route path="/bangladesh/services/transportation" element={<Transportation />} />
            <Route path="/bangladesh/services/liquid-transportation" element={<LiquidTransportation />} />
            <Route path="/bangladesh/services/air-freight" element={<AirFreight />} />
            <Route path="/bangladesh/services/ocean-freight" element={<OceanFreight />} />
            <Route path="/bangladesh/services/lcl-consolidation" element={<LCLConsolidation />} />
            <Route path="/bangladesh/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/bangladesh/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/bangladesh/services/warehousing" element={<Warehousing />} />
            <Route path="/bangladesh/contact" element={<BangladeshContact />} />
           
            {/* Pakistan Routes */}
            <Route path="/pakistan" element={<PakistanHome />} />
            <Route path="/pakistan/about" element={<PakistanAbout />} />
            <Route path="/pakistan/services" element={<PakistanServices />} />
            <Route path="/pakistan/careers" element={<PakistanCareers />} />
            <Route path="/pakistan/contact" element={<PakistanContact />} />
            <Route path="/pakistan/global-presence" element={<PakistanGlobalPresence />} />

            {/* Pakistan Service Routes */}
            <Route path="/pakistan/services/transportation" element={<Transportation />} />
            <Route path="/pakistan/services/liquid-transportation" element={<LiquidTransportation />} />
            <Route path="/pakistan/services/air-freight" element={<AirFreight />} />
            <Route path="/pakistan/services/ocean-freight" element={<OceanFreight />} />
            <Route path="/pakistan/services/lcl-consolidation" element={<LCLConsolidation />} />
            <Route path="/pakistan/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/pakistan/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/pakistan/services/warehousing" element={<Warehousing />} />

            {/* UK Routes */}
            <Route path="/uk" element={<UKHome />} />
            <Route path="/uk/about" element={<UKAbout />} />
            <Route path="/uk/services" element={<UKServices />} />
            <Route path="/uk/contact" element={<UKContact />} />
            <Route path="/uk/global-presence" element={<UKGlobalPresence />} />
            <Route path="/uk/careers" element={<UKCareers />} />

            {/* UK Service Routes */}
            <Route path="/uk/services/transportation" element={<Transportation />} />
            <Route path="/uk/services/liquid-transportation" element={<LiquidTransportation />} />
            <Route path="/uk/services/air-freight" element={<AirFreight />} />
            <Route path="/uk/services/ocean-freight" element={<OceanFreight />} />
            <Route path="/uk/services/lcl-consolidation" element={<LCLConsolidation />} />
            <Route path="/uk/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/uk/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/uk/services/warehousing" element={<Warehousing />} />

             <Route path="/admin" element={<AdminDashboard />} />
            {/* Service specific pages */}
            <Route path="/services/liquid-transportation" element={<LiquidTransportation />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/ocean-freight" element={<OceanFreight />} />
            <Route path="/services/lcl-consolidation" element={<LCLConsolidation />} />
            <Route path="/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/warehousing" element={<Warehousing />} />
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
