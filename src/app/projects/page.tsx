"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

interface Project {
  title: string;
  description: string;
  githubLink: string;
  projectUrl: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    title: "Job Portal for Local Job",
    description: "A platform to connect job seekers with local employers.",
    githubLink: "https://github.com/yourusername/job-portal",
    projectUrl: "https://yourprojectlink.com/job-portal",
    imageUrl: "/sandip.jpg", // Update with your image path
  },
  {
    title: "Hospital Management System",
    description: "A system to manage hospital operations and patient records.",
    githubLink: "https://github.com/yourusername/hospital-management",
    projectUrl: "https://yourprojectlink.com/hospital-management",
    imageUrl: "/sandip.jpg", // Update with your image path
  },
  {
    title: "Snake Game",
    description: "A fun and interactive snake game with multiple levels.",
    githubLink: "https://github.com/yourusername/snake-game",
    projectUrl: "https://yourprojectlink.com/snake-game",
    imageUrl: "/sandip.jpg", // Update with your image path
  },
  {
    title: "CRM Web-based Software",
    description: "A Customer Relationship Management system to streamline interactions with customers.",
    githubLink: "https://github.com/yourusername/crm-software",
    projectUrl: "https://yourprojectlink.com/crm-software",
    imageUrl: "/sandip.jpg", // Update with your image path
  },
];

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Sandip Ghimire - Projects";
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pl-4 md:pl-20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center text-white px-6 py-12 overflow-hidden">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Project Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Explore my technical solutions through these featured projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative h-full flex flex-col justify-end p-6">
                {/* Title & Description */}
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="mb-4"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                </motion.div>

                {/* Links Container */}
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-400/20 text-blue-400 rounded-lg hover:bg-blue-400/30 transition-colors"
                  >
                    <FaGithub className="text-lg" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
                  >
                    <FaLink className="text-lg" />
                    <span>Demo</span>
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border border-blue-400/30 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}