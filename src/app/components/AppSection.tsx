import AppCard from './AppCard';

export default function AppSection() {
    return (
        <section id="apps" className="relative py-20 md:py-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20 space-y-4">

                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
                        Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Ecosystem</span>
                    </h2>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        A suite of interconnected applications designed to solve real-world challenges.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <AppCard
                        name="Jinete"
                        description="A revolutionary student ride-sharing platform connecting campuses. Safe, affordable, and community-driven transportation."
                        imageUrl="/jinetelogo.jpg"
                    />
                    <AppCard
                        name="Mystery App 1"
                        description="Redefining local commerce. Details coming soon."
                        isComingSoon
                    />
                    <AppCard
                        name="Mystery App 2"
                        description="Next-gen social connectivity. Details coming soon."
                        isComingSoon
                    />
                </div>
            </div>
        </section>
    );
}
