import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SonicaBaseLayout from '../layouts/SonicaBaseLayout'
import { useRouter } from 'next/router'
import { ChainId, ThirdwebProvider, WalletConnector } from '@thirdweb-dev/react'
import NetworkContextProvider from '../contexts/NetworkContext'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const connectors: WalletConnector[] = [
    'metamask',
    'walletConnect',
    'walletLink',
    'gnosis',
  ]

  const router = useRouter()

  const { network } = router.query

  return (
    <ThirdwebProvider
      walletConnectors={connectors}
      desiredChainId={
        network === 'goerli'
          ? ChainId.Goerli
          : network === 'polygon'
          ? ChainId.Polygon
          : network === 'ethereum'
          ? ChainId.Mainnet
          : ChainId.Mumbai
      }
    >
      <QueryClientProvider client={queryClient}>
        <NetworkContextProvider>
          {router.pathname !== '/designsystem' ? (
            <SonicaBaseLayout>
              <Component {...pageProps} />
            </SonicaBaseLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </NetworkContextProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
