type MediaImageProps = {
  src?: string
  alt: string
  className?: string
}

// Shows the image when there is one, otherwise a soft gradient block of the same size.
// Lets sections be built before every photo exists. Just fill in `src` in the data later.
export default function MediaImage({ src, alt, className = '' }: MediaImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-linear-to-br from-lavender via-periwinkle to-brand/70 ${className}`}
      />
    )
  }
  return <img src={src} alt={alt} className={`object-cover ${className}`} />
}
