import {
  ChainId,
  ContractType,
  CommonContractOutputSchema,
} from '@thirdweb-dev/sdk'
import { IpfsStorage } from '@thirdweb-dev/storage'
import ethereum from '../assets/ethereum.svg'
import polygon from '../assets/polygon.svg'
import avax from '../assets/avax.svg'
import nftCollection from '../assets/contracts/nft-collection.png'
import fantom from '../assets/fantom.svg'
import { constants } from 'ethers'
import z from 'zod'

export type SUPPORTED_CONTRACT_TYPES =
  | 'custom'
  | 'nft-drop'
  | 'signature-drop'
  | 'nft-collection'
  | 'edition-drop'
  | 'edition'
  | 'token-drop'
  | 'token'
  | 'vote'
  | 'split'
  | 'marketplace'
  | 'pack'
  | 'multiwrap'

export type SUPPORTED_CHAIN_ID =
  | ChainId.Mainnet
  | ChainId.Goerli
  | ChainId.Mumbai
  | ChainId.Polygon

export interface ContractsDataReturn {
  address: string
  contractType:
    | 'custom'
    | 'nft-drop'
    | 'signature-drop'
    | 'nft-collection'
    | 'edition-drop'
    | 'edition'
    | 'token-drop'
    | 'token'
    | 'vote'
    | 'split'
    | 'marketplace'
    | 'pack'
    | 'multiwrap'
  metadata: () => Promise<z.output<typeof CommonContractOutputSchema>>
  chainId: SUPPORTED_CHAIN_ID
}

export interface DeployableContractsType {
  name: string
  type:
    | 'nft-collection'
    | 'split'
    | 'nft-drop'
    | 'signature-drop'
    | 'edition-drop'
    | 'edition'
    | 'token-drop'
    | 'token'
    | 'vote'
    | 'marketplace'
    | 'pack'
    | 'multiwrap'
  description: string
  image: string
}

export const CHAIN_TRANSLATION_FOR_ROUTER = {
  [ChainId.Goerli]: 'goerli',
  [ChainId.Mumbai]: 'mumbai',
  [ChainId.Polygon]: 'polygon',
  [ChainId.Mainnet]: 'ethereum',
}

export const contractTypes = {
  NFTCollection: 'nft-collection',
  NFTDrop: 'nft-drop',
  SignatureDrop: 'signature-drop',
  EditionDrop: 'edition-drop',
  Edition: 'edition',
  Token: 'token',
  TokenDrop: 'token-drop',
  Vote: 'vote',
  Split: 'split',
  Marketplace: 'marketplace',
  Pack: 'pack',
  Multiwrap: 'multiwrap',
}

export const deployableContractsList: DeployableContractsType[] = [
  {
    name: 'NFT Collection',
    type: 'nft-collection',
    description: 'Claimable drop of one-of-one NFTs',
    image: nftCollection.src,
  },
]

export const CHAINS_IDS_TRANSLATION_FOR_TABLE = {
  [ChainId.Mainnet]: 'Ethereum',
  [ChainId.Goerli]: 'Goerli',
  [ChainId.Polygon]: 'Polygon',
  [ChainId.Mumbai]: 'Mumbai',
}

export const CONTRACTS_TYPES_TRANSLATION_FOR_NAME = {
  [contractTypes.NFTCollection]: 'NFT Collection',
  [contractTypes.Split]: 'Split',
  [contractTypes.NFTDrop]: 'NFT Drop',
}

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
