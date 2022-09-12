import Image from 'next/image'
import contract from '../../assets/contracts/nft-collection.png'

interface Props {
  address: string
}

export default function DeployedContractsCard({ address }: Props) {
  return (
    <tr className="w-full rounded-xl border border-gray900">
      <div className="flex gap-x-8 items-center py-3 px-6">
        <Image src={contract} alt="" />
        <div>
          <h1>{address}</h1>
          <p>Description here</p>
        </div>
      </div>
    </tr>
  )
}
