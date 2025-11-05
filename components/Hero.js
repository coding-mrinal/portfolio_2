'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaFileDownload, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [typedCode, setTypedCode] = useState('');
  
  const codeContent = `const developer = {
  name: "Your Name",
  role: "Full-Stack Developer",
  location: "Your City",
  
  skills: {
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "Docker", "AWS"]
  },
  
  experience: "3+ years",
  
  passion: [
    "Building scalable apps",
    "Clean code",
    "User-centric design"
  ],
  
  available: true
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= codeContent.length) {
        setTypedCode(codeContent.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => clearInterval(interval);
  }, []);

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
    <section className="relative hero-section flex items-center justify-center text-white overflow-hidden pt-20 lg:h-screen">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 w-full">
          
          {/* LEFT SIDE - Text Content & CTAs */}
          <motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="flex flex-col justify-center space-y-3 sm:space-y-2 lg:pr-6 order-2 lg:order-1"
>
  {/* Badge */}
  {/* <motion.div variants={itemVariants}>
    <span className="inline-flex items-center gap-1.5 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-[10px] sm:text-xs px-3 sm:px-4 py-1.5 rounded-full font-semibold backdrop-blur-lg">
      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
      Full-Stack Developer
    </span>
  </motion.div> */}

  {/* Main Heading */}
  <motion.h1
  variants={itemVariants}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black leading-tight"
>
  Hi, I'm{' '}
  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent font-black animate-gradient-x">
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
        className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-cyan-400 bg-cyan-400/10 text-cyan-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-cyan-500/25 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-105 "
      >
        View My Work
        <FaArrowRight className="ml-3 text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
      </Link>
    </motion.div>

    <motion.div variants={itemVariants} className="w-full xs:w-auto">
      <Link 
        href="/resume.pdf" 
        target="_blank"
        className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-emerald-400/50 bg-emerald-400/5 text-emerald-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-500/20 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 hover:scale-105"
      >
        <FaFileDownload className="mr-3 text-sm group-hover:scale-110 transition-transform duration-300" />
        Resume
      </Link>
    </motion.div>

    <motion.div variants={itemVariants} className="w-full xs:w-auto">
      <Link 
        href="/contact" 
        className="group inline-flex items-center justify-center w-full xs:w-auto border-2 border-purple-400/50 bg-purple-400/5 text-purple-300 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-purple-500/20 hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300 hover:scale-105"
      >
        Get In Touch
      </Link>
    </motion.div>
  </motion.div>

  {/* Social Links */}
  {/* <motion.div
    variants={itemVariants}
    className="pt-6 sm:pt-8 border-t border-white/10"
  >
    <p className="text-xs sm:text-sm text-gray-400 mb-3 font-medium tracking-wide">LET'S CONNECT</p>
    <div className="flex space-x-3 sm:space-x-4">
      {[
        { 
          icon: FaGithub, 
          href: "https://github.com/yourusername", 
          label: "GitHub", 
          borderColor: "border-gray-400/50 hover:border-gray-300",
          textColor: "text-gray-400 hover:text-white",
          bgColor: "bg-gray-400/5 hover:bg-gray-400/10"
        },
        { 
          icon: FaLinkedin, 
          href: "https://linkedin.com/in/yourusername", 
          label: "LinkedIn", 
          borderColor: "border-blue-400/50 hover:border-blue-400",
          textColor: "text-blue-400 hover:text-blue-300",
          bgColor: "bg-blue-400/5 hover:bg-blue-400/10"
        },
        { 
          icon: FaTwitter, 
          href: "https://twitter.com/yourusername", 
          label: "Twitter", 
          borderColor: "border-sky-400/50 hover:border-sky-400",
          textColor: "text-sky-400 hover:text-sky-300",
          bgColor: "bg-sky-400/5 hover:bg-sky-400/10"
        },
        { 
          icon: FaEnvelope, 
          href: "mailto:your@email.com", 
          label: "Email", 
          borderColor: "border-amber-400/50 hover:border-amber-400",
          textColor: "text-amber-400 hover:text-amber-300",
          bgColor: "bg-amber-400/5 hover:bg-amber-400/10"
        }
      ].map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 ${social.borderColor} ${social.bgColor} ${social.textColor} backdrop-blur-lg transition-all duration-300 shadow-lg`}
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1 }}
          aria-label={social.label}
        >
          <social.icon className="text-lg sm:text-xl transition-all duration-300 group-hover:scale-110" />
        </motion.a>
      ))}
    </div>
  </motion.div> */}

  {/* Quick Stats */}
  
</motion.div>

          {/* RIGHT SIDE - Code Editor */}
          <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="flex items-center justify-center lg:justify-end relative order-1 lg:order-2"
>
    <div className="w-full max-w-xl lg:max-w-2xl">
        {/* Enhanced Code Editor Window */}
