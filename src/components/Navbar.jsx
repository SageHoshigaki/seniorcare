// src/components/Navbar.jsx
import { useState } from "react";
import { Plus, Phone, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import navDropdownAnimation from "../animations/navDropdownAnimation";

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 lg:px-16 py-5 text-sm font-medium text-black uppercase">
        {/* Left Links */}
        <div className="flex-1 flex justify-start items-center space-x-6 lg:space-x-10">
          <a href="#projects" className="hover:text-gray-600 transition">
            Projects
          </a>

          <a href="#services" className="hover:text-gray-600 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-gray-600 transition">
            Contact
          </a>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              onClick={() => setResourcesOpen((current) => !current)}
              className="flex items-center gap-2 font-medium uppercase hover:text-gray-600 transition"
            >
              <span>Resources</span>
              <Plus size={14} />
            </button>

            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  key="resources-dropdown"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={navDropdownAnimation}
                  className="absolute left-0 mt-4 z-50 w-80 rounded-2xl border border-black/10 bg-white p-3 text-black shadow-2xl"
                >
                  <a
                    href="#employee-portal"
                    className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-normal hover:bg-neutral-100 transition"
                  >
                    Employee Portal
                  </a>

                  <a
                    href="#payments"
                    className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-normal hover:bg-neutral-100 transition"
                  >
                    Payments
                  </a>

                  <a
                    href="#privacy"
                    className="block rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-normal hover:bg-neutral-100 transition"
                  >
                    Notice of Privacy Practices
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex-1 flex justify-center">
          <img
            src="/gallery/greenlogo.png"
            alt="SeniorCare Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* Right Links + CTAs */}
        <div className="flex-1 flex justify-end items-center space-x-5 lg:space-x-6 relative">
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>

          <a href="#career" className="hover:text-gray-600 transition">
            Career
          </a>

          <a
            href="tel:7184309700"
            className="group relative overflow-hidden rounded-full bg-[#c80000] px-5 py-2.5 text-white shadow-lg shadow-red-950/20 transition hover:-translate-y-0.5 hover:shadow-red-950/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Phone size={16} />
              <span className="hidden 2xl:inline">Dispatch 718-430-9700</span>
              <span className="2xl:hidden">Dispatch</span>
            </span>

            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_42%)]" />
          </a>

          <a
            href="#career"
            className="group relative overflow-hidden rounded-full bg-[#1d5a27] px-5 py-2.5 text-white shadow-lg shadow-green-950/20 transition hover:-translate-y-0.5 hover:shadow-green-950/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Check size={16} />
              <span className="hidden 2xl:inline">Join Our Team</span>
              <span className="2xl:hidden">Join</span>
            </span>

            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />
          </a>
        </div>
      </nav>
    </header>
  );
}