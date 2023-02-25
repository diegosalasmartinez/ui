import { cn } from '@/utils/style'
import ThemeToggler from './ThemeToggler'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between border-b border-b-gray-200 p-3 dark:bg-black'>
      <div
        className={cn(
          'w-40 self-center whitespace-nowrap rounded-lg py-1 text-center text-xl font-semibold',
          'dark:bg-white dark:text-black',
        )}
      >
        UI System
      </div>
      <ThemeToggler />
    </header>
  )
}
