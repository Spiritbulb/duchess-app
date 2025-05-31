import Image from "next/image";
import Link from "next/link";
import { DecorativeGoldElement } from "./GoldElement";
import '@/app/fonts.css'
import { blackMango } from "@/lib/fonts";


export default function HeroSection() {
  return (
    <section className="relative bg-black overflow-hidden isolate min-h-[90vh] flex items-center">
      {/* Luxury Texture Background */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern.png')] opacity-5 z-0" />
      
      {/* Animated Gold Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#d1c578] animate-float"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-10">
            {/* Elegant Badge */}
            <div className="inline-flex items-center gap-4">
              <div className="w-12 h-px bg-[#d1c578]" />
              <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                032 Duchess
              </span>
              <div className="w-12 h-px bg-[#d1c578]" />
            </div>
            <div className={blackMango.className}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight font-black-mango">
              <span className="text-white">Refining</span>{' '}
              <span className="text-[#d1c578]">Wealth</span>{' '}
              <span className="text-white">With</span>{' '}
              <span className="text-[#d1c578]">Purpose</span>
            </h1>
            </div>
            
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Duchess redefines financial empowerment through curated investment strategies, 
              exclusive networking, and uncompromising elegance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={'/contact'}>
              <button className="
                bg-[#d1c578] hover:bg-[#c2b46a] 
                text-black font-bold 
                py-4 px-10 
                rounded-none 
                transition-all duration-300 
                transform hover:scale-105 
                border-2 border-[#d1c578]
                shadow-lg hover:shadow-[#d1c578]/40
                text-lg
              ">
                Apply for Membership
              </button>
              </Link>
              <Link href={'/about'}>
              <button className="
                bg-transparent hover:bg-white/5 
                text-white font-bold 
                py-4 px-10 
                rounded-none 
                transition-all duration-300 
                border-2 border-white/30 hover:border-[#d1c578]
                text-lg
              ">
                About Us
              </button>
              </Link>
            </div>
          </div>

          <DecorativeGoldElement/>
        </div>
      </div>

      
    </section>
  );
}