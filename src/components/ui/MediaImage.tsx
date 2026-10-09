import Image from 'next/image'

type MediaImageProps = {
  src?: string
  alt: string
  className?: string
  priority?: boolean
}

// Shows the image when there is one, otherwise a soft gradient block of the same size.
// Lets sections be built before every photo exists. Just fill in `src` in the data later.
export default function MediaImage({ src, alt, className = '', priority = false }: MediaImageProps) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-linear-to-br from-lavender via-periwinkle to-brand/70 ${className}`}
      />
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority={priority} />
    </div>
  )
}
