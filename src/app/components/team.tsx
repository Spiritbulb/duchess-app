import { blackMango } from "@/lib/fonts";

export default function Team() {
    const teamMembers = [
        {
            title: "Chairlady",
            name: "Janet M. Doe",
            description: "Oversees all official communications and records, ensuring transparency and accountability in our operations. With 8 years of financial management experience.",
            role: "Documentation & Transparency",
            icon: "01"
        },
        {
            title: "Secretary",
            name: "Julie C. Doe",
            description: "Manages our daily operations and member coordination, creating seamless experiences for our sisterhood. Background in community organization and event planning.",
            role: "Operations & Coordination",
            icon: "02"
        },
        {
            title: "Treasurer",
            name: "Jane K. Doe",
            description: "Guards our collective resources with financial expertise, ensuring every shilling works for our members' benefit. Former bank manager with 12 years experience.",
            role: "Financial Stewardship",
            icon: "03"
        }
    ];

    return (
        <section className="relative py-24 bg-black border-t border-[#d1c578]/10 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-[#d1c578] mix-blend-overlay filter blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div id="team" className="inline-flex items-center gap-4 mb-6">
                        <div className="w-12 h-px bg-[#d1c578]" />
                        <span className="text-[#d1c578] uppercase tracking-widest text-sm font-medium">
                            Meet The Team
                        </span>
                        <div className="w-12 h-px bg-[#d1c578]" />
                    </div>
                    <div className={blackMango.className}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black-mango text-white mb-6 leading-tight">
                            Our <span className="text-[#d1c578]">Leadership</span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        The dedicated women who guide our sisterhood with wisdom and vision
                    </p>
                </div>

                {/* Team Members */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="
                                bg-gradient-to-b from-black to-gray-900/50 
                                p-8 rounded-xl 
                                border border-[#d1c578]/20 
                                hover:border-[#d1c578]/50
                                transition-all duration-300
                                group
                                relative
                                overflow-hidden
                                hover:shadow-lg hover:shadow-[#d1c578]/10
                            "
                        >
                            {/* Gold accent on hover */}
                            <div className="
                                absolute inset-0 
                                bg-[#d1c578]/5 
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                            "></div>

                            {/* Member Image */}
                            <div className="mb-6 flex justify-center">
                                <div className="
                                    relative w-32 h-32 rounded-full overflow-hidden
                                    border-2 border-[#d1c578]/30
                                    group-hover:border-[#d1c578]/70
                                    transition-all duration-300
                                ">
                                    <img
                                        src={`/team-${member.icon}.jpg`}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="
                                        absolute inset-0 bg-[#d1c578]/10
                                        opacity-0 group-hover:opacity-100
                                        transition-opacity duration-300
                                    "></div>
                                </div>
                            </div>

                            {/* Member Info */}
                            <div className="text-center">
                                <h3 className="text-2xl font-black-mango text-white mb-1">
                                    {member.name}
                                </h3>
                                <div className="text-[#d1c578] font-medium mb-3">
                                    {member.title}
                                </div>
                                <div className="text-sm text-gray-400 mb-4 font-medium">
                                    {member.role}
                                </div>
                                <p className="text-gray-300 leading-relaxed">
                                    {member.description}
                                </p>
                            </div>

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

                {/* Members Callout */}
                <div className="mt-20 text-center max-w-4xl mx-auto">
                    <div className="bg-black/50 p-8 rounded-xl border border-[#d1c578]/20">
                        <h3 className="text-2xl font-black-mango text-white mb-4">
                            Our <span className="text-[#d1c578]">Sisterhood</span>
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Beyond our leadership team, 032 Duchess is powered by dozens of incredible women from Nakuru - entrepreneurs, professionals, and visionaries who collectively drive our mission forward.
                        </p>
                        <button className="
                            px-8 py-3 bg-[#d1c578] text-black font-medium rounded-md
                            hover:bg-[#c0b060] hover:scale-105
                            transition-all duration-300
                        ">
                            Meet All Members
                        </button>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="mt-20 flex justify-center">
                    <div className="w-32 h-px bg-[#d1c578]"></div>
                </div>
            </div>
        </section>
    );
}