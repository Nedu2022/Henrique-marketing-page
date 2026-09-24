import type { ComponentType, SVGProps } from 'react'
import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import SectionHeading from './ui/SectionHeading'
import TextLink from './ui/TextLink'
import WaveDivider from './ui/WaveDivider'
import { ChartIcon, DollarIcon, MegaphoneIcon } from './ui/icons'

export type Benefit = {
  title: string
  text: string
  // A component, not an element: the card decides size and colour when it renders it.
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

const placeholderText =
  'Our proprietary solution leverages an in-house database of 260M+ customers and 2,000+ custom variables to build custom predictive models to drive business growth — from only the best customers.'

export const benefits: Benefit[] = [
  { title: 'Better audiences', text: placeholderText, icon: MegaphoneIcon },
  { title: 'Better analytics', text: placeholderText, icon: ChartIcon },
  { title: 'Better outcomes', text: placeholderText, icon: DollarIcon },
]

type WhatWeDoProps = {
  eyebrow?: string
  title?: string
  intro?: string
  linkLabel?: string
  items?: Benefit[]
}

export default function WhatWeDo({
  eyebrow = 'What we do',
  title = 'We solve digital challenges',
  intro = 'Together, we help our clients achieve tangible, measurable results. Focused on business outcomes — we bring a unique set of expertise and skills to the party.',
  linkLabel = 'More about us',
  items = benefits,
}: WhatWeDoProps) {
  return (
    <section className="pt-8 pb-20 lg:pb-24">
      <Container>
        <WaveDivider variant="offset" />

        <div className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>{eyebrow}</Eyebrow>
            <SectionHeading className="mt-5 max-w-lg">{title}</SectionHeading>
          </div>
          <div className="lg:max-w-[510px] lg:justify-self-end lg:pt-10">
            <p className="leading-[1.8]">{intro}</p>
            <TextLink className="mt-8">{linkLabel}</TextLink>
          </div>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-12">
          {items.map(({ title: itemTitle, text, icon: Icon }) => (
            <li key={itemTitle} className="rounded-[48px] border border-line p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 className="mt-6 max-w-[8ch] font-display text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-ink">
                  {itemTitle}
                </h3>
                <span className="grid size-[70px] shrink-0 place-items-center rounded-full bg-mist text-brand">
                  <Icon className="size-8" />
                </span>
              </div>
              <p className="mt-8 leading-[1.8]">{text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
