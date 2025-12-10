import NavBar from './components/NavBar';
import AppCard from './components/AppCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <NavBar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-secondary/20 blur-[100px]" />

        <h1 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
          Building the Future of <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
            Digital Bharat
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          vrBharat creates innovative, localized mobile applications designed to empower and connect the next generation of India.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#apps"
            className="rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-transform hover:scale-105"
          >
            Explore Apps
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="container mx-auto px-6 py-24">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Our Ecosystem
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AppCard
            name="Jinete"
            description="A revolutionary student ride-sharing platform connecting campuses. Safe, affordable, and community-driven transportation."
            badge="Launching Soon"
          />
          <AppCard
            name="Mystery App 1"
            description="Coming soon..."
            isComingSoon
          />
          <AppCard
            name="Mystery App 2"
            description="Coming soon..."
            isComingSoon
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-900/50 py-24 border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="mb-8 text-3xl font-bold">About vrBharat</h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-400">
            We are a team of passionate developers and dreamers dedicated to solving real-world problems through technology.
            Based in India, for the World. Our mission is to build digital infrastructure that bridges gaps and creates opportunities.
          </p>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="py-12 text-center text-zinc-500">
        <div className="container mx-auto px-6">
          <p className="mb-4">
            Interested in collaborating? Email us at <a href="mailto:contact@vrbharat.tech" className="text-primary hover:underline">contact@vrbharat.tech</a>
          </p>
          <div className="flex justify-center gap-6 mb-8">
            {/* Social Links Placeholders */}
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} vrBharat Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
