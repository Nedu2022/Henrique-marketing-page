import type { ReactNode } from 'react'
import { ArrowRightIcon } from './icons'

type ButtonLinkProps = {
  children: ReactNode
  href?: string
  className?: string
}

// The black pill used for every CTA on the site (Free audit, Let's talk, View all solutions…).
// It's an <a> not a <button> because each one navigates somewhere.
export default function ButtonLink({ children, href = '#', className = '' }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-ink px-7 py-3.5 font-display text-[13px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand ${className}`}
    >
      {children}
      <ArrowRightIcon className="size-4" />
    </a>
  )
}
