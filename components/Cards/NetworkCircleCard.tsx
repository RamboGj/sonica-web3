import { ChainId } from '@thirdweb-dev/sdk'
import Image from 'next/image'

interface NetworkCircleCardProps {
  image: string
  chainId: ChainId
  chainName: string
  chainSymbol: string
  selectedChainId: ChainId
  onClick: () => void
}

export default function NetworkCircleCard({
  image,
  chainId,
  chainName,
  onClick,
  selectedChainId,
  chainSymbol,
}: NetworkCircleCardProps) {
  return (
    <div className="group w-8">
      <div className="invisible text-center group-hover:visible -mt-14 -mr-20 text-purple300 text-body bg-gray300 px-4 py-1 rounded-md">
        {chainName + ` (${chainSymbol})`}
      </div>
      <div
        onClick={onClick}
        className={`group w-8 h-8 p-[5px] flex items-center justify-center rounded-full drop-shadow-xl cursor-pointer hover:bg-gray300 transiton duration-500 ${
          chainId === selectedChainId ? `bg-gray500` : `bg-white`
        }`}
      >
        {/* <div className="invisible group-hover:visible bg-red-500">ChaindId</div> */}
        <Image src={image} width={20} height={20} alt="" />
      </div>
    </div>
  )
}
