import { cn } from '@/utils/style'

interface InfoIconProps {
  fill?: string
  color?: string
}

export default function InfoIcon({ fill, color }: InfoIconProps) {
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
        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
      />
    </svg>
  )
}
