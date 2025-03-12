
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import LiquidTransportation from "./pages/services/LiquidTransportation";

// Create service pages placeholders that will redirect users when clicking on a service
const AirFreight = () => <LiquidTransportation title="Air Freight" />;
const OceanFreight = () => <LiquidTransportation title="Ocean Freight" />;
const CustomsClearance = () => <LiquidTransportation title="Customs Clearance" />;

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* Service specific pages */}
          <Route path="/services/liquid-transportation" element={<LiquidTransportation />} />
          <Route path="/services/air-freight" element={<AirFreight />} />
          <Route path="/services/ocean-freight" element={<OceanFreight />} />
          <Route path="/services/customs-clearance" element={<CustomsClearance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
