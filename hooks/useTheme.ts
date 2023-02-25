import { useEffect, useState } from "react"

export default function useTheme() {
    const [theme, setTheme] = useState('light')
    // const theme = useBoundStore((state) => state.actualRoute)
    // const setTheme = useBoundStore((state) => state.setActualRoute)

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