import useTheme from '@/hooks/useTheme'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useTheme()

  return <Component {...pageProps} />
}
