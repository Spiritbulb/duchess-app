'use client';

import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="/duchesslogo.png"
                            alt="Duchess Logo"
                            width={120}
                            height={48}
                            className="hover:opacity-90 transition-opacity cursor-pointer"
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
                                            ? 'text-indigo-600 border-b-2 border-indigo-600'
                                            : 'text-gray-500 hover:text-gray-900'
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
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none"
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
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.path)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium
                                    ${
                                        pathname === item.path
                                            ? 'bg-indigo-50 text-indigo-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}