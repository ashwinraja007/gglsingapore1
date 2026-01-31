import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Heart, Globe, Award, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const malaysiaNavPaths = {
  home: "/malaysia",
  about: "/malaysia/about",
  services: "/malaysia/services",
  careers: "/malaysia/careers",
  contact: "/malaysia/contact",
  globalPresence: "/malaysia/global-presence",
};

const MalaysiaCareers = () => {
  const benefits = [{
    icon: <Users className="h-6 w-6 text-brand-gold" />,
    title: "Collaborative Culture",
    description: "Work with passionate professionals in a supportive environment that values teamwork and innovation."
  }, {
    icon: <TrendingUp className="h-6 w-6 text-brand-gold" />,
    title: "Career Growth",
    description: "Advance your career with continuous learning opportunities and clear progression paths."
  }, {
    icon: <Heart className="h-6 w-6 text-brand-gold" />,
    title: "Work-Life Balance",
    description: "Enjoy flexible working arrangements and comprehensive benefits that support your well-being."
  }, {
    icon: <Globe className="h-6 w-6 text-brand-gold" />,
    title: "Global Opportunities",
    description: "Be part of an international network with opportunities to work across different markets."
  }, {
    icon: <Award className="h-6 w-6 text-brand-gold" />,
    title: "Recognition",
    description: "Your contributions are valued and recognized through various reward and recognition programs."
  }, {
    icon: <Target className="h-6 w-6 text-brand-gold" />,
    title: "Meaningful Impact",
    description: "Make a real difference in global trade and logistics, connecting businesses worldwide."
  }];

  return (
    <div className="min-h-screen flex flex-col">
      <Header navPaths={malaysiaNavPaths} />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }} 
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-50">
                Join Our Malaysia Team
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Build your career with GGL Malaysia. 
                We're looking for passionate individuals to join our mission of connecting the world through exceptional logistics solutions.
              </p>
              <Button variant="gold" size="lg" className="font-semibold">
                View Open Positions
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }} 
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-4">Current Opportunities</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                We currently do not have any specific openings listed online for our Malaysia offices.
                However, we are always looking for talented individuals.
              </p>
              <a href="mailto:jayesh@ggl.sg"><Button>Email Your Resume</Button></a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MalaysiaCareers;