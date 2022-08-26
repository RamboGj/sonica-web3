import Image from 'next/image'

interface NetworkCardProps {
  image: string
  network: string
  symbol: string
  action: () => void
}

export default function NetworkCard({
  image,
  network,
  symbol,
  action,
}: NetworkCardProps) {
  return (
    <div
      onClick={action}
      className="flex justify-between py-2 px-4 items-center text-md font-medium text-purple500 rounded-md shadow-xl bg-white hover:bg-gray500 hover:cursor-pointer hover:scale-105 transition duration-300"
    >
      <div className="flex items-center gap-x-4">
        <Image src={image} width={32} height={32} alt="" />
        <p>{network}</p>
      </div>
      <span>({symbol})</span>
    </div>
  )
}
