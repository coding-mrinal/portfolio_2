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
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaGraduationCap className="text-xl text-purple-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-1">Bachelor's in Computer Science</h4>
            <p className="text-purple-400 text-sm mb-1">Your University • 2016-2020</p>
            <p className="text-gray-400 text-sm">Focused on Software Engineering and Web Development</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white/5 border border-white/10 rounded-xl p-5"
      >
        <h4 className="text-white font-bold mb-3">Certifications & Courses</h4>
        <ul className="space-y-2">
          {['Advanced React & Next.js', 'Node.js Certification', 'AWS Cloud Practitioner', 'UI/UX Design Fundamentals'].map((cert, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
              {cert}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}