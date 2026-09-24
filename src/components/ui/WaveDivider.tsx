type WaveDividerProps = {
  // "center" has the bump in the middle, "offset" has it towards the right.
  variant?: 'center' | 'offset'
  className?: string
}

export default function WaveDivider({ variant = 'center', className = '' }: WaveDividerProps) {
  const src = variant === 'center' ? '/images/shapes/wave-border-center.svg' : '/images/shapes/wave-border.svg'
  return <img src={src} alt="" aria-hidden="true" className={`block h-auto w-full ${className}`} />
}
