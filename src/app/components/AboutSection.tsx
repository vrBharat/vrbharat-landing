"use client";

import { Zap, Globe, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Vision",
    description: "World-class standards tailored for local needs.",
    color: "text-blue-400",
    bgGlow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Users,
    title: "People First",
    description: "Designed with empathy for the end-user experience.",
    color: "text-purple-400",
    bgGlow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance for every device.",
    color: "text-yellow-400",
    bgGlow: "group-hover:shadow-yellow-500/20",
  },
  {
    icon: TrendingUp,
    title: "Scalable Tech",
    description: "Built to grow with the nation's aspirations.",
    color: "text-green-400",
    bgGlow: "group-hover:shadow-green-500/20",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 md:w-[500px] md:h-[500px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none animate-drift" />
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-zinc-400 uppercase tracking-widest">
              About Us
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering the <br />
              <span className="shimmer-text">Digital Backbone</span>
              <br /> of Tomorrow
            </h2>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We are not just a software company; we are architects of
              India&apos;s digital future. From bustling campuses to remote
              villages, vrBharat is dedicated to building inclusive technologies
              that solve real-world problems.
            </p>

            {/* Stats with gradient borders */}
            <div className="pt-6 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="glass rounded-xl p-4 pl-5 border-l-2 border-primary/60 hover:border-primary transition-colors duration-300">
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">
                  Made in India
                </p>
              </div>
              <div className="glass rounded-xl p-4 pl-5 border-l-2 border-secondary/60 hover:border-secondary transition-colors duration-300">
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-zinc-500 uppercase tracking-widest">
                  Innovation
                </p>
              </div>
            </div>
          </div>

        {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="gradient-border shine-effect group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md transition-all duration-500 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-xl group-hover:shadow-blue-500/20 stagger-1 sm:col-span-2 lg:col-span-1">
              <div className="icon-glow mb-4 text-blue-400">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                Who We Are
              </h3>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                A passionate team of developers, designers, and strategists dedicated to crafting world-class digital experiences.
              </p>
            </div>
            
            <div className="gradient-border shine-effect group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md transition-all duration-500 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-xl group-hover:shadow-purple-500/20 stagger-2">
              <div className="icon-glow mb-4 text-purple-400">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                What We Believe
              </h3>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                Technology should be accessible, beautiful, and solve real problems without unnecessary complexity.
              </p>
            </div>

            <div className="gradient-border shine-effect group p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md transition-all duration-500 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-xl group-hover:shadow-green-500/20 stagger-3">
              <div className="icon-glow mb-4 text-green-400">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                Our Team
              </h3>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                Built by industry veterans and young innovators from India, bringing global standards to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
