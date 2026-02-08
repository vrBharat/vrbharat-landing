"use client";

import { Code2, Smartphone, Palette, LineChart } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native iOS & Android apps built for performance and scale. We craft intuitive mobile experiences that users love.",
    gradient: "from-blue-500 to-cyan-400",
    delay: "stagger-1",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites using Next.js and React. Blazing fast performance with SEO optimization built-in.",
    gradient: "from-purple-500 to-pink-400",
    delay: "stagger-2",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centric design that blends aesthetics with functionality. We create interfaces that are beautiful and easy to use.",
    gradient: "from-orange-500 to-yellow-400",
    delay: "stagger-3",
  },
  {
    icon: LineChart,
    title: "Digital Consulting",
    description:
      "Strategic guidance to help you navigate the digital landscape. We help you make informed technology decisions.",
    gradient: "from-green-500 to-emerald-400",
    delay: "stagger-4",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            We Build Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Future
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions
            tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm ${service.delay}`}
            >
              {/* Hover Gradient Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}
              >
                <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hire Us CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-500/20"
          >
            Start a Project
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
