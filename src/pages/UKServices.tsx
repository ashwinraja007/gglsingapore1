import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKServicesComponent from "@/components/home/UKServices";

const ukNavPaths = {
  home: "/uk",
  about: "/uk/about",
  services: "/uk/services",
  careers: "/uk/careers",
  contact: "/uk/contact",
  globalPresence: "/uk/global-presence",
};

const UKServices = () => {
  return (
    <>
      <Header navPaths={ukNavPaths} />
      <div className="pt-20">
        <UKServicesComponent />
      </div>
      <Footer />
    </>
  );
};

export default UKServices;