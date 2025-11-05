'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendar,
  FaHeart
} from 'react-icons/fa';
import { 
  Layout, 
  Code2, 
  Database, 
  GitBranch, 
  Cpu, 
  BookOpen,
  Languages,
  Users,
  Globe,
  Server,
  Terminal,
  Braces
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: FaUser },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'skills', label: 'Skills', icon: FaCode },
  ];

  const content = {
    about: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed">
          👋 Hello! I'm a passionate full-stack developer with a love for creating beautiful, 
          functional web applications. My journey in tech started 3+ years ago, and I haven't 
          looked back since.
        </p>
        <p className="text-gray-300 leading-relaxed">
          I specialize in modern JavaScript frameworks and have a particular fondness for React 
          and Next.js. Clean code, user experience, and performance optimization are my top priorities.
        </p>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
          projects, or enjoying a good cup of coffee while reading tech blogs.
        </p>
      </div>
    ),
    education: (
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
    ),
    skills: (
      <div className="space-y-5">
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
    ),
  };

  return (
    <section className="h-screen lg:flex lg:items-center py-12 pt-30 px-4 sm:px-6 lg:px-8 relative overflow-y-auto lg:overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              {/* Profile Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-5">
                    <div className="relative inline-block mb-3">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center text-5xl border-4 border-white/10">
                        👨‍💻
                      </div>
                    </div>
                    <h2 className="text-2xl font-black mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      M.R.I.N.A.L
                    </h2>
                    <p className="text-cyan-300 text-sm">Full-Stack Developer</p>
                  </div>

                  <div className="space-y-2.5 border-t border-white/10 pt-5">
                    {[
                      { icon: FaMapMarkerAlt, text: 'Kolkata, India', color: 'cyan' },
                      { icon: FaEnvelope, text: 'mrinalmahapatra2004@gmail.com', color: 'purple' },
                      { icon: FaCalendar, text: 'Available for work', color: 'emerald' },
                      { icon: FaHeart, text: 'Open to opportunities', color: 'rose' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
                        <item.icon className="text-cyan-400 text-sm" />
                        <span className="text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-cyan-400/20 border-2 border-cyan-400 text-white'
                          : 'bg-white/5 border-2 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <tab.icon className={`text-sm ${activeTab === tab.id ? 'text-cyan-400' : ''}`} />
                      <span className="font-semibold text-sm">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-black/65 border border-white/20 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center pb-5">
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {content[activeTab]}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}