import { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'TypeScript Next.js',
  description: '...'
}

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={urbanist.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
