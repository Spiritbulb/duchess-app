'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Footer() {
  const router = useRouter();
  
  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <div className="bg-black border-t border-[#d1c578]/20 pt-20 pb-12 relative">
      {/* Decorative Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="w-24 h-1 bg-gradient-to-r from-[#d1c578] to-transparent mb-8"></div>
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/duchess-white.png" 
                alt="Duchess Logo"
                width={180}
                height={72}
              />
            
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevating women investors through education, community, and strategic opportunities.
            </p>
            <div className="flex space-x-4">
              {(Object.keys(socialIcons) as Array<keyof typeof socialIcons>).map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-gray-400 hover:text-[#d1c578] transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={socialIcons[social]} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d1c578] mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Events', 'Resources', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(`/${item.toLowerCase()}`)}
                    className="text-white hover:text-[#d1c578] transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d1c578] mb-6">
              Policies
            </h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Disclaimer', 'Code of Conduct'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => navigate(`/${item.toLowerCase().replace(' ', '-')}`)}
                    className="text-white hover:text-[#d1c578] transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#d1c578] mb-6">
              Connect
            </h4>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-[#d1c578] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@duchessgroup.com" className="text-white hover:text-[#d1c578] transition-colors">
                  hello@duchessgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-[#d1c578] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-white">Nakuru, Kenya</p>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Duchess Women's Investment Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#d1c578] text-sm transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-[#d1c578] text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* The Spirit Watermark */}
      <div className='mt-10'>
        <a 
        href="https://spiritbulb.org/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute left-1/2 bottom-4 opacity-20 hover:opacity-40 transition-opacity duration-300 hover:scale-105 transform"
      >
        <Image 
          src="/watermark-ts.png" 
          alt="The Spirit"
          width={60}
          height={24}
          className="filter grayscale"
        />
      </a>
      </div>
      
    </div>
  );
}

const socialIcons = {
  twitter: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
  linkedin: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
};