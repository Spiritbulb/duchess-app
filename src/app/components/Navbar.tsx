'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
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
        <div className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur' : 'bg-transparent border-transparent'}`}>
            <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo with scroll effect */}
                    <div className="flex-shrink-0 relative h-12 w-32">
                        <Image
                            src="/duchess-white.png"
                            alt="Duchess Logo"
                            width={180}
                            height={72}
                            className={`absolute hover:opacity-90 transition-opacity cursor-pointer transition-all duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
                            onClick={() => navigate('/')}
                            priority
                        />
                        <Image
                            src="/duchess-white.png"
                            alt="Duchess Logo"
                            width={180}
                            height={72}
                            className={`absolute hover:opacity-90 transition-opacity cursor-pointer transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => navigate('/')}
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                className={`px-1 py-2 text-sm font-medium transition-colors duration-200
                                    ${
                                        pathname === item.path
                                            ? 'text-[#d1c578] border-b-2 border-[#d1c578]'
                                            : `text-${isScrolled ? 'white' : 'white'} hover:text-[#d1c578]`
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white hover:text-[#d1c578]'}`}
                            aria-expanded="false"
                        >
                            <span className="sr-only">
                                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            </span>
                            {mobileMenuOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className={`md:hidden ${isScrolled ? 'bg-white' : 'bg-gray-900'} border-t ${isScrolled ? 'border-gray-200' : 'border-gray-800'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                                    ${
                                        pathname === item.path
                                            ? 'bg-indigo-50 text-indigo-700'
                                            : `text-${isScrolled ? 'gray-600' : 'gray-300'} hover:${isScrolled ? 'bg-gray-50' : 'bg-gray-800'} hover:text-${isScrolled ? 'gray-900' : 'white'}`
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}