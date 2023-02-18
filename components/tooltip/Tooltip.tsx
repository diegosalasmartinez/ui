import { cn } from '@/utils/style'

interface TooltipProps {
  title: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

export function Tooltip({ title, position = 'top', children }: TooltipProps) {
  return (
    <div className='flex w-fit'>
      <div
        className={cn(
          'absolute before:absolute before:z-50 before:w-max before:max-w-xs before:rounded-lg before:bg-gray-700 before:px-2 before:py-1.5 before:text-white before:content-[attr(data-tip)] before:text-xs',
          'before:invisible after:invisible hover:before:visible hover:after:visible',
          position === 'top' || position === 'bottom'
            ? 'before:left-1/2 before:-translate-x-1/2'
            : 'before:top-1/2 before:-translate-y-1/2',
          position === 'top' && 'before:-top-2 before:-translate-y-full',
          position === 'bottom' && 'before:-bottom-2 before:translate-y-full',
          position === 'right' && 'before:-right-2 before:translate-x-full',
          position === 'left' && 'before:-left-2 before:-translate-x-full',
          'after:absolute after:z-50 after:h-0 after:w-0 after:border-4 after:border-x-transparent',
          position === 'top' || position === 'bottom'
            ? 'after:left-1/2 after:-translate-x-1/2 after:border-x-transparent'
            : 'after:top-1/2 after:-translate-y-1/2 after:border-y-transparent',
          position === 'top' && 'after:-top-2 after:border-t-gray-700 after:border-b-transparent',
          position === 'bottom' && 'after:-bottom-2 after:border-b-gray-700 after:border-t-transparent',
          position === 'right' && 'after:-right-2 after:border-r-gray-700 after:border-l-transparent',
          position === 'left' && 'after:-left-2 after:border-l-gray-700 after:border-r-transparent',
        )}
        data-tip={title}
      >
        <div className='opacity-0'>{children}</div>
      </div>
      {children}
    </div>
  )
}
