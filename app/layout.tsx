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
  title: 'Rewire Your Brand — 250K Views in 90 Days or We Work Free',
  description:
    'Our average client gets 250K organic views in the first 90 days — or we keep working for free until they do. Done-with-you content strategy for founders. You film. We handle everything else.',
  keywords: [
    'content strategy for founders',
    'personal brand agency',
    'done for you content',
    'founder content system',
    'organic growth for entrepreneurs',
    'rewire your brand',
    'content marketing for founders',
  ],
  alternates: {
    canonical: 'https://rewireyourbrand.com',
  },
  openGraph: {
    title: 'Rewire Your Brand — 250K Views in 90 Days or We Work Free',
    description:
      'Our average client gets 250K organic views in 90 days — or we keep working for free. You film once a week. We write scripts, edit, post, manage DMs, and send weekly reports.',
    url: 'https://rewireyourbrand.com',
    siteName: 'Rewire Your Brand',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rewire Your Brand — 250K Views in 90 Days or We Work Free',
    description:
      'Our average client gets 250K organic views in 90 days — or we keep working for free. Done-with-you content strategy for founders.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Isaac De Persig',
  url: 'https://rewireyourbrand.com',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Rewire Your Brand',
    url: 'https://rewireyourbrand.com',
  },
  sameAs: [
    'https://www.linkedin.com/in/isaacdepersig/',
    'https://youtube.com/@isaacdpersig',
    'https://instagram.com/isaacdpersig',
  ],
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rewire Your Brand',
  url: 'https://rewireyourbrand.com',
  description: 'Done-with-you content strategy for founders. 250K organic views in 90 days or we work for free.',
  founder: { '@type': 'Person', name: 'Isaac De Persig' },
  knowsAbout: ['content strategy', 'personal branding', 'founder brand', 'organic growth', 'social media strategy'],
  sameAs: [
    'https://www.linkedin.com/in/isaacdepersig/',
    'https://youtube.com/@isaacdpersig',
    'https://instagram.com/isaacdpersig',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-body bg-bg text-ink">{children}</body>
    </html>
  )
}
