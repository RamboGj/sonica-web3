import { useReadonlySDK } from '@thirdweb-dev/react'
import {
  StorageSingleton,
  alchemyUrlMap,
  SUPPORTED_CHAIN_ID,
  networkKeys,
  contractKeys,
} from '../utils/network'
import { useQuery } from 'react-query'

export function useContractList(
  chainId: SUPPORTED_CHAIN_ID,
  walletAddress?: string,
) {
  const sdk = useReadonlySDK(
    alchemyUrlMap[chainId],
    undefined,
    StorageSingleton,
  )
  return useQuery(
    [...networkKeys.chain(chainId), ...contractKeys.list(walletAddress)],
    async () => {
      const data = await sdk?.getContractList(walletAddress || '')

      return data
    },
    {
      enabled: !!sdk && !!walletAddress && !!chainId,
    },
  )
}
