'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendar,
  FaHeart
} from 'react-icons/fa';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: FaUser },
    // { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'skills', label: 'Skills', icon: FaCode },
  ];

  const content = {
    about: (
      <div className="space-y-4">
        <p className="text-gray-300 leading-relaxed text-lg">
          👋 Hello! I'm a passionate full-stack developer with a love for creating beautiful, 
          functional web applications. My journey in tech started 3+ years ago, and I haven't 
          looked back since.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg">
          I specialize in modern JavaScript frameworks and have a particular fondness for React 
          and Next.js. Clean code, user experience, and performance optimization are my top priorities.
        </p>
        <p className="text-gray-300 leading-relaxed text-lg">
          When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
          projects, or enjoying a good cup of coffee while reading tech blogs.
        </p>
      </div>
    ),
    experience: (
      <div className="space-y-6">
        {[
          { year: '2024', title: 'Senior Developer', company: 'Tech Corp', desc: 'Leading development of scalable web applications' },
          { year: '2022', title: 'Full-Stack Developer', company: 'StartUp Inc', desc: 'Built and maintained multiple client projects' },
          { year: '2020', title: 'Junior Developer', company: 'Digital Agency', desc: 'Learned and grew as a developer' },
        ].map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-cyan-400/30 hover:border-cyan-400 transition-colors group"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform shadow-lg shadow-cyan-400/50"></div>
            <div className="text-cyan-400 font-bold mb-1">{job.year}</div>
            <h4 className="text-white font-semibold text-xl mb-1">{job.title}</h4>
            <div className="text-purple-400 text-sm mb-2">{job.company}</div>
            <p className="text-gray-400">{job.desc}</p>
          </motion.div>
        ))}
      </div>
    ),
    education: (
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-2xl text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-2">Bachelor's in Computer Science</h4>
              <p className="text-purple-400 mb-2">Your University • 2016-2020</p>
              <p className="text-gray-400">Focused on Software Engineering and Web Development</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6"
        >
          <h4 className="text-white font-bold text-lg mb-4">Certifications & Courses</h4>
          <ul className="space-y-2">
            {['Advanced React & Next.js', 'Node.js Certification', 'AWS Cloud Practitioner', 'UI/UX Design Fundamentals'].map((cert, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                {cert}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    ),
    skills: (
      <div className="space-y-6">
        {[
          { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], color: 'cyan' },
          { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'], color: 'purple' },
          { category: 'Tools & Others', skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'], color: 'emerald' },
        ].map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className={`text-${group.color}-400 font-bold mb-3 text-lg`}>{group.category}</h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className={`backdrop-blur-xl bg-white/5 border border-${group.color}-400/30 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-${group.color}-400 hover:text-white transition-all duration-300`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    ),
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Profile Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center text-6xl border-4 border-white/10">
                        👨‍💻
                      </div>
                    </div>
                    <h2 className="text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      M.R.I.N.A.L
                    </h2>
                    <p className="text-cyan-300">Full-Stack Developer</p>
                  </div>

                  <div className="space-y-3 border-t border-white/10 pt-6">
                    {[
                      { icon: FaMapMarkerAlt, text: 'Your City, Country', color: 'cyan' },
                      { icon: FaEnvelope, text: 'your.email@example.com', color: 'purple' },
                      { icon: FaCalendar, text: 'Available for work', color: 'emerald' },
                      { icon: FaHeart, text: 'Open to opportunities', color: 'rose' },
                    ].map((item, index) => (
                      <div key={index} className={`flex items-center gap-3 text-gray-300 hover:text-${item.color}-400 transition-colors`}>
                        <item.icon className={`text-${item.color}-400`} />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-cyan-400/20 border-2 border-cyan-400 text-white'
                          : 'bg-white/5 border-2 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <tab.icon className={activeTab === tab.id ? 'text-cyan-400' : ''} />
                      <span className="font-semibold">{tab.label}</span>
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
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 min-h-[600px]">
              <h3 className="text-3xl font-black mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
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