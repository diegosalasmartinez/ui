import { cn } from '@/utils/style'

interface SuccessIconProps {
  fill?: string
  color?: string
}

export default function SuccessIcon({ fill, color }: SuccessIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={cn('h-7 w-7', color)}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}
