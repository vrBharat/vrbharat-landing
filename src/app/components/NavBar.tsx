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
        className={`flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500 w-full ${
          isOpen
            ? "bg-black"
            : scrolled
              ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
        }`}
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
        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-black border-l border-white/5 shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) md:hidden flex flex-col pt-24 px-6 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-secondary/10 blur-[60px] rounded-full pointer-events-none" />

          <div className="flex flex-col gap-6 relative z-10">
            {navLinks.map((item, index) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="group flex items-center justify-between text-xl font-medium text-zinc-400 hover:text-white transition-all duration-300 border-b border-white/5 pb-4"
                style={{
                  transitionDelay: isOpen ? `${index * 50 + 100}ms` : "0ms",
                  transform: isOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <span>{item}</span>
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary">
                  →
                </span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="#contact"
              onClick={toggleMenu}
              className="mt-4 w-full flex items-center justify-center px-6 py-3 text-base font-bold text-black rounded-full bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg relative overflow-hidden group"
              style={{
                transitionDelay: isOpen ? "300ms" : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <span className="relative z-10">Hire Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Footer Info in Menu */}
          <div
            className="mt-auto mb-8 text-xs text-zinc-600 text-center"
            style={{
              transitionDelay: isOpen ? "400ms" : "0ms",
              opacity: isOpen ? 1 : 0,
            }}
          >
            <p>© {new Date().getFullYear()} vrBharat</p>
            <p>Made in India, for the World</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
