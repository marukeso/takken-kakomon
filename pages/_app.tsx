import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect, useState } from 'react'
import adobeLoader from '../util/adobeLoader'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { createHasuraClient } from 'util/hasuraClient'
import { useQState } from 'hooks/useQState'

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

  const AppInit = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0()
    const [hasuraClient, setHasuraClient] = useQState(
      'hasuraClient',
      createHasuraClient(null)
    )

    useEffect(() => {
      if (isAuthenticated) {
        getAccessTokenSilently().then((token) => {
          const client = createHasuraClient(token)
          setHasuraClient(client)
        })
      } else {
        const client = createHasuraClient(null)
        setHasuraClient(client)
      }
    }, [isAuthenticated])

    return null
  }

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      redirectUri={process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI as string}
      audience={process.env.NEXT_PUBLIC_AUTH0_AUDIENCE as string}
    >
      <ThemeProvider defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <AppInit />
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </Auth0Provider>
  )
}

export default MyApp
