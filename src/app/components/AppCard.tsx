"use client";

import Image from "next/image";

interface AppCardProps {
  name: string;
  description: string;
  badge?: string;
  imageUrl?: string;
  isComingSoon?: boolean;
  link?: string;
  websiteLink?: string;
}

export default function AppCard({
  name,
  description,
  badge,
  isComingSoon,
  imageUrl,
  link,
  websiteLink,
}: AppCardProps) {
  if (isComingSoon) {
    return (
      <div className="gradient-border shine-effect relative overflow-hidden rounded-2xl p-6 flex flex-col items-center justify-center min-h-[280px] backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-800/40 opacity-100" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Pulsing glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-4">
          {/* Mystery icon */}
          <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:border-white/20 transition-all duration-300">
            <span className="text-3xl">?</span>
          </div>

          <span className="rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-zinc-300 backdrop-blur-md shadow-lg group-hover:border-primary/40 transition-all duration-300">
            Coming Soon
          </span>

          <p className="text-sm text-zinc-500 max-w-[200px]">{description}</p>
        </div>
      </div>
    );
  }

  const CardContent = (
    <div className="gradient-border shine-effect card-3d group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 backdrop-blur-md cursor-pointer min-h-[280px] h-full">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 via-zinc-900/70 to-zinc-800/50" />

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 flex items-start justify-between">
          <div className="h-16 w-16 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500">
            {imageUrl ? (
              <div className="relative">
                <Image
                  src={imageUrl}
                  alt={`${name} Logo`}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                />
                {/* Glow behind logo */}
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150" />
              </div>
            ) : (
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center">
                <span className="text-2xl font-bold text-gradient">
                  {name[0]}
                </span>
              </div>
            )}
          </div>
          {badge && (
            <span className="rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-1.5 text-xs font-bold text-primary border border-primary/30 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 transition-all duration-300">
              {badge}
            </span>
          )}
        </div>

        <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
          {name}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-6 flex flex-wrap gap-4 items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-semibold text-primary transition-all duration-300 hover:scale-105"
            >
              <span>Play Store</span>
              <svg
                className="ml-2 h-4 w-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l-3.057 3.057 6.112-6.113zm-3.057-3.057l3.057 3.057 8.982-8.983a.997.997 0 0 0-.256-.057c-.126-.008-.254.01-.373.054zm3.957 7.014l-6.113-6.113 6.113-6.113.62.62 5.093 5.093a1 1 0 0 1 0 1.414l-5.093 5.093z" />
              </svg>
            </a>
          )}
          {websiteLink && (
            <a
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-semibold text-zinc-300 transition-all duration-300 hover:text-white"
            >
              <span>Website</span>
              <svg
                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          )}
          {!link && !websiteLink && !isComingSoon && (
            <span className="text-sm font-semibold text-primary">Learn more</span>
          )}
        </div>
      </div>
    </div>
  );

  return CardContent;
}
