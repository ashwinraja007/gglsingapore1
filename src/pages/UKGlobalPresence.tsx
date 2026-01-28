import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKGlobalPresenceComponent from "@/components/home/UKGlobalPresence";

const ukNavPaths = {
  home: "/uk",
  about: "/uk/about",
  services: "/uk/services",
  careers: "/uk/careers",
  contact: "/uk/contact",
  globalPresence: "/uk/global-presence",
};

const UKGlobalPresence = () => {
  return (
    <>
      <Header navPaths={ukNavPaths} />
      <div className="pt-20">
        <UKGlobalPresenceComponent />
      </div>
      <Footer />
    </>
  );
};

export default UKGlobalPresence;