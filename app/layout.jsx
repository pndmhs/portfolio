import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-light text-[#F0F0F0]`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
