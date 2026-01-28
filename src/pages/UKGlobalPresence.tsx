import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKGlobalPresenceComponent from "@/components/home/UKGlobalPresence";

const UKGlobalPresence = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <UKGlobalPresenceComponent />
      </div>
      <Footer />
    </>
  );
};

export default UKGlobalPresence;