import { ChainId } from '@thirdweb-dev/sdk'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useActiveChainId, useNetwork } from '@thirdweb-dev/react'
import { networksList } from '../utils/constants'

interface NetworkListProps {
  name: string
  id: ChainId
  logo: string
  symbol: string
  networkType: string
}

interface NetworkContextProviderProps {
  children: React.ReactNode
}

interface NetworkContextProps {
  networksList: NetworkListProps[]
  handleSwitchNetwork: (chainId: number, chainLogo: string) => void
  isSwitchingNetwork: boolean
  setIsSwitchingNetwork: (isSwitchingNetwork: boolean) => void
  isSwitchNetworkModal: boolean
  setIsSwitchNetworkModal: (isSwitchingNetwork: boolean) => void
  networkImage: string
  setNetworkImage: (networkImage: string) => void
}

const NetworkContext = createContext({} as NetworkContextProps)

export default function NetworkContextProvider({
  children,
}: NetworkContextProviderProps) {
  const activeChainId = useActiveChainId()

  const [networkImage, setNetworkImage] = useState<string>('')
  const [isSwitchingNetwork, setIsSwitchingNetwork] = useState<boolean>(false)
  const [isSwitchNetworkModal, setIsSwitchNetworkModal] =
    useState<boolean>(false)

  const [, switchNetwork] = useNetwork()

  async function handleSwitchNetwork(chainId: ChainId, chainLogo?: string) {
    setIsSwitchingNetwork(true)
    if (switchNetwork) {
      const switchChain = await switchNetwork(chainId)

      if (!switchChain.error) {
        setNetworkImage(chainLogo || networkImage)
        setIsSwitchNetworkModal(false)
      }
      setIsSwitchingNetwork(false)
    }
  }

  useEffect(() => {
    const currentImage = networksList.filter((net) => {
      return net.id === activeChainId
    })

    setNetworkImage(currentImage[0].logo)
  }, [])

  return (
    <NetworkContext.Provider
      value={{
        networksList,
        handleSwitchNetwork,
        isSwitchingNetwork,
        setIsSwitchingNetwork,
        isSwitchNetworkModal,
        setIsSwitchNetworkModal,
        networkImage,
        setNetworkImage,
      }}
    >
      {children}
    </NetworkContext.Provider>
  )
}

export function useNetworkContext() {
  return useContext(NetworkContext)
}
