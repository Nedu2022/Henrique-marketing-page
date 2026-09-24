import type { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
}

// 1280px content width + 24px gutters on each side (16px on phones).
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1328px] px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}
