import Container from './ui/Container'
import ButtonLink from './ui/ButtonLink'
import { ArrowRightIcon, SlashDivider, StarIcon } from './ui/icons'

export type Avatar = {
  src: string
  alt: string
}

export const expertAvatars: Avatar[] = [
  { src: '/images/avatars/man-black-hat.jpg', alt: 'Marketing expert' },
  { src: '/images/avatars/woman-blue-blazer.jpg', alt: 'Marketing expert' },
  { src: '/images/avatars/man-white-shirt.jpg', alt: 'Marketing expert' },
]

type HeroProps = {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaLabel?: string
  badgeText?: string
  revenue?: string
  revenueLabel?: string
  reviewsLabel?: string
  rating?: number
  avatars?: Avatar[]
}

/*
  Desktop (xl+) bento layout
  --------------------------
  The design is a fixed 1280 × 476 composition, so the wrapper uses aspect-[1280/476]
  and every card is absolutely positioned with percentages taken from that canvas.
  It scales down evenly instead of breaking.

  The two odd shapes come from the SVGs in public/images/shapes:
  - intro-shape-1.svg is the purple L-shaped megaphone card (used as a background).
  - intro-shape-2.svg is the outline of the rings photo (used as a CSS mask, so the photo
    is cut into that shape).

  Below xl it falls back to a plain 1- or 2-column grid of rounded cards.
*/
export default function Hero({
  title = 'Marketing without borders',
  subtitle = 'Amplify your business with our data-centric, performance-driven digital marketing solutions.',
  ctaText = 'Get Your Free Audit Today',
  ctaLabel = "Let's talk",
  badgeText = 'Award Winning Agency',
  revenue = '2,120,240,368',
  revenueLabel = 'Revenue driven for our clients',
  reviewsLabel = '5000+ Client reviews',
  rating = 5,
  avatars = expertAvatars,
}: HeroProps) {
  return (
    <section className="bg-linear-to-b from-lavender via-lavender-soft to-white pt-32 pb-12 sm:pt-40 lg:pt-44">
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-display text-[40px] leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-6xl xl:text-[72px]">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-lg font-normal text-body sm:text-xl">{subtitle}</p>
        </div>

        {/* Bento */}
        <div className="relative mt-16 grid gap-4 sm:grid-cols-2 xl:mt-24 xl:block xl:aspect-[1280/476]">
          {/* Dashed arrow pointing at the trophy */}
          <img
            src="/images/shapes/line-arrow.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[-14.5%] left-[71.6%] hidden w-[18.5%] xl:block"
          />

          {/* Megaphone card */}
          <div className="relative aspect-square rounded-[40px] bg-periwinkle xl:absolute xl:inset-y-0 xl:left-0 xl:aspect-auto xl:w-[40.55%] xl:rounded-none xl:bg-transparent xl:bg-[url(/images/shapes/intro-shape-1.svg)] xl:[background-size:100%_100%]">
            <img
              src="/images/icons/megaphone-3d.png"
              alt=""
              aria-hidden="true"
              className="absolute top-[6%] left-1/2 w-[58%] -translate-x-1/2 xl:top-[-10%] xl:left-[6%] xl:w-[70.3%] xl:translate-x-0"
            />
          </div>

          {/* Rings photo, masked into the custom shape on desktop */}
          <div className="relative aspect-square overflow-hidden rounded-[40px] xl:absolute xl:inset-y-0 xl:right-0 xl:aspect-auto xl:w-[57.27%] xl:rounded-none xl:[mask-image:url(/images/shapes/intro-shape-2.svg)] xl:[mask-repeat:no-repeat] xl:[mask-size:100%_100%]">
            <img
              src="/images/photos/abstract-purple-rings.jpg"
              alt="Abstract purple rings with a small sphere"
              className="size-full object-cover"
            />
          </div>

          {/* Award badge */}
          <div className="flex flex-col items-start justify-end gap-6 rounded-[40px] bg-lavender p-8 xl:absolute xl:top-0 xl:right-0 xl:h-[53.8%] xl:w-[14.4%] xl:gap-0 xl:px-[2.4%] xl:pb-[2.6%]">
            <img
              src="/images/icons/trophy-3d.png"
              alt=""
              aria-hidden="true"
              className="w-24 xl:absolute xl:top-[-7%] xl:left-[28.5%] xl:w-[66%]"
            />
            <p className="max-w-[8ch] text-2xl leading-tight font-normal text-body xl:text-[clamp(1.125rem,1.35vw,1.375rem)]">
              {badgeText}
            </p>
          </div>

          {/* Yellow audit CTA, sitting in the notch between the two shapes */}
          <div className="flex flex-col items-start gap-5 rounded-[40px] bg-sun p-8 sm:flex-row sm:items-center sm:justify-between xl:absolute xl:top-[61%] xl:bottom-0 xl:left-[29%] xl:w-[27.9%] xl:gap-3 xl:rounded-[48px] xl:px-[2.6%] xl:py-0">
            <p className="max-w-[10ch] text-xl leading-snug font-normal text-ink xl:text-[clamp(1rem,1.35vw,1.375rem)]">
              {ctaText}
            </p>
            <ButtonLink className="xl:px-5">{ctaLabel}</ButtonLink>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 flex flex-col items-center gap-8 text-ink md:flex-row md:justify-between md:gap-4">
          <a href="#" className="group flex items-center gap-5">
            <div className="flex -space-x-4">
              {avatars.map((avatar) => (
                <img
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="size-10 rounded-full object-cover ring-2 ring-white"
                />
              ))}
            </div>
            <span className="flex items-center gap-2 font-normal">
              Connect our experts
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>

          <SlashDivider className="hidden h-14 w-7 text-ink/15 md:block" />

          <div className="flex items-center gap-5">
            <span className="font-display text-3xl font-bold tracking-[-0.03em] sm:text-[40px]">{revenue}</span>
            <span className="max-w-[8rem] leading-snug font-normal">{revenueLabel}</span>
          </div>

          <SlashDivider className="hidden h-14 w-7 text-ink/15 md:block" />

          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-2 text-sun" aria-label={`Rated ${rating} out of 5`}>
              {Array.from({ length: rating }, (_, i) => (
                <StarIcon key={i} className="size-5" />
              ))}
            </div>
            <span className="font-normal">{reviewsLabel}</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
