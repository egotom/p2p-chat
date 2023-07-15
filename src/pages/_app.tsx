import '@/styles/main.css'
import type { AppProps } from 'next/app'
import {UserProvider} from '../components/userCtx'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
