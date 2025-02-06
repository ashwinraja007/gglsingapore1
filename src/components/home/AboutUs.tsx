import { Button } from "@/components/ui/button";

export const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Who we are</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-600 mb-8">
            Moltech is a proud subsidiary of 1 Global Enterprises, a dynamic investment company with a diverse portfolio in freight forwarding, supply chain management, and logistics technology, as part of this global network, Moltech benefits from strategic investments across multiple brands specializing in transportation, warehousing, and supply chain solutions, as well as cutting-edge freight and warehouse management software.
          </p>
          <p className="text-gray-600 mb-12">
            Backed by 1 Global Enterprise's industry expertise and innovative team approach, Moltech leverages synergies across its sister companies to deliver comprehensive logistics solutions. Through this collaborative ecosystem, we provide our clients with efficient, cost-effective, and reliable supply chain management, a special industry and market-specific approach, and 24/7 customer support with full transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src="/lovable-uploads/1025a73e-2a27-41f4-80ed-abd0fa0562d9-1.png" 
              alt="Global Business Partnership" 
              className="rounded-lg shadow-xl w-full h-auto mb-6"
            />
            <p className="text-gray-600">
              We provide efficient, cost-effective, and transparent global logistics solutions. Our experienced team ensures smooth handling, and our worldwide network enables us to offer comprehensive solutions across continents. We prioritize customer satisfaction and maintain the highest standards in all our operations.
            </p>
          </div>
          
          <div>
            <p className="text-gray-600 mb-6">
              Industry-Leading role in being part of Australian top logistics providers, offering specialized services in warehousing, freight forwarding, and supply chain management. Our commitment to excellence and customer satisfaction has earned us the trust and loyalty of our clients, making us the preferred choice of partners who value success all logistics.
            </p>
            <p className="text-gray-600 mb-8">
              We maintain strong collaborative relationships with our clients, striving to build lasting partnerships that drive shared success. Through continuous improvement and innovation, we help our clients navigate complex logistics challenges. Our dedication to customer satisfaction and operational excellence sets us apart, making us a trusted partner supported by a highly skilled team.
            </p>
            <img 
              src="/lovable-uploads/1025a73e-2a27-41f4-80ed-abd0fa0562d9-2.png" 
              alt="Global Logistics Network" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-6">
            To enhance transparency, we offer online shipment tracking capabilities, giving customers complete visibility. Our digitized workflows streamline operations and improve efficiency, ensuring seamless communication while keeping costs optimized.
          </p>
        </div>
      </div>
    </section>
  );
};