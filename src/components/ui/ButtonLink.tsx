import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from './icons'

type ButtonLinkProps = {
  children: ReactNode
  href?: string
  className?: string
}

// The black pill used for every CTA on the site (Free audit, Let's talk, View all solutions…).
export default function ButtonLink({ children, href = '#contact', className = '' }: ButtonLinkProps) {
  const classes = `inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-ink px-7 py-3.5 font-display text-[13px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand ${className}`

  if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRightIcon className="size-4" />
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRightIcon className="size-4" />
    </Link>
  )
}
