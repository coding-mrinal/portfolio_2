"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const allProjects = [
    {
      id: 1,
      title: "Taste Avenue - Dining Restaurant",
      description:
        "Full-featured online shopping platform with admin dashboard and payment integration",
      image: "restaurant.jpg",
      tags: ["Next.js", "Tailwind", "Typescript"],
      github: "https://github.com/user/ecommerce",
      demo: "https://ecommerce-demo.com",
      status: "In Progress",
    },
    {
      id: 2,
      title: "BuddyAI - Chat Assistant",
      description: "Real-time AI Chat application with 6 Personas",
      image: "aichat.jpg",
      tags: ["React", "Tailwind", "Gemini API"],
      github: "https://github.com/user/social-app",
      demo: "https://social-demo.com",
      status: "Live",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather app with forecast and interactive maps",
      image: "/images/project3.jpg",
      tags: ["JavaScript", "API", "CSS", "Chart.js"],
      github: "https://github.com/user/weather",
      demo: "https://weather-demo.com",
      status: "Live",
    },
    {
      id: 4,
      title: "Blog Platform",
      description: "Content management system with SEO optimization",
      image: "/images/project4.jpg",
      tags: ["Next.js", "Markdown", "Prisma", "PostgreSQL"],
      github: "https://github.com/user/blog",
      demo: "https://blog-demo.com",
      status: "In Progress",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, allProjects.length]);

  const currentProject = allProjects[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allProjects.length) % allProjects.length
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-3xl pt-10 sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
            My Projects
          </h1>
          {/* <p className="text-sm sm:text-base text-gray-400">
            Interactive LED Display Showcase
          </p> */}
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative p-2 sm:p-3 bg-black/40 rounded-xl sm:rounded-2xl border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,1)]"
          >
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden">
              <div className="relative grid lg:grid-cols-2 gap-0 h-[420px] sm:h-[440px] lg:h-[400px]">
                {/* LEFT SIDE - Carousel */}
                <div className="relative lg:border-r border-gray-800 flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 flex flex-col p-3 sm:p-4 lg:p-5"
                    >
                      <div className="relative flex-1 rounded-lg overflow-hidden mb-3 group">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />

                        <div className="absolute top-2 right-2">
                          <span
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-sm ${
                              currentProject.status === "Live"
                                ? "bg-green-500/90 text-white animate-pulse"
                                : "bg-yellow-500/90 text-black"
                            }`}
                          >
                            ● {currentProject.status}
                          </span>
                        </div>

                        <button
                          onClick={handlePrevious}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                        >
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex gap-2">
                        <motion.a
                          href={currentProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5"
                        >
                          View Live
                        </motion.a>
                        <motion.a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gray-700 text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-semibold text-center hover:bg-gray-600 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5"
                        >
                          GitHub
                        </motion.a>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* RIGHT SIDE - Project Details */}
                <div className="relative flex flex-col">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center"
                    >
                      <div className="text-blue-500 font-mono text-[10px] sm:text-xs mb-1.5">
                        PROJECT {String(currentIndex + 1).padStart(2, "0")}
                      </div>

                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 line-clamp-2">
                        {currentProject.title}
                      </h2>

                      <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {currentProject.description}
                      </p>

                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                          <span className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {currentProject.tags.map((tag, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                              className="px-2 sm:px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-md text-blue-300 text-[10px] sm:text-xs font-medium"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-800">
                        <div>
                          <div className="text-gray-500 text-[10px] sm:text-xs mb-0.5">Status</div>
                          <div className={`font-semibold text-xs sm:text-sm ${currentProject.status === "Live" ? "text-green-400" : "text-yellow-400"}`}>
                            {currentProject.status}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-500 text-[10px] sm:text-xs mb-0.5">Tech Stack</div>
                          <div className="font-semibold text-xs sm:text-sm text-blue-400">
                            {currentProject.tags.length} Technologies
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Control Panel */}
              <div className="border-t border-gray-800 px-3 sm:px-4 py-2 sm:py-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5 sm:gap-2">
                    {allProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlay(false);
                        }}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-blue-500 w-4 sm:w-6"
                            : "bg-gray-600 hover:bg-gray-500 w-1.5 sm:w-2"
                        }`}
                      />
                    ))}
                  </div>

                  {/* <button
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className={`px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-semibold transition-all flex items-center gap-1.5 ${
                      isAutoPlay
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${isAutoPlay ? "bg-white animate-pulse" : "bg-gray-400"}`} />
                    {isAutoPlay ? "AUTO" : "MANUAL"}
                  </button> */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}