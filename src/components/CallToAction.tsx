import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import SectionHeading from './ui/SectionHeading'
import ButtonLink from './ui/ButtonLink'
import WaveDivider from './ui/WaveDivider'

export type Partner = {
  name: string
  // TODO: add partner badge files (e.g. public/images/partners/google-cloud.svg) and set `logo`.
  logo?: string
}

export const partners: Partner[] = [
  { name: 'Google Cloud Partner' },
  { name: 'Meta Business Partners' },
  { name: 'Google Partner' },
  { name: 'Shopify partner' },
  { name: 'TikTok Marketing Partners' },
]

type CallToActionProps = {
  title?: string
  phoneIntro?: string
  phone?: string
  ctaLabel?: string
  partnersTitle?: string
  partnerList?: Partner[]
  roas?: string
  roasLabel?: string
  roasNote?: string
}

export default function CallToAction({
  title = 'See how we can help your business grow with digital marketing',
  phoneIntro = 'Ready to speak with a marketing expert? Give us a ring',
  phone = '888-400-5050',
  ctaLabel = 'Get a free audit',
  partnersTitle = 'A partner, not a vendor',
  partnerList = partners,
  roas = '6.7',
  roasLabel = '/ Average ROAS',
  roasNote = 'across our 100+ Global Clients on SEO, PPC & Social',
}: CallToActionProps) {
  return (
    <section className="pt-12">
      <Container>
        {/* Extra bottom padding: the footer slides up 50px over this box (see Footer's -mt). */}
        <div className="rounded-t-[40px] bg-lavender px-6 pt-14 pb-[calc(4rem+50px)] sm:px-12 lg:rounded-t-[50px] lg:px-[72px] lg:pt-24">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            <SectionHeading className="max-w-[700px]">{title}</SectionHeading>

            <div className="flex flex-col items-start gap-6 lg:items-end lg:text-right">
              <p className="max-w-[17rem] leading-[1.8]">{phoneIntro}</p>
              <a href={`tel:${phone}`} className="font-display text-lg font-bold text-ink">
                {phone}
              </a>
              <ButtonLink className="mt-4">{ctaLabel}</ButtonLink>
            </div>
          </div>

          <WaveDivider className="mt-16 lg:mt-20" />

          <div className="mt-14 flex flex-col gap-12 lg:mt-24 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Eyebrow>{partnersTitle}</Eyebrow>
              <ul className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
                {partnerList.map((partner) => (
                  <li key={partner.name}>
                    {partner.logo ? (
                      <img src={partner.logo} alt={partner.name} className="h-9 w-auto" />
                    ) : (
                      <span className="block max-w-[9rem] text-base leading-tight font-medium text-ink/70">
                        {partner.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:text-right">
              <p className="flex items-baseline gap-2 lg:justify-end">
                <span className="font-display text-[44px] leading-none font-bold tracking-[-0.03em] text-ink">{roas}</span>
                <span className="font-normal text-ink">{roasLabel}</span>
              </p>
              <p className="mt-5 max-w-[16rem] leading-[1.8] lg:ml-auto">{roasNote}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
