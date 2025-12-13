'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <nav className={`flex items-center justify-between px-8 py-4 transition-all duration-300 w-full border-b border-white/10 backdrop-blur-xl ${scrolled || isOpen ? 'bg-black/80' : 'bg-black/20 hover:bg-black/30'}`}>
                <Link href="/" className="flex items-center gap-0 group relative z-50">
                    <Image
                        src="/logo.png"
                        alt="vrBharat Logo"
                        width={48}
                        height={48}
                        className="rounded-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="text-xl font-bold tracking-tight text-white -ml-3 transition-colors duration-300 group-hover:text-primary">
                        vrBharat
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {['Apps', 'About', 'Contact'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                            {item}
                            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden relative z-50 p-2 text-zinc-400 hover:text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>

                {/* Mobile Dropdown */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    {['Apps', 'About', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={toggleMenu}
                            className="text-2xl font-bold text-zinc-400 hover:text-white transition-colors tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
