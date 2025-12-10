import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="vrBharat Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                />
                <span className="text-xl font-bold tracking-tight text-white">
                    vrBharat
                </span>
            </div>
            <div className="flex gap-6 text-sm font-medium text-zinc-300">
                <Link href="#apps" className="hover:text-white transition-colors">
                    Apps
                </Link>
                <Link href="#about" className="hover:text-white transition-colors">
                    About
                </Link>
                <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
