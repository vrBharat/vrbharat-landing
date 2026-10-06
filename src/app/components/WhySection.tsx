"use client";

import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Startup-Friendly",
    description: "We understand the constraints and agility required for startups to succeed.",
  },
  {
    title: "Fast Development",
    description: "Rapid iteration cycles and quick time-to-market without compromising quality.",
  },
  {
    title: "Modern Tech",
    description: "Built on modern, scalable stacks like Next.js, React, Node, and AI capabilities.",
  },
  {
    title: "Transparent Communication",
    description: "No hidden fees or confusing jargon. Just clear, honest, and regular updates.",
  },
  {
    title: "Post-Launch Support",
    description: "We don't just hand over the code. We support you as you scale and grow.",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Side text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">vrBharat</span>?
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl">
            We are more than just a dev shop. We are your technical partners. Here is why ambitious startups and enterprises choose to work with us.
          </p>
          <div className="pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSen44b6E8l7Z5paT4-S7-GddK4TzMvQbpYPq-3fh2o8L6y3ZQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-black hover:scale-105 transition-all shadow-lg hover:shadow-white/20"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Right Side list */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
