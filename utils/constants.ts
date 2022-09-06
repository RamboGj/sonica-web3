import { ChainId } from '@thirdweb-dev/sdk'
import ethereum from '../assets/ethereum.svg'
import polygon from '../assets/polygon.svg'
import avax from '../assets/avax.svg'
import fantom from '../assets/fantom.svg'

export const networksList = [
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

export const mainnets = networksList.filter((net) => {
  return net.networkType === 'mainnet'
})

export const testnets = networksList.filter((net) => {
  return net.networkType === 'testnet'
})
