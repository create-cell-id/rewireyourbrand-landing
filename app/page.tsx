'use client'

import { useState, useEffect, useRef } from 'react'

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/bookings/rewireyourbrand'
const YOUTUBE_VIDEO_ID = 'fpK6HFwHJHE'

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [muted, setMuted] = useState(true)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player('hero-yt-player', {
        events: {
          onReady: (e: any) => { e.target.mute() },
        },
      })
    }

    if ((window as any).YT?.Player) {
      initPlayer()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      ;(window as any).onYouTubeIframeAPIReady = initPlayer
    }
  }, [])

  const handleUnmute = () => {
    playerRef.current?.unMute?.()
    setMuted(false)
  }

  return (
    <section className="relative min-h-screen flex items-center hero-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none hero-glow" />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 w-full py-10 text-center">

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15] tracking-tight mb-6 text-balance">
          Our average client gets{' '}
          <em className="not-italic text-gradient-gold">
            250K views{' '}
            <br className="hidden lg:block" />
            in the first 90 days of working together,
          </em>
          <br className="hidden lg:block" />
          {' '}or we work for free till we do.
        </h1>

        {/* Sub headline — stat bar */}
        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-10">
          <span className="font-body text-sm font-semibold text-ink">100M+ <span className="font-normal text-muted">organic views</span></span>
          <span className="text-border-light hidden sm:inline">·</span>
          <span className="font-body text-sm font-semibold text-ink">30K <span className="font-normal text-muted">followers built</span></span>
          <span className="text-border-light hidden sm:inline">·</span>
          <span className="font-body text-sm font-semibold text-ink">1,000 <span className="font-normal text-muted">meetings booked</span></span>
          <span className="text-border-light hidden sm:inline">·</span>
          <span className="font-body text-sm font-semibold text-ink">zero <span className="font-normal text-muted">paid ads</span></span>
        </div>

        {/* Video */}
        <div
          className="relative w-full aspect-video mb-10 overflow-hidden"
          style={{ boxShadow: '0 0 0 1px #1A2442, 0 0 80px rgba(59,130,246,0.14)' }}
        >
          <iframe
            id="hero-yt-player"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&enablejsapi=1`}
            title="Rewire Your Brand: Watch This First"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          {/* Transparent overlay blocks click-to-pause */}
          <div className="absolute inset-0" style={{ zIndex: 1 }} />
          {/* Unmute button */}
          {muted && (
            <button
              onClick={handleUnmute}
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-xs font-body font-medium px-3 py-2 hover:bg-black/80 transition-colors"
              style={{ zIndex: 2 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              Tap to unmute
            </button>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white text-sm font-body font-semibold px-8 py-4 hover:bg-[#1D4ED8] transition-colors duration-200"
          >
            Book a Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 border border-border text-ink text-sm font-body font-medium px-8 py-4 hover:border-border-light transition-colors duration-200"
          >
            See how it works
          </a>
        </div>

      </div>
    </section>
  )
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-6">
              The Problem
            </p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight mb-8">
              Most founders think content means hiring a team. That&apos;s why they never start.
            </h2>
            <div className="space-y-5 text-muted text-lg leading-relaxed">
              <p>
                You picture studios, editors, a social media manager, a creative director. You calculate what it costs in time and money and decide to wait until you&apos;re more ready.
              </p>
              <p>
                Meanwhile founders with less experience, filming on their phones, are closing deals from content every single week. They are not better at what they do. They just stopped waiting for perfect.
              </p>
              <p className="text-ink font-medium">
                Rewire Your Brand removes every barrier between you and a content system that actually works.
              </p>
            </div>
          </div>
          {/* Editorial photo — drop isaac-bw.jpg into public/ */}
          <div className="hidden lg:block relative h-[520px] overflow-hidden">
            <img
              src="/isaac energy.png"
              alt="Isaac De Persig"
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(100%) contrast(1.05)' }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Brand Positioning',
    body: 'We define who you are, who you\'re for, and what makes you the clear choice in your market. You stop sounding like everyone else in your space.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Scripts + Story',
    body: 'Every piece of content is scripted to your voice and your point of view. You read it, film it, and move on. No blank page, no second-guessing.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Edit, Post + Distribute',
    body: 'Full video production, captions, thumbnails, and distribution across your platforms. Nothing sits in a folder waiting to be finished.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'DM + Community Management',
    body: 'We manage your inbound. Replies, lead qualification, and keeping conversations moving so no opportunity falls through the cracks.',
  },
]

function Services() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight max-w-2xl">
            The Full Content System, Built and Run For You
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {services.map((s) => (
            <div key={s.title} className="bg-bg p-8 lg:p-10 group">
              <div className="text-accent mb-6">{s.icon}</div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                {s.title}
              </h3>
              <p className="text-muted text-base leading-relaxed font-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── PROCESS ──────────────────────────────────────────────────────────────────

const steps = [
  {
    num: '01',
    title: 'Apply',
    body: 'Fill out a short application. We review it and get on a fit call to confirm this is the right move for your business.',
  },
  {
    num: '02',
    title: 'We Build the System',
    body: 'Positioning, scripting, content strategy, and your 90-day content calendar. You\'re onboarded and live within 14 days.',
  },
  {
    num: '03',
    title: 'Your Only Job Is to Film',
    body: 'Film a short session on your phone each week. We handle every step after: edits, captions, posting, DMs, and your weekly KPI report.',
  },
]

function Process() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-surface border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-4">
            How It Works
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight">
            Three Steps to Going Live
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {steps.map((s) => (
            <div key={s.num} className="bg-surface p-8 lg:p-10">
              <div className="font-display text-6xl font-bold text-accent/50 mb-6 leading-none select-none">
                {s.num}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">{s.title}</h3>
              <p className="text-muted text-base leading-relaxed font-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── RESULTS ──────────────────────────────────────────────────────────────────

const results = [
  {
    metric: '+2,400',
    unit: 'Followers in 90 Days',
    name: 'Jordan M.',
    role: 'Real Estate Broker-Owner',
    quote:
      'Within 30 days of working with the RYB team I had content going out every week and was already getting DMs from people I\'d never met. It changed how I show up in my market.',
  },
  {
    metric: '12',
    unit: 'Inbound Leads in Month One',
    name: 'Sofia R.',
    role: 'Founder',
    quote:
      'I don\'t have time to think about content. That\'s the honest truth. What sold me was that I literally just had to film. The quality of what they produce is better than anything I\'d have made on my own.',
  },
  {
    metric: '5 Clients',
    unit: 'From Content Alone',
    name: 'Marcus T.',
    role: 'Mortgage Broker',
    quote:
      'Three months in and I\'ve had five clients tell me they found me through my content and felt like they already knew me before we even spoke. That\'s the ROI I was looking for.',
  },
]

function Results() {
  return (
    <section className="py-16 lg:py-24 border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-4">
            Client Results
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight">
            What Founders Have Built
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.name} className="border border-border p-8 flex flex-col">
              <div className="mb-6 pb-6 border-b border-border">
                <div className="font-display text-4xl font-bold text-ink">{r.metric}</div>
                <div className="text-accent text-sm font-body mt-1">{r.unit}</div>
              </div>
              <p className="text-muted text-sm leading-relaxed font-body flex-1 mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div>
                <div className="text-ink text-sm font-medium font-body">{r.name}</div>
                <div className="text-muted text-xs font-body">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── WHO IT'S FOR ─────────────────────────────────────────────────────────────

const forList = [
  "You're a founder, consultant, or operator who is excellent at what you do but largely invisible online.",
  "You've tried posting on your own and it hasn't been consistent.",
  "You want content working for your business without it consuming your schedule.",
  "You're ready to invest in a real system, not another template or course.",
]

const notForList = [
  "People who aren't ready to show up on camera at all.",
  "People expecting overnight results without a strategy behind them.",
]

function WhoItsFor() {
  return (
    <section className="py-16 lg:py-24 bg-surface border-t border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-10">
          <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-4">
            The Fit
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight">
            Is This For Me?
          </h2>
        </div>
        {/* YES / NO grid */}
        <div className="grid lg:grid-cols-2 gap-px bg-border mb-12">
          {/* YES */}
          <div className="bg-surface p-8 lg:p-10">
            <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-6">
              This Is For You
            </p>
            <div className="space-y-5">
              {forList.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="text-accent mt-1 shrink-0 font-bold">✓</span>
                  <p className="text-ink text-base font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* NO */}
          <div className="bg-surface p-8 lg:p-10">
            <p className="text-[#EF4444] text-xs tracking-widest2 uppercase font-body font-medium mb-6">
              This Is NOT For You
            </p>
            <div className="space-y-5">
              {notForList.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="text-[#EF4444] mt-1 shrink-0 font-bold">✕</span>
                  <p className="text-muted text-base font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA — merged into this section */}
        <div className="text-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-white text-base font-body font-semibold px-10 py-4 hover:bg-[#1D4ED8] transition-colors duration-200 whitespace-nowrap"
          >
            Book a 30-Minute Strategy Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9h10.5M10.5 5.25L14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-muted text-sm font-body mt-4">
            No obligation, 30 minutes, and you will know exactly what we would build for you.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <span className="font-display text-xl font-bold text-ink tracking-tight block mb-2">
              Rewire Your Brand
            </span>
            <p className="text-muted text-sm font-body max-w-xs">
              Done-with-you content strategy for founders who are ready to stop being invisible online.
            </p>
          </div>
          {/* Links + socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <div className="flex flex-col gap-2">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-ink transition-colors font-body">Book a Call</a>
              <a href="https://mycontent.rewireyourbrand.com" className="text-sm text-muted hover:text-ink transition-colors font-body">Client Login</a>
              <a href="mailto:hello@rewireyourbrand.com" className="text-sm text-muted hover:text-ink transition-colors font-body">hello@rewireyourbrand.com</a>
            </div>
            <div className="flex items-center gap-5">
              <a href="https://instagram.com/isaacdpersig" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-ink transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a href="https://youtube.com/@isaacdpersig" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted hover:text-ink transition-colors duration-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.54 6.42A2.78 2.78 0 0020.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42C1 8.15 1 12 1 12s0 3.85.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96C23 15.85 23 12 23 12s0-3.85-.46-5.58z" stroke="currentColor" strokeWidth="1.5" />
                  <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-muted text-xs font-body">© 2025 Rewire Your Brand</p>
        </div>
      </div>
    </footer>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="bg-bg text-ink overflow-x-hidden">
      <Hero />
      <Problem />
      <Services />
      <Process />
      <Results />
      <WhoItsFor />
      <Footer />
    </main>
  )
}
