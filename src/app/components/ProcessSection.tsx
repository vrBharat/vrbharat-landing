"use client";

import { Lightbulb, PenTool, Code, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
  {
    icon: Lightbulb,
    title: "Idea",
    description: "We brainstorm and strategize to turn your vision into a viable product concept.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Creating intuitive and beautiful UI/UX designs that users love.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Developing robust, scalable, and secure software using modern tech.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying your product to the world smoothly and successfully.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Continuous updates, maintenance, and support post-launch.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-black/50 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Work</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A seamless, transparent process from your first idea to a successful launch.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <step.icon className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors relative z-10" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center shadow-lg border-2 border-black">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
