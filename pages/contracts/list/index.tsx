import { useRouter } from 'next/router'
import { CaretLeft } from 'phosphor-react'
import Button from '../../../components/Buttons/Button'
import nftCollection from '../../../assets/contracts/nft-collection.png'
import NFTCollection from '../../../components/Cards/NFTCollection'

export default function ContractsList() {
  const router = useRouter()

  const deployableContractsList = [
    {
      name: 'NFT Collection',
      description: 'Claimable drop of one-of-one NFTs',
      image: nftCollection.src,
    },
  ]

  return (
    <div className="w-screen h-[calc(100vh_-_6rem)] px-12">
      <div className="max-w-[1060px] mx-auto flex-col justify-between items-center">
        <div className="pt-5">
          <Button
            label="Back"
            hasIcon
            icon={<CaretLeft size={24} />}
            action={() => router.push('/dashboard')}
            type="ghost"
          />
        </div>
        <div className="mb-10 mt-8">
          <h1 className="text-title1">Deploy pre-built contracts</h1>
          <p className="text-title3">
            These are the contracts you are able to deploy:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 w-full h-full place-items-center gap-y-12">
          {deployableContractsList.map((contract) => {
            return (
              <>
                <NFTCollection
                  image={contract.image}
                  name={contract.name}
                  description={contract.description}
                />
                <NFTCollection
                  image={contract.image}
                  name={contract.name}
                  description={contract.description}
                />
                <NFTCollection
                  image={contract.image}
                  name={contract.name}
                  description={contract.description}
                />
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}
