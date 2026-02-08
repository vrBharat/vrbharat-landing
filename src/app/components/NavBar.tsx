"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "Apps", "About", "Contact"];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500 w-full ${scrolled || isOpen ? "bg-black/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 group relative z-50">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="vrBharat Logo"
              width={48}
              height={48}
              className="rounded-full transition-all duration-300 group-hover:scale-110"
            />
            {/* Logo glow on hover */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white -ml-2 transition-all duration-300 group-hover:text-primary">
            vrBharat
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
            >
              <span className="relative z-10">{item}</span>
              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                  item === "Services"
                    ? "bg-blue-500"
                    : "bg-gradient-to-r from-primary to-secondary"
                }`}
              />
              {/* Hover background */}
              <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="relative px-5 py-2.5 text-sm font-semibold text-black rounded-full bg-white hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20"
          >
            Hire Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
            />
            <X
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
            />
          </div>
        </button>

        {/* Mobile Dropdown */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-out md:hidden flex flex-col items-center justify-center ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-3xl font-bold text-zinc-400 hover:text-white transition-all duration-300 tracking-wide hover:tracking-widest"
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="mt-4 px-8 py-3 text-lg font-bold text-black rounded-full bg-white hover:scale-105 transition-transform duration-300"
              style={{
                transitionDelay: isOpen ? "300ms" : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              Hire Us
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
