import { Zap, Globe, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
    return (
        <section id="about" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">


                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            Engineering the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                                Digital Backbone
                            </span>
                            <br /> of Tomorrow
                        </h2>

                        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            We are not just a software company; we are architects of India's digital future.
                            From bustling campuses to remote villages, vrBharat is dedicated to building inclusive technologies that solve real-world problems.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <div className="pl-4 border-l-2 border-primary/50">
                                <p className="text-2xl font-bold text-white">100%</p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest">Made in India</p>
                            </div>
                            <div className="pl-4 border-l-2 border-secondary/50">
                                <p className="text-2xl font-bold text-white">24/7</p>
                                <p className="text-sm text-zinc-500 uppercase tracking-widest">Innovation</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:bg-white/5 transition-all duration-300 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:border-white/10">
                            <Globe className="h-8 w-8 text-blue-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Global Vision</h3>
                            <p className="text-sm text-zinc-400">World-class standards tailored for local needs.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:bg-white/5 transition-all duration-300 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:border-white/10">
                            <Users className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">People First</h3>
                            <p className="text-sm text-zinc-400">Designed with empathy for the end-user experience.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:bg-white/5 transition-all duration-300 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:border-white/10">
                            <Zap className="h-8 w-8 text-yellow-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Lightning Fast</h3>
                            <p className="text-sm text-zinc-400">Optimized performance for every device.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-md hover:bg-white/5 transition-all duration-300 h-full flex flex-col justify-center min-h-[180px] hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-primary/5 hover:border-white/10">
                            <TrendingUp className="h-8 w-8 text-green-400 mb-4" />
                            <h3 className="text-lg font-bold text-white mb-2">Scalable Tech</h3>
                            <p className="text-sm text-zinc-400">Built to grow with the nation's aspirations.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
