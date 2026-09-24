import type { ReactNode } from 'react'

type EyebrowProps = {
  children: ReactNode
  className?: string
}

// The small uppercase label above section headings ("WHAT WE DO", "OUR CAPABILITIES"…).
export default function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <p className={`font-display text-sm font-semibold tracking-wide text-ink uppercase ${className}`}>{children}</p>
  )
}
