"use client"

import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

export default function EducationSection() {
  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <div className="space-y-5 md:space-y-0 md:flex md:flex-col md:gap-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-xl text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base md:text-lg mb-1">B.Tech in Computer Science Engineering</h4>
              <p className="text-cyan-200 text-xs md:text-sm mb-1">Guru Nanak Institute of Technology • 2022-2026</p>
              <p className="text-gray-400 text-xs md:text-sm">Focused on Software Engineering and Web Development</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-xl text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base md:text-lg mb-1">Secondary, Higher Secondary</h4>
              <p className="text-cyan-200 text-xs md:text-sm mb-1">BBIT Public School • 2022</p>
              <p className="text-gray-400 text-xs md:text-sm">Focused on Academic Excellence</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="text-white font-bold mb-3 text-base md:text-lg">Certifications & Courses</h4>
        <ul className="space-y-2">
          {['Coursera - Dara Structures (2024)', 'NPTEL - Artificial Intelligence: Search Methods For Problem Solving (2024), Soft Computing (2025)', 'IBM - Web Development Fundamentals (2025)', 'MongoDB University - CRUD Operations in MongoDB (2025)'].map((cert, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 text-xs md:text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              {cert}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}