"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaBriefcase, FaGraduationCap, FaPhoneAlt, FaPhone, FaCalendar, FaExternalLinkAlt, FaCheck, FaLink, FaComment, FaUser, FaPalette, FaCode, FaCamera, FaPlus, FaHome, FaFolderOpen, FaFacebook } from 'react-icons/fa';
import Loader from '@/components/loader';

const SinglePagePortfolio = () => {
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState('home');
    const [activeTab, setActiveTab] = useState('design');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [visibleItems, setVisibleItems] = useState(3);
    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const sections = [
        { id: 'home', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'education', name: 'Education' },
        { id: 'projects', name: 'Projects' },
        { id: 'portfolio', name: 'Portfolio' },
        { id: 'experience', name: 'Experience' },
        { id: 'contact', name: 'Contact' },
    ];

    const projects = [
        {
            title: "E-Commerce Platform",
            tech: "React, Node.js, MongoDB, Stripe",
            description: "Full-stack e-commerce solution with payment integration",
            features: [
                "User authentication system",
                "Product management dashboard",
                "Payment gateway integration",
                "Order tracking system"
            ],
            image: "/E-commerce.jpg",
            github: "#",
            demo: "#"
        },
        {
            title: "Job Portal Website",
            tech: "React.js, Express.js, MongoDB, Tailwind CSS",
            description: "Platform for employers and job seekers to connect locally",
            features: [
                "User roles (Employer & Job Seeker)",
                "Job posting and application system",
                "Search and filter jobs",
                "User profile management"
            ],
            image: "/local-job-portal.jpg",
            github: "https://github.com/sandipghiimire/localjobportal",
            demo: "#"
        },
        {
            title: "Portfolio",
            tech: "Next.js, Tailwindcss, Node.js",
            description: "I have made my Portfolio Website.",
            features: [
                "You can download my CV on one click",
                "We can connect easily",
                "Responsive design",
            ],
            image: "/portfolio.png",
            github: "https://github.com/sandipghiimire/portfolio",
            demo: "#"
        },
        {
            title: "Futsal Booking System",
            tech: "PHP, HTML, MySQL, Bootstrap",
            description: "Web-based system to manage hospital operations",
            features: [
                "Patient registration and appointment",
                "Doctor and department management",
                "Billing and reports",
                "Admin dashboard with analytics"
            ],
            image: "/Futsal-scaled.jpg",
            github: "https://github.com/sandipghiimire/Project",
            demo: "#"
        }
    ];

    const education = [
        { degree: "BCA", institution: "Nepal Mega College", year: "2076-Running", gpa: "" },
        { degree: "10+2", institution: "Liverpool Int. College", year: "2074-2076", gpa: "2.95" },
        { degree: "SEE", institution: "Ratna Rajya Secondary School", year: "2069-2074", gpa: "3.25" },
    ];

    const experience = [
        {
            role: "Graphic Designer",
            company: "Bizhub IT Pvt. Ltd. (OTTISH)",
            duration: "2022 - 2025",
            description: "Designed visual content for marketing, branding, and social media campaigns. Collaborated with digital marketing and animation teams to deliver creative assets that aligned with brand goals. Led the creation of brand identities, product mockups, and promotional materials for various clients.",
            skills: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "Typography"],
            projects: "https://drive.google.com/drive/folders/1KB435guzkG5vdAivomhS6IKJcQNmYUQe?usp=drive_link"
        },
        {
            role: "Software Developer",
            company: "Nuptse Technology Pvt. Ltd.",
            duration: "2025 - Current",
            description: "Building scalable web applications using modern technologies like TypeScript and Next.js. Collaborating closely with UI/UX designers to implement responsive and accessible user interfaces. Involved in API integration, testing, and performance optimization for high-traffic platforms.",
            skills: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Figma", "REST API", "Git"],
            projects: "#"
        }

    ];

    const portfolioItems = {
        graphicDesign: [
            { id: 1, image: '/portfolio/New Year 2082.jpg', title: 'Festival Post', category: 'Design', driveLink: 'https://drive.google.com/file/d/1d54UDdMvLaRBu7Yt0aIMXd1Nt0x3QMW9/view?usp=drive_link' },
            { id: 2, image: '/portfolio/Design 1.jpg', title: 'Poster Design', category: 'Design', driveLink: 'https://drive.google.com/file/d/1PNcp3M_mpQnxPpNA_M5MEKbdskAFKRcF/view?usp=drive_link' },
            { id: 3, image: '/portfolio/Logo.png', title: 'Logo Design', category: 'Design', driveLink: 'https://drive.google.com/file/d/1X85MXAV9AzoPunCLlyiMRkQ3h83YNYk-/view?usp=drive_link' },
            { id: 4, image: '/portfolio/Product Design/NIVEA Product Lay_s.jpg', title: 'Product Design', category: 'Design', driveLink: 'https://drive.google.com/file/d/1LPKMQggYh7aAMH-8jYvw8yriFN8aNYPf/view?usp=drive_link' },
            { id: 5, image: '/portfolio/card/Tech Trend - Card Front.jpg', title: 'Business Card Design', category: 'Card Design', driveLink: 'https://drive.google.com/file/d/1HRh0zIEToYEYdFxHK-Hp3-W97T89HTC3/view?usp=drive_link' },
            { id: 6, image: '/Portfolio-Desk.jpg', title: 'Design Portfolio', category: 'Drive Link', driveLink: 'https://drive.google.com/drive/folders/1KB435guzkG5vdAivomhS6IKJcQNmYUQe?usp=drive_link' }
        ],
        webProjects: [
            { id: 1, image: '/local-job-portal.jpg', title: 'Web Application', category: 'web' },
        ],
        photography: [
            { id: 2, image: '/images/portfolio/photo-1.jpg', title: 'Nature Photography', category: 'photo' },
        ]
    };

    type PortfolioItem = {
        id: number;
        image: string;
        title: string;
        category: string;
        driveLink?: string;
    };

    const getPortfolioItems = (): PortfolioItem[] => {
        const allItems: Record<string, PortfolioItem[]> = {
            design: portfolioItems.graphicDesign ?? [],
            web: portfolioItems.webProjects ?? [],
            photo: portfolioItems.photography ?? [],
        };

        const items = allItems[activeTab] ?? [];

        return items.slice(0, visibleItems);
    };

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + 6);
    };

    const currentCategoryLength = {
        design: portfolioItems.graphicDesign.length,
        web: portfolioItems.webProjects.length,
        photo: portfolioItems.photography.length
    }[activeTab];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            document.querySelectorAll('section').forEach(section => {
                const top = section.offsetTop - 100;
                const bottom = top + section.offsetHeight;
                if (scrollY >= top && scrollY < bottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.title = "Sandip Ghimire - Portfolio";
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(false);

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setSubmitSuccess(false), 3000);
            } else {
                setError(true);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2300);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) return <Loader />;


    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Navigation */}
            <nav className="fixed w-full top-0 bg-transparent sm:backdrop-blur-sm z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        {sections.map(section => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className={`${activeSection === section.id
                                    ? 'text-blue-400 border-b-2 border-blue-400'
                                    : 'text-gray-300 hover:text-blue-300'
                                    } px-2 py-1 transition-all duration-300 ease-out hover:border-b-2 hover:border-blue-300`}
                            >
                                {section.name}
                            </a>
                        ))}
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden fixed top-16 right-4 left-4 bg-gray-900 rounded-lg shadow-lg p-4 z-50">
                            <ul className="flex flex-col gap-4 text-gray-200">
                                <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                                <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                                <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                                <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                            </ul>
                        </div>
                    )}


                </div>
            </nav>

            {/* Sections */}
            <main className="pt-6 pb-10 px-4 md:pt-20 md:px-8">
                {/* Home Section */}
                <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-20 md:pt-0">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[300px] h-[300px] -top-24 -left-24 md:w-[800px] md:h-[800px] md:-top-48 md:-left-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl md:blur-3xl" />
                        <div className="absolute w-[250px] h-[250px] -bottom-16 -right-16 md:w-[600px] md:h-[600px] md:-bottom-32 md:-right-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl md:blur-3xl" />
                    </div>

                    <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-6 md:gap-16 relative z-10">
                        {/* Image Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="order-2 md:order-1 w-full md:w-1/2 flex justify-center"
                        >
                            <div className="relative rounded-full overflow-hidden border-4 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
                                <motion.img
                                    src="/sandip.jpg"
                                    alt="Sandip Ghimire"
                                    className="w-full h-full object-cover rounded-full"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 mix-blend-overlay group-hover:opacity-50 transition-opacity" />
                            </div>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2 text-center md:text-left w-full md:w-1/2"
                        >
                            <motion.h1
                                initial={{ backgroundPosition: "0% 50%" }}
                                animate={{ backgroundPosition: "100% 50%" }}
                                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                                className="text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-300%"
                            >
                                Sandip Ghimire
                            </motion.h1>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mb-8 md:space-y-5"
                            >
                                {/* Desktop Email & Phone - Hidden on Mobile */}
                                <div className="hidden md:block">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="group flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 hover:bg-gray-900/60 transition-all"
                                    >
                                        <div className="p-3 bg-blue-400/10 rounded-full">
                                            <FaEnvelope className="text-2xl text-blue-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Email</p>
                                            <a
                                                href="mailto:sandipghimire.np@gmail.com"
                                                className="text-lg text-gray-300 hover:text-blue-400 break-all"
                                            >
                                                sandipghimire.np@gmail.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="group mt-5 flex items-center gap-4 p-4 rounded-xl bg-gray-900/40 hover:bg-gray-900/60 transition-all"
                                    >
                                        <div className="p-3 bg-cyan-400/10 rounded-full">
                                            <FaPhone className="text-2xl text-cyan-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 mb-1">Phone</p>
                                            <a
                                                href="tel:+9779869292044"
                                                className="text-lg text-gray-300 hover:text-cyan-400"
                                            >
                                                +977 986-9292044
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Mobile Social Icons - Visible only on Small Screens */}
                                <div className="md:hidden flex justify-center gap-6 py-4">
                                    <motion.a
                                        href="https://facebook.com/sandip.ghiimire"
                                        target="_blank"
                                        whileHover={{ scale: 1.2 }}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        <FaFacebook className="text-3xl" />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/sandip-ghiimire/"
                                        target="_blank"
                                        whileHover={{ scale: 1.2 }}
                                        className="text-cyan-400 hover:text-cyan-300"
                                    >
                                        <FaLinkedin className="text-3xl" />
                                    </motion.a>
                                    <motion.a
                                        href="https://github.com/sandipghiimire"
                                        target="_blank"
                                        whileHover={{ scale: 1.2 }}
                                        className="text-gray-300 hover:text-white"
                                    >
                                        <FaGithub className="text-3xl" />
                                    </motion.a>
                                </div>
                            </motion.div>

                            {/* Buttons */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center md:justify-start flex-wrap">
                                <motion.a
                                    href="#contact"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-blue-500/30 transition-all group text-sm md:text-base"
                                >
                                    <FaEnvelope className="text-lg md:text-xl transition-transform group-hover:scale-125" />
                                    <span className="font-semibold">Contact Me</span>
                                </motion.a>

                                <motion.a
                                    href="Sandip Ghimire CV.pdf"
                                    download
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 hover:border-blue-500 text-blue-400 rounded-lg md:rounded-xl flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-blue-500/20 transition-all group text-sm md:text-base"
                                >
                                    <FaFileDownload className="text-lg md:text-xl transition-transform group-hover:scale-125" />
                                    <span className="font-semibold">Download CV</span>
                                </motion.a>
                            </div>

                            {/* Skill Tags */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start"
                            >
                                {['React', 'Node.js', 'Graphic Design', 'UI/UX', 'MERN Stack'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-xs md:text-sm border border-gray-800 hover:border-blue-400 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16 md:py-20 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[400px] h-[400px] -top-32 -left-32 md:w-[600px] md:h-[600px] md:-top-48 md:-left-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl md:blur-3xl" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
                    >
                        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                            {/* Left Column - Content */}
                            <div className="flex-1 space-y-6 md:space-y-8">
                                <motion.h2
                                    initial={{ backgroundPosition: "0% 50%" }}
                                    animate={{ backgroundPosition: "100% 50%" }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-300%"
                                >
                                    About Me
                                </motion.h2>

                                <div className="space-y-4 md:space-y-6">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-base md:text-xl text-gray-300 leading-relaxed text-justify"
                                    >
                                        Creative Graphic Designer with a passion for visual storytelling and impactful design.
                                        I specialize in crafting brand identities, marketing materials, and digital assets that
                                        not only look stunning but also communicate effectively. With experience in modern tools
                                        and a strong foundation in web technologies, I bring both creativity and functionality
                                        to every project.
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="flex gap-4 md:gap-6 items-center"
                                    >
                                        <a
                                            href="https://github.com/sandipghiimire"
                                            className="p-2 md:p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 hover:border-blue-400 transition-all group"
                                        >
                                            <FaGithub className="text-2xl md:text-3xl text-gray-300 group-hover:text-white transition-colors" />
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/sandip-ghiimire"
                                            className="p-2 md:p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 hover:border-blue-400 transition-all group"
                                        >
                                            <FaLinkedin className="text-2xl md:text-3xl text-gray-300 group-hover:text-blue-500 transition-colors" />
                                        </a>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Column - Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 w-full md:max-w-md">
                                {['Graphic Design', 'Video Editor', 'Next.js', 'React', 'Node.js'].map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-4 md:p-6 bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 hover:border-blue-400 transition-colors group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <h3 className="text-lg md:text-xl font-semibold text-blue-400">{skill}</h3>
                                        <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2">
                                            {skill === 'Graphic Design' && 'Eye-Catchy Design(Photoshop, Canva, Indesign, Illustrator)'}
                                            {skill === 'Next.js' && 'Full-stack framework expertise'}
                                            {skill === 'React' && 'Component-based architecture'}
                                            {skill === 'Node.js' && 'Backend services & APIs'}
                                            {skill === 'Video Editor' && 'Creative Video Edit.(Premiere Pro)'}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900/70 to-gray-900 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                <FaGraduationCap className="inline mr-3 mb-1" />
                                Education
                            </h2>

                            <div className="relative grid md:grid-cols-2 gap-6">
                                {/* Timeline line */}
                                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/20 to-cyan-400/20" />

                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-400 transition-colors relative ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                            }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="hidden md:block absolute top-6 -left-9 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-900" />

                                        <div className="flex gap-4 items-start">
                                            <div className="bg-blue-400/10 p-3 rounded-lg">
                                                <FaGraduationCap className="text-2xl text-blue-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                                                    {edu.degree}
                                                </h3>
                                                <p className="text-gray-300 font-medium mb-1">
                                                    {edu.institution}
                                                </p>
                                                <div className="flex items-center gap-3 text-sm text-cyan-400">
                                                    <FaCalendar className="text-sm" />
                                                    <span>{edu.year}</span>
                                                </div>
                                                {edu.gpa && (
                                                    <div className="mt-3 px-3 py-1 bg-cyan-400/10 rounded-full inline-flex items-center gap-2">
                                                        <span className="text-cyan-400 text-sm">GPA: {edu.gpa}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[800px] h-[800px] -top-48 -left-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Featured Projects
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                {projects.map((project, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-blue-400/30 bg-gray-900/50 backdrop-blur-sm transition-all duration-300"
                                    >
                                        {/* Project img */}
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                                        </div>

                                        <div className="p-6">
                                            {/* Project Header */}
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-semibold text-blue-400">
                                                    {project.title}
                                                </h3>
                                                <div className="flex gap-3">
                                                    {project.github && (
                                                        <a
                                                            href={project.github}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-white transition-colors"
                                                        >
                                                            <FaGithub className="text-xl" />
                                                        </a>
                                                    )}
                                                    {project.demo && (
                                                        <a
                                                            href={project.demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-blue-400 transition-colors"
                                                        >
                                                            <FaExternalLinkAlt className="text-xl" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.split(',').map((tech, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-3 py-1 text-xs font-medium bg-blue-400/10 text-cyan-400 rounded-full"
                                                    >
                                                        {tech.trim()}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Description */}
                                            <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                                {project.description}
                                            </p>

                                            {/* Features */}
                                            {project.features && (
                                                <ul className="space-y-2 text-sm text-gray-400">
                                                    {project.features.map((feature, fIndex) => (
                                                        <li key={fIndex} className="flex items-center gap-2">
                                                            <FaCheck className="text-blue-400 text-sm" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/*Portfolio Section*/}
                <section className="py-20 px-4 md:px-8 bg-gray-900/50 backdrop-blur-sm" id="portfolio">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Creative Showcase
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                A curated collection of my finest work across multiple design disciplines
                            </p>
                        </motion.div>

                        {/* Portfolio Navigation */}
                        <div className="flex flex-wrap justify-center mb-12 gap-4">
                            {['design', 'web', 'photo'].map((tab) => (
                                <motion.button
                                    key={tab}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setActiveTab(tab);
                                        setVisibleItems(6);
                                    }}
                                    className={`flex items-center px-6 py-2 rounded-full transition-all ${activeTab === tab
                                        ? 'bg-blue-400/10 text-blue-400 border border-blue-400/30'
                                        : 'text-gray-400 hover:bg-gray-800/50'
                                        }`}
                                >
                                    {tab === 'design' && <FaPalette className="mr-2" />}
                                    {tab === 'web' && <FaCode className="mr-2" />}
                                    {tab === 'photo' && <FaCamera className="mr-2" />}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </motion.button>
                            ))}
                        </div>

                        {/* Portfolio Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {getPortfolioItems().map((item) => {
                                const Wrapper = ({ children }: { children: React.ReactNode }) =>
                                    item.driveLink ? (
                                        <a href={item.driveLink} target="_blank" rel="noopener noreferrer">
                                            {children}
                                        </a>
                                    ) : (
                                        <>{children}</>
                                    );

                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
                                    >
                                        <Wrapper>
                                            <div className="relative aspect-square cursor-pointer">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div>
                                                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                                                        <span className="text-sm text-blue-400">{item.category}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Wrapper>
                                    </motion.div>
                                );
                            })}
                        </div>


                        {/* See More Button */}
                        {(currentCategoryLength ?? 0) > visibleItems && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="flex justify-center"
                            >
                                <button
                                    onClick={handleLoadMore}
                                    className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 hover:from-blue-400/20 hover:to-cyan-400/20 border border-blue-400/30 text-blue-400 rounded-full transition-all group"
                                >
                                    <span className="mr-2">Show More</span>
                                    <motion.div
                                        animate={{ rotate: 180 }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    >
                                        <FaPlus className="text-lg group-hover:text-cyan-400 transition-colors" />
                                    </motion.div>
                                </button>
                            </motion.div>
                        )}

                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900/70 to-gray-900 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                <FaBriefcase className="inline mr-3 mb-1" />
                                Professional Journey
                            </h2>

                            <div className="relative grid gap-8">
                                {/* Timeline line */}
                                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400/20 to-cyan-400/20" />

                                {experience.map((exp, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative pl-16"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-5 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900" />

                                        <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-blue-400 transition-colors">
                                            <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-semibold text-blue-400">{exp.role}</h3>
                                                    <p className="text-gray-300 font-medium">{exp.company}</p>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-cyan-400">
                                                    <FaCalendar className="text-sm" />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>

                                            {exp.description && (
                                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            )}

                                            {exp.skills && (
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="px-3 py-1 text-xs font-medium bg-blue-400/10 text-cyan-400 rounded-full"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {exp.projects && (
                                                <div className="mt-4 flex items-center gap-3 text-sm text-gray-400 hover:text-blue-400 transition-colors">
                                                    <FaLink className="text-sm" />
                                                    <a href={exp.projects} target="_blank" rel="noopener noreferrer">
                                                        View Projects
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 z-0">
                        <div className="absolute w-[400px] h-[400px] -top-24 -right-24 md:w-[800px] md:h-[800px] md:-top-48 md:-right-48 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl md:blur-3xl" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10"
                    >
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
                                Let&apos;s collaborate! Whether you have a project in mind or just want to connect.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Contact Info */}
                            <div className="space-y-6 md:space-y-8">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="p-6 md:p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800 hover:border-blue-400 transition-colors"
                                >
                                    <div className="flex flex-col gap-4 md:gap-6">
                                        <div className="flex items-center gap-4 md:gap-6">
                                            <div className="p-3 md:p-4 bg-blue-400/10 rounded-lg md:rounded-xl">
                                                <FaEnvelope className="text-2xl md:text-3xl text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-gray-400 text-sm md:text-base mb-1">Email</h3>
                                                <a
                                                    href="mailto:sandipghimire.np@gmail.com"
                                                    className="text-base md:text-xl text-gray-300 hover:text-blue-400 transition-colors break-all"
                                                >
                                                    sandipghimire.np@gmail.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 md:gap-6">
                                            <div className="p-3 md:p-4 bg-cyan-400/10 rounded-lg md:rounded-xl">
                                                <FaPhoneAlt className="text-2xl md:text-3xl text-cyan-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-gray-400 text-sm md:text-base mb-1">Phone</h3>
                                                <a
                                                    href="tel:+9779869292044"
                                                    className="text-base md:text-xl text-gray-300 hover:text-cyan-400 transition-colors"
                                                >
                                                    +977 9869292044
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Social Links */}
                                <div className="flex gap-4 md:gap-6 justify-center md:justify-start">
                                    <motion.a
                                        whileHover={{ y: -3 }}
                                        href="https://linkedin.com"
                                        target="_blank"
                                        className="p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 hover:border-blue-400 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <FaLinkedin className="text-xl md:text-2xl" />
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ y: -3 }}
                                        href="https://github.com"
                                        target="_blank"
                                        className="p-3 md:p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 hover:border-blue-400 text-gray-300 hover:text-blue-400 transition-colors"
                                    >
                                        <FaGithub className="text-xl md:text-2xl" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <motion.form
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="space-y-4 md:space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Name"
                                        className="w-full p-3 md:p-4 text-sm md:text-base bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition-all"
                                    />
                                    <FaUser className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-base" />
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Email"
                                        className="w-full p-3 md:p-4 text-sm md:text-base bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition-all"
                                    />
                                    <FaEnvelope className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm md:text-base" />
                                </div>

                                <div className="relative">
                                    <textarea
                                        rows={4}
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full p-3 md:p-4 text-sm md:text-base bg-gray-900/50 backdrop-blur-sm rounded-lg md:rounded-xl border border-gray-800 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 outline-none transition-all resize-none"
                                    ></textarea>
                                    <FaComment className="absolute right-3 md:right-4 top-4 md:top-5 text-gray-500 text-sm md:text-base" />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-400/20 transition-all relative overflow-hidden"
                                >
                                    <span className={`relative z-10 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                        Send Message
                                    </span>
                                    {isSubmitting && (
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent" />
                                        </div>
                                    )}
                                </motion.button>
                                {submitSuccess && (
                                    <div className="text-center text-green-400 text-sm">
                                        Message sent successfully!
                                    </div>
                                )}

                                {!submitSuccess && !isSubmitting && error && (
                                    <div className="text-center text-red-400 text-sm">
                                        Failed to send message. Please try again.
                                    </div>
                                )}
                            </motion.form>
                        </div>
                    </motion.div>
                </section>
            </main>
            {/* Mobile Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800/90 backdrop-blur-lg border-t border-gray-700/50 z-50">
                <div className="flex justify-around items-center p-2">
                    {sections.map(section => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`p-3 rounded-full transition-colors duration-300 relative
                        ${activeSection === section.id
                                    ? 'text-blue-400'
                                    : 'text-gray-300 hover:text-blue-300'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {/* Section Icons */}
                            {section.id === 'home' && <FaHome className="text-xl" />}
                            {section.id === 'about' && <FaUser className="text-xl" />}
                            {section.id === 'education' && <FaGraduationCap className="text-xl" />}
                            {section.id === 'projects' && <FaCode className="text-xl" />}
                            {section.id === 'portfolio' && <FaFolderOpen className="text-xl" />}
                            {section.id === 'experience' && <FaBriefcase className="text-xl" />}
                            {section.id === 'contact' && <FaEnvelope className="text-xl" />}

                            {/* Active indicator */}
                            {activeSection === section.id && (
                                <span className="absolute bottom-1 left-1/2 w-1 h-1 bg-blue-400 rounded-full -translate-x-1/2"></span>
                            )}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SinglePagePortfolio;
