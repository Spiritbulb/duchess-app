export default function Team() {
    return (
        <section className="py-24 bg-black border-t border-[#d1c578]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            Our Team
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

                {/* Value Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Secretary",
                            description: "Curated education programs that transform complex concepts into actionable strategies for women investors.",
                            icon: "01"
                        },
                        {
                            title: "Administrator",
                            description: "A private network of ambitious women fostering connections that elevate both portfolios and perspectives.",
                            icon: "02"
                        },
                        {
                            title: "Members",
                            description: "Exclusive access to vetted opportunities with rigorous potential analysis and growth forecasting.",
                            icon: "03"
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-gradient-to-b from-black to-gray-900 
                p-8 rounded-lg 
                border border-[#d1c578]/20 
                hover:border-[#d1c578]/50
                transition-all duration-300
                group
                relative
                overflow-hidden
            "
                        >
                            {/* Gold accent on hover */}
                            <div className="
                absolute inset-0 
                bg-[#d1c578]/5 
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
            "></div>

                            {/* User Image */}
                            <div className="mb-6">
                                <img
                                    src={`/user.png`}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>

                            <h3 className="
                text-2xl 
                font-black-mango 
                text-white 
                mb-4
            ">
                                {item.title}
                            </h3>
                            <p className="
                text-gray-300 
                leading-relaxed
            ">
                                {item.description}
                            </p>

                            {/* Bottom border animation */}
                            <div className="
                absolute bottom-0 left-0 right-0 
                h-1 bg-gradient-to-r from-transparent via-[#d1c578] to-transparent 
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
            "></div>
                        </div>
                    ))}
                </div>

                {/* Decorative Element */}
                <div className="mt-20 flex justify-center">
                    <div className="w-32 h-px bg-[#d1c578]"></div>
                </div>

            </div>
        </section>
    );
}