import Container from './ui/Container'
import ButtonLink from './ui/ButtonLink'
import { expertAvatars, type Avatar } from './Hero'
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, QuoteIcon, SlashDivider, StarIcon } from './ui/icons'

export type Stat = {
  value: string
  label: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const stats: Stat[] = [
  { value: '37%', label: 'Average increase in sales for our clients' },
  { value: '100%', label: 'Google and Facebook-certified team' },
  { value: '81%', label: 'Results improved compared to previous agencies' },
]

export const testimonials: Testimonial[] = [
  {
    quote: 'The entire staff at Henrique has been phenomenal. They are quick with their replies and incredibly helpful.',
    name: 'Edward Kennedy',
    role: 'Director, Client Experience',
  },
]

type ProofProps = {
  title?: string
  items?: Stat[]
  highlightValue?: string
  highlightLabel?: string
  testimonialsList?: Testimonial[]
  // TODO: replace with useState when the prev/next arrows are wired up.
  activeTestimonial?: number
  reviewsLabel?: string
  reviewers?: Avatar[]
}

export default function Proof({
  title = 'The proof is in the numbers',
  items = stats,
  highlightValue = '282,000+',
  highlightLabel = 'Leads generated so far...',
  testimonialsList = testimonials,
  activeTestimonial = 0,
  reviewsLabel = '5000+ Client reviews',
  reviewers = expertAvatars,
}: ProofProps) {
  const testimonial = testimonialsList[activeTestimonial]

  return (
    <section className="py-12">
      <Container>
        {/* Grey card with the stats. The white testimonial panel below overlaps its bottom with rounded corners. */}
        <div className="overflow-hidden rounded-t-[40px] bg-mist lg:rounded-t-[50px]">
          <div className="px-6 pt-14 pb-16 sm:px-12 lg:px-[72px] lg:pt-24 lg:pb-24">
            <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-[30px]">{title}</h2>

            <div className="mt-10 grid items-center gap-10 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.45fr] lg:gap-6">
              {items.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  {/* Two rings: a faint outer one and the purple inner one. */}
                  <div className="grid size-[172px] place-items-center rounded-full border border-line">
                    <div className="flex size-[136px] flex-col items-center justify-center rounded-full border border-brand">
                      <span className="font-display text-[34px] leading-none font-bold tracking-[-0.03em] text-ink">
                        {stat.value}
                      </span>
                      <ArrowUpIcon className="mt-2 size-4 text-brand" />
                    </div>
                  </div>
                  <p className="mt-6 max-w-[15rem] leading-snug font-normal text-ink">{stat.label}</p>
                </div>
              ))}

              <div className="flex flex-col items-center justify-center rounded-[40px] bg-lavender px-6 py-14 text-center sm:col-span-3 lg:col-span-1 lg:min-h-[250px] lg:rounded-[48px]">
                <p className="font-display text-4xl font-bold tracking-[-0.03em] text-ink sm:text-[40px]">{highlightValue}</p>
                <p className="mt-1 font-normal text-ink">{highlightLabel}</p>
                <ButtonLink className="mt-7">Contact us</ButtonLink>
              </div>
            </div>
          </div>

          {/* Testimonial panel */}
          <div className="relative rounded-t-[40px] bg-white px-6 pt-14 pb-4 sm:px-12 lg:rounded-t-[50px] lg:px-[72px] lg:pt-20">
            <DashedArrow className="pointer-events-none absolute top-[6%] right-[8%] hidden w-[27%] lg:block" />

            <QuoteIcon className="w-16 text-brand" />

            <figure className="mt-10 max-w-[610px] lg:mt-16">
              <blockquote className="text-xl leading-[1.75] font-light text-ink italic sm:text-[22px]">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-normal text-ink">{testimonial.name}</p>
                <p className="mt-1">{testimonial.role}</p>
              </figcaption>
            </figure>

            <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              {/* TODO: prev/next change the active testimonial. */}
              <div className="flex gap-8 text-brand">
                <button type="button" aria-label="Previous testimonial">
                  <ArrowLeftIcon className="size-6" />
                </button>
                <button type="button" aria-label="Next testimonial">
                  <ArrowRightIcon className="size-6" />
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 text-sun" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon key={i} className="size-5" />
                    ))}
                  </div>
                  <span className="font-normal text-ink">{reviewsLabel}</span>
                </div>

                <SlashDivider className="hidden h-14 w-7 text-ink/15 sm:block" />

                <a href="#" className="group flex items-center gap-5 text-ink">
                  <div className="flex -space-x-4">
                    {reviewers.map((avatar) => (
                      <img
                        key={avatar.src}
                        src={avatar.src}
                        alt={avatar.alt}
                        className="size-11 rounded-full object-cover ring-2 ring-white"
                      />
                    ))}
                  </div>
                  <span className="flex items-center gap-2 font-normal">
                    View all reviews
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// The looping dashed line that points down at "View all reviews".
function DashedArrow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 430 400" fill="none" aria-hidden="true" className={className}>
      <path
        d="M72 5C45 80 20 170 20 240c0 35 25 42 60 30 70-25 150-45 230-20 50 16 80 60 102 118"
        stroke="#0b0b0f"
        strokeWidth="1.5"
        strokeDasharray="10 9"
      />
      <path d="m402 362 12 30 4-32z" fill="#0b0b0f" />
    </svg>
  )
}
