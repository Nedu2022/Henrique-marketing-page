import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import SectionHeading from './ui/SectionHeading'
import TextLink from './ui/TextLink'

export type Story = {
  brand: string
  stat: string
  label: string
  tags: string[]
  image: string
  href: string
}

export const stories: Story[] = [
  {
    brand: 'ZARA',
    stat: '+40%',
    label: 'Ecommerce growth',
    tags: ['Paid Search', 'Paid Social', 'SEO'],
    image: '/images/projects/fashion-duo-orange.jpg',
    href: '#',
  },
  {
    brand: 'Homme',
    stat: '+50%',
    label: 'Engagement rates',
    tags: ['Organic Social Media', 'Paid Social'],
    image: '/images/projects/abstract-3d-bars.jpg',
    href: '#',
  },
  // The next two are placeholder stories for the second carousel page (not visible in the screenshots).
  {
    brand: 'Lumière',
    stat: '+65%',
    label: 'Conversion rate',
    tags: ['SEO', 'Email Marketing'],
    image: '/images/projects/skincare-bottles.jpg',
    href: '#',
  },
  {
    brand: 'Harvest',
    stat: '+120%',
    label: 'Organic traffic',
    tags: ['SEO', 'Content'],
    image: '/images/projects/purple-produce.jpg',
    href: '#',
  },
]

type SuccessStoriesProps = {
  eyebrow?: string
  title?: string
  items?: Story[]
}

export default function SuccessStories({
  eyebrow = 'Success stories',
  title = 'Our work drives businesses forward',
  items = stories,
}: SuccessStoriesProps) {
  const pageCount = Math.ceil(items.length / 2)

  return (
    <section className="py-12 lg:py-16">
      <Container className="grid gap-10 lg:grid-cols-[37%_1fr] lg:gap-0">
        <div className="flex flex-col">
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionHeading className="mt-8 max-w-[460px] lg:mt-16">{title}</SectionHeading>
          <TextLink className="mt-8 self-start lg:mt-auto lg:mb-[30px]">View all</TextLink>
        </div>

        <div className="min-w-0">
          {/*
            A CSS-only carousel: the row scrolls sideways and snap-x makes each card stop neatly.
            Swipe/trackpad works already. Arrow buttons and autoplay will need JS.
          */}
          <ul className="flex snap-x snap-mandatory gap-[30px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((story) => (
              <li key={story.brand} className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-15px)]">
                <a
                  href={story.href}
                  className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[40px] p-7 text-white sm:p-10"
                >
                  <img
                    src={story.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-black/35" />

                  <p className="relative font-display text-xl font-bold">{story.brand}</p>

                  <div className="relative">
                    <p className="font-display text-4xl leading-none font-bold sm:text-[44px]">{story.stat}</p>
                    <p className="mt-1 font-display text-lg font-semibold sm:text-[22px]">{story.label}</p>
                    <ul className="mt-4 flex flex-wrap gap-2 border-t border-white/70 pt-4">
                      {story.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-white px-4 py-1.5 text-sm font-normal text-ink">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* TODO: make the dots clickable and highlight the page currently in view. */}
          <div className="mt-6 flex justify-center gap-3">
            {Array.from({ length: pageCount }, (_, i) => (
              <span key={i} className={`size-1.5 rounded-full ${i === 0 ? 'bg-ink' : 'bg-ink/20'}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
