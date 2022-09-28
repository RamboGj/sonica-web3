import { ChainId } from '@thirdweb-dev/react'

import ethereum from '../assets/ethereum.svg'
import polygon from '../assets/polygon.svg'
import avax from '../assets/avax.svg'
import fantom from '../assets/fantom.svg'

import { IpfsStorage } from '@thirdweb-dev/storage'
import { constants } from 'ethers'
import { SUPPORTED_CONTRACT_TYPES } from './constants'
import { ContractType } from '@thirdweb-dev/sdk'

export type SUPPORTED_CHAIN_ID =
  | ChainId.Mainnet
  | ChainId.Goerli
  | ChainId.Mumbai
  | ChainId.Polygon

export interface DeployableContractsType {
  name: string
  type: SUPPORTED_CONTRACT_TYPES
  description: string
  image: string
}

export const NETWORK_LOGOS_MAPPING = {
  [ChainId.Mainnet]: ethereum,
  [ChainId.Goerli]: ethereum,
  [ChainId.Mumbai]: polygon,
  [ChainId.Polygon]: polygon,
  [ChainId.Fantom]: fantom,
  [ChainId.Avalanche]: avax,
}

export const CHAINS_IDS_TRANSLATION = {
  [ChainId.Mainnet]: 'Ethereum',
  [ChainId.Goerli]: 'Goerli',
  [ChainId.Polygon]: 'Polygon',
  [ChainId.Mumbai]: 'Mumbai',
}

export const switchableNetworksList = [
  {
    name: 'Goerli',
    id: ChainId.Goerli,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Goerli],
    symbol: 'GOR',
    networkType: 'testnet',
  },
  {
    name: 'Ethereum',
    id: ChainId.Mainnet,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Mainnet],
    symbol: 'ETH',
    networkType: 'mainnet',
  },
  {
    name: 'Mumbai',
    id: ChainId.Mumbai,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Mumbai],
    symbol: 'MATIC',
    networkType: 'testnet',
  },
  {
    name: 'Polygon',
    id: ChainId.Polygon,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Polygon],
    symbol: 'MATIC',
    networkType: 'mainnet',
  },
  {
    name: 'Fantom',
    id: ChainId.Fantom,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Fantom],
    symbol: 'FTM',
    networkType: 'mainnet',
  },
  {
    name: 'Avalanche',
    id: ChainId.Avalanche,
    logo: NETWORK_LOGOS_MAPPING[ChainId.Avalanche],
    symbol: 'AVAX',
    networkType: 'mainnet',
  },
]

export const mainnets = switchableNetworksList.filter((net) => {
  return net.networkType === 'mainnet'
})

export const testnets = switchableNetworksList.filter((net) => {
  return net.networkType === 'testnet'
})

export const alchemyUrlMap: Record<SUPPORTED_CHAIN_ID, string> = {
  [ChainId.Mainnet]: `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ETHEREUM_MAINNET_KEY}`,
  [ChainId.Goerli]: `https://eth-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_GOERLI_KEY}`,
  [ChainId.Polygon]: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_MAINNET_KEY}`,
  [ChainId.Mumbai]: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_MUMBAI_KEY}`,
}

export const StorageSingleton = new IpfsStorage(
  process.env.NEXT_PUBLIC_IPFS_GATEWAY_URL,
)

export const networkKeys = {
  all: ['network'] as const,
  chain: (chainId?: SUPPORTED_CHAIN_ID) =>
    [...networkKeys.all, chainId] as const,
}

export const contractKeys = {
  all: ['contract'] as const,
  lists: () => [...contractKeys.all, 'list'] as const,
  list: (address = constants.AddressZero) =>
    [...contractKeys.lists(), address] as const,
  listWithFilters: (
    address = constants.AddressZero,
    filters?: ContractType[],
  ) => [...contractKeys.list(address), { filters }] as const,
  details: () => [...contractKeys.all, 'detail'] as const,
  detail: (address: string = constants.AddressZero) =>
    [...contractKeys.details(), address] as const,
}
