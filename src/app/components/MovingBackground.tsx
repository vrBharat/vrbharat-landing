'use client';

import { useEffect, useState } from 'react';

export default function MovingBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Blob 1 - Primary Color */}
      <div 
        className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Blob 2 - Secondary Color */}
      <div 
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-secondary/20 rounded-full blur-[100px] animate-blob mix-blend-screen opacity-50"
        style={{ animationDelay: '2s' }}
      />
      
      {/* Blob 3 - Accent Color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-40"
        style={{ animationDelay: '4s' }}
      />
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />
    </div>
  );
}
