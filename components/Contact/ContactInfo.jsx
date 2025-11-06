// components/ContactInfo.jsx
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.email@example.com',
      href: 'mailto:your.email@example.com',
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null,
      color: 'text-red-400'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/yourusername',
      color: 'hover:bg-gray-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      color: 'hover:bg-sky-400'
    }
  ]

  return (
    <div className="space-y-4">
      {/* Contact Card */}
      <div className="bg-black/50 rounded-2xl shadow-xl p-6 border border-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Contact Information
        </h2>
        
        <div className="space-y-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            const content = (
              <div className="flex items-start group cursor-pointer transition-all hover:translate-x-2">
                <div className={`${detail.color} bg-opacity-10 p-2.5 rounded-lg mr-3 group-hover:scale-110 transition-transform border border-gray-700`}>
                  <Icon className={`w-5 h-5 ${detail.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">
                    {detail.label}
                  </h3>
                  <p className="text-gray-300 group-hover:text-blue-400 transition-colors text-sm">
                    {detail.value}
                  </p>
                </div>
              </div>
            )

            return detail.href ? (
              <a key={index} href={detail.href}>
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-700"></div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-white mb-3 flex items-center text-sm">
            <Send className="w-4 h-4 mr-2 text-purple-400" />
            Connect With Me
          </h3>
          <div className="flex space-x-2">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-gray-800 rounded-lg text-gray-300 ${social.color} hover:text-white transition-all transform hover:scale-110 border border-gray-700`}
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Availability Card */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-5 text-white border border-gray-700">
        <div className="flex items-start">
          <div className="bg-gray-700 p-2 rounded-lg mr-3">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-1">Currently Available</h3>
            <p className="text-gray-300 text-xs">
              Open for freelance projects and opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}