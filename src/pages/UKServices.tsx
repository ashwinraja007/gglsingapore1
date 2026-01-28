import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import UKServicesComponent from "@/components/home/UKServices";

const UKServices = () => {
  return (
    <>
      <Header />
      <div className="pt-20">
        <UKServicesComponent />
      </div>
      <Footer />
    </>
  );
};

export default UKServices;