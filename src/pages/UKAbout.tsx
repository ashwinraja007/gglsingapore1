import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKAboutUs from "@/components/home/UKAboutUs";

const ukNavPaths = {
  home: "/uk",
  about: "/uk/about",
  services: "/uk/services",
  careers: "/uk/careers",
  contact: "/uk/contact",
  globalPresence: "/uk/global-presence",
};

const UKAbout = () => {
  return (
    <>
      <Header navPaths={ukNavPaths} />
      <div className="pt-20">
        <UKAboutUs />
      </div>
      <Footer />
    </>
  );
};

export default UKAbout;