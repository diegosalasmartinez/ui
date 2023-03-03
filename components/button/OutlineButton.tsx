import { cn } from '@/utils/style'

interface OutlineButtonProps {
  text: string
  category?: 'primary' | 'secondary' | 'error' | 'success'
  disabled?: boolean
  onClick?: (data: any) => void
}

export default function OutlineButton({
  text,
  category = 'primary',
  disabled = false,
  onClick = () => {},
}: OutlineButtonProps) {
  const getColor = () => {
    switch (category) {
      case 'primary':
        return 'border-indigo-500 text-indigo-600 hover:text-indigo-800 hover:border-indigo-700 focus:ring-indigo-300'
      case 'secondary':
        return 'border-gray-400 text-gray-600 hover:text-gray-700 hover:border-gray-500 focus:ring-gray-300'
      case 'success':
        return 'border-green-600 text-green-700 hover:text-green-800 hover:border-green-700 focus:ring-green-300'
      case 'error':
        return 'border-red-600 text-red-700 hover:text-red-800 hover:border-red-700 focus:ring-red-300'
      default:
        return 'border-indigo-600 hover:border-indigo-700 focus:ring-indigo-300'
    }
  }

  return (
    <button
      type='button'
      className={cn(
        'border-2 rounded-lg px-4 py-2 text-center text-base font-medium',
        'focus:outline-none focus:ring-4',
        getColor(),
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}
