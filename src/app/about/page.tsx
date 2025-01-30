"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar"; // Import Left Sidebar
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Sandip Ghimire - About";
  }, []);
  return (
    <div className="flex bg-black min-h-screen pl-20">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white px-6">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">About Me</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I’m <span className="text-blue-400">Sandip Ghimire</span>, a passionate MERN Stack Developer specializing in building modern and scalable web applications.
            I love working with technologies like <span className="text-blue-400">Next.js, React.js, Node.js, MongoDB, and Tailwind CSS</span>.
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-8"
        >
          <Image
            src="/sandip.jpg" // Update with your actual profile image path
            alt="Sandip Ghimire"
            width={180}
            height={180}
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 text-center"
        >
          <h2 className="text-2xl font-semibold mb-3 text-blue-400">My Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
