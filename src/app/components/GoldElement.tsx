'use client';

export function DecorativeGoldElement() {
  return (
    <div className="relative h-96 hidden lg:block overflow-hidden">
      {/* Animated rectangles */}
      <div className="absolute inset-0 border-2 border-[#d1c578]/30 flex items-center justify-center">
        <div className="absolute inset-8 border border-[#d1c578]/20 animate-ping" />
        
        {/* Infinite scrolling carousel */}
        <div className="w-full overflow-hidden bg-white">
          <div className="animate-infinite-scroll flex gap-4 items-center whitespace-nowrap">
            {/* Duplicate items for seamless looping */}
            {[...Array(8)].map((_, i) => (
              <img 
                key={i}
                src="/duchesslogo.png" 
                className="h-full object-contain" 
                alt="" 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#d1c578]/10 blur-xl animate-pulse" />
 
      
    </div>
  );
}