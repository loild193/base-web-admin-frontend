import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'

export const noopStorage = {
  getItem: (_key: string) => '',
  setItem: (_key: string, _value: any) => null,
  removeItem: (_key: string) => null,
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
