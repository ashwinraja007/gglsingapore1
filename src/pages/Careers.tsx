
import React from 'react';
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

// Job position component
const JobPosition = ({ title, location, department, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex flex-wrap text-sm text-gray-600 mb-4 gap-4">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>{department}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>
        <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
          View Position
        </Button>
      </div>
    </motion.div>
  );
};

const Careers = () => {
  const jobListings = [
    {
      id: 1,
      title: "Logistics Coordinator",
      location: "Singapore",
      department: "Operations",
      description: "We are seeking an experienced Logistics Coordinator to join our team in Singapore. The ideal candidate will be responsible for coordinating logistics operations, tracking shipments, and ensuring efficient delivery of goods to customers."
    },
    {
      id: 2,
      title: "Air Freight Specialist",
      location: "Melbourne, Australia",
      department: "Air Freight",
      description: "As an Air Freight Specialist, you will be responsible for managing air freight operations, coordinating with clients and carriers, and ensuring timely delivery of shipments. The ideal candidate should have excellent communication skills and experience in air freight logistics."
    },
    {
      id: 3,
      title: "Customer Service Representative",
      location: "Singapore",
      department: "Customer Support",
      description: "We are looking for a Customer Service Representative to join our Singapore office. The successful candidate will handle client inquiries, resolve issues, and ensure excellent customer experience. Strong communication skills and logistics knowledge are essential."
    },
    {
      id: 4,
      title: "Warehouse Manager",
      location: "Dubai, UAE",
      department: "Warehousing",
      description: "Experienced Warehouse Manager needed to oversee daily operations, manage inventory, and lead a team of warehouse staff. The ideal candidate should have proven experience in logistics and warehouse management."
    },
    {
      id: 5,
      title: "Route Optimization Specialist",
      location: "Bangkok, Thailand",
      department: "Operations",
      description: "Join our team as a Route Optimization Specialist to analyze transportation routes, identify efficiency improvements, and reduce delivery times and costs. Knowledge of route optimization software and logistics experience required."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90" />
          <div className="absolute inset-0 opacity-10 bg-[url('/lovable-uploads/transport.jpg')] bg-center bg-cover" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-blue-100 mb-8"
              >
                Discover opportunities to grow with a global leader in logistics
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" variant="gold" className="text-brand-navy shadow-lg">
                  View Open Positions
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Join GGL?</h2>
              <p className="text-gray-600">
                At GGL, we offer more than just a job – we provide a career with opportunities for growth, 
                learning, and making a global impact in the logistics industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🌍",
                  title: "Global Reach",
                  description: "Work with a diverse international team and gain exposure to global logistics operations across continents."
                },
                {
                  icon: "📈",
                  title: "Career Growth",
                  description: "We invest in our employees' development with training programs and clear advancement paths."
                },
                {
                  icon: "🤝",
                  title: "Collaborative Culture",
                  description: "Join a supportive environment where teamwork and innovation are valued and rewarded."
                },
                {
                  icon: "💡",
                  title: "Innovation Focus",
                  description: "Be part of a company that embraces technology and innovative solutions in logistics."
                },
                {
                  icon: "🏆",
                  title: "Recognition",
                  description: "We celebrate achievements and recognize the contributions of our team members."
                },
                {
                  icon: "❤️",
                  title: "Work-Life Balance",
                  description: "We understand the importance of balance and offer flexible work arrangements where possible."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Current Openings</h2>
              <p className="text-gray-600">
                Explore our available positions and find the perfect role for your skills and career aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {jobListings.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <JobPosition {...job} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Don't see a position that matches your skills?</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Submit Open Application
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
