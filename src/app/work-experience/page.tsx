"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaBriefcase } from "react-icons/fa";
import { useEffect } from "react";

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

const experiences: WorkExperience[] = [
  {
    company: "BizHub IT Pvt. Ltd.",
    role: "MERN Stack Developer",
    duration: "Jan 2024 - Present",
    description: "Developing scalable web applications using Next.js, React, Node.js, and MongoDB.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "2022 - 2023",
    description: "Designed and developed websites for various clients using Next.js and Tailwind CSS.",
  },
];

export default function WorkExperiencePage() {

    useEffect(() => {
        document.title = "Sandip Ghimire - Work Experience";
      }, []);

  return (
    <div className="flex bg-black min-h-screen pl-20">
      {/* Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-blue-400 flex items-center gap-2">
            <FaBriefcase /> Work Experience
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            My professional experience in the software industry.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md"
            >
              <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
              <p className="text-gray-300 mt-1">{exp.company}</p>
              <p className="text-gray-400 text-sm mt-1">{exp.duration}</p>
              <p className="text-gray-300 mt-4">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
