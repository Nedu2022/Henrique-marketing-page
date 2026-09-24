type LogoProps = {
  name?: string
  size?: 'sm' | 'md'
}

// Rebuilt in HTML/CSS (instead of an SVG file) so the brand name is real text and easy to change.
// Shape matches the original: a black tab hanging from the top with the initial in white, then the wordmark.
const sizes = {
  sm: { tab: 'h-10 w-6 pb-1.5 text-xs', word: 'pb-1.5 text-sm' },
  md: { tab: 'h-12 w-8 pb-2 text-sm sm:h-[67px] sm:w-[42px] sm:pb-3 sm:text-lg', word: 'pb-2 text-base sm:pb-3 sm:text-[22px]' },
}

export default function Logo({ name = 'Henrique', size = 'md' }: LogoProps) {
  const s = sizes[size]
  return (
    <span className="inline-flex items-end gap-1.5 sm:gap-2">
      <span
        aria-hidden="true"
        className={`flex items-end justify-center rounded-b-full bg-ink font-display leading-none font-bold text-white ${s.tab}`}
      >
        {name.charAt(0).toUpperCase()}
      </span>
      <span className={`font-display leading-none font-medium tracking-wide text-ink uppercase ${s.word}`}>{name}</span>
    </span>
  )
}
