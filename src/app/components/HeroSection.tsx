import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center overflow-hidden">

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none opacity-50" />

            <div className="relative z-10 space-y-8 max-w-5xl mx-auto">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[1.1]">
                    Building the Future of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] animate-gradient-x">
                        Digital Bharat
                    </span>
                </h1>

                {/* Subheading */}
                <p className="mx-auto max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                    vrBharat creates innovative, localized mobile applications designed to empower and connect the next generation of India.
                    <span className="block mt-2 text-white/80">Experience technology that speaks your language.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                    <Link
                        href="#apps"
                        className="group relative inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                    >
                        <span>Explore Apps</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="#contact"
                        className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105"
                    >
                        <span>Contact Us</span>
                    </Link>
                </div>

                {/* Scroll Indicator (Optional detail) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                    <div className="h-10 w-6 rounded-full border-2 border-white/20 flex justify-center pt-2">
                        <div className="h-2 w-1 rounded-full bg-white/50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
