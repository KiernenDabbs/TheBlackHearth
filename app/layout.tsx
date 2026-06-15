import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = GeistSans
const geistMono = GeistMono

const oneSlice = localFont({
  src: './fonts/OneSlice.otf',
  variable: '--font-one-slice',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Black Hearth | Dark Fantasy Board Games',
  description: 'Step into the shadows. Discover cursed tabletop experiences at The Black Hearth.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${oneSlice.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
