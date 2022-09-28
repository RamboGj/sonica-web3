import nftCollection from '../assets/contracts/nft-collection.png'

export type SUPPORTED_CONTRACT_TYPES =
  | 'split'
  | 'nft-drop'
  | 'signature-drop'
  | 'nft-collection'
  | 'edition-drop'
  | 'edition'
  | 'token-drop'
  | 'token'
  | 'vote'
  | 'marketplace'
  | 'pack'
  | 'multiwrap'

export interface DeployableContractsType {
  name: string
  type: SUPPORTED_CONTRACT_TYPES
  description: string
  image: string
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
  {
    name: 'NFT Drop',
    type: 'nft-drop',
    description: 'One NFT, one owner',
    image: nftCollection.src,
  },
]

export const CONTRACTS_TYPES_TRANSLATION_FOR_TABLE = {
  [contractTypes.NFTCollection]: 'NFT Collection',
  [contractTypes.Split]: 'Split',
  [contractTypes.NFTDrop]: 'NFT Drop',
}
