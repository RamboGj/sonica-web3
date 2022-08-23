import {
  ThirdwebProvider,
  useActiveChainId,
  WalletConnector,
} from '@thirdweb-dev/react'
import React from 'react'

interface ThirdwebProviderChainsProps {
  children: React.ReactNode
}

export default function ThirdwebProviderChains({
  children,
}: ThirdwebProviderChainsProps) {
  const walletConnectors: WalletConnector[] = [
    'metamask',
    'walletConnect',
    'walletLink',
    'gnosis',
  ]

  const activeChainId = useActiveChainId()

  return (
    <ThirdwebProvider
      walletConnectors={walletConnectors}
      desiredChainId={activeChainId}
    >
      {children}
    </ThirdwebProvider>
  )
}
