import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import NavBar from "./NavBar"
import AuthProvider from "./auth/Provider"


const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: '...',
    description: '...',
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={roboto.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
