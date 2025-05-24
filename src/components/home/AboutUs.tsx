import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const AboutUs = () => {
  return <section className="py-10 bg-gray-50 mx-0 px-0">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7
      }} viewport={{
        once: true
      }} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="px-[34px] order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">About Us</h2>
            <p className="text-gray-600 mb-5 text-sm md:text-base text-justify">
              At GGL, we are proud to be one of Singapore's leading logistics companies. We offer specialized divisions in warehousing, forwarding (air and ocean), and transportation. Our mission is to deliver comprehensive end-to-end solutions in global freight forwarding, managed through a trusted network of partners who excel in all logistics segments.
            </p>
            <p className="text-gray-600 mb-5 text-sm md:text-base text-justify">
              We are dedicated to fostering deep, collaborative relationships with our clients, and creating genuine partnerships that drive mutual growth. Our work goes beyond forwarding and logistics; it's about building trust with our customers by delivering world-class service and solutions.
            </p>
            <Link to="/about">
              <Button variant="outline" size="sm" className="text-sm">Learn More</Button>
            </Link>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2 flex justify-center mx-0 my-0">
            <div className="w-[500px] h-[500px]">
              <img alt="About Us" loading="lazy" src="/lovable-uploads/6d67d7a8-444c-4b65-bb7f-392a419d541c.jpg" className="w-full h-full rounded-lg object-contain" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};
export default AboutUs;