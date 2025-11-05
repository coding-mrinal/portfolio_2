import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 fade-in">Get In Touch</h1>
        <p className="text-xl text-gray-600 mb-12">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-2xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">📱</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-2xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Your City, Country</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}