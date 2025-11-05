'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCode, FaTimes, FaBars } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg shadow-purple-500/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo with Animation */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {/* <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                <FaCode className="text-black text-lg sm:text-xl" />
              </div> */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-500 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
              <div className="h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </Link>

          {/* Desktop Menu with Glassmorphism */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-md rounded-full px-2 py-2 border border-white/10">
            {navItems.map((item, index) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="relative px-4 lg:px-6 py-2 text-white/80 hover:text-white transition-all duration-300 rounded-full group"
              >
                <span className="relative z-10 font-medium text-sm lg:text-base">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link 
              href="/contact"
              className="relative inline-flex items-center px-5 lg:px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm lg:text-base overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-1 bg-gray-800/50 backdrop-blur-md rounded-2xl mt-4 border border-white/10 px-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <motion.div
                          className="w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500"
                          whileHover={{ width: 20 }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-3"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Animated bottom border */}
      <motion.div 
        className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.header>
  )
}