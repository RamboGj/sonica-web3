import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SonicaBaseLayout from '../layouts/SonicaBaseLayout'
import { useRouter } from 'next/router'
// import ThirdwebProviderChains from '../layouts/ThirdwebProviderChains'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  // const connectors: WalletConnector[] = [
  //   'metamask',
  //   'walletConnect',
  //   'walletLink',
  //   {
  //     name: 'magic',
  //     options: {
  //       apiKey: process.env.API_KEY_MAGIC_LINK,
  //     },
  //   },
  // ]

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
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      {pathname !== '/designsystem' ? (
        <SonicaBaseLayout>
          <Component {...pageProps} />
        </SonicaBaseLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ThirdwebProvider>
    // </ThirdwebProviderChains>
  )
}

export default MyApp
