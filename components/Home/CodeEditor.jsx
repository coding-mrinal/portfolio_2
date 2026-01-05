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
      className="flex items-center justify-center lg:justify-end order-2 lg:order-2"
    >
      <div className="w-full max-w-xl lg:max-w-2xl">
        <div className="rounded-xl border border-purple-400/20 bg-gray-900/55 shadow-2xl overflow-hidden">
          {/* Editor Header */}
          <div className="bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-cyan-900/40 border-b border-white/10 px-3 py-2 flex items-center justify-between">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="text-white/80 font-medium text-[10px] sm:text-xs">developer.js</span>
              <div className="flex items-center space-x-1 bg-emerald-500/20 px-1.5 py-0.5 rounded-full border border-emerald-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[8px] sm:text-[9px] font-medium">LIVE</span>
              </div>
            </div>
          </div>

          {/* Editor Content */}
          <div className="p-3 sm:p-4 font-mono text-[9px] sm:text-[11px] md:text-[13px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] overflow-auto">
            <pre className="text-white/95 leading-relaxed">
              <code>
                {typedCode.split('\n').map((line, index) => (
                  <div key={index} className="hover:bg-white/5 px-2 -mx-2 rounded">
                    <span className="inline-block w-5 sm:w-7 text-white/20 select-none text-right mr-2 text-[8px] sm:text-[10px]">
                      {index + 1}
                    </span>
                    <span className={getLineColor(line)}>{line}</span>
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="inline-block w-5 sm:w-7 text-white/20 text-right mr-2 text-[8px] sm:text-[10px]">
                    {typedCode.split('\n').length + 1}
                  </span>
                  <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse rounded-sm" />
                </div>
              </code>
            </pre>
          </div>

          {/* Editor Footer */}
          <div className="bg-gray-900/60 border-t border-white/10 px-3 py-1.5 flex items-center justify-between text-[9px] sm:text-[11px] text-white/60">
            <span className="text-blue-400 font-medium">JavaScript</span>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getLineColor(line) {
  if (line.includes('//')) return 'text-cyan-400/60 italic';
  if (line.includes('const') || line.includes('let') || line.includes('function')) return 'text-indigo-300';
  if (line.includes('class') || line.includes('return')) return 'text-rose-300';
  if (line.includes('"') || line.includes("'") || line.includes('`')) return 'text-amber-200';
  if (line.includes('{') || line.includes('}')) return 'text-orange-300';
  if (line.includes('[') || line.includes(']')) return 'text-amber-300';
  if (line.includes(':')) return 'text-emerald-300';
  if (line.includes('true') || line.includes('false')) return 'text-blue-300';
  if (line.match(/\d+/)) return 'text-rose-300';
  return 'text-gray-200';
}