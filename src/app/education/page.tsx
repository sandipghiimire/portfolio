"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

interface Education {
  degree: string;
  institution: string;
  year: string;
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Nepal Mega College",
    year: "2024",
  },
  {
    degree: "+2",
    institution: "Liverpool International College",
    year: "2020",
  },
  {
    degree: "SEE",
    institution: "Ratna Rajya Secondary School",
    year: "2018",
  },
];

export default function EducationPage() {
  useEffect(() => {
    document.title = "Sandip Ghimire - Education";
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pl-4 md:pl-20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-white px-6 py-12">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Education Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              My academic path that shaped my technical expertise and passion for innovation
            </p>
          </motion.div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-400/30 to-cyan-400/30 transform -translate-x-1/2" />

            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-between w-full`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block w-6 h-6 rounded-full bg-blue-400 z-10 shadow-glow" />

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'ml-8 md:ml-12' : 'mr-8 md:mr-12'}`}>
                  <div className="relative group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all shadow-2xl hover:shadow-blue-500/20">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{item.degree}</h3>
                    <p className="text-lg text-gray-300 mb-1">{item.institution}</p>
                    <div className="flex items-center mt-4">
                      <span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}