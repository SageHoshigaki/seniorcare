// src/components/Navbar.jsx
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import navDropdownAnimation from '../animations/navDropdownAnimation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 lg:px-16 py-5 text-sm font-medium text-black uppercase">

        {/* Left Links */}
        <div className="flex-1 flex justify-start space-x-6 lg:space-x-10">
          <a href="#projects" className="hover:text-gray-600 transition">Projects</a>
          <a href="#services" className="hover:text-gray-600 transition">Services</a>
          <a href="#contact" className="hover:text-gray-600 transition">Contact</a>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <img src="/gallery/greenlogo.png" alt="SeniorCare Logo" className="h-12 object-contain" />
        </div>

        {/* Right Links + Dropdown */}
        <div className="flex-1 flex justify-end items-center space-x-6 lg:space-x-10 relative">
          <a href="#about" className="hover:text-gray-600 transition">About</a>
          <a href="#career" className="hover:text-gray-600 transition">Career</a>

          {/* Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 px-5 py-2 bg-black/10 border border-black/20 text-black rounded-full hover:bg-black/20 transition"
            >
              <span>LET'S TALK</span>
              <Plus size={16} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  key="dropdown"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={navDropdownAnimation}
                  className="absolute right-0 mt-3 z-50 w-72 bg-white text-black shadow-xl rounded-xl p-4"
                >
                  <a
                    href="#dispatch"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    📞 Dispatch 718-430-9700
                  </a>
                  <a
                    href="#join"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    ✅ Join Our Team
                  </a>
                  <a
                    href="#privacy"
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
                  >
                    🔒 Notice of Privacy Practices
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}