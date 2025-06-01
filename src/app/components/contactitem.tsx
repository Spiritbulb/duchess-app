interface ContactItemProps {
    type: "email" | "phone" | "address";
    value: string;
    highlight?: boolean;
    onClick?: () => void;
    className?: string;
}

export function ContactItem({ type, value, highlight, onClick, className = "" }: ContactItemProps) {
    const baseClasses = "flex items-center px-5 py-3 rounded-sm text-sm tracking-wide";
    const highlightClasses = highlight 
        ? "bg-[#f8e8a0] text-black font-medium border-l-4 border-black" 
        : "bg-[#f9f7ec] text-gray-800 font-normal";
    
    const icon: { [key in ContactItemProps["type"]]: string } = {
        email: "✉️",
        phone: "📞",
        address: "📍"
    };

    return (
        <div
            className={`${baseClasses} ${highlightClasses} ${className}`}
            onClick={onClick}
        >
            <span className="inline-block mr-3 text-base opacity-80">{icon[type]}</span>
            <span>{value}</span>
        </div>
    );
}