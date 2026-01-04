// app/contact/page.jsx
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'


export default function Contact() {
  return (
    <div className="h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto pt-10">
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p> */}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Info - Server Component */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Contact Form - Client Component */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>

        {/* Footer Note */}
        {/* <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            ⚡ Average response time: 24 hours
          </p>
        </div> */}
      </div>
    </div>
  )
}