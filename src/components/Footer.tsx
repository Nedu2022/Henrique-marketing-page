import Link from 'next/link'
import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import Logo from './ui/Logo'
import type { NavLink } from './Header'

export const solutionLinks: NavLink[] = [
  { label: 'Paid search marketing', href: '#capabilities' },
  { label: 'Email marketing', href: '#capabilities' },
  { label: 'Social Media Marketing', href: '#capabilities' },
  { label: 'Influencer marketing', href: '#capabilities' },
  { label: 'Search engine optimization', href: '#capabilities' },
  { label: 'Conversion rate optimization', href: '#capabilities' },
  { label: 'Google shopping', href: '#capabilities' },
  { label: 'Amazon shopping', href: '#capabilities' },
]

export const companyLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Careers', href: '#contact' },
  { label: 'Team', href: '#why-us' },
  { label: 'Success Stories', href: '#work' },
  { label: 'Awards', href: '#proof' },
  { label: 'Contact', href: '#contact' },
]

type FooterProps = {
  solutions?: NavLink[]
  company?: NavLink[]
  copyright?: string
}

export default function Footer({
  solutions = solutionLinks,
  company = companyLinks,
  // The screenshot ends at the link row, so this bottom line is an assumption. Edit or remove it.
  copyright = '© 2026 Henrique. All rights reserved.',
}: FooterProps) {
  return (
    // Negative top margin pulls the footer up over the lavender CTA box, so its rounded corners show lavender behind.
    <footer className="relative -mt-[50px]">
      <Container>
        <div className="rounded-t-[40px] bg-mist px-6 pt-14 pb-10 sm:px-12 lg:rounded-t-[50px] lg:px-[72px] lg:pt-20">
          <Eyebrow>Solutions</Eyebrow>
          <ul className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-7">
            {solutions.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="font-normal text-ink transition-colors hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <nav aria-label="Company" className="mt-14 border-y border-line py-8 lg:py-10">
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-between lg:px-16">
              {company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-normal text-ink transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <Link href="/" aria-label="Henrique home">
              <Logo size="sm" />
            </Link>
            <p>{copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
