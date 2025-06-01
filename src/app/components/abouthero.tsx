'use client';

import { useEffect, useState } from 'react';

export default function ImageBanner() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY * 0.3);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-black">
            {/* Video-like scrolling container */}
            <div className="relative h-[70vh] min-h-[400px] md:min-h-[600px]">
                {/* Scrolling background with parallax effect */}
                <div 
                    className="absolute inset-0 overflow-hidden"
                   
                >
                    {/* Simulated video frames - horizontal scroll */}
                    <div className="h-full w-full">
                        <div className="animate-infinite-scroll flex h-full items-center whitespace-nowrap">
                            {[...Array(8)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className="relative inline-flex h-full w-[100vw] flex-shrink-0 items-center justify-center"
                                >
                                    <div className="absolute inset-0" />
                                    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                                        <div className="inline-block h-40 w-40 md:h-60 md:w-60">
                                            <img 
                                                src="/duchess-white.png" 
                                                className="h-full w-full object-contain" 
                                                alt="Duchess Logo" 
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                
                
                {/* Content placeholder - will be replaced by video */}
                <div className="relative z-10 flex h-full items-center justify-center">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute inset-0 h-full w-full object-cover"
                    >
                        <source src="/build.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}