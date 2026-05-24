import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rewire Your Brand — Content Strategy for Founders',
  description:
    'Done-with-you content strategy for founders who want to grow their audience and turn attention into revenue — without spending 20 hours a week figuring it out.',
  openGraph: {
    title: 'Rewire Your Brand',
    description:
      'Content strategy for founders. We build the system, you show up on camera.',
    url: 'https://rewireyourbrand.com',
    siteName: 'Rewire Your Brand',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rewire Your Brand',
    description: 'Content strategy for founders. We build the system, you show up on camera.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg text-ink">{children}</body>
    </html>
  )
}
