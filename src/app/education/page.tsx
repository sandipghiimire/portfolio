"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Import Left Sidebar
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
    <div className="flex bg-black min-h-screen">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white px-6">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">Education</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
          &apos; Here's a look at my educational background:&apos;
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="mt-10 space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-400">{item.degree}</h3>
              <p>{item.institution}</p>
              <p className="text-gray-500">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
