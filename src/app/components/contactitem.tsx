interface ContactItemProps {
    type: "email" | "phone" | "address";
    value: string;
    highlight?: boolean;
    onClick?: () => void;
    className?: string;
}

export function ContactItem({ type, value, highlight, onClick, className = "" }: ContactItemProps) {
    const baseClasses = "block text-sm px-4 py-1 my-7 flex";
    const bg = highlight ? "bg-yellow-300 font-bold" : "bg-gray-100";
    const icon: { [key in ContactItemProps["type"]]: string } = {
        email: "📧",
        phone: "📞",
        address: "🏠"
    };

    return (
        <div
            className={`${baseClasses} ${bg} ${className}`}
        >
            <span className="inline-block mr-2">{icon[type]}</span>
            <span className="text-gray-800">{value}</span>
        </div>
    );
}