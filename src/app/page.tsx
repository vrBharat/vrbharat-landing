import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AppSection from './components/AppSection';
import BackgroundParticles from './components/BackgroundParticles';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary overflow-x-hidden relative">
      <BackgroundParticles />
      <div className="relative z-10">
        <NavBar />

        {/* Hero Section */}
        <HeroSection />

        {/* Apps Section */}
        {/* Apps Section */}
        <AppSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact / Footer */}
        <Footer />
      </div>
    </main>
  );
}
