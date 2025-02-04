import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { AboutUs } from "@/components/home/AboutUs";
import { Memberships } from "@/components/home/Memberships";
import { Services } from "@/components/home/Services";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { QuickEnquiry } from "@/components/home/QuickEnquiry";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Memberships />
        <Services />
        <GlobalPresence />
        <QuickEnquiry />
      </main>
      <Footer />
    </div>
  );
};

export default Index;