import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import useTheme from '@/hooks/useTheme'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { getPresetTheme } = useTheme()

  useEffect(() => {
    getPresetTheme()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Component {...pageProps} />
}
