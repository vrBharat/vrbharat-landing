"use client";

import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl overflow-hidden relative text-center">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Have an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Let's build it.</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              Ready to turn your vision into reality? We are here to help you build digital products that people actually use.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSen44b6E8l7Z5paT4-S7-GddK4TzMvQbpYPq-3fh2o8L6y3ZQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-bold text-black hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] group"
            >
              Start a Project
              <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
