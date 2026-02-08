import AppCard from "./AppCard";

export default function AppSection() {
  return (
    <section id="apps" className="relative py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none animate-drift" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-6">
          {/* Section label */}

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Our Native <span className="shimmer-text">Products</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Beyond client services, we innovate for India. Explore our growing
            ecosystem of localized mobile applications.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AppCard
            name="Jinete"
            description="A revolutionary student ride-sharing platform connecting campuses. Safe, affordable, and community-driven transportation for every student."
            imageUrl="/jinetelogo.jpg"
            badge="Live Now"
            link="https://play.google.com/store/apps/details?id=com.vrbharat.jinete"
          />
          <AppCard
            name="LearnTok"
            description="Reels that teach, not distract. Knowledge in every swipe."
            imageUrl="/LearnTok.png"
            badge="Coming Soon"
          />
          <AppCard
            name="PDify"
            description="AI-powered app that generates smart, customized summaries from any PDF. Also convert PDFs to images and images to PDFs with ease."
            imageUrl="/PDify.png"
            badge="Coming Soon"
          />
        </div>

        {/* Case Study Teaser */}
        <div className="mt-20 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 backdrop-blur-md text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            Looking for Custom App Development?
          </h3>
          <p className="text-zinc-400 mb-6">
            We use the same cutting-edge technology behind our products to build
            yours.
          </p>
          <a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Discuss Your Project <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
