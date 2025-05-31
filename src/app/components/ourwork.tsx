import { DecorativeGoldElement } from "./GoldElement";

export default function OurWork() {
    return (
        <section className="flex py-9 pt-30 bg-black border-t border-[#d1c578]/5 gap-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div id="work" className="inline-flex items-center gap-2 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            What we do
                        </span>
                        <div className="w-12 h-px bg-[#d1c578]" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-black-mango text-white mb-6">
                        The <span className="text-[#d1c578]">Duchess</span> Difference
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We redefine wealth building through three core principles that set us apart
                    </p>
                </div>

                {/* Content Row */}
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Decorative Element - Right Side */}
                    <div className="lg:w-1/3 lg:sticky lg:top-20">
                        <DecorativeGoldElement />
                    </div>
                    {/* Text Content - Left Side */}
                    <div className="flex-1 text-gray-300 space-y-6">
                        <p>
                            032 Duchess is a vibrant sisterhood of ambitious
                            Founded on the principles of unity, growth, and empowerment, our Chama
                            provides a safe space where women from all walks of life come together to:
                        </p>

                        <ul className="list-disc pl-5 space-y-2">
                            <li>Build Wealth – Through regular savings and strategic investments</li>
                            <li>Save Together - Pooling resources to achieve our financial goals</li>
                            <li>Support Each Other – Through loans, mentorship, and shared wisdom</li>
                            <li>Celebrate Sisterhood – Laughing, learning, and growing together</li>
                            <li>Give Back – Strengthening our community through outreach and charity</li>
                        </ul>
                        <p className="text-[#d1c578] font-medium">
                            💛 "Tuungane, Tusonge Mbele" (Let's unite, let's move forward)
                        </p>
                    </div>
                </div>
                {/* Bottom border animation */}
                <div className="
                absolute bottom-0 left-0 right-0 
                h-1 bg-gradient-to-r from-transparent via-[#d1c578] to-transparent 
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "></div>
            </div>
        </section>
    );
}