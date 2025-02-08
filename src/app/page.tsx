"use client";
import { useEffect } from 'react';
import type { NextPage } from 'next';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion
import Navbar from '@/components/Navbar';

const Home: NextPage = () => {

     useEffect(() => {
        document.title = "Sandip Ghimire - Home";
      }, []);


    // Animation variants for Framer Motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const scaleUp = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 transition-colors duration-200 bg-black">
            <Navbar />

            {/* Card Container (No Background) */}
            <div className="max-w-4xl w-full rounded-lg overflow-hidden flex flex-col md:flex-row">
                {/* Profile Image - Top on Mobile, Right on Desktop */}
                <motion.div
                    className="flex justify-center items-center p-8 order-1 md:order-2"
                    variants={scaleUp}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="/sandip.jpg" // Replace with your photo path
                        alt="Profile Photo"
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                </motion.div>

                {/* Left Side: Introduction and Social Media */}
                <motion.div
                    className="p-8 flex-1 text-white order-2 md:order-1"
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-4xl font-bold">Hi, I&apos;m Sandip Ghimire</h1>
                    <p className="mt-4 text-gray-200">
                        I&apos;m a passionate MERN stack developer specializing in Next.js, React, and Tailwind CSS.
                        I love building dynamic web applications and creating seamless user experiences.
                    </p>

                    {/* Follow Me Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold">Follow Me</h2>
                        <div className="flex space-x-4 mt-4">
                            <a
                                href="https://github.com/sandipghiimire"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-white transition duration-300"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/sandip-ghiimire"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-200 hover:text-blue-300 transition duration-300"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="mailto:sandipghimire.np@gmail.com"
                                className="text-gray-200 hover:text-red-300 transition duration-300"
                            >
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact and Download CV Buttons */}
                    <div className="mt-8 flex space-x-4">
                        <a
                            href="/contact"
                            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300"
                        >
                            Contact Me
                        </a>
                        <a
                            href="Sandip Ghimire CV.pdf" // Replace with actual CV file path
                            download
                            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
