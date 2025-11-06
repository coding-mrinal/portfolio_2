"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const allProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with admin dashboard and payment integration',
      image: '/images/project1.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/user/ecommerce',
      demo: 'https://ecommerce-demo.com',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Real-time social networking application with live notifications and messaging',
      image: '/images/project2.jpg',
      tags: ['React', 'Firebase', 'Redux', 'Socket.io'],
      github: 'https://github.com/user/social-app',
      demo: 'https://social-demo.com',
      status: 'Live'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecast and interactive maps',
      image: '/images/project3.jpg',
      tags: ['JavaScript', 'API', 'CSS', 'Chart.js'],
      github: 'https://github.com/user/weather',
      demo: 'https://weather-demo.com',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system with SEO optimization',
      image: '/images/project4.jpg',
      tags: ['Next.js', 'Markdown', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/user/blog',
      demo: 'https://blog-demo.com',
      status: 'In Progress'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      description: 'Track workouts and nutrition with progress charts',
      image: '/images/project5.jpg',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/user/fitness',
      demo: 'https://fitness-demo.com',
      status: 'Live'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging with video calls and file transfer',
      image: '/images/project6.jpg',
      tags: ['Socket.io', 'WebRTC', 'Express', 'React'],
      github: 'https://github.com/user/chat',
      demo: 'https://chat-demo.com',
      status: 'Live'
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allProjects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, allProjects.length])

  const currentProject = allProjects[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length)
    setIsAutoPlay(false)
  }

  return (
    <div className="min-h-screen bg-transparent py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 flex flex-col justify-center overflow-y-hidden md:overflow-y-visible">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-3xl pt-10 sm:text-4xl lg:text-5xl font-bold mb-2 text-white">
            My Projects
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Interactive LED Display Showcase
          </p>
        </motion.div>

        {/* LED Screen Container */}
        <div className="relative max-w-6xl mx-auto">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative p-2 sm:p-3 bg-black/40 rounded-xl sm:rounded-2xl border-2 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,1)]"
  >

    {/* LED Border Effect */}
    {/* <div className="absolute inset-0 rounded-xl sm:rounded-2xl overflow-hidden">
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm"></div>
    </div> */}

    {/* Screen Content */}
    <div className="relative bg-transparent rounded-lg sm:rounded-xl overflow-hidden">
      {/* LED Dots Effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none led-pattern"></div>

      {/* Split Screen Layout - REDUCED HEIGHT */}
      <div className="relative grid lg:grid-cols-2 gap-0 h-[420px] sm:h-[440px] lg:h-[400px] bg-transparent">
        
        {/* LEFT SIDE - Carousel */}
        <div className="relative bg-transparent lg:border-r border-gray-800 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col p-3 sm:p-4 lg:p-5"
            >
              {/* Project Image */}
              <div className="relative flex-1 rounded-lg overflow-hidden mb-3 group">
                <img
                  src={currentProject.image || '/images/placeholder.jpg'}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-sm ${
                    currentProject.status === 'Live' 
                      ? 'bg-green-500/90 text-white animate-pulse' 
                      : 'bg-yellow-500/90 text-black'
                  }`}>
                    ● {currentProject.status}
                  </span>
                </div>

                {/* Navigation Arrows on Image */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                  aria-label="Previous project"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm opacity-0 group-hover:opacity-100"
                  aria-label="Next project"
                >
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <motion.a
                  href={currentProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 sm:py-2.5 px-2 sm:px-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all text-xs sm:text-sm flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
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
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE - Project Details */}
        <div className="relative bg-transparent flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-center"
            >
              {/* Project Number */}
              <div className="text-blue-500 font-mono text-[10px] sm:text-xs mb-1.5">
                PROJECT {String(currentIndex + 1).padStart(2, '0')}
              </div>

              {/* Project Title */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 led-text line-clamp-2">
                {currentProject.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {currentProject.description}
              </p>

              {/* Technologies Section */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-[10px] sm:text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></span>
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      className="px-2 sm:px-2.5 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-md text-blue-300 text-[10px] sm:text-xs font-medium backdrop-blur-sm hover:border-blue-400/50 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Stats/Info */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-800">
                <div>
                  <div className="text-gray-500 text-[10px] sm:text-xs mb-0.5">Status</div>
                  <div className={`font-semibold text-xs sm:text-sm ${
                    currentProject.status === 'Live' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
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

      {/* Control Panel - COMPACT */}
      <div className=" border-t border-gray-800 px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="flex items-center justify-between">
          {/* Navigation Dots */}
          <div className="flex gap-1.5 sm:gap-2">
            {allProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`h-1.5 sm:h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-4 sm:w-6' 
                    : 'bg-gray-600 hover:bg-gray-500 w-1.5 sm:w-2'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-2 sm:px-3 py-1 rounded text-[10px] sm:text-xs font-semibold transition-all flex items-center gap-1.5 ${
              isAutoPlay 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {isAutoPlay ? (
              <>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse"></span>
                AUTO
              </>
            ) : (
              <>
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full"></span>
                MANUAL
              </>
            )}
          </button>
        </div>

        {/* Progress Bar */}
        {/* {isAutoPlay && (
          <div className="mt-2 h-0.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              key={currentIndex}
            />
          </div>
        )} */}
      </div>
    </div>
  </motion.div>

  {/* Ambient Glow Effect */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 blur-3xl rounded-full"></div>
  </div>
</div>
      </div>
    </div>
  )
}