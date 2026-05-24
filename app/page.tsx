'use client'

import { useEffect, useRef, useState } from 'react'

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/bookings/rewireyourbrand'
const YOUTUBE_VIDEO_ID = 'fpK6HFwHJHE'

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <span className="font-display text-lg font-bold text-ink tracking-tight">
          Rewire Your Brand
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://mycontent.rewireyourbrand.com"
            className="hidden sm:block text-sm text-muted hover:text-ink transition-colors duration-200 font-body"
          >
            Client Login
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-body font-medium text-bg bg-ink px-5 py-2 hover:bg-accent transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-grid overflow-hidden pt-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 w-full py-10 text-center">

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-ink leading-[1.05] tracking-tight mb-6">
          You&apos;re Good at What You Do.{' '}
          <em className="not-italic text-gradient-gold">Someone Half as Qualified Is Getting the Deals.</em>
        </h1>

        {/* Sub headline */}
        <p className="text-muted text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-12 font-body">
          You press record. We handle everything after: scripting, editing, posting, DM management, and a full KPI report every month. You run the business. We build the audience.
        </p>

        {/* Video */}
        <div
          className="relative w-full aspect-video mb-10 overflow-hidden"
          style={{ boxShadow: '0 0 0 1px #1A2442, 0 0 80px rgba(59,130,246,0.14)' }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=1`}
            title="Rewire Your Brand: Watch This First"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
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

// ─── STATS ────────────────────────────────────────────────────────────────────

function Stats() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const counters = containerRef.current.querySelectorAll('.counter-display')
    const targets = [100000000, 30000, 1000]
    const durations = [4000, 4000, 4000]

    const formatNumber = (n: number): string => {
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + 'M'
      if (n >= 1_000) return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + 'K'
      return n.toLocaleString()
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      counters.forEach((el, i) => {
        const target = targets[i]
        const steps = 60
        const increment = target / steps
        let current = 0
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            el.textContent = formatNumber(target) + '+'
            clearInterval(interval)
          } else {
            el.textContent = formatNumber(Math.floor(current)) + '+'
          }
        }, durations[i] / steps)
      })
    }, { threshold: 0.3 })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-t border-b border-border bg-surface">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
        <style>{`
          .stats-row {
            display: flex;
            justify-content: center;
            gap: 50px;
            flex-wrap: nowrap;
          }
          .stat-item {
            text-align: center;
            flex: 1;
            min-width: 0;
            padding: 24px 20px;
          }
          .counter-display {
            font-family: var(--font-playfair), Georgia, serif;
            font-size: 72px;
            font-weight: 800;
            background: linear-gradient(135deg, #3B82F6 0%, #93C5FD 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.2;
            margin-bottom: 8px;
            white-space: nowrap;
          }
          .counter-subtitle {
            font-size: 13px;
            color: #B8CFF5;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            white-space: nowrap;
          }
          @media (max-width: 1024px) {
            .stats-row { gap: 20px; }
            .counter-display { font-size: 48px; }
          }
          @media (max-width: 768px) {
            .stats-row { flex-direction: column; gap: 0; align-items: center; }
            .stat-item { border-bottom: 1px solid #1A2442; }
            .counter-display { font-size: 40px; }
            .counter-subtitle { font-size: 11px; }
          }
        `}</style>
        <div className="stats-row">
          <div className="stat-item">
            <div className="counter-display">0</div>
            <div className="counter-subtitle">Organic Views</div>
          </div>
          <div className="stat-item">
            <div className="counter-display">0</div>
            <div className="counter-subtitle">Followers Built</div>
          </div>
          <div className="stat-item">
            <div className="counter-display">0</div>
            <div className="counter-subtitle">Organic Meetings Booked</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

function Problem() {
  return (
    <section className="py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <div>
            <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium">
              The Problem
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight mb-8">
              You've built something real. But the founders who need you
              can't find you.
            </h2>
            <div className="space-y-5 text-muted text-lg leading-relaxed max-w-2xl">
              <p>
                You've thought about content. You've started and stopped. You've
                watched founders with half your expertise close deals from
                Instagram and LinkedIn while your calendar fills with referrals
                you can't scale.
              </p>
              <p>
                The problem isn't motivation. It isn't even time. It's that you've
                never had a system that runs without you having to figure it out
                from scratch every single week.
              </p>
              <p className="text-ink font-medium">
                Rewire Your Brand is that system.
              </p>
            </div>
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
    <section className="py-24 lg:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-4">
            What We Build for You
          </p>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink leading-tight max-w-2xl">
            Everything That Runs After You Film
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
    title: 'You Film. We Run It.',
    body: 'Show up on camera. We handle every step after: edits, captions, posting, DMs, and monthly KPI reporting.',
  },
]

function Process() {
  return (
    <section id="how-it-works" className="py-24 lg:py-36 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
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
              <div className="font-display text-6xl font-bold text-border mb-8 leading-none select-none">
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
    metric: '2 Clients',
    unit: 'From Content Alone',
    name: 'Marcus T.',
    role: 'Mortgage Broker',
    quote:
      'Three months in and I\'ve had two clients tell me they found me through my content and felt like they already knew me before we even spoke. That\'s the ROI I was looking for.',
  },
]

function Results() {
  return (
    <section className="py-24 lg:py-36 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
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
    <section className="py-24 lg:py-36 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <div>
            <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium">
              Is This Right For You?
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight mb-12">
              Built for founders who are ready to stop being invisible.
            </h2>
            <div className="space-y-4 mb-10">
              {forList.map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="text-accent mt-0.5 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M3 9l4.5 4.5 7.5-9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-ink text-base font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-muted text-xs tracking-widest2 uppercase font-body font-medium mb-4">
                Not a Fit If…
              </p>
              <div className="space-y-3">
                {notForList.map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="text-muted mt-0.5 shrink-0">✕</span>
                    <p className="text-muted text-base font-body leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-32 lg:py-40 border-t border-border relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-accent text-xs tracking-widest2 uppercase font-body font-medium mb-6">
          Ready to Start?
        </p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
          Stop Being Invisible.
          <br />
          Start Building Your Audience.
        </h2>
        <p className="text-muted text-lg leading-relaxed max-w-xl mx-auto mb-10 font-body">
          We take on a small number of new clients each month. Apply now and
          we&apos;ll confirm fit within 24 hours.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-white text-base font-body font-semibold px-10 py-4 hover:bg-[#1D4ED8] transition-colors duration-200"
        >
          Book a Strategy Call
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.75 9h10.5M10.5 5.25L14.25 9l-3.75 3.75"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p className="text-muted text-sm font-body mt-5">
          No obligation. 30 minutes. We&apos;ll tell you exactly what we&apos;d build for you.
        </p>
      </div>
    </section>
  )
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <span className="font-display text-base font-bold text-ink">
          Rewire Your Brand
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/isaacdpersig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted hover:text-ink transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@isaacdpersig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-muted hover:text-ink transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.54 6.42A2.78 2.78 0 0020.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42C1 8.15 1 12 1 12s0 3.85.46 5.58A2.78 2.78 0 003.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96C23 15.85 23 12 23 12s0-3.85-.46-5.58z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="mailto:hello@rewireyourbrand.com"
            aria-label="Email"
            className="text-muted hover:text-ink transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </a>
        </div>
        <p className="text-muted text-xs font-body">
          © 2026 Rewire Your Brand. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-bg text-ink overflow-x-hidden">
      <Nav scrolled={scrolled} />
      <Hero />
      <Stats />
      <Problem />
      <Services />
      <Process />
      <Results />
      <WhoItsFor />
      <FinalCTA />
      <Footer />
    </main>
  )
}
