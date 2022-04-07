import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect, useState } from 'react'
import adobeLoader from '../utils/adobeLoader'
import { UserProvider } from '@auth0/nextjs-auth0'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window) adobeLoader(document)
  }, [])

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  const { user } = pageProps

  return (
    <UserProvider user={user}>
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <Component {...pageProps} />
            </RecoilRoot>
          </Hydrate>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
