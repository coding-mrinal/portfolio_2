"use client"

import { 
  FaUser, 
  FaGraduationCap, 
  FaCode
} from 'react-icons/fa';

export default function TabNavigation({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'about', label: 'About Me', icon: FaUser },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'skills', label: 'Skills', icon: FaCode },
  ];

  return (
    <div className="bg-black/40">
      <div className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-cyan-400/20 border-2 border-cyan-400 text-white'
                : 'bg-white/5 border-2 border-transparent text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <tab.icon className={`text-sm ${activeTab === tab.id ? 'text-cyan-400' : ''}`} />
            <span className="font-semibold text-sm">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}