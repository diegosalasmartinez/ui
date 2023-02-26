import useTheme from '@/hooks/useTheme'
import { cn } from '@/utils/style'

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <div>
        <label
          className={cn(
            'inline-block pr-[5px] text-black hover:cursor-pointer dark:text-white',
            theme === 'light' ? '' : 'grayscale',
          )}
          htmlFor='flexSwitchCheckDefault'
        >
          ☀️
        </label>
        <input
          className="mx-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:mt-[-0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-indigo-600 checked:after:absolute checked:after:z-[2] checked:after:mt-[-3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-indigo-600 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-indigo-600 checked:focus:bg-indigo-600 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
          type='checkbox'
          role='switch'
          id='flexSwitchCheckDefault'
          onChange={() => {}}
          onClick={toggleTheme}
          checked={theme === 'dark'}
        />
        <label
          className={cn(
            'inline-block pl-[5px] text-black hover:cursor-pointer dark:text-white',
            theme === 'light' ? 'grayscale' : '',
          )}
          htmlFor='flexSwitchCheckDefault'
        >
          🌙
        </label>
      </div>
    </div>
  )
}
