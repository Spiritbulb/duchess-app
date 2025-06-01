'use client';
import '@/app/globals.css'
import '@/app/fonts.css'
import { blackMango } from '../lib/fonts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutNavbar from './components/AboutNavbar';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';

  return (
    <html lang="en" className={blackMango.className}>
      <title>Duchess Women's Group</title>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}