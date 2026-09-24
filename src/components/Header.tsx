import Container from './ui/Container'
import Logo from './ui/Logo'
import ButtonLink from './ui/ButtonLink'
import { MenuIcon } from './ui/icons'

export type NavLink = {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'H.', href: '#' },
  { label: 'Marketing solutions', href: '#' },
  { label: 'Who we are', href: '#' },
  { label: 'Work', href: '#' },
  { label: 'Contact', href: '#' },
]

type HeaderProps = {
  links?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Header({ links = navLinks, ctaLabel = 'Free audit', ctaHref = '#' }: HeaderProps) {
  // Absolutely positioned so the hero's gradient shows through behind it.
  // TODO: sticky header that reappears (with a white background) when scrolling up, as in the later screenshots.
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      {/* 3 columns on desktop (1fr | auto | 1fr) keeps the nav truly centred even though logo and button differ in width. */}
      <Container className="flex h-20 items-center justify-between gap-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a href="#" className="self-start" aria-label="Henrique home">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {links.map((link) => (
              <li key={link.label}>
                {/* TODO: "Marketing solutions" probably opens a dropdown/mega-menu. */}
                <a
                  href={link.href}
                  className="font-display text-[13px] font-medium tracking-wide text-ink uppercase transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 lg:justify-self-end">
          {/* Hidden via a wrapper: ButtonLink already sets inline-flex, and passing "hidden" alongside it
              would conflict. Tailwind resolves that by CSS order, not by class order. */}
          <div className="hidden sm:block">
            <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
          </div>
          {/* TODO: mobile menu toggle. Open a panel with the nav links, and set aria-expanded on this button. */}
          <button
            type="button"
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-xl bg-ink text-white lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </Container>
    </header>
  )
}
