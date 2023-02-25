import { useBoundStore } from "@/store";
import { useEffect } from "react"

export default function useTheme() {
    const theme = useBoundStore((state) => state.theme)
    const setTheme = useBoundStore((state) => state.setTheme)

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', event => {
            const colorScheme = event.matches ? "dark" : "light";
            setTheme(colorScheme);
          });
      }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return { theme, toggleTheme }
}