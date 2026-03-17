"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
              <span className="text-white font-bold text-lg">DBS</span>
            </div>
            <span className="text-black font-bold text-xl tracking-tight hidden sm:block">
              Freelance Tech
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-black font-medium text-[15px] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
            >
              Solicitar Presupuesto
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-black font-semibold text-lg py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white text-center py-4 rounded-xl font-bold mt-2"
            >
              Solicitar Presupuesto
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
