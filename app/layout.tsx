import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const inter = Inter({ subsets: ['latin'] })
const InkFont = localFont({
  src: '../public/fonts/Inkfree.ttf'
})

export const metadata: Metadata = {
  title: 'Bully | English Puzzle',
  description: "The Bully game's English puzzle but on the web",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={InkFont.className}>{children}</body>
    </html>
  )
}