<div className="rounded-xl border border-purple-400/20 bg-gray-900/55  shadow-2xl shadow-purple-500/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300">            {/* Editor Header - Modern Glass Effect */}
            <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-b border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between ">
                <div className="flex space-x-1.5 sm:space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-red-400 to-red-500 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-sm"></div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
                    <span className="text-white/80 font-medium text-[10px] sm:text-xs tracking-wide">developer.js</span>
                    <div className="flex items-center space-x-1 bg-emerald-500/20 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-emerald-400 text-[8px] sm:text-[9px] font-medium">LIVE</span>
                    </div>
                </div>
            </div>

            {/* Editor Content - Enhanced Syntax Highlighting */}
            <div className="p-3 sm:p-4 md:p-5 font-mono text-[10px] xs:text-[11px] sm:text-[13px] overflow-hidden h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[450px] xl:h-[480px] bg-gradient-to-r bg-gray-400/0 to bg-black/10 ">
                <pre className="text-white/95 leading-relaxed">
                    <code>
                        {typedCode.split('\n').map((line, index) => (
                            <div key={index} className="group hover:bg-white/5 px-2 sm:px-2.5 -mx-2 sm:-mx-2.5 rounded transition-all duration-200">
                                <span className="inline-block w-5 sm:w-7 text-white/20 select-none text-right mr-2 sm:mr-3 text-[9px] xs:text-[10px] sm:text-[11px] font-medium">
                                    {index + 1}
                                </span>
                                <span className={
                                    line.includes('const') || line.includes('let') || line.includes('function') ? 'text-indigo-300' :
                                    line.includes('class') || line.includes('return') ? 'text-rose-300' :
                                    line.includes('//') ? 'text-cyan-400/60 italic' :
                                    line.includes(':') && !line.includes('//') ? 'text-emerald-300' :
                                    line.includes('"') || line.includes("'") || line.includes('`') ? 'text-amber-200' :
                                    line.includes('[') || line.includes(']') ? 'text-amber-300' :
                                    line.includes('{') || line.includes('}') ? 'text-orange-300' :
                                    line.includes('true') || line.includes('false') ? 'text-blue-300' :
                                    line.match(/\d+/) ? 'text-rose-300' :
                                    'text-gray-200'
                                }>
                                    {line}
                                </span>
                            </div>
                        ))}
                        <div className="flex items-center">
                            <span className="inline-block w-5 sm:w-7 text-white/20 text-right mr-2 sm:mr-3 text-[9px] xs:text-[10px] sm:text-[11px] font-medium">
                                {typedCode.split('\n').length + 1}
                            </span>
                            <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse ml-0.5 rounded-sm shadow-sm shadow-amber-400/50"></span>
                        </div>
                    </code>
                </pre>
            </div>

            {/* Enhanced Editor Footer */}
            <div className="bg-gradient-to-r from-gray-900/60 to-black/70 border-t border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between text-[10px] sm:text-[11px] text-white/60 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1.5 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
                        <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.13-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-.93-.42-1.42-.42-.703 0-1.235.285-1.656.705-.42.42-.69 1.05-.69 1.755 0 1.125.555 1.755 1.656 2.58 1.095.825 1.47 1.365 1.47 2.145 0 .645-.36 1.125-1.125 1.125-.765 0-1.23-.33-1.68-1.035l-1.755 1.125c.405.75 1.23 1.5 2.58 1.5 1.53 0 2.685-.72 2.685-2.355 0-1.395-.87-2.115-2.16-2.94-1.035-.69-1.47-1.125-1.47-1.815 0-.615.405-1.035 1.035-1.035.63 0 1.02.255 1.38.825l1.515-1.125c-.645-1.125-1.515-1.545-2.58-1.545-1.755 0-2.94 1.125-2.94 2.58 0 .975.495 1.755 1.755 2.58 1.26.825 1.755 1.47 1.755 2.58 0 1.47-1.125 2.58-2.58 2.58-1.125 0-2.115-.555-2.58-1.5l-1.755 1.125c.825 1.395 2.58 2.58 4.335 2.58 2.58 0 4.335-1.755 4.335-4.335 0-1.125-.42-2.115-1.125-2.94z"/>
                        </svg>
                        <span className="text-blue-400 font-medium">JavaScript</span>
                    </span>
                    <span className="hidden sm:inline text-white/40">•</span>
                    <span className="hidden sm:inline text-white/50">UTF-8</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                        <span className="text-emerald-400 font-medium">Connected</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Enhanced Floating Elements */}
        <motion.div 
            className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-xl opacity-30 blur-xl"
            animate={{ 
                y: [-8, 8, -8],
                rotate: [0, 180, 0],
                scale: [1, 1.2, 1]
            }}
            transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        
        <motion.div 
            className="hidden sm:block absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full opacity-30 blur-xl"
            animate={{ 
                y: [8, -8, 8],
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0]
            }}
            transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
            }}
        />

        {/* Additional Floating Element */}
        <motion.div 
            className="hidden sm:block absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-amber-500/30 to-orange-500/30 rounded-lg opacity-40 blur-lg"
            animate={{ 
                y: [-15, 15, -15],
                x: [0, 10, 0],
                rotate: [45, -45, 45]
            }}
            transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
            }}
        />
    </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}