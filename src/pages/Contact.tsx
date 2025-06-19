import React, { useState } from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

type LocationKey = 'Chennai' | 'Singapore' | 'Delhi' | 'Bangalore';

const locationData: Record<LocationKey, {
  address: string;
  phone: string;
  map: string;
}> = {
  Chennai: {
    address: "GGL India Pvt Ltd, No 123 Mount Road, Chennai - 600002",
    phone: "+91 44 12345678",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.994004587946!2d80.25184147483198!3d13.060416987256908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664a56e43ef3%3A0x4f4eabf4c7f1c1c6!2sMount%20Road%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1686996243732!5m2!1sen!2sin"
  },
  Singapore: {
    address: "GGL (Singapore) Pte Ltd. Blk 511 Kampong Bahru Road #03-01 Keppel Distripark Singapore - 099447",
    phone: "+65 69080838",
    map: "https://www.google.com/maps/d/embed?mid=1GorHPvFj8yMbcANzh1a6NzHSIj-fDHs&ehbc=2E312F"
  },
  Delhi: {
    address: "GGL India Pvt Ltd, 4th Floor, Connaught Place, New Delhi - 110001",
    phone: "+91 11 87654321",
    map: "https://maps.google.com/maps?q=Connaught%20Place%2C%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
  },
  Bangalore: {
    address: "GGL India Pvt Ltd, MG Road, Bangalore - 560001",
    phone: "+91 80 98765432",
    map: "https://maps.google.com/maps?q=MG%20Road%2C%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }
};

const Contact = () => {
  const [location, setLocation] = useState<LocationKey>('Chennai');
  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const currentLocation = locationData[location];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Location Map Section */}
        <section className="relative">
          <div className="h-[400px] relative w-full">
            <iframe
              src={currentLocation.map}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              title={`${location} Office Location`}
            ></iframe>
            <div className="absolute top-0 left-0 right-0 h-14 bg-white z-10 pointer-events-none opacity-90"></div>
          </div>

          {/* Location Dropdown + Address */}
          <div className="bg-white py-8 shadow-lg px-4 md:px-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-semibold mb-2">Choose Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as LocationKey)}
                  className="w-full border-gray-300 rounded-lg p-3"
                >
                  {Object.keys(locationData).map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>

              <div className="text-left space-y-2 w-full md:w-1/2">
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>{currentLocation.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p>{currentLocation.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-center">Send Us a Message</h2>
              <p className="text-gray-600 text-center mb-8">Fill in the form below and we’ll get back to you soon.</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" {...register("firstName")} />
                  <Input placeholder="Last Name" {...register("lastName")} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Email" type="email" {...register("email")} />
                  <Input placeholder="Phone" {...register("phone")} />
                </div>

                <Input placeholder="Organization/Company" {...register("organization")} />
                <Textarea placeholder="Your Message" className="min-h-[120px]" {...register("message")} />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" className="w-full bg-brand-navy text-white py-6 flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
