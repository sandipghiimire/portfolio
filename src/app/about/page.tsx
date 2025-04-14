"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function About() {
  const skills = ["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pl-4 md:pl-20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center text-white px-6 py-12">
        <div className="max-w-6xl w-full">
          {/* Main Content Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative group flex-shrink-0"
            >
              <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl group-hover:blur-3xl transition-all duration-300" />
              <Image
                src="/sandip.jpg"
                alt="Sandip Ghimire"
                width={280}
                height={280}
                className="rounded-full border-4 border-blue-400/80 shadow-2xl relative z-10 hover:border-blue-300 transition-all"
              />
            </motion.div>

            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 text-center md:text-left"
              >
                About Me
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl text-center md:text-left"
              >
                Hello! I'm <span className="text-blue-400 font-medium">Sandip Ghimire</span>, a passionate full-stack developer specializing in crafting modern web experiences. With expertise in the <span className="text-blue-400">MERN stack</span>, I build scalable applications that combine sleek interfaces with robust functionality.
                <br /><br />
                My toolbox includes <span className="text-blue-400">Next.js</span> for server-rendered excellence, <span className="text-blue-400">React</span> for interactive UIs, and <span className="text-blue-400">Node.js</span> for powerful backends. I'm passionate about implementing modern solutions while maintaining clean, efficient code.
              </motion.p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 w-full"
          >
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(45deg, #60a5fa, #38bdf8)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-center cursor-default border border-gray-700 hover:border-blue-400 transition-all"
                >
                  <span className="text-gray-300 hover:text-white font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}