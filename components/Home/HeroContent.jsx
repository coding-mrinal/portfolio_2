'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaFileDownload } from 'react-icons/fa';


export default function HeroContent({ socialLinks }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col justify-center space-y-3 sm:space-y-2 lg:pr-6 order-1 lg:order-1"
    >
      {/* Main Heading */}
      <motion.h1
  variants={itemVariants}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-tight"
>
  Hi, I'm{' '}
  <span className="text-white [text-shadow:0_0_5px_#fff,0_0_10px_#22d3ee,0_0_15px_#22d3ee,0_0_20px_#22d3ee] hover:[text-shadow:0_0_10px_#fff,0_0_20px_#22d3ee,0_0_30px_#22d3ee,0_0_40px_#22d3ee] transition-all duration-500">
    M.R.I.N.A.L
  </span>
</motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg sm:text-xl md:text-2xl text-cyan-200 font-medium tracking-wide"
      >
        Crafting Digital Experiences
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed font-light"
      >
        I build beautiful, responsive websites and web applications that solve real-world problems with clean code and user-centric design.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
      >
        <motion.div variants={itemVariants} className="w-full xs:w-auto">
          <Link 
            href="/projects" 
            className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-cyan-400 bg-cyan-400/30 text-cyan-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105"
          >
            View My Work
            <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full xs:w-auto">
          <Link 
            href="/resume.pdf" 
            target="_blank"
            className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-emerald-400/50 bg-emerald-400/30 text-emerald-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/20 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 hover:scale-105"
          >
            <FaFileDownload className="mr-3 text-sm group-hover:scale-110 transition-transform duration-300" />
            Resume
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full xs:w-auto">
          <Link 
            href="/contact" 
            className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-purple-400/50 bg-purple-400/30 text-purple-100 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-500/20 hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}