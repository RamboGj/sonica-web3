import { ChainId, SUPPORTED_CHAIN_ID } from '@thirdweb-dev/sdk'
import React, { createContext, useContext, useEffect, useState } from 'react'
import ethereum from '../assets/ethereum.svg'
import polygon from '../assets/polygon.svg'
import avax from '../assets/avax.svg'
import fantom from '../assets/fantom.svg'
import { useActiveChainId, useNetwork } from '@thirdweb-dev/react'

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
  handleSwitchNetwork: (chainId: number, networkName: string) => void
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
  const { '0': networkData } = useNetwork()

  const networksList = [
    {
      name: 'Goerli',
      id: ChainId.Goerli,
      logo: ethereum,
      symbol: 'GOR',
      networkType: 'testnet',
    },
    {
      name: 'Rinkeby',
      id: ChainId.Rinkeby,
      logo: ethereum,
      symbol: 'RIN',
      networkType: 'testnet',
    },
    {
      name: 'Ethereum',
      id: ChainId.Mainnet,
      logo: ethereum,
      symbol: 'ETH',
      networkType: 'mainnet',
    },
    {
      name: 'Mumbai',
      id: ChainId.Mumbai,
      logo: polygon,
      symbol: 'MATIC',
      networkType: 'testnet',
    },
    {
      name: 'Polygon',
      id: ChainId.Polygon,
      logo: polygon,
      symbol: 'MATIC',
      networkType: 'mainnet',
    },
    {
      name: 'Fantom',
      id: ChainId.Fantom,
      logo: fantom,
      symbol: 'FTM',
      networkType: 'mainnet',
    },
    {
      name: 'Avalanche',
      id: ChainId.Avalanche,
      logo: avax,
      symbol: 'AVAX',
      networkType: 'mainnet',
    },
  ]

  async function handleSwitchNetwork(chainId: number, networkImage: string) {
    setIsSwitchingNetwork(true)
    if (switchNetwork) {
      await switchNetwork(chainId)

      setIsSwitchNetworkModal(false)
      setIsSwitchingNetwork(false)
      setNetworkImage(networkImage)
    }
  }

  useEffect(() => {
    const currentNetwork: NetworkListProps[] = networksList.filter((net) => {
      return net.id === activeChainId
    })

    setNetworkImage(currentNetwork[0].logo)
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
