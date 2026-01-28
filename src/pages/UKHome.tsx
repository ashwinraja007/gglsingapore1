import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKHero from "@/components/home/UKHero";
import UKAboutUs from "@/components/home/UKAboutUs";
import UKServices from "@/components/home/UKServices";
import UKGlobalPresence from "@/components/home/UKGlobalPresence";
import UKQuickEnquiry from "@/components/home/UKQuickEnquiry";

const UKHome = () => {
  return (
    <>
      <Header />
      <UKHero />
      <UKAboutUs />
      <UKServices />
      <UKGlobalPresence />
      <UKQuickEnquiry />
      <Footer />
    </>
  );
};

export default UKHome;