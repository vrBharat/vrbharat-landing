"use client";

import React from "react";

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Large ambient orbs */}
      <div className="absolute top-[10%] left-[15%] w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-float opacity-50 mix-blend-screen" />
      <div className="absolute top-[50%] right-[5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] animate-drift opacity-40 mix-blend-screen" />
      <div className="absolute bottom-[5%] left-[25%] w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow opacity-30 mix-blend-screen" />

      {/* Medium orbs */}
      <div className="absolute top-[30%] left-[60%] w-48 h-48 bg-primary/10 rounded-full blur-[80px] animate-drift-diagonal opacity-40" />
      <div className="absolute bottom-[30%] right-[30%] w-56 h-56 bg-secondary/15 rounded-full blur-[90px] animate-float-slow opacity-35" />

      {/* Small floating particles */}
      <div className="absolute top-[20%] right-[25%] w-3 h-3 bg-white rounded-full blur-[1px] animate-float opacity-40" />
      <div className="absolute bottom-[35%] left-[8%] w-2 h-2 bg-white rounded-full blur-[1px] animate-float opacity-30 stagger-1" />
      <div className="absolute top-[65%] left-[45%] w-2 h-2 bg-primary rounded-full blur-[1px] animate-drift-diagonal opacity-50 stagger-2" />
      <div className="absolute top-[12%] left-[75%] w-4 h-4 bg-secondary rounded-full blur-[2px] animate-pulse-slow opacity-35" />
      <div className="absolute bottom-[15%] right-[15%] w-3 h-3 bg-accent rounded-full blur-[2px] animate-float opacity-40 stagger-3" />

      {/* Tiny accent dots */}
      <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-white rounded-full animate-float opacity-25 stagger-4" />
      <div className="absolute top-[75%] right-[40%] w-1 h-1 bg-primary rounded-full animate-drift opacity-30" />
      <div className="absolute bottom-[60%] left-[70%] w-1.5 h-1.5 bg-secondary rounded-full animate-float-slow opacity-25" />

      {/* Large background glow - very subtle */}
      <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-white/3 rounded-full blur-[150px] animate-pulse-slow opacity-15 pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default BackgroundParticles;
