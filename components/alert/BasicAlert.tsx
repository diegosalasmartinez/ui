import { cn } from '@/utils/style'

interface BasicAlertProps {
  title?: string
  message?: string
  type?: 'success' | 'info' | 'warning' | 'error'
  children?: React.ReactNode
}

export default function BasicAlert({ title, message, type, children }: BasicAlertProps) {
  function getAlertStyle(): string {
    return type === 'success' ? 'bg-green-100 dark:bg-green-50 border-2 border-green-300'
      : type === 'info' ? 'bg-sky-100 dark:bg-sky-50 border-2 border-sky-300'
      : type === 'warning' ? 'bg-amber-100 dark:bg-amber-50 border-2 border-amber-300'
      : type === 'error' ? 'bg-rose-100 dark:bg-rose-50 border-2 border-rose-300'
      : 'bg-gray-100 dark:bg-gray-50 border-2 border-gray-300';
  }

  function getTextStyle(): string {
    return type === 'success' ? 'text-green-500 dark:text-green-500'
      : type === 'info' ? 'text-sky-500 dark:text-sky-500'
      : type === 'warning' ? 'text-amber-500 dark:text-amber-500'
      : type === 'error' ? 'text-rose-500 dark:text-rose-500'
      : 'text-gray-500 dark:text-gray-500';
  }

  return (
    <div className={cn('flex flex-col justify-between', 'rounded-lg p-2 mb-1', getAlertStyle())}>
      <span className={cn('ml-2 text-lg font-bold', getTextStyle())}>
        { title }
      </span>
      <span className={cn('ml-2 pb-1 text-base', getTextStyle())}>
        { children ?? message }
      </span>
    </div>
  )
}
