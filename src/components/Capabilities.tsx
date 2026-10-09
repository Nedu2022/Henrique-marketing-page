import type { ComponentType, SVGProps } from 'react'
import Image from 'next/image'
import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import SectionHeading from './ui/SectionHeading'
import ButtonLink from './ui/ButtonLink'
import TextLink from './ui/TextLink'
import { MailIcon, RocketIcon, SearchIcon, TargetIcon } from './ui/icons'

export type Service = {
  title: string
  text: string
  href: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const services: Service[] = [
  {
    title: 'Paid search marketing',
    text: 'Craft campaigns — built just for your business — to ensure real and quantifiable ROI.',
    href: '#',
    icon: SearchIcon,
  },
  {
    title: 'Search engine optimization',
    text: 'Maintain your best spot on the search results page, so you can find new customers and re-engage loyal ones.',
    href: '#',
    icon: TargetIcon,
  },
  {
    title: 'Email marketing',
    text: 'When it comes to reaching your target audience, you can’t get much closer than direct to their inboxes.',
    href: '#',
    icon: MailIcon,
  },
  {
    title: 'Conversion rate optimization',
    text: 'Craft campaigns — built just for your business — to ensure real and quantifiable ROI.',
    href: '#',
    icon: RocketIcon,
  },
]

type CapabilitiesProps = {
  image?: string
  eyebrow?: string
  title?: string
  ctaLabel?: string
  items?: Service[]
}

export default function Capabilities({
  image = '/images/photos/team-office.jpg',
  eyebrow = 'Our capabilities',
  title = 'Data-driven, customer-centric digital services',
  ctaLabel = 'View all solutions',
  items = services,
}: CapabilitiesProps) {
  return (
    // The lavender background starts halfway down the photo, so the photo looks like it sits across two colours.
    <section id="capabilities" aria-labelledby="capabilities-heading" className="relative scroll-mt-24 pb-20 lg:pb-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[clamp(120px,15vw,260px)] bottom-0 bg-linear-to-b from-lavender-soft via-lavender-soft to-white"
      />

      <Container className="relative">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] sm:aspect-[1280/520] lg:rounded-[50px]">
          <Image
            src={image}
            alt="Our team collaborating around a shared desk"
            fill
            sizes="(max-width: 1328px) 100vw, 1280px"
            className="object-cover"
          />
        </div>

        <Eyebrow className="mt-14 lg:mt-16">{eyebrow}</Eyebrow>
        <SectionHeading id="capabilities-heading" className="mt-5 max-w-[720px]">
          {title}
        </SectionHeading>
        <ButtonLink href="#capabilities" className="mt-10">
          {ctaLabel}
        </ButtonLink>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map(({ title: itemTitle, text, href, icon: Icon }) => (
            <li key={itemTitle} className="flex flex-col rounded-[36px] bg-white p-8">
              <span className="grid size-16 place-items-center rounded-full bg-mist text-brand">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-10 max-w-[14ch] font-display text-[22px] leading-[1.2] font-bold tracking-[-0.02em] text-ink">
                {itemTitle}
              </h3>
              <p className="mt-6 mb-10 leading-[1.8]">{text}</p>
              <TextLink href={href} className="mt-auto self-start">
                Learn more
              </TextLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
