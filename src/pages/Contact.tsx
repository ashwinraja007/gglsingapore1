import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { FaLinkedin, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-3xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">📞</div>
            <div>
              <p>+44 (0) 203 795 5568</p>
              <p>+44 (0) 203 795 5569</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">📱</div>
            <p>+44 (0) 730 585 4412</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">✉️</div>
            <p>operations@moltech.uk</p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-1">📍</div>
            <p>167-169 Great Portland Street, 5th Floor, London W1W 5PF, UK</p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold">Stay connected</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-blue-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-pink-600"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-600"><FaFacebookF size={24} /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Enquiry</h2>
          <p className="text-gray-600 mb-6">We are here to answer any questions you might have about our services. Fill in the form below and we will get back to you as soon as possible.</p>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" {...register("firstName")} />
              <Input placeholder="Last Name" {...register("lastName")} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Email" type="email" {...register("email")} />
              <Input placeholder="Phone" {...register("phone")} />
            </div>
            
            <Input placeholder="Organization/Company" {...register("organization")} />
            
            <Textarea 
              placeholder="Message" 
              className="min-h-[150px]" 
              {...register("message")} 
            />
            
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="w-full h-[400px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7407046470224!2d-0.14394748422955733!3d51.51952397963622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad554c335c1%3A0xda0a55c0f30cf83b!2s167-169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2s!4v1645541248657!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;