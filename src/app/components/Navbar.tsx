'use client'; // Required for using hooks in Next.js 13+

import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter();

    const navigate = (path: string) => {
        router.push(path);
    };

    return (
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end h-16">
                    <ul className="flex space-x-1 items-center">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Events', path: '/events' },
                            { name: 'Contact', path: '/contact' },
                            { name: 'Team', path: '/team' },
                            { name: 'Blog', path: '/blog' },
                        ].map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="
                    relative
                    px-4 py-2
                    text-gold-100 hover:text-white
                    font-medium
                    rounded-md
                    transition-all duration-300
                    group
                    focus:outline-none focus:ring-2 focus:ring-yellow-500
                  "
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    <span className="
                    absolute inset-0
                    bg-gradient-to-r from-yellow-600 to-yellow-500
                    rounded-md
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "></span>
                                    <span className="
                    absolute inset-0
                    border-2 border-transparent
                    group-hover:border-yellow-400
                    rounded-md
                    transition-all duration-300
                  "></span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
}