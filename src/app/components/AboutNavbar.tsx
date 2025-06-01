'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function AboutNavbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigate = (path: string) => {
        router.push(path);
        setMobileMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Contact', path: '/contact' },
        { name: 'Team', path: '/team' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? ' backdrop-blur py-2 shadow-lg' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <div className={`flex-shrink-0 relative h-20 w-40 cursor-pointer ${isScrolled ? 'opacity-100' : 'opacity-100'}`} onClick={() => navigate('/')}>
                        <Image
                            src="/duchess-white.png" // Consider a gold version for dark backgrounds
                            alt="Duchess Logo"
                            width={160}
                            height={48}
                            className="object-contain hover:opacity-90 transition-opacity"
                            priority
                        />
                    </div>
                    

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                className={`px-4 py-2 text-sm uppercase tracking-wider font-medium transition-all duration-300
                                    ${
                                        pathname === item.path
                                            ? 'text-[#d1c578] border-b-2 border-[#d1c578]'
                                            : 'text-white hover:text-[#d1c578]'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg focus:outline-none text-white hover:bg-[#d1c578]/20"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 bg-black/90 backdrop-blur-md rounded-lg">
                        <div className="px-2 pt-2 pb-3 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => navigate(item.path)}
                                    className={`block w-full text-left px-4 py-3 rounded-md text-sm uppercase tracking-wider font-medium
                                        ${
                                            pathname === item.path
                                                ? 'bg-[#d1c578]/10 text-[#d1c578]'
                                                : 'text-white hover:bg-[#d1c578]/10 hover:text-[#d1c578]'
                                        }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}