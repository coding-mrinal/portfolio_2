"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Terminal from './Terminal';

export default function ProjectCard({ project }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const terminalCommands = {
    help: [
      'Available commands:',
      '  info     - Project information',
      '  tech     - Technologies used',
      '  demo     - Open live demo',
      '  github   - View source code',
      '  install  - Installation steps',
      '  clear    - Clear terminal'
    ],
    info: [
      `Project: ${project.title}`,
      `Description: ${project.description}`,
      `Status: ✓ Completed`,
      `Last Updated: ${project.lastUpdated || 'Recently'}`
    ],
    tech: [
      'Technologies Stack:',
      ...project.tags.map(tag => `  → ${tag}`),
      `Total: ${project.tags.length} technologies`
    ],
    demo: [
      'Opening live demo...',
      `→ ${project.demo || 'Demo not available'}`
    ],
    github: [
      'Opening GitHub repository...',
      `→ ${project.github || 'Repository not available'}`
    ],
    install: [
      'Installation Steps:',
      '  1. git clone <repository-url>',
      '  2. npm install',
      '  3. npm run dev',
      '  4. Open http://localhost:3000'
    ],
    clear: []
  }

  const handleCommand = (command) => {
    const cmd = command.toLowerCase().trim()
    
    if (cmd === 'clear') {
      setTerminalOutput([])
      return
    }

    const output = terminalCommands[cmd] || [
      `Command '${cmd}' not found.`,
      'Type "help" for available commands.'
    ]

    setTerminalOutput(prev => [
      ...prev,
      { type: 'input', text: `$ ${command}` },
      { type: 'output', text: output }
    ])
  }

  const typeCommand = async (command) => {
    setIsTyping(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    handleCommand(command)
    setIsTyping(false)
  }

  return (
    <>
      <div 
        className="h-[400px] perspective-1000"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-full preserve-3d cursor-pointer"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={project.image || '/images/placeholder.jpg'} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover Hint */}
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-400 italic">Hover to see more</p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-md overflow-hidden h-full text-white p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                
                {/* All Tags on Back */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowTerminal(true)
                  }}
                  className="flex-1 bg-black/30 backdrop-blur-sm py-2 px-4 rounded-lg font-semibold hover:bg-black/40 transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-lg">⌘</span>
                  Terminal
                </button>
                <button className="flex-1 bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Terminal Modal */}
      <AnimatePresence>
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowTerminal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Terminal 
                project={project}
                terminalOutput={terminalOutput}
                isTyping={isTyping}
                onCommand={typeCommand}
                onClose={() => setShowTerminal(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}