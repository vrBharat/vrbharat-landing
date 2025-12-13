import Link from 'next/link';
import Image from 'next/image';
import { Youtube, Instagram, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="relative mt-24 bg-black pt-20 pb-10">
            {/* Soft Gradient Glow at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/20 blur-[100px] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">

                    {/* Brand Section */}
                    <div className="lg:w-1/3 space-y-8">
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden transition-transform duration-500 group-hover:rotate-12">
                                <Image
                                    src="/logo.png"
                                    alt="vrBharat Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">vrBharat</span>
                        </Link>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                            Empowering India through immersive technology and digital innovation.
                            Building the future, one pixel at a time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 mt-8">
                            {/* MSME Logo */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-32 bg-white rounded-lg p-2 border border-white/10 overflow-hidden">
                                    <Image
                                        src="/msme-logo.png"
                                        alt="MSME Verified"
                                        fill
                                        className="object-contain" // Reverting previous edit for context match if needed, but actually I just need to match the structure. 
                                    // Wait, I should likely keep the inner content same. The user asked "one row".
                                    />
                                </div>
                                <span className="text-xs text-zinc-500 max-w-[120px]">
                                    Recognized by Ministry of MSME, Govt. of India
                                </span>
                            </div>

                            {/* Make in India Logo */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-32 bg-white rounded-lg p-0 border border-white/10 overflow-hidden">
                                    <Image
                                        src="/make-in-india-logo.png"
                                        alt="Make in India"
                                        fill
                                        className="object-contain scale-110"
                                    />
                                </div>
                                <span className="text-xs text-zinc-500 max-w-[120px]">
                                    Proudly Made in India
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Links Section */}
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-12">
                        {/* Column 1 - Quick Links */}
                        <div className="space-y-6">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Explore</h4>
                            <ul className="space-y-4">
                                <li><Link href="#apps" className="text-zinc-400 hover:text-primary transition-colors block">Apps Ecosystem</Link></li>
                                <li><Link href="#about" className="text-zinc-400 hover:text-primary transition-colors block">About Us</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 - Newsletter/Contact */}
                        <div className="space-y-6">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get in touch</h4>
                            <a href="mailto:contact@vrbharat.tech" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                                <Mail className="h-4 w-4" />
                                <span>contact@vrbharat.tech</span>
                            </a>
                            <div className="flex gap-4 mt-6">
                                <a href="https://x.com/VRBHARAT180415?t=A6ieK78fWOIABiWNg2byYA&s=09" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors hover:scale-110 duration-200">
                                    <span className="sr-only">X</span>
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-[#FF0000] transition-colors hover:scale-110 duration-200">
                                    <span className="sr-only">YouTube</span>
                                    <Youtube className="h-6 w-6" />
                                </a>
                                <a href="https://www.instagram.com/vr__bharat?igsh=MTg1NmFsa2loaGl4" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#E4405F] transition-colors hover:scale-110 duration-200">
                                    <span className="sr-only">Instagram</span>
                                    <Instagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} vrBharat Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
