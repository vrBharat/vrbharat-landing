"use client";

import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Mail, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/vrBharatb?s=20",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
      </svg>
    ),
    hoverColor: "hover:text-white hover:bg-white/10",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@vr_bharat?si=gYGubhhdywidpN-S",
    icon: <Youtube className="h-5 w-5" />,
    hoverColor: "hover:text-[#FF0000] hover:bg-red-500/10",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vr_bharat?igsh=ZjR2YmJvZXF2eDN0",
    icon: <Instagram className="h-5 w-5" />,
    hoverColor: "hover:text-[#E4405F] hover:bg-pink-500/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/vrbharat/",
    icon: <Linkedin className="h-5 w-5" />,
    hoverColor: "hover:text-[#0077b5] hover:bg-blue-500/10",
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 bg-black pt-20 pb-10">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-gradient-to-b from-primary/10 to-transparent blur-[100px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
          {/* Brand Section */}
          <div className="lg:w-1/3 space-y-8">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden transition-all duration-500 group-hover:scale-110">
                <Image
                  src="/logo.png"
                  alt="vrBharat Logo"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                vrBharat
              </span>
            </Link>

            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              Empowering India through immersive technology and digital
              innovation. Building the future, one pixel at a time.
            </p>

            {/* Certification Badges */}
            <div className="flex flex-col sm:flex-row gap-6 mt-8">
              {/* MSME Logo */}
              <div className="flex items-center gap-3 group">
                <div className="relative h-14 w-28 bg-white rounded-lg p-1.5 border border-white/10 overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                  <Image
                    src="/msme-logo.png"
                    alt="MSME Verified"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-zinc-500 max-w-[100px] leading-tight">
                  MSME Verified
                </span>
              </div>

              {/* Make in India Logo */}
              <div className="flex items-center gap-3 group">
                <div className="relative h-14 w-28 bg-white rounded-lg overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/10">
                  <Image
                    src="/make-in-india-logo.png"
                    alt="Make in India"
                    fill
                    className="object-contain scale-110"
                  />
                </div>
                <span className="text-xs text-zinc-500 max-w-[100px] leading-tight">
                  Made in India
                </span>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Column 1 - Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
                Explore
              </h4>
              <ul className="space-y-4">
                {["Apps Ecosystem", "About Us"].map((item, index) => (
                  <li key={item}>
                    <Link
                      href={index === 0 ? "#apps" : "#about"}
                      className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-all duration-300"
                    >
                      <span className="h-px w-0 bg-primary group-hover:w-4 transition-all duration-300" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Contact */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest">
                Get in touch
              </h4>

              <a
                href="mailto:contact@vrbharat.tech"
                className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <span>contact@vrbharat.tech</span>
              </a>

              {/* Social Icons */}
              <div className="flex gap-2 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl text-zinc-400 transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
            <p>
              © {new Date().getFullYear()} vrBharat Technologies. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
