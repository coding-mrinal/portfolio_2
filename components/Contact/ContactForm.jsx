'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2 } from 'lucide-react'

const inputClass = "w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-black/30 focus:bg-black/50 text-white placeholder-gray-400 text-sm"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/mrinalmhptr@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="bg-black/50 rounded-2xl shadow-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-bold mb-3 text-white">Send Me a Message</h2>

      {status === 'success' && (
        <div className="mb-4 p-3 bg-green-900/30 border border-green-700 rounded-lg flex items-start">
          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-300 text-sm">Message Sent!</h4>
            <p className="text-green-200 text-xs">Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg">
          <h4 className="font-semibold text-red-300 text-sm">Failed to send!</h4>
          <p className="text-red-200 text-xs">Something went wrong. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-gray-200 mb-1 text-sm">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-200 mb-1 text-sm">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-gray-200 mb-1 text-sm">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-200 mb-1 text-sm">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project or inquiry..."
            rows={4}
            required
            className={`${inputClass} resize-none`}
          />
          <p className="text-xs text-gray-400 text-right mt-1">{formData.message.length} characters</p>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full border-2 border-white text-white py-2.5 rounded-lg font-semibold hover:bg-white hover:text-black transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm"
        >
          {status === 'loading' ? (
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>
          ) : (
            <><Send className="w-4 h-4 mr-2" />Send Message</>
          )}
        </button>
      </form>
    </div>
  )
}