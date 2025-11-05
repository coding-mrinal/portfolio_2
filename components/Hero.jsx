//import HeroClient from './HeroClient';
import CodeEditor from './CodeEditor';
import HeroContent from './HeroContent';

// This is now a Server Component by default (no 'use client')
export default function Hero() {
  // Static data that doesn't need reactivity
  const codeContent = `const developer = {
  name: "Your Name",
  role: "Full-Stack Developer",
  location: "Your City",
  
  skills: {
    frontend: ["React", "Next.js"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "Docker", "AWS"]
  },
  
  experience: "3+ years",
  
  passion: [
    "Building scalable apps",
    "Clean code",
    "User-centric design"
  ],
  
  available: true
};`;

  const socialLinks = [
    { 
      icon: "FaGithub", 
      href: "https://github.com/yourusername", 
      label: "GitHub", 
      borderColor: "border-gray-400/50 hover:border-gray-300",
      textColor: "text-gray-400 hover:text-white",
      bgColor: "bg-gray-400/5 hover:bg-gray-400/10"
    },
    { 
      icon: "FaLinkedin", 
      href: "https://linkedin.com/in/yourusername", 
      label: "LinkedIn", 
      borderColor: "border-blue-400/50 hover:border-blue-400",
      textColor: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-400/5 hover:bg-blue-400/10"
    },
    { 
      icon: "FaTwitter", 
      href: "https://twitter.com/yourusername", 
      label: "Twitter", 
      borderColor: "border-sky-400/50 hover:border-sky-400",
      textColor: "text-sky-400 hover:text-sky-300",
      bgColor: "bg-sky-400/5 hover:bg-sky-400/10"
    },
    { 
      icon: "FaEnvelope", 
      href: "mailto:your@email.com", 
      label: "Email", 
      borderColor: "border-amber-400/50 hover:border-amber-400",
      textColor: "text-amber-400 hover:text-amber-300",
      bgColor: "bg-amber-400/5 hover:bg-amber-400/10"
    }
  ];

  return (
    <section className="relative hero-section flex items-center justify-center text-white overflow-hidden pt-20 lg:h-screen">
      {/* Static background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 xl:gap-12 w-full">
          {/* LEFT SIDE - Client Component for Animations */}
          <HeroContent socialLinks={socialLinks} />
          
          {/* RIGHT SIDE - Client Component for Code Editor */}
          <CodeEditor codeContent={codeContent} />
        </div>
      </div>
    </section>
  );
}