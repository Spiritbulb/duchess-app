import { blackMango } from "@/lib/fonts";
import { DecorativeGoldElement } from "./GoldElement";

export default function OurWork() {
    return (
        <section className="relative py-16 lg:py-24 bg-black border-t border-[#d1c578]/10 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div id="work" className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            What We Do
                        </span>
                        <div className="w-12 h-px bg-[#d1c578]" />
                    </div>
                    <div className={blackMango.className}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black-mango text-white mb-6 leading-tight">
                            Our <span className="text-[#d1c578]">Collective</span> Power
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Transforming individual contributions into collective prosperity through five pillars of action
                    </p>
                </div>

                {/* Content Row - Reversed layout */}
                <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
                    {/* Text Content - Right Side */}
                    <div className="flex-1 text-gray-300 space-y-8">
                        <p className="text-lg leading-relaxed">
                            At <span className="text-[#d1c578] font-semibold">032 Duchess</span>, we've created more than a savings group - 
                            we've built an ecosystem of financial empowerment where every member 
                            contributes to and benefits from our collective success.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-black/50 p-6 rounded-lg border border-[#d1c578]/10 hover:border-[#d1c578]/30 transition-all duration-300">
                                <h3 className="text-[#d1c578] text-xl font-medium mb-3">Build Wealth</h3>
                                <p className="text-gray-300">
                                    Through disciplined savings and strategic investments in both traditional and innovative opportunities
                                </p>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg border border-[#d1c578]/10 hover:border-[#d1c578]/30 transition-all duration-300">
                                <h3 className="text-[#d1c578] text-xl font-medium mb-3">Save Together</h3>
                                <p className="text-gray-300">
                                    Pooling our resources to achieve financial goals that would be challenging individually
                                </p>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg border border-[#d1c578]/10 hover:border-[#d1c578]/30 transition-all duration-300">
                                <h3 className="text-[#d1c578] text-xl font-medium mb-3">Support Each Other</h3>
                                <p className="text-gray-300">
                                    Offering interest-free loans, business mentorship, and shared wisdom from diverse experiences
                                </p>
                            </div>
                            <div className="bg-black/50 p-6 rounded-lg border border-[#d1c578]/10 hover:border-[#d1c578]/30 transition-all duration-300">
                                <h3 className="text-[#d1c578] text-xl font-medium mb-3">Celebrate Sisterhood</h3>
                                <p className="text-gray-300">
                                    Creating joyful spaces for connection, personal growth, and mutual encouragement
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#d1c578]/10 p-6 rounded-lg border border-[#d1c578]/20 mt-8">
                            <p className="text-[#d1c578] font-medium italic text-lg">
                                💛 "Tuungane, Tusonge Mbele" (Let's unite, let's move forward)
                            </p>
                        </div>
                    </div>

                    {/* Decorative Element - Left Side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-28 self-center">
                        <DecorativeGoldElement />
                    </div>
                </div>
            </div>

            {/* Animated bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d1c578] to-transparent opacity-20"></div>
        </section>
    );
}