import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Pandu Mahesa's Portfolio`,
  description: `Welcome to Pandu Mahesa's portfolio website. Explore his professional journey, view samples of his work, and get in touch for collaboration opportunities.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-light text-[#F0F0F0]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
