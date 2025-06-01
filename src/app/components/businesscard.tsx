import { blackMango } from "@/lib/fonts";
import { ContactItem } from "./contactitem";
import Image from "next/image";
import Link from "next/link";

export default function BusinessCard() {
    return (
        <div className="hidden lg:flex 
                bg-white/95 hover:bg-white
                text-black 
                p-8
                flex-col
                border border-[#d1c9a3]/30
                w-[28rem]
                shadow-xl hover:shadow-2xl
                transition-all duration-500 ease-in-out
                cursor-default
                relative overflow-hidden
                group
                before:absolute before:inset-0 
                before:bg-[url('/texture.png')] before:opacity-10 before:pointer-events-none
                after:absolute after:inset-0 after:border-2 after:border-[#d1c578]/30 after:pointer-events-none
                hover:after:opacity-0 hover:after:scale-105 after:transition-all after:duration-500"
        >
            <div className="mb-8 transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={'/duchesslogo.png'}
                  alt="Duchess"
                  width={200}
                  height={80}
                  className="filter drop-shadow-md"
                />
            </div>
            
            <div className="space-y-5 border-t border-black/10 pt-8">
                <Link href={'mailto:hello@duchessgrp.com'} className="block transform hover:-translate-x-2 transition-transform duration-300">
                    <ContactItem 
                        type="email" 
                        value="hello@duchessgrp.com" 
                        className="hover:bg-[#f5f0d9]/50 transition-all duration-300"
                    />
                </Link>
                <Link href={'tel:+25412312312'} className="block transform hover:-translate-x-2 transition-transform duration-300">
                    <ContactItem 
                        type="phone" 
                        value="+254 123 123 12" 
                        highlight 
                        className="hover:bg-[#f5f0d9]/50 transition-all duration-300"
                    />
                </Link>
                <div className="transform hover:-translate-x-2 transition-transform duration-300">
                    <ContactItem 
                        type="address" 
                        value="Nakuru, Kenya" 
                        className="hover:bg-[#f5f0d9]/50 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#d1c578]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#d1c578]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
        </div>
    );
}