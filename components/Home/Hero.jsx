//import HeroClient from './HeroClient';
import CodeEditor from './CodeEditor';
import HeroContent from './HeroContent';

// This is now a Server Component by default (no 'use client')
export default function Hero() {
  // Static data that doesn't need reactivity
  const codeContent = `const developer = {
  name: "Mrinal Mahapatra",
  role: "Full-Stack Developer",
  location: "Kolkata, India",
  skills: {
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "GitHub"]
  },
  passion: [
    "Building scalable apps",
    "Clean code",
    "User-centric design"
  ],
  hobbies: [
    "Reading Books",
    "Drawing",
    "Photography"
  ]
};`;

  return (
    <section className="relative hero-section flex items-center justify-center text-white overflow-hidden pt-20 lg:h-screen">
      {/* Static background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 w-full">
          
          {/* LEFT SIDE - Now order-1 on mobile, order-1 on desktop */}
          <div className="order-1 lg:order-1">
            <HeroContent/>
          </div>
          
          {/* RIGHT SIDE - Now order-2 on mobile, order-2 on desktop */}
          <div className="order-2 lg:order-2">
            <CodeEditor codeContent={codeContent} />
          </div>
          
        </div>
      </div>
    </section>
  );
}