import { ChainId } from '@thirdweb-dev/sdk'
import Image from 'next/image'
import { SUPPORTED_CHAIN_ID } from '../../utils/network'

interface NetworkCircleCardProps {
  image: string
  chainId: ChainId | SUPPORTED_CHAIN_ID
  chainName: string
  chainSymbol: string
  selectedChainId: ChainId | SUPPORTED_CHAIN_ID
  onClick: () => void
}

export default function NetworkCircleCard({
  image,
  chainId,
  chainName,
  onClick,
  chainSymbol,
  selectedChainId,
}: NetworkCircleCardProps) {
  return (
    <div className="group w-8">
      <div className="invisible text-center group-hover:visible -mt-14 -mr-20 text-purple300 text-body bg-gray300 px-4 py-1 rounded-md">
        {chainName + ` (${chainSymbol})`}
      </div>
      <div
        onClick={onClick}
        className={`group w-8 h-8 p-[5px] flex items-center justify-center rounded-full drop-shadow-xl cursor-pointer hover:bg-gray300 transiton duration-500 ${
          selectedChainId === chainId ? `bg-gray500` : `bg-white`
        }`}
      >
        <Image src={image} width={20} height={20} alt="" />
      </div>
    </div>
  )
}
