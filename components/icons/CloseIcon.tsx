import { cn } from '@/utils/style'

interface CloseIconProps {
  fill?: string
  color?: string
}

export default function CloseIcon({ fill, color }: CloseIconProps) {
  return(
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill={fill}
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={cn('h-5 w-5', color)}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
