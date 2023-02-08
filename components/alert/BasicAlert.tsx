import { cn } from '@/utils/style'

interface BasicAlertProps {
  title?: string
  message?: string
  type?: 'success' | 'info' | 'warning' | 'error'
  children?: React.ReactNode
}

export default function BasicAlert({ title, message, type, children }: BasicAlertProps) {
  function getAlertStyle() {
    return type === 'success' ? 'bg-green-50 dark:bg-green-50 border-2 border-green-200'
      : type === 'info' ? 'bg-sky-50 dark:bg-sky-50 border-2 border-sky-200'
      : type === 'warning' ? 'bg-amber-50 dark:bg-amber-50 border-2 border-amber-200'
      : type === 'error' ? 'bg-rose-50 dark:bg-rose-50 border-2 border-rose-200'
      : 'bg-gray-50 dark:bg-gray-50 border-2 border-gray-200';
  }

  function getTextStyle() {
    return type === 'success' ? 'text-green-400 dark:text-green-400'
      : type === 'info' ? 'text-sky-400 dark:text-sky-400'
      : type === 'warning' ? 'text-amber-400 dark:text-amber-400'
      : type === 'error' ? 'text-rose-400 dark:text-rose-400'
      : 'text-gray-400 dark:text-gray-400';
  }

  return (
    <div className={cn('flex flex-col justify-between', 'rounded-lg p-1 mb-1', getAlertStyle())}>
      <span className={cn('ml-2 text-base font-bold', getTextStyle())}>
        { title }
      </span>
      <span className={cn('ml-2 pb-1 text-sm', getTextStyle())}>
        { children ?? message }
      </span>
    </div>
  )
}
