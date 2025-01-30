"use client";

import { useState } from "react";
import { FaHome, FaUser, FaGraduationCap, FaCode, FaEnvelopeOpen, FaBars, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`bg-gray-900 bg-opacity-90 backdrop-blur-md fixed left-0 top-0 bottom-0 py-8 transition-all duration-300 ${
        isOpen ? "w-48" : "w-16"
      }`}
    >
      {/* Toggle Button */}
      <button
        className="absolute top-4 right-[-10px] bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Navigation Links */}
      <div className={`space-y-6 flex flex-col ${isOpen ? "items-start pl-4" : "items-center"} mt-12`}>
        <Link href="/home" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaHome size={24} />
          {isOpen && <span className="text-white">Home</span>}
        </Link>
        <Link href="/about" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaUser size={24} />
          {isOpen && <span className="text-white">About</span>}
        </Link>
        <Link href="/education" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaGraduationCap size={24} />
          {isOpen && <span className="text-white">Education</span>}
        </Link>
        <Link href="/projects" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaCode size={24} />
          {isOpen && <span className="text-white">Projects</span>}
        </Link>
        <Link href="/work-experience" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaBriefcase size={24} />
          {isOpen && <span className="text-white">Work Experience</span>}
        </Link>
        <Link href="/contact" className="flex items-center gap-4 text-white hover:text-gray-300 transition duration-300">
          <FaEnvelopeOpen size={24} />
          {isOpen && <span className="text-white">Contact</span>}
        </Link>
      </div>
    </nav>
  );
}
