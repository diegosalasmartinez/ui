import { useBoundStore } from '@/store'

export default function useTheme() {
  const theme = useBoundStore((state) => state.theme)
  const setTheme = useBoundStore((state) => state.setTheme)

  const getPresetTheme = () => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const colorScheme = event.matches ? 'dark' : 'light'
      setTheme(colorScheme)
    })
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document?.querySelector('html')?.classList.remove('light', 'dark')
    document?.querySelector('html')?.classList.add(newTheme)
  }

  return { theme, getPresetTheme, toggleTheme }
}
