import type { ReactNode } from 'react'

type TextLinkProps = {
  children: ReactNode
  href?: string
  className?: string
}

// Uppercase link with the purple underline ("MORE ABOUT US", "LEARN MORE", "VIEW ALL").
export default function TextLink({ children, href = '#', className = '' }: TextLinkProps) {
  return (
    <a
      href={href}
      className={`inline-block border-b-2 border-brand pb-1 font-display text-[13px] font-semibold tracking-wide text-ink uppercase transition-colors hover:text-brand ${className}`}
    >
      {children}
    </a>
  )
}
