// components/ContactForm.jsx
'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setStatus('loading')
    
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      setTimeout(() => setStatus('idle'), 5000)
    }, 2000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  return (
    <div className="bg-black/50 rounded-2xl shadow-xl p-6 border border-gray-800 ">
      <h2 className="text-2xl font-bold mb-3 text-white">
        Send Me a Message
      </h2>

      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg flex items-start animate-fade-in">
          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-300 text-sm">Message Sent!</h4>
            <p className="text-green-200 text-xs">
              Thank you for reaching out. I'll get back to you soon!
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-200 mb-1 text-sm">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
              } rounded-lg focus:outline-none focus:ring-2 transition-all bg-black/30 focus:bg-black/50 text-white placeholder-gray-400 text-sm`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-0.5 text-xs text-red-400">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-200 mb-1 text-sm">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
              } rounded-lg focus:outline-none focus:ring-2 transition-all bg-black/30 focus:bg-black/50 text-white placeholder-gray-400 text-sm`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-0.5 text-xs text-red-400">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block font-semibold text-gray-200 mb-1 text-sm">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-black/30 focus:bg-black/50 text-white placeholder-gray-400 text-sm"
            placeholder="Project Inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold text-gray-200 mb-1 text-sm">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-3 py-2 border ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:ring-blue-500'
            } rounded-lg focus:outline-none focus:ring-2 transition-all bg-black/30 focus:bg-black/50 text-white placeholder-gray-400 resize-none text-sm`}
            placeholder="Tell me about your project or inquiry..."
          ></textarea>
          <div className="flex justify-between items-center mt-1">
            {errors.message && (
              <p className="text-xs text-red-400">{errors.message}</p>
            )}
            <p className="text-xs text-gray-400 ml-auto">
              {formData.message.length} characters
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full border-2 border-white text-white py-2.5 rounded-lg font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center text-sm"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}