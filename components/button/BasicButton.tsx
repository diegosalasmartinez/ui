import { cn } from '@/utils/style'

interface BasicButtonProps {
  text: string
  category?: 'primary' | 'secondary' | 'error' | 'success'
  disabled?: boolean
  onClick?: (data: any) => void
}

export default function BasicButton({
  text,
  category = 'primary',
  disabled = false,
  onClick = () => {},
}: BasicButtonProps) {
  const getColor = () => {
    switch (category) {
      case 'primary':
        return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300'
      case 'secondary':
        return 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-300'
      case 'success':
        return 'bg-green-600 hover:bg-green-700 focus:ring-green-300'
      case 'error':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-300'
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-300'
    }
  }

  return (
    <button
      type='button'
      className={cn(
        'rounded-lg px-4 py-2 text-center text-sm font-medium text-white',
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
