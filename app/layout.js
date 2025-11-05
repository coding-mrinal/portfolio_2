import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Portfolio - Know About Me',
  description: 'Portfolio showcasing my work and projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="h-screen overflow-auto">
          {children}
        </main>
      </body>
    </html>
  )
}