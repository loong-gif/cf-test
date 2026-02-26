import { Lock, Tag } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

interface BlurredImageProps {
  src: string | null | undefined
  alt: string
  fill?: boolean
  sizes?: string
  className?: string
  priority?: boolean
}

export function BlurredImage({
  src,
  alt,
  fill = true,
  sizes,
  className = '',
  priority = false,
}: BlurredImageProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Blurred Image or Placeholder */}
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes={sizes}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          className="object-cover blur-xl scale-110"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-bg-tertiary">
          <Tag size={48} weight="light" className="text-text-tertiary blur-sm" />
        </div>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/65" />

      {/* Lock Icon + Message */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-lg">
          <Lock size={30} weight="regular" className="text-white/90" />
        </div>
        <span className="text-xs text-white/80 font-medium tracking-wide">
          Unlock with account
        </span>
      </div>
    </div>
  )
}
