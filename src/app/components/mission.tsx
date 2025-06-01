import { blackMango } from "@/lib/fonts";
import { DecorativeGoldElement } from "./GoldElement";
import Link from "next/link";

export default function Mission() {
    return (
        <section className="relative py-16 lg:py-24 bg-black border-t-2 border-[#d1c578]/10 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
                <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div id="mission" className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            Our Mission
                        </span>
                        <div className="w-12 h-px bg-[#d1c578]" />
                    </div>
                    <div className={blackMango.className}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black-mango text-white mb-6 leading-tight">
                            Our <span className="text-[#d1c578]">Purpose</span> & Promise
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Creating lasting change through financial empowerment and sisterhood
                    </p>
                </div>

                {/* Content Row */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Text Content - Left Side */}
                    <div className="flex-1 text-gray-300 space-y-8">
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">
                                <span className="text-[#d1c578] font-semibold">032 Duchess</span> exists to transform the financial landscape for women in Nakuru by creating accessible pathways to wealth creation and mutual support.
                            </p>

                            <div className="bg-black/50 p-6 rounded-lg border border-[#d1c578]/10">
                                <h3 className="text-[#d1c578] text-xl font-medium mb-4">Our Core Mission</h3>
                                <p className="mb-4">
                                    To dismantle financial barriers through collective savings, education, and investment opportunities that elevate every member.
                                </p>
                                <p>
                                    We believe when one woman rises, she brings her sisters with her.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="text-white font-medium text-lg flex items-center">
                                        <span className="w-3 h-3 bg-[#d1c578] rounded-full mr-3"></span>
                                        Unity
                                    </h4>
                                    <p>
                                        Creating bonds stronger than blood through shared financial journeys and mutual trust.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-white font-medium text-lg flex items-center">
                                        <span className="w-3 h-3 bg-[#d1c578] rounded-full mr-3"></span>
                                        Growth
                                    </h4>
                                    <p>
                                        Fostering both personal and financial development through education and mentorship.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-white font-medium text-lg flex items-center">
                                        <span className="w-3 h-3 bg-[#d1c578] rounded-full mr-3"></span>
                                        Empowerment
                                    </h4>
                                    <p>
                                        Equipping members with tools, resources, and confidence to build independent wealth.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-white font-medium text-lg flex items-center">
                                        <span className="w-3 h-3 bg-[#d1c578] rounded-full mr-3"></span>
                                        Legacy
                                    </h4>
                                    <p>
                                        Creating sustainable change that benefits future generations of women.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#d1c578]/10 p-6 rounded-lg border border-[#d1c578]/20 mt-4">
                            <p className="text-[#d1c578] font-medium italic text-lg">
                                💛 "Tuungane, Tusonge Mbele" (Let's unite, let's move forward)
                            </p>
                        </div>

                        <div className="pt-6">
                            <Link 
                                href="/join" 
                                className="inline-block px-8 py-3 border border-[#d1c578] text-[#d1c578] font-medium rounded-md hover:bg-[#d1c578] hover:text-black transition-all duration-300"
                            >
                                Become Part of Our Mission
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Element - Right Side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-28 self-center">
                        <DecorativeGoldElement />
                    </div>
                </div>
            </div>

            {/* Bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d1c578] to-transparent opacity-20"></div>
        </section>
    );
}