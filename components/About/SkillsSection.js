"use client"

import { motion } from 'framer-motion';
import { 
  Layout, 
  Code2, 
  Database, 
  GitBranch, 
  Cpu, 
  Languages,
  Users,
  Server,
  Braces
} from 'lucide-react';

export default function SkillsSection() {
  return (
    <div className="space-y-5 ">
      {/* Technical Skills */}
      <div className="grid grid-cols-2 gap-4">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-cyan-400/10 rounded-lg flex items-center justify-center">
              <Layout className="w-4 h-4 text-cyan-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Frontend</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['ReactJS', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-cyan-400/10 border border-cyan-400/30 rounded-md px-2 py-1 text-xs text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-purple-400/10 rounded-lg flex items-center justify-center">
              <Server className="w-4 h-4 text-purple-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Backend</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['NodeJS', 'ExpressJS', 'RESTful APIs'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-purple-400/10 border border-purple-400/30 rounded-md px-2 py-1 text-xs text-purple-300 hover:bg-purple-400/20 hover:border-purple-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-emerald-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-emerald-400/10 rounded-lg flex items-center justify-center">
              <Database className="w-4 h-4 text-emerald-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Database</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['MongoDB', 'MySQL'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-emerald-400/10 border border-emerald-400/30 rounded-md px-2 py-1 text-xs text-emerald-300 hover:bg-emerald-400/20 hover:border-emerald-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-amber-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-amber-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Tools</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Git', 'GitHub', 'Vercel', 'VS Code', 'IntelliJ'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-amber-400/10 border border-amber-400/30 rounded-md px-2 py-1 text-xs text-amber-300 hover:bg-amber-400/20 hover:border-amber-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Programming */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-blue-400/10 rounded-lg flex items-center justify-center">
              <Braces className="w-4 h-4 text-blue-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Programming</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Java', 'Python'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-400/10 border border-blue-400/30 rounded-md px-2 py-1 text-xs text-blue-300 hover:bg-blue-400/20 hover:border-blue-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Core CS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-indigo-400/10 rounded-lg flex items-center justify-center">
              <Cpu className="w-4 h-4 text-indigo-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Core CS</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['DSA', 'OOPS', 'OS', 'DBMS', 'CN'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-400/10 border border-indigo-400/30 rounded-md px-2 py-1 text-xs text-indigo-300 hover:bg-indigo-400/20 hover:border-indigo-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-rose-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-rose-400/10 rounded-lg flex items-center justify-center">
              <Languages className="w-4 h-4 text-rose-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Languages</h4>
          </div>
          <div className="space-y-1">
            {['English, Bengali', 'Hindi (Conv.)'].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-rose-300 text-xs">
                <div className="w-1 h-1 rounded-full bg-rose-400"></div>
                {skill}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-green-400/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-green-400/10 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-green-400" />
            </div>
            <h4 className="text-white font-bold text-sm">Soft Skills</h4>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Communication', 'Critical Thinking', 'Task Management', 'Problem Solving'].map((skill, idx) => (
              <span
                key={idx}
                className="bg-green-400/10 border border-green-400/30 rounded-md px-2 py-1 text-xs text-green-300 hover:bg-green-400/20 hover:border-green-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}