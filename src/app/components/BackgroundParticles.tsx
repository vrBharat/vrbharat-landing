"use client";

import React from 'react';

const BackgroundParticles = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Orb 1 - Primary Color */}
            <div className="absolute top-[10%] left-[20%] w-72 h-72 bg-primary/20 rounded-full blur-[80px] animate-float opacity-60 mix-blend-screen" />

            {/* Orb 2 - Secondary Color */}
            <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-drift opacity-50 mix-blend-screen delay-1000" />

            {/* Orb 3 - Accent Color */}
            <div className="absolute bottom-[10%] left-[30%] w-64 h-64 bg-accent/30 rounded-full blur-[90px] animate-pulse-slow opacity-40 mix-blend-screen delay-700" />

            {/* Small accent particles */}
            <div className="absolute top-[20%] right-[30%] w-4 h-4 bg-white rounded-full blur-[2px] animate-float opacity-30 delay-500" />
            <div className="absolute bottom-[40%] left-[10%] w-3 h-3 bg-white rounded-full blur-[1px] animate-float opacity-20 delay-200" />

            {/* Extra floating elements */}
            <div className="absolute top-[60%] left-[50%] w-2 h-2 bg-primary rounded-full blur-[1px] animate-drift-diagonal opacity-40 delay-300" />
            <div className="absolute top-[15%] left-[80%] w-5 h-5 bg-secondary rounded-full blur-[3px] animate-pulse-slow opacity-25" />
            <div className="absolute bottom-[20%] right-[20%] w-3 h-3 bg-accent rounded-full blur-[2px] animate-float opacity-30 delay-700" />

            {/* Large faint background glow */}
            <div className="absolute top-[-10%] left-[40%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] animate-pulse-slow opacity-20 pointer-events-none" />
        </div>
    );
};

export default BackgroundParticles;
