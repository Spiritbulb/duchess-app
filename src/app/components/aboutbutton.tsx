interface ServiceButtonProps {
    label: string;
    sectionId: string;
    className?: string;
}

export function ServiceButton({ label, sectionId, className = "" }: ServiceButtonProps) {
    return (
        <a
            href={`#${sectionId}`}
            className={`flex items-center justify-center 
                p-4 md:p-5
                text-sm md:text-base
                font-medium uppercase tracking-wider
                border border-[#d1c578]/50
                bg-white hover:bg-white
                text-gray-800 hover:text-[#8a7a3d]
                transition-all duration-300 ease-in-out
                cursor-pointer
                rounded-lg
                shadow-md hover:shadow-lg
                hover:-translate-y-1
                ${className}`}
        >
            {label}
        </a>
    );
}