import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKAboutUs from "@/components/home/UKAboutUs";

const UKAbout = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <UKAboutUs />
      </div>
      <Footer />
    </>
  );
};

export default UKAbout;