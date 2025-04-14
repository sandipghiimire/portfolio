"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    document.title = "Sandip Ghimire - Contact";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pl-4 md:pl-20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center text-white px-6 py-12 overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let's Collaborate
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Reach out to discuss projects, opportunities, or just say hello
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl">
          {/* Contact Cards - Left Side */}
          <motion.div 
            className="flex-1 lg:max-w-md"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope className="text-2xl" />,
                  title: "Email",
                  content: "sandipghimire.np@gmail.com",
                  link: "mailto:sandipghimire.np@gmail.com"
                },
                {
                  icon: <FaPhoneAlt className="text-2xl" />,
                  title: "Phone",
                  content: "+977 9869292044",
                  link: "tel:+9779869292044"
                },
                {
                  icon: <FaMapMarkerAlt className="text-2xl" />,
                  title: "Location",
                  content: "Kathmandu, Nepal",
                  link: "https://maps.google.com/?q=Kathmandu,Nepal"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  href={item.link}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all shadow-xl hover:shadow-blue-500/20 flex items-center gap-4"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-400">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.content}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                    ↗
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div 
            className="flex-1 lg:max-w-2xl"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-2xl">
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 animate-move-gradient" />
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <FaPaperPlane className="text-2xl text-cyan-400 animate-float" />
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      Direct Message
                    </h2>
                  </div>
                  <p className="text-sm text-gray-400">Typically responds within 12 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-3 px-1 text-gray-400 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-3 px-1 text-gray-400 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none"
                    >
                      Email Address
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/30 h-32 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-3 px-1 text-gray-400 text-sm transition-all peer-focus:-translate-y-6 peer-focus:text-xs peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base pointer-events-none"
                    >
                      Your Message
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/20 transition-all relative overflow-hidden"
                  >
                    <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                      Send Message
                    </span>
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
                      </div>
                    )}
                  </motion.button>
                </form>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-3 bg-green-500/20 text-green-400 rounded-lg text-center text-sm"
                  >
                    Message sent successfully! 🎉
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}