import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9z" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  )
}

// The thin double slash that separates items in the hero stats bar.
export function SlashDivider(props: IconProps) {
  return (
    <svg viewBox="0 0 30 56" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M1 0l16 56M12 0l16 56" />
    </svg>
  )
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true" {...props}>
      <path d="M14 8H3M7.5 3.5 3 8l4.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 3l7 8h-4.5v10h-5V11H5z" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true" {...props}>
      <path d="m3.5 8.5 3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 26 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6 0a6 6 0 0 0-1.2 11.9C4.4 14.5 3 16.6.8 18.2L2 19.6C7.4 16.5 12 11.6 12 6.2V6a6 6 0 0 0-6-6z" />
      <path d="M20 0a6 6 0 0 0-1.2 11.9c-.4 2.6-1.8 4.7-4 6.3l1.2 1.4c5.4-3.1 10-8 10-13.4V6a6 6 0 0 0-6-6z" />
    </svg>
  )
}

/* Service icons (purple, sit inside a grey circle) */

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 4.5 8 8.5H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h.6l1.2 4.5h2.6l-1.2-4.5H8l6 4z" />
      <path d="M17.5 9.5v4M19.5 6l1.8-1.2M19.5 17l1.8 1.2M20 11.5h2" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
    </svg>
  )
}

export function ChartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="14" width="4.5" height="7" rx="1.2" />
      <rect x="9.75" y="11" width="4.5" height="10" rx="1.2" />
      <rect x="16.5" y="8" width="4.5" height="13" rx="1.2" />
      <path d="M3 11 9 6.5l3.5 2.5L20 3.5M16 3h4.5v4.5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function DollarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M15 9c-.5-1-1.6-1.6-2.9-1.6-1.8 0-3 .9-3 2.2 0 3 6 1.6 6 4.7 0 1.4-1.3 2.4-3.1 2.4-1.3 0-2.5-.6-3-1.7M12 5.5v13"
        fill="none"
        stroke="white"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="7" />
      <path d="m15.5 15.5 5 5" stroke="currentColor" strokeWidth={3} strokeLinecap="round" />
    </svg>
  )
}

export function TargetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true" {...props}>
      <path d="M20 8.5A9 9 0 1 0 21 12" strokeLinecap="round" />
      <path d="M15.5 10A4 4 0 1 0 16 12" strokeLinecap="round" />
      <path d="M12 12h10M19 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" fill="currentColor" />
      <path d="m3.5 7 8.5 6 8.5-6" fill="none" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function RocketIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 1.5c2.6 2 4 5.2 4 8.8V16H8v-5.7c0-3.6 1.4-6.8 4-8.8z" />
      <circle cx="12" cy="9" r="1.7" fill="white" />
      <path d="M8 12.5 5 15.5V20l3-2zM16 12.5l3 3V20l-3-2zM10.8 17.5h2.4v4h-2.4z" />
    </svg>
  )
}
