import { cn } from '@/utils/style'
import { useState } from 'react'
import CloseIcon from '../icons/CloseIcon'
import ErrorIcon from '../icons/ErrorIcon'
import InfoIcon from '../icons/InfoIcon'
import SuccessIcon from '../icons/SuccessIcon'
import WarningIcon from '../icons/WarningIcon'

interface BasicAlertProps {
  title?: string
  message?: string
  type: 'success' | 'info' | 'warning' | 'error'
  icon?: boolean
  closable?: boolean
  children?: React.ReactNode
}

export default function BasicAlert({ title, message, type, icon, closable, children }: BasicAlertProps) {
  const [isActive, setIsActive] = useState(true)

  function getAlertStyle(): string {
    return type === 'success'
      ? 'bg-green-50 dark:bg-green-50 border-2 border-green-300'
      : type === 'info'
      ? 'bg-sky-50 dark:bg-sky-50 border-2 border-sky-300'
      : type === 'warning'
      ? 'bg-amber-50 dark:bg-amber-50 border-2 border-amber-300'
      : type === 'error'
      ? 'bg-rose-50 dark:bg-rose-50 border-2 border-rose-300'
      : ''
  }

  function getTextStyle(): string {
    return type === 'success'
      ? 'text-green-500 dark:text-green-500'
      : type === 'info'
      ? 'text-sky-500 dark:text-sky-500'
      : type === 'warning'
      ? 'text-amber-500 dark:text-amber-500'
      : type === 'error'
      ? 'text-rose-500 dark:text-rose-500'
      : ''
  }

  function getHoverStyle(): string {
    return type === 'success'
      ? 'hover:bg-green-200'
      : type === 'info'
      ? 'hover:bg-sky-200'
      : type === 'warning'
      ? 'hover:bg-amber-200'
      : type === 'error'
      ? 'hover:bg-rose-200'
      : ''
  }

  function getIcon(): React.ReactElement {
    return type === 'success' ? (
      <SuccessIcon fill='none' color={getTextStyle()} />
    ) : type === 'info' ? (
      <InfoIcon fill='none' color={getTextStyle()} />
    ) : type === 'warning' ? (
      <WarningIcon fill='none' color={getTextStyle()} />
    ) : type === 'error' ? (
      <ErrorIcon fill='none' color={getTextStyle()} />
    ) : (
      <></>
    )
  }

  return (
    <>
      {isActive && (
        <div className={cn('flex flex-row rounded-lg p-2', getAlertStyle())}>
          {icon && <span className='ml-2 self-center'>{getIcon()}</span>}
          <div className={cn('ml-4 basis-full', getTextStyle())}>
            <span className='flex flex-col text-lg font-bold'>{title}</span>
            <span className='text-base'>{children ?? message}</span>
          </div>
          {closable && (
            <button
              className={cn('p-1 mr-1 rounded-full self-center cursor-pointer', getHoverStyle())}
              onClick={() => setIsActive(false)}
            >
              <CloseIcon fill='none' color={getTextStyle()} />
            </button>
          )}
        </div>
      )}
    </>
  )
}
