import { DecorativeGoldElement } from "./GoldElement";
import Link from "next/link";
import { MobileElement } from "./mobileelement";
import { blackMango } from "@/lib/fonts";

export default function AboutUs() {
    return (
        <section className="mt-16 relative py-16 lg:py-24 bg-black border-t-2 border-[#d1c578]/10 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div id="about" className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            About Us
                        </span>
                        <div className="w-12 h-px bg-[#d1c578]" />
                    </div>
                    <div className={blackMango.className}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black-mango text-white mb-6 leading-tight">
                            The <span className="text-[#d1c578]">Duchess</span> Difference
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We redefine wealth building through three core principles that set us apart
                    </p>
                </div>

                {/* Content Row */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Text Content - Left Side */}
                    <div className="flex-1 text-gray-300 space-y-6 lg:space-y-8">
                        <p className="text-lg leading-relaxed">
                            <span className="text-[#d1c578] font-semibold">032 Duchess</span> is a vibrant sisterhood of ambitious women in Nakuru, Kenya! 
                            We are more than just a savings group—we are a family bound by trust, 
                            shared dreams, and the collective power of women uplifting one another.
                        </p>

                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                Founded on the principles of unity, growth, and empowerment, our Chama
                                provides a safe space where women from all walks of life come together to:
                            </p>
                            
                            <ul className="space-y-4 pl-5 border-l-2 border-[#d1c578]/30">
                                <li className="flex items-start">
                                    <span className="text-[#d1c578] mr-3 mt-1">•</span>
                                    <span>Build financial independence through collective savings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d1c578] mr-3 mt-1">•</span>
                                    <span>Share knowledge and business opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d1c578] mr-3 mt-1">•</span>
                                    <span>Create a support network for personal and professional growth</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-lg leading-relaxed">
                            In this sisterhood, every voice matters, every story inspires, and every
                            shilling saved is a step toward prosperity. Join us as we turn small 
                            contributions into big dreams—because when women rise together, entire 
                            communities thrive!
                        </p>
                        
                        <div className="bg-[#d1c578]/10 p-6 rounded-lg border border-[#d1c578]/20">
                            <p className="text-[#d1c578] font-medium italic text-lg">
                                💛 "Tuungane, Tusonge Mbele" (Let's unite, let's move forward)
                            </p>
                        </div>
                    </div>

                    {/* Decorative Element - Right Side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-28 self-center">
                        <DecorativeGoldElement />
                    </div>
                </div>
                
                <MobileElement />

                {/* CTA Button */}
                <div className="mt-16 text-center">
                    <Link 
                        href="/join" 
                        className="
                            inline-flex items-center px-8 py-4 border border-transparent 
                            text-lg font-medium rounded-md text-black bg-[#d1c578]
                            hover:bg-[#c0b060] hover:scale-105 transition-all duration-300
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d1c578]
                        "
                    >
                        Join Our Sisterhood
                    </Link>
                </div>
            </div>
        </section>
    );
}