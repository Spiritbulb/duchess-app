interface ServiceButtonProps {
    label: string;
}

export function ServiceButton({ label, }: ServiceButtonProps) {
    return (
        <button
            className="bg-[#d1c578] hover:bg-[#c2b46a] 
                text-black font-bold 
                py-7 px-10 
                rounded-none 
                flex
                flex-col
                animate-[slow-pulse_5s_infinite]
                transition-all duration-500 
                transform hover:scale-0.98
                border-2 border-[#d1c578]
                text-lg w-full max-w-xs shadow-md
                opacity-90 hover:opacity-100 "

        >
            {label}
        </button>
    );
}