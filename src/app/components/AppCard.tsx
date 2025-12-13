import Image from 'next/image';

interface AppCardProps {
    name: string;
    description: string;
    badge?: string;
    imageUrl?: string; // Optional for now, can use placeholders
    isComingSoon?: boolean;
}

export default function AppCard({ name, description, badge, isComingSoon, imageUrl }: AppCardProps) {
    if (isComingSoon) {
        return (
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-6 flex flex-col items-center justify-center min-h-[260px] backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-white/10 group">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                    <span className="rounded-full border border-white/10 bg-black/40 px-6 py-3 text-sm font-bold uppercase tracking-wider text-zinc-400 backdrop-blur-md shadow-lg">
                        Coming Soon
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-zinc-900/60 hover:shadow-[0_20px_40px_-15px_rgba(255,153,51,0.2)] backdrop-blur-md">

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between">
                    <div className="h-16 w-16 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                        {imageUrl ? (
                            <Image
                                src={imageUrl}
                                alt={`${name} Logo`}
                                width={64}
                                height={64}
                                className="h-full w-full object-cover rounded-2xl"
                            />
                        ) : (
                            <span className="text-2xl font-bold text-zinc-400">{name[0]}</span>
                        )}
                    </div>
                    {badge && (
                        <span className="rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-3 py-1 text-xs font-bold text-primary border border-primary/20 shadow-sm">
                            {badge}
                        </span>
                    )}
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {name}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Learn more <span className="ml-1">→</span>
                </div>
            </div>
        </div>
    );
}
