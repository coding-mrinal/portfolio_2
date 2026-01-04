"use client"

import { motion } from 'framer-motion';
import { 
  Layout, 
  Database, 
  GitBranch, 
  Cpu, 
  Languages,
  Users,
  Server,
  Braces
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'cyan',
    skills: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    delay: 0
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'purple',
    skills: ['NodeJS', 'ExpressJS', 'RESTful APIs'],
    delay: 0.05
  },
  {
    title: 'Database',
    icon: Database,
    color: 'emerald',
    skills: ['MongoDB', 'MySQL'],
    delay: 0.1
  },
  {
    title: 'Tools',
    icon: GitBranch,
    color: 'amber',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'IntelliJ'],
    delay: 0.15
  },
  {
    title: 'Programming',
    icon: Braces,
    color: 'blue',
    skills: ['Java', 'Python'],
    delay: 0.2
  },
  {
    title: 'Core CS',
    icon: Cpu,
    color: 'indigo',
    skills: ['OOPS', 'OS', 'DBMS', 'CN'],
    delay: 0.25
  },
  {
    title: 'Languages',
    icon: Languages,
    color: 'rose',
    skills: ['English, Bengali', 'Hindi (Conv.)'],
    delay: 0.3,
    isList: true
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'green',
    skills: ['Communication', 'Critical Thinking', 'Task Management', 'Problem Solving'],
    delay: 0.35
  }
];

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skillCategories.map((category) => {
        const Icon = category.icon;
        return (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: category.delay }}
            className={`bg-white/5 border border-white/10 rounded-xl p-4 hover:border-${category.color}-400/30 transition-all duration-300`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 bg-${category.color}-400/10 rounded-lg flex items-center justify-center`}>
                <Icon className={`w-4 h-4 text-${category.color}-400`} />
              </div>
              <h4 className="text-white font-bold text-sm">{category.title}</h4>
            </div>
            
            {category.isList ? (
              <div className="space-y-1">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className={`flex items-center gap-1.5 text-${category.color}-300 text-xs`}>
                    <div className={`w-1 h-1 rounded-full bg-${category.color}-400`} />
                    {skill}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`bg-${category.color}-400/10 border border-${category.color}-400/30 rounded-md px-2 py-1 text-xs text-${category.color}-300 hover:bg-${category.color}-400/20 hover:border-${category.color}-400 transition-all duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}