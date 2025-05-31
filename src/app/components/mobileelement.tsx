'use client';

export function MobileElement() {
    return (
        <div className="relative h-64 block lg:hidden overflow-hidden">
            {/* Animated rectangles */}
            <div className="absolute inset-0 border-2 border-[#d1c578]/30 flex items-center justify-center animate-pulse">
                <div className="absolute inset-8 border border-[#d1c578]/20 animate-ping" />

                {/* Infinite scrolling carousel - mobile optimized */}
                <div className="w-full overflow-hidden">
                    <div className="animate-infinite-scroll flex gap-4 items-center whitespace-nowrap">
                        {/* Duplicate items for seamless looping - fewer items for mobile */}
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                src="/duchesslogo.png"
                                className="h-32 object-cover bg-white"  // Smaller size for mobile
                                alt="Duchess Logo"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Glow effect - reduced for mobile */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#d1c578]/10 blur-lg animate-pulse" />
        </div>
    );
}