import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'
import SonicaBaseLayout from '../layouts/SonicaBaseLayout'

function MyApp({ Component, pageProps }: AppProps) {
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
      <SonicaBaseLayout>
        <Component {...pageProps} />
      </SonicaBaseLayout>
    </ThirdwebProvider>
  )
}

export default MyApp
