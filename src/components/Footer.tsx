import Container from './ui/Container'
import Eyebrow from './ui/Eyebrow'
import Logo from './ui/Logo'
import type { NavLink } from './Header'

export const solutionLinks: NavLink[] = [
  { label: 'Paid search marketing', href: '#' },
  { label: 'Email marketing', href: '#' },
  { label: 'Social Media Marketing', href: '#' },
  { label: 'Influencer marketing', href: '#' },
  { label: 'Search engine optimization', href: '#' },
  { label: 'Conversion rate optimization', href: '#' },
  { label: 'Google shopping', href: '#' },
  { label: 'Amazon shopping', href: '#' },
]

export const companyLinks: NavLink[] = [
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Team', href: '#' },
  { label: 'Success Stories', href: '#' },
  { label: 'Awards', href: '#' },
  { label: 'Contact', href: '#' },
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
                <a href={link.href} className="font-normal text-ink transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <nav aria-label="Company" className="mt-14 border-y border-line py-8 lg:py-10">
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4 lg:justify-between lg:px-16">
              {company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-normal text-ink transition-colors hover:text-brand">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <Logo size="sm" />
            <p>{copyright}</p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
