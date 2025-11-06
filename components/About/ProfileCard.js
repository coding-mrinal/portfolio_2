"use client";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaCalendar,
  FaHeart,
} from "react-icons/fa";
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
        <div className="text-center mb-5">
          <div className="relative inline-block mb-3">
            {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-lg opacity-50"></div> */}
            <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center border-4 border-white/10 overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Profile Photo"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-black mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            M.R.I.N.A.L
          </h2>
          <p className="text-cyan-300 text-sm">Full-Stack Developer</p>
        </div>

        <div className="space-y-2.5 border-t border-white/10 pt-5">
          {[
            { icon: FaMapMarkerAlt, text: "Kolkata, India", color: "cyan" },
            {
              icon: FaEnvelope,
              text: "mrinalmahapatra2004@gmail.com",
              color: "purple",
            },
            { icon: FaCalendar, text: "Available for work", color: "emerald" },
            { icon: FaHeart, text: "Open to opportunities", color: "rose" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
            >
              <item.icon className="text-cyan-400 text-sm" />
              <span className="text-xs">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
