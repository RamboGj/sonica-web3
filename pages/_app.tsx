import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import SonicaBaseLayout from '../layouts/SonicaBaseLayout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  // const chains = [
  //   ChainId.Fantom,
  //   ChainId.Goerli,
  //   ChainId.Avalanche,
  //   ChainId.Mumbai,
  //   ChainId.Polygon,
  //   ChainId.Mainnet,
  // ]

  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      {pathname !== '/designsystem' ? (
        <SonicaBaseLayout>
          <Component {...pageProps} />
        </SonicaBaseLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </ThirdwebProvider>
  )
}

export default MyApp
