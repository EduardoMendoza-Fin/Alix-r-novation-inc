import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alix Rénovation | Construction & Rénovation au Québec',
  description:
    'Entrepreneur général offrant des services de construction et rénovation résidentielle et commerciale au Québec.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Alix Rénovation',
    description: 'Construction et rénovation clés en main au Québec',
    locale: 'fr_CA',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} smooth-scroll`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
