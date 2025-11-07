"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import TabNavigation from './TabNavigation';
import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: 'FaUser' },
    { id: 'education', label: 'Education', icon: 'FaGraduationCap' },
    { id: 'skills', label: 'Skills', icon: 'FaCode' },
  ];

  const content = {
    about: <AboutMeSection />,
    education: <EducationSection />,
    skills: <SkillsSection />,
  };

  return (
    <div className="h-full lg:flex lg:items-center py-12 pt-30 px-4 sm:px-6 sm:overflow-x-hidden lg:px-8 relative overflow-y-auto lg:overflow-hidden">
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
              <ProfileCard />
              <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-black/50 border border-blue-400/60 rounded-2xl p-6 lg:p-8
shadow-[0_0_50px_8px_rgba(59,130,246,0.8)]
hover:border-blue-400 
hover:shadow-[0_0_90px_12px_rgba(59,130,246,0.3)]
">
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
    </div>
  );
}