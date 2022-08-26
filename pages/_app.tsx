import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SonicaBaseLayout from '../layouts/SonicaBaseLayout'
import { useRouter } from 'next/router'
// import ThirdwebProviderChains from '../layouts/ThirdwebProviderChains'
import {
  ChainId,
  // MagicConnectorType,
  ThirdwebProvider,
  WalletConnector,
} from '@thirdweb-dev/react'
import NetworkContextProvider from '../contexts/NetworkContext'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const connectors: WalletConnector[] = [
    'metamask',
    'walletConnect',
    'walletLink',
    'gnosis',
  ]

  // const magicConnect: MagicConnectorType = {
  //   name: 'magic',
  //   options: {
  //     apiKey: process.env.NEXT_PUBLIC_API_KEY_MAGIC_LINK
  //       ? process.env.NEXT_PUBLIC_API_KEY_MAGIC_LINK
  //       : '',
  //     rpcUrls: '',
  //   },
  // }

  // if (process.env.NEXT_PUBLIC_API_KEY_MAGIC_LINK) {
  //   connectors.push(magicConnect)
  // }

  // const chains = [
  //   ChainId.Fantom,
  //   ChainId.Goerli,
  //   ChainId.Avalanche,
  //   ChainId.Mumbai,
  //   ChainId.Polygon,
  //   ChainId.Mainnet,
  // ]

  return (
    // <ThirdwebProviderChains>
    <ThirdwebProvider
      walletConnectors={connectors}
      desiredChainId={ChainId.Goerli}
    >
      <NetworkContextProvider>
        {pathname !== '/designsystem' ? (
          <SonicaBaseLayout>
            <Component {...pageProps} />
          </SonicaBaseLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </NetworkContextProvider>
    </ThirdwebProvider>
    // </ThirdwebProviderChains>
  )
}

export default MyApp
