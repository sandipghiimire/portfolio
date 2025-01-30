"use client";

import Image from 'next/image';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar"; // Import Left Sidebar
import { FaGithub, FaLink } from "react-icons/fa"; // Import icons for GitHub and URL
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
    <div className="flex bg-black min-h-screen pl-20">
      {/* Left Sidebar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-white px-6">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-400">My Projects</h1>
          <p className="text-lg text-gray-300 leading-relaxed">
          "Here are some of the projects I've worked on. You can explore the code and see the live demo!"
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="bg-gray-800 text-gray-300 px-6 py-4 rounded-lg shadow-lg w-80 h-96 transform transition-transform duration-300 hover:scale-105" // Added hover:scale-105
            >
              {/* Project Image */}
              <div className="mb-4">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg" // Fixed image height
                />
              </div>

              {/* Project Title and Description */}
              <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
              <p className="mb-4">{project.description}</p>

              {/* Icons for GitHub and URL */}
              <div className="flex justify-center gap-6">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600"
                >
                  <FaLink size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}