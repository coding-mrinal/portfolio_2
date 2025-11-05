'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function CodeEditor({ codeContent }) {
  const [typedCode, setTypedCode] = useState('');

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
  }, [codeContent]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center justify-center lg:justify-end relative order-1 lg:order-2"
    >
      <div className="w-full max-w-xl lg:max-w-2xl">
        <div className="rounded-xl border border-purple-400/20 bg-gray-900/55 shadow-2xl shadow-purple-500/10 overflow-hidden hover:border-purple-400/40 transition-all duration-300">
          {/* Editor Header */}
          <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-b border-white/10 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between">
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

          {/* Editor Content */}
          <CodeEditorContent typedCode={typedCode} />

          {/* Editor Footer */}
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

        {/* Floating Elements */}
        <FloatingElements />
      </div>
    </motion.div>
  );
}

// Separate component for code content (can be optimized further with React.memo)
function CodeEditorContent({ typedCode }) {
  return (
    <div className="p-3 sm:p-4 md:p-5 font-mono text-[10px] xs:text-[11px] sm:text-[13px] overflow-hidden h-[300px] xs:h-[340px] sm:h-[380px] md:h-[420px] lg:h-[450px] xl:h-[480px] bg-gradient-to-r bg-gray-400/0 to bg-black/10">
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
  );
}

// Separate component for floating elements
function FloatingElements() {
  return (
    <>
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
    </>
  );
}