"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">
      {/* Ambient background glow - Enhanced */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/20 blur-[180px] rounded-full pointer-events-none opacity-40 animate-pulse-slow" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/15 blur-[150px] rounded-full pointer-events-none opacity-30 animate-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-25 animate-float" />

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 right-[15%] opacity-20 animate-float-slow">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-[10%] opacity-15 animate-float stagger-2">
        <Code2 className="h-10 w-10 text-white" />
      </div>
      <div className="absolute top-1/3 left-[20%] opacity-15 animate-spin-slow">
        <Rocket className="h-12 w-12 text-secondary" />
      </div>

      <div className="relative z-10 space-y-6 max-w-5xl mx-auto">
        {/* Badge */}

        {/* Main Heading with Dual Messaging */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">
          We Build{" "}
          <span className="text-blue-400 shimmer-text">Digital Future</span>{" "}
          <br className="hidden md:block" />& Empower{" "}
          <span className="shimmer-text">India</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          A hybrid technology studio. We craft world-class software for
          businesses while building our own ecosystem of apps for Bharat.
          <span className="block mt-2 text-white/80">
            Your Vision. Our Innovation.
          </span>
        </p>

        {/* CTA Buttons - Split Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          {/* Primary CTA: Services (Hire Us) */}
          <Link
            href="#services"
            className="glow-button group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] shadow-lg"
          >
            <span className="relative z-10 flex items-center">
              Hire Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {/* Secondary CTA: Products (Our Apps) */}
          <Link
            href="#apps"
            className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Apps
            </span>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8 text-sm text-zinc-500 border-t border-white/5 mt-8">
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-auto flex items-center justify-center">
              <img
                src="/msme-logo.png"
                alt="MSME Logo"
                className="h-full w-auto object-contain brightness-0 invert opacity-80"
              />
            </div>
            <span className="text-xs font-semibold tracking-wider text-zinc-400">
              MSME Certified
            </span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">100%</span>
            <span>Client Satisfaction</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">24/7</span>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
