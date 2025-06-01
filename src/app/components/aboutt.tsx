'use client';

import { ServiceButton } from "./aboutbutton";
import { blackMango } from "@/lib/fonts";
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll as any);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', smoothScroll as any);
            });
        };
    }, []);

    return (
        <div className={`${blackMango.className} grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto px-6 -mt-60 relative z-20`}>
            <ServiceButton 
                label="Who we are" 
                sectionId="about" 
                className="hover:bg-[#f5f0d9]/90 hover:text-[#8a7a3d] transition-all duration-300"
            />
            <ServiceButton 
                label="What we do" 
                sectionId="work" 
                className="hover:bg-[#f5f0d9]/90 hover:text-[#8a7a3d] transition-all duration-300"
            />
            <ServiceButton 
                label="Our Mission" 
                sectionId="mission" 
                className="hover:bg-[#f5f0d9]/90 hover:text-[#8a7a3d] transition-all duration-300"
            />
            <ServiceButton 
                label="Team" 
                sectionId="team" 
                className="hover:bg-[#f5f0d9]/90 hover:text-[#8a7a3d] transition-all duration-300"
            />
        </div>
    );
}