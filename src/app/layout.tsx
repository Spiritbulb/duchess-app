import '@/app/globals.css'
import '@/app/fonts.css'
import { blackMango } from '../lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={blackMango.className}>
      <title>Duchess Women's Group</title>
     
    
      <body>{children}</body>
    </html>
  )
}