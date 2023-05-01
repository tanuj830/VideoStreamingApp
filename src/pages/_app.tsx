import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'


const font = Nunito({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return <Component className={font.className} {...pageProps} />
}
