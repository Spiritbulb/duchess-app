import { ContactItem } from "./contactitem";

export default function BusinessCard() {
    return (
        <div className="hidden md:flex bg-[#d1c578] hover:bg-[#c2b46a] 
                text-black font-bold 
                py-6 px-9 
                rounded-none 
                flex-col
                border-2 border-[#d1c578]
                text-lg w-full max-w-xs shadow-md
                opacity-70 hover:opacity-100"
        >
            <h2 className="flex flex-col text-6xl text-black font-bold py-5">032</h2>
            <h3 className="text-4xl text-black mb-4">Duchess</h3>
            <div className="py-4">
                <ContactItem type="email" value="hello@duchess.com" />
                <ContactItem type="phone" value="+25412312312" highlight />
                <ContactItem type="address" value="Nakuru, Kenya" />
            </div>
        </div>
    );
}