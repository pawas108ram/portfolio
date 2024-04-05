import type { Metadata } from 'next'
import {   JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from './context/Providers'
import StarsCanvas from './components/Background'


const inter = JetBrains_Mono({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Pawas Portfolio',
  description: 'Portfolio Created By Pawas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
        <Providers>
          <StarsCanvas/>
            {children}
            
        </Providers>
      </body>
        
    </html>
  )
}
