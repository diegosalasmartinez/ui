import { cn } from '@/utils/style'

interface BasicButtonProps {
  text: string
  category?: 'primary' | 'secondary'
}

export default function BasicButton({ text, category = 'primary' }: BasicButtonProps) {
  return (
    <button
      type='button'
      className={cn(
        'rounded-lg px-4 py-2 text-center text-sm font-medium text-white',
        category === 'primary' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        'focus:outline-none focus:ring-4',
        category === 'primary' ? 'focus:ring-indigo-300' : 'focus:ring-gray-300',
      )}
    >
      {text}
    </button>
  )
}
