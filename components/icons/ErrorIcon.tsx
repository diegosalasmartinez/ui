import { cn } from '@/utils/style'

interface ErrorIconProps {
  fill?: string
  color?: string
}

export default function ErrorIcon({ fill, color }: ErrorIconProps) {
  return(
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
        d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  )
}