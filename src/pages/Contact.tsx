import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import { Phone, Mail, MapPin, Send, XCircle } from "lucide-react";

const Contact = () => {
  // Form input states
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<"success" | "error">("success");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("First Name", formData.firstName);
      data.append("Last Name", formData.lastName);
      data.append("Email", formData.email);
      data.append("Phone", formData.phone);
      data.append("Organization", formData.organization);
      data.append("Message", formData.message);

      // FormSubmit hidden fields
      data.append("_captcha", "false");
      data.append("_template", "box");
      data.append("_subject", "New Contact Submission!");

      const response = await fetch("https://formsubmit.co/ajax/karthikjungleemara@gmail.com", {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Failed to send message");

      // Show success notification & reset form
      setNotificationType("success");
      setShowNotification(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      });
    } catch (error) {
      setNotificationType("error");
      setShowNotification(true);
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setShowNotification(false), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />

      <main className="flex-grow">
        {/* ... Hero and Contact Info sections remain unchanged */}

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Contact Info - same as your original code */}

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg relative"
              >
                <h2 className="text-2xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-600 mb-6">
                  Fill in the form below and we'll get back to you as soon as possible.
                </p>

                {/* Notification popup inside form */}
                {showNotification && (
                  <div
                    className={`absolute top-[-60px] left-0 right-0 mx-auto max-w-md px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 text-white ${
                      notificationType === "success" ? "bg-green-600" : "bg-red-600"
                    }`}
                    role="alert"
                  >
                    {notificationType === "success" ? (
                      <Send size={18} />
                    ) : (
                      <XCircle size={18} />
                    )}
                    <span>
                      {notificationType === "success"
                        ? "Message sent successfully!"
                        : "Failed to send message. Please try again."}
                    </span>
                    <button
                      onClick={() => setShowNotification(false)}
                      className="ml-auto focus:outline-none"
                      aria-label="Close notification"
                    >
                      <XCircle size={18} />
                    </button>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <Input
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <Input
                    placeholder="Organization/Company"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white py-6 flex items-center justify-center gap-2 bg-brand-navy"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 mr-2 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8z"
                            />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps section unchanged */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
