import Image from 'next/image'

interface DeployableContractsProps {
  name: string
  description: string
  image: string
}

export default function NFTCollection({
  name,
  description,
  image,
}: DeployableContractsProps) {
  return (
    <div className="w-[315px] flex items-center gap-x-5 py-3 px-4 bg-white shadow-xl rounded-lg border border-purple300 hover:scale-105 hover:cursor-pointer hover:bg-gray-200 transition duration-500">
      <div>
        <Image src={image} width={120} height={150} alt="" />
      </div>
      <div>
        <h1 className="uppercase">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}
