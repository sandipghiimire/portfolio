"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Import Left Sidebar
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // Import icons for email, phone, and location
import { useEffect } from "react";

export default function ContactPage() {

   useEffect(() => {
      document.title = "Sandip Ghimire - Contact";
    }, []);

  return (
    <div className="flex bg-black min-h-screen pl-20">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white px-6">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Contact Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            "Feel free to reach out to me through any of the following channels. I would love to connect!"
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaEnvelope size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">Email</h3>
            <p className="text-lg">sandipghimire.np@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaPhoneAlt size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">Phone</h3>
            <p className="text-lg">+977 9869292044</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FaMapMarkerAlt size={40} className="text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-blue-400">"Location"</h3>
            <p className="text-lg">"Kathmandu, Nepal"</p>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 w-full max-w-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6 text-center">"Send a Message"</h2>
          <form
            action="mailto:sandipghimire.np@gmail.com"
            method="POST"
            encType="text/plain"
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-2 bg-gray-700 text-gray-300 rounded-md"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-400 text-white font-semibold rounded-md hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
