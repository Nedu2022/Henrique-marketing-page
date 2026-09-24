import type { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  as?: 'h2' | 'h3'
  className?: string
}

// The big display heading every section uses. `as` keeps the heading order correct for screen readers
// without changing the look.
export default function SectionHeading({ children, as: Tag = 'h2', className = '' }: SectionHeadingProps) {
  return (
    <Tag
      className={`font-display text-[34px] leading-[1.08] font-bold tracking-[-0.03em] text-ink sm:text-5xl xl:text-[52px] ${className}`}
    >
      {children}
    </Tag>
  )
}
