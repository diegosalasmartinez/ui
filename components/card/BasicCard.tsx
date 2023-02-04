import Link from 'next/link'
import { cn } from '@/utils/style'
import FlatButton from '../button/FlatButton'

interface BasicCardProps {
  title: string
  body?: string
  children?: React.ReactNode
}

export default function BasicCard({ title, body, children }: BasicCardProps) {
  return (
    <div className={cn('flex flex-col justify-between', 'rounded-lg bg-white p-4 shadow-md', 'dark:bg-gray-800')}>
      <div className='mb-2'>
        <Link
          href={`/card`}
          className={cn(
            'cursor-pointer text-base font-bold text-gray-900',
            'hover:text-blue-500',
            'dark:text-white',
            'dark:hover:text-gray-200',
          )}
        >
          {title}
        </Link>
        <p className='my-2 text-sm text-gray-600 dark:text-gray-300'>{children ?? body}</p>
      </div>
      <div className='flex justify-end gap-2'>
        <FlatButton text='Cancel' category='secondary' />
        <FlatButton text='Accept' />
      </div>
    </div>
  )
}
