"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaBriefcase, FaBuilding, FaUserTie } from "react-icons/fa";
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
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pl-4 md:pl-20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center text-white px-6 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <FaBriefcase className="text-cyan-400" />
            Professional Journey
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            My career progression and professional milestones
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative w-full max-w-4xl">
          {/* Timeline Line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-400/20 to-cyan-400/20 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start justify-between w-full`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block w-6 h-6 rounded-full bg-blue-400 z-10 shadow-glow mt-4" />

              {/* Experience Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'ml-8 md:ml-12' : 'mr-8 md:mr-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Company Icon */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="p-3 bg-blue-400/20 rounded-lg">
                      {index === 0 ? (
                        <FaBuilding className="text-3xl text-blue-400" />
                      ) : (
                        <FaUserTie className="text-3xl text-cyan-400" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="inline-block px-4 py-2 bg-blue-400/20 text-blue-400 rounded-full text-sm mb-4">
                    {exp.duration}
                  </span>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}