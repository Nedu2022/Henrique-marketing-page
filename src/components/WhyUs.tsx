import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import ButtonLink from './ui/ButtonLink'
import MediaImage from './ui/MediaImage'
import { ArrowUpIcon, CheckIcon } from './ui/icons'

export type SessionSource = {
  label: string
  value: number
  color: string
}

// Each tab shows either a picture or the "Real-Time Reporting" chart card.
// This is a discriminated union: `kind` tells TypeScript which other fields exist.
export type TabMedia =
  | { kind: 'image'; src?: string; alt: string }
  | { kind: 'sessions'; title: string; total: string; sources: SessionSource[] }

export type WhyUsTab = {
  label: string
  title: string
  text: string
  media: TabMedia
}

export const whyUsTabs: WhyUsTab[] = [
  {
    label: 'Transparency',
    title: '100% Campaign transparency',
    // Placeholder copy: this tab's text is cut off in the screenshot.
    text: 'You always know where your budget goes. Live dashboards and clear monthly reports show exactly how every campaign performs and what we are doing next.',
    media: { kind: 'image', src: '/images/graphics/stats-card.svg', alt: 'Growth chart rising from July to October' },
  },
  {
    label: 'Team of experts',
    title: 'Friendly team of experts',
    text: 'Our experts and professionals are never more than an email or a phone call away. Or, if you prefer to talk face to face, drop by our office to discuss your plans and goals over a cup of coffee. We are here for you.',
    // TODO: add the team-meeting photo as public/images/photos/team-meeting.jpg and set src.
    media: { kind: 'image', alt: 'Our team reviewing charts around a table' },
  },
  {
    label: 'Results',
    title: 'Choose a partner that understands you',
    text: 'All our decisions are based on your goals and concerns. Whether it’s website design, SEO, PPC, or anything else, we want to understand what keep you up at night so we can deliver the business results you seek.',
    media: {
      kind: 'sessions',
      title: 'Real-Time Reporting & Analytics',
      total: '16 860',
      sources: [
        { label: 'Display', value: 6280, color: '#6c5ce7' },
        { label: 'AdRoll', value: 4220, color: '#e4e4ea' },
        { label: 'Bing', value: 2690, color: '#c9c7e0' },
        { label: 'Other', value: 1640, color: '#dcdce3' },
      ],
    },
  },
]

type WhyUsProps = {
  tabs?: WhyUsTab[]
  // TODO: replace this prop with useState when wiring up the tabs (clicking a tab sets the index).
  activeIndex?: number
  title?: string
  text?: string
  ctaLabel?: string
}

export default function WhyUs({
  tabs = whyUsTabs,
  activeIndex = 0,
  title = 'Why Henrique is your top-choice',
  text = 'We are a five-star rated holistic full-service digital marketing agencies, serving thousands of clients. Our digital agency covers all aspects of internet marketing: SEO, social media, and PPC management, all the way to email marketing, website design, and web development.',
  ctaLabel = 'Get proposal',
}: WhyUsProps) {
  const active = tabs[activeIndex]
  const isFirst = activeIndex === 0
  const isLast = activeIndex === tabs.length - 1

  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Tabs + panel */}
        <div className="max-w-[603px]">
          <div role="tablist" aria-label="Why choose us" className="grid grid-cols-3">
            {tabs.map((tab, i) => (
              // TODO: onClick → set active tab. Also add arrow-key navigation between tabs.
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                className={`rounded-t-[32px] px-2 py-5 font-display text-xs font-bold tracking-tight text-ink uppercase sm:text-base lg:py-6 ${
                  i === activeIndex ? 'bg-lavender' : ''
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* The corner under the active tab is square so tab and panel read as one shape. */}
          <div
            role="tabpanel"
            className={`rounded-[40px] bg-lavender p-6 pb-10 sm:p-10 sm:pb-16 ${isFirst ? 'rounded-tl-none' : ''} ${
              isLast ? 'rounded-tr-none' : ''
            }`}
          >
            <h3 className="font-display text-2xl leading-tight font-bold tracking-[-0.02em] text-ink sm:text-[30px]">
              {active.title}
            </h3>
            <p className="mt-4 leading-[1.8]">{active.text}</p>
            <div className="mt-6">
              <TabMediaView media={active.media} />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:max-w-[580px] lg:justify-self-end">
          <SectionHeading>{title}</SectionHeading>
          <p className="mt-10 leading-[1.8]">{text}</p>
          <ButtonLink className="mt-10">{ctaLabel}</ButtonLink>
        </div>
      </Container>
    </section>
  )
}

function TabMediaView({ media }: { media: TabMedia }) {
  if (media.kind === 'image') {
    return <MediaImage src={media.src} alt={media.alt} className="aspect-[482/221] w-full rounded-[28px]" />
  }
  return <SessionsCard title={media.title} total={media.total} sources={media.sources} />
}

type SessionsCardProps = {
  title: string
  total: string
  sources: SessionSource[]
}

function SessionsCard({ title, total, sources }: SessionsCardProps) {
  // Donut chart: each source is a circle stroke whose dash length is its share of the ring.
  const radius = 60
  const circumference = 2 * Math.PI * radius
  const sum = sources.reduce((acc, s) => acc + s.value, 0)

  let offset = 0
  const segments = sources.map((source) => {
    const length = (source.value / sum) * circumference
    const segment = { ...source, length, offset }
    offset += length
    return segment
  })

  // The yellow check badge sits where the first (purple) segment ends.
  const endAngle = (segments[0].length / circumference) * 2 * Math.PI - Math.PI / 2
  const badgeX = 50 + (radius / 1.5) * Math.cos(endAngle)
  const badgeY = 50 + (radius / 1.5) * Math.sin(endAngle)

  return (
    <div className="rounded-[32px] bg-white p-6 sm:p-9">
      <div className="flex items-center justify-between">
        <p className="text-sm font-normal text-ink">{title}</p>
        <span className="grid size-10 place-items-center rounded-full bg-mist text-brand">
          <ArrowUpIcon className="size-4" />
        </span>
      </div>

      <div className="mt-6 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
        <div className="relative size-36 shrink-0">
          <svg viewBox="0 0 150 150" className="size-full -rotate-90">
            {segments.map((s) => (
              <circle
                key={s.label}
                cx="75"
                cy="75"
                r={radius}
                fill="none"
                stroke={s.color}
                strokeWidth={s.label === segments[0].label ? 12 : 9}
                strokeDasharray={`${s.length} ${circumference - s.length}`}
                strokeDashoffset={-s.offset}
              />
            ))}
          </svg>
          <div className="absolute inset-0 grid place-content-center text-center">
            <span className="font-display text-lg font-bold text-ink">{total}</span>
            <span className="text-xs">Sessions</span>
          </div>
          <span
            className="absolute grid size-6 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sun text-white ring-2 ring-white"
            style={{ left: `${badgeX}%`, top: `${badgeY}%` }}
          >
            <CheckIcon className="size-3" />
          </span>
        </div>

        <dl className="grid w-full grid-cols-2 text-sm">
          {sources.map((s, i) => (
            <div key={s.label} className={`flex items-center gap-2 py-4 ${i >= 2 ? 'border-t border-line' : ''}`}>
              <span className="size-2 rounded-full" style={{ backgroundColor: s.color }} />
              <dt>{s.label}:</dt>
              <dd className="font-normal text-ink">{s.value.toLocaleString('fr-FR')}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
