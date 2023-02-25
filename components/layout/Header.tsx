import ThemeToggler from './ThemeToggler'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between border-b border-b-gray-200 p-3'>
      <div className='w-40 self-center whitespace-nowrap rounded-lg bg-black py-1 text-center text-xl font-semibold text-white'>
        UI System
      </div>
      <ThemeToggler />
    </header>
  )
}
