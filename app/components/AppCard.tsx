import Image from 'next/image';

interface AppCardProps {
    name: string;
    description: string;
    badge?: string;
    imageUrl?: string; // Optional for now, can use placeholders
    isComingSoon?: boolean;
}

export default function AppCard({ name, description, badge, isComingSoon }: AppCardProps) {
    if (isComingSoon) {
        return (
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col items-center justify-center min-h-[220px]">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                    <span className="rounded-full border border-zinc-700 bg-black/50 px-4 py-2 text-sm font-bold text-zinc-300 backdrop-blur-md">
                        Coming Soon
                    </span>
                </div>
                {/* Blurred background content mimicking a card */}
                <div className="w-full opacity-20 filter blur-sm select-none">
                    <div className="flex items-start justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg bg-zinc-700" />
                    </div>
                    <div className="h-6 w-1/2 bg-zinc-700 rounded mb-2" />
                    <div className="h-4 w-full bg-zinc-800 rounded mb-1" />
                    <div className="h-4 w-3/4 bg-zinc-800 rounded" />
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 p-6 transition-all duration-300 hover:border-zinc-500 hover:shadow-2xl hover:shadow-primary/20">

            <div className="mb-4 flex items-start justify-between">
                <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center text-2xl font-bold text-zinc-400 group-hover:text-white transition-colors">
                    {name[0]}
                </div>
                {badge && (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                        {badge}
                    </span>
                )}
            </div>

            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
                {name}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
                {description}
            </p>

        </div>
    );
}
